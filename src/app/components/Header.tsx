'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ヘッダーコンポーネント
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed z-10 grid w-full grid-cols-header bg-base shadow-md'>
      <div className='col-start-1 content-center pr-4'>
        <Image src={`${BASE_PATH}/logo.png`} alt='Logo Mark' width={128} height={128} priority />
      </div>
      <div className='col-start-2 content-center justify-items-center px-8'>
        <Link href='/' className='text-2xl font-bold text-main'>
          すっぽんゲーム
        </Link>
      </div>
      <div className='col-start-3 content-center justify-items-end px-4'>
        <nav className='hidden md:flex'>
          <Link href='/' className='px-2 text-center text-lg text-main hover:text-accent'>
            Home
          </Link>
          <Link href='/news' className='px-2 text-center text-lg text-main hover:text-accent'>
            News
          </Link>
          <Link href='/works' className='px-2 text-center text-lg text-main hover:text-accent'>
            Works
          </Link>
          <Link href='/contact' className='px-2 text-center text-lg text-main hover:text-accent'>
            Contact
          </Link>
        </nav>
        <div className='md:hidden'>
          <button
            onClick={openToggleMenu}
            className='text-main hover:text-accent focus:outline-none'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                // バツ印
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 6l12 12M6 18L18 6'
                />
              ) : (
                // ハンバーガーメニュー
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* トグルメニュー */}
      {isOpen && (
        <div className='md:hidden'>
          <nav className='px-4 py-2'>
            <Link href='/' className='block text-main hover:text-accent'>
              Home
            </Link>
            <Link href='/news' className='block text-main hover:text-accent'>
              News
            </Link>
            <Link href='/works' className='block text-main hover:text-accent'>
              Works
            </Link>
            <Link href='/contact' className='block text-main hover:text-accent'>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
