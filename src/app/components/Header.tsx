'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BsHouseDoorFill, BsBellFill, BsPhoneFill, BsEnvelopeFill } from 'react-icons/bs';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ヘッダーコンポーネント
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed z-10 grid w-full grid-cols-header place-content-center place-items-center bg-base shadow-md'>
      <div className='col-start-1'>
        <Image src={`${BASE_PATH}/logo.png`} alt='Logo Mark' width={128} height={128} priority />
      </div>
      <div className='col-start-2 px-8'>
        <Link href='/' className='text-base font-bold text-main md:text-2xl'>
          すっぽんゲーム
        </Link>
      </div>
      <div className='col-start-3 justify-self-end px-4'>
        <nav className='hidden md:flex md:flex-row md:items-center md:justify-center'>
          <div>
            <Link
              href='/'
              className='flex items-center px-2 text-center text-lg text-main hover:text-accent'
            >
              <BsHouseDoorFill className='mr-2' />
              Home
            </Link>
          </div>
          <div>
            <Link
              href='/news'
              className='flex items-center px-2 text-center text-lg text-main hover:text-accent'
            >
              <BsBellFill className='mr-2' />
              News
            </Link>
          </div>
          <div>
            <Link
              href='/works'
              className='flex items-center px-2 text-center text-lg text-main hover:text-accent'
            >
              <BsPhoneFill className='mr-2' />
              Works
            </Link>
          </div>
          <div>
            <Link
              href='/contact'
              className='flex items-center px-2 text-center text-lg text-main hover:text-accent'
            >
              <BsEnvelopeFill className='mr-2' />
              Contact
            </Link>
          </div>
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
            <Link href='/' className='flex items-center text-main hover:text-accent'>
              <BsHouseDoorFill className='mr-2' />
              Home
            </Link>
            <Link href='/news' className='flex items-center text-main hover:text-accent'>
              <BsBellFill className='mr-2' />
              News
            </Link>
            <Link href='/works' className='flex items-center text-main hover:text-accent'>
              <BsPhoneFill className='mr-2' />
              Works
            </Link>
            <Link href='/contact' className='flex items-center text-main hover:text-accent'>
              <BsEnvelopeFill className='mr-2' />
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
