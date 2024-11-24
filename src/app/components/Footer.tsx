import React from 'react';
import Link from 'next/link';

// フッターコンポーネント
export default function Footer() {
  return (
    <footer className='bg-base grid-rows-3 py-6'>
      <div className='text-center'>
        <div className='row-start-1 flex justify-center space-x-4'>
          <Link href='/contact' className='text-main hover:text-accent block'>
            お問い合わせ
          </Link>
          <Link href='/privacy' className='text-main hover:text-accent block'>
            プライバシーポリシー
          </Link>
        </div>
        <div className='row-start-2'>
          <a
            href='https://twitter.com/Suppon0530'
            className='text-main hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            X
          </a>
          <span className='text-main'>　|　</span>
          <a
            href='https://github.com/Suppon0530'
            className='text-main hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <span className='text-main'>　|　</span>
          <a
            href='https://www.youtube.com/@Suppon0530_GameDeveloper'
            className='text-main hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            YouTube
          </a>
        </div>
        <div className='row-start-3'>
          <p className='text-main text-base'>&copy; {new Date().getFullYear()} Suppon Game.</p>
        </div>
      </div>
    </footer>
  );
}
