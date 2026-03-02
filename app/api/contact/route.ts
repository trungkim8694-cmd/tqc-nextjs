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
      // Đảm bảo dữ liệu được stringify
      body: JSON.stringify(body),
    });

    const result = await googleResponse.json();

    if (result.result === 'success') {
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      // Log lỗi từ Google Script để terminal hiển thị
      console.error("Google Script Error:", result);                
      return NextResponse.json({ message: 'Error from Google Script' }, { status: 500 });
    }
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}