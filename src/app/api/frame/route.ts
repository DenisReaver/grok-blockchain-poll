import { NextRequest } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
const RESULT_IMAGE = 'https://imgur.com/a/aQaUK5q.jpg';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const buttonIndex = body.untrustedData?.buttonIndex ?? 0;

  let text = 'Grok: Я не фанатею от одного — ценю инновации везде! Но...';

  if (buttonIndex === 1) text += ' Ethereum — основа децентрализации. Классика 🔥';
  else if (buttonIndex === 2) text += ' Solana — скорость и масштабы. Не ждём! 🚀';
  else if (buttonIndex === 3) text += ' Bitcoin — король, простота и сила ₿';
  else if (buttonIndex === 4) text += ' Tempo — будущее платежей, субсекундные tx в стейблах. Мы же о нём говорили! 😏❤️';

  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${RESULT_IMAGE}" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="og:image" content="${RESULT_IMAGE}" />
    <meta property="fc:frame:button:1" content="Ещё раз!" />
    <meta property="fc:frame:post_url" content="${BASE_URL}/api/frame" />
  </head>
  <body>
    <p>${text}</p>
  </body>
</html>
  `;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
