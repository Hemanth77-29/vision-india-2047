import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vision India 2047 | Integrated Approaches Platform',
  description: 'Explore integrated development, sustainable cities, public-private partnerships, decentralization and possible pathways for India through sourced learning modules and illustrative simulations.',
  keywords: [
    'Vision India 2047',
    'Integrated Approaches',
    'Sustainable Development India',
    'Demographic Transition',
    'Viksit Bharat 2047',
    'Public Private Partnerships',
    'Decentralization India'
  ],
  authors: [{ name: 'Vision India 2047 Educational Initiative' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`} suppressHydrationWarning data-theme="dark">
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('vision-india-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}}catch(e){}` }} /></head>
      <body className="theme-page text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
