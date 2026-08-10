import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the lead for debugging purposes
    console.log('Lead captured:', body);
    
    // Here you would integrate with your CRM or email provider.
    // e.g. sending an email to sales@irken.com.eg
    // Example: Forwarding to a webhook (like Make.com or Zapier)
    // await fetch('https://hooks.zapier.com/hooks/catch/12345/abcde/', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: { 'Content-Type': 'application/json' },
    // });
    
    return NextResponse.json({ success: true, message: 'Lead captured successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json({ success: false, message: 'Failed to capture lead' }, { status: 500 });
  }
}
