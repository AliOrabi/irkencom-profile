import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// ── Schema (Zod v4) ─────────────────────────────────────────────────────────
const IntegrationSchema = z.object({
  name:    z.string().min(2,  { error: 'Name must be at least 2 characters' }).max(100),
  company: z.string().min(2,  { error: 'Company name is required' }).max(150),
  role:    z.enum(['developer', 'operator', 'municipal', 'consultant', 'other'], {
    error: 'Invalid role selection',
  }),
  email:   z.string().email({ error: 'A valid work email is required' }),
  phone:   z.string().max(30).optional(),
  spaces:  z.string().max(10).optional(),
});

type IntegrationPayload = z.infer<typeof IntegrationSchema>;

// ── In-memory rate limiter (5 requests per minute per IP) ───────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT  = 5;       // max requests
const WINDOW_MS   = 60_000;  // 1 minute

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now   = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT - 1, resetAt: now + WINDOW_MS };
  }

  if (entry.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { allowed: true, remaining: RATE_LIMIT - entry.count, resetAt: entry.resetAt };
}

// ── Cleanup stale entries periodically (prevents memory leak in dev) ─────────
if (process.env.NODE_ENV !== 'production') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetAt) rateLimitMap.delete(key);
    }
  }, 120_000);
}

// ── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const { allowed, remaining, resetAt } = checkRateLimit(ip);

  const headers = {
    'X-RateLimit-Limit':     String(RATE_LIMIT),
    'X-RateLimit-Remaining': String(remaining),
    'X-RateLimit-Reset':     String(Math.ceil(resetAt / 1000)),
  };

  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.', code: 429 },
      { status: 429, headers }
    );
  }

  // 2. Parse body safely
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body', code: 400 },
      { status: 400, headers }
    );
  }

  // 3. Validate
  const result = IntegrationSchema.safeParse(raw);
  if (!result.success) {
    const fieldErrors = result.error.issues.reduce<Record<string, string>>(
      (acc, issue) => {
        const key = String(issue.path[0] ?? 'unknown');
        acc[key] = issue.message;
        return acc;
      },
      {}
    );
    return NextResponse.json(
      { error: 'Validation failed', code: 422, fields: fieldErrors },
      { status: 422, headers }
    );
  }

  const payload: IntegrationPayload = result.data;

  // 4. Business logic — forward to CRM / webhook
  //    Replace this block with your actual integration (Resend, Zapier, HubSpot, etc.)
  try {
    // TODO: send email / post to CRM
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@irken.com.eg',
    //   to:   'sales@irken.com.eg',
    //   subject: `New Integration Request — ${payload.company}`,
    //   text: JSON.stringify(payload, null, 2),
    // });

    console.info('[integration] Lead captured:', {
      company: payload.company,
      role:    payload.role,
      email:   payload.email,
      spaces:  payload.spaces,
      at:      new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Integration request received. Our team will contact you within 48 hours.' },
      { status: 200, headers }
    );
  } catch (err) {
    console.error('[integration] Downstream error:', err);
    return NextResponse.json(
      { error: 'Internal server error', code: 500 },
      { status: 500, headers }
    );
  }
}

// Block other HTTP methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed', code: 405 }, { status: 405 });
}
