import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'すっぽんゲーム',
  description: 'すっぽんゲーム',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex flex-col'>
          <div>
            <Header />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
