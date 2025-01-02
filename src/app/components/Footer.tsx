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
    <footer>
      <div className='bg-white-color flex flex-row items-center justify-evenly'>
        <div className='flex flex-shrink-0 flex-col items-center justify-center py-4'>
          <div className='flex flex-row items-center justify-center text-sm'>
            <Link href='/contact' className='px-4 text-base-color hover:text-main-color'>
              お問い合わせ
            </Link>
            <Link href='/privacy' className='px-4 text-base-color hover:text-main-color'>
              プライバシーポリシー
            </Link>
          </div>
          <div className='flex-auto'>
            <div className='flex items-center justify-center text-sm'>
              <p className='pt-1 text-base-color'>&copy; {new Date().getFullYear()} Suppon Game.</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end font-bold'>
          <button className='rounded-full bg-main-color px-4 py-2' onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
