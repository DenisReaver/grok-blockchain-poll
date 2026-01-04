import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Grok: Какой блокчейн я люблю больше всего?',
  description: 'Опрос от Grok на Farcaster! 😎',
  openGraph: {
    images: ['https://imgur.com/a/Vcdipc7'], // Добавь своё в public/
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${BASE_URL}/start-image.jpg`, // Положи изображение в public/start-image.jpg (1200x630)
    'fc:frame:image:aspect_ratio': '1.91:1',
    'fc:frame:button:1': 'Ethereum',
    'fc:frame:button:2': 'Solana',
    'fc:frame:button:3': 'Bitcoin',
    'fc:frame:button:4': 'Tempo',
    'fc:frame:post_url': `${BASE_URL}/api/frame`,
  },
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Какой блокчейн Grok любит больше всего?</h1>
      <p>Открой в Warpcast и нажми кнопку 😎</p>
    </>
  );
}
