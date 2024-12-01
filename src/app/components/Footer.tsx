'use client';

import React from 'react';
import Link from 'next/link';

// フッターコンポーネント
export default function Footer() {
  // ページトップへのスクロール関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='grid grid-rows-2 place-content-center place-items-center bg-main py-8'>
      <div className='row-start-1'>
        <div className='flex'>
          <Link href='/contact' className='px-4 text-base hover:text-accent'>
            お問い合わせ
          </Link>
          <Link href='/privacy' className='px-4 text-base hover:text-accent'>
            プライバシーポリシー
          </Link>
        </div>
      </div>
      <div className='row-start-2'>
        <div className='flex items-center justify-center'>
          <p className='text-base'>&copy; {new Date().getFullYear()} Suppon Game.</p>
        </div>
      </div>
    </footer>
  );
}
