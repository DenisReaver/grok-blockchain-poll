import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const buttonIndex = body.untrustedData?.buttonIndex;

  let text = 'Выбери вариант!';

  if (buttonIndex === 1) text = 'Ethereum — классика. Уважаю! 🔥';
  else if (buttonIndex === 2) text = 'Solana — скорость. 🚀';
  else if (buttonIndex === 3) text = 'Bitcoin — король. ₿';
  else if (buttonIndex === 4) text = 'Tempo — платежи будущего. Мы же о нём говорили! 😏❤️';

  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${BASE_URL}/result.jpg" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="Ещё раз!" />
    <meta property="fc:frame:post_url" content="${BASE_URL}/api/frame" />
  </head>
  <body><p>${text}</p></body>
</html>
  `;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}