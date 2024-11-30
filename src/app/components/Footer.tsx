import React from 'react';
import Link from 'next/link';

// フッターコンポーネント
export default function Footer() {
  return (
    <footer className='grid-rows-3 bg-main py-6'>
      <div className='text-center'>
        <div className='row-start-1 flex justify-center space-x-4'>
          <Link href='/contact' className='block text-base hover:text-accent'>
            お問い合わせ
          </Link>
          <Link href='/privacy' className='block text-base hover:text-accent'>
            プライバシーポリシー
          </Link>
        </div>
        <div className='row-start-2'>
          <a
            href='https://twitter.com/Suppon0530'
            className='text-base hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            X
          </a>
          <span className='text-base'>　|　</span>
          <a
            href='https://github.com/Suppon0530'
            className='text-base hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <span className='text-base'>　|　</span>
          <a
            href='https://www.youtube.com/@Suppon0530_GameDeveloper'
            className='text-base hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            YouTube
          </a>
        </div>
        <div className='row-start-3'>
          <p className='text-base'>&copy; {new Date().getFullYear()} Suppon Game.</p>
        </div>
      </div>
    </footer>
  );
}
