import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
// Ensure GEMINI_API_KEY is set in your environment variables (.env.local)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required to generate a video' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured on the server' },
        { status: 500 }
      );
    }

    // Initialize the model - 'veo-3.1-generate-preview' is an example. 
    // You may need to update this to the exact model string provided in your Google AI Studio access.
    const model = genAI.getGenerativeModel({ model: 'veo-3.1-generate-preview' });

    // Note: Video generation can take significant time. In a production environment, 
    // you might want to handle this asynchronously (e.g. using webhooks or returning a job ID to poll).
    // The exact implementation depends on how Google structured the async response for Veo in this SDK version.
    
    // As a starting point for the API call:
    const result = await model.generateContent(prompt);
    
    // Depending on the API's response structure, you'll extract the video URL or data here.
    // Assuming the API returns a response that we can serialize:
    const responseData = result.response;

    return NextResponse.json({ success: true, data: responseData });

  } catch (error: unknown) {
    console.error('Error generating video:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred during video generation';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
