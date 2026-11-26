// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json({ message: 'Script URL not defined' }, { status: 500 });
    }

    // Gửi dữ liệu tới Google Apps Script (Server-to-Server)
    const googleResponse = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      redirect: 'follow',
    });

    const text = await googleResponse.text();
    let result: Record<string, unknown> = {};
    try {
      result = JSON.parse(text);
    } catch {
      result = { raw: text, result: googleResponse.ok ? 'success' : 'error' };
    }

    if (result.result === 'success' || googleResponse.ok) {
      return NextResponse.json({ message: 'Success', result }, { status: 200 });
    } else {
      console.error("Google Script Response:", text);
      return NextResponse.json({ message: 'Error from Google Script', error: text }, { status: 502 });
    }
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
