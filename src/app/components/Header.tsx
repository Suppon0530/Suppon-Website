import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsHouseDoorFill, BsBellFill, BsPhoneFill, BsEnvelopeFill } from 'react-icons/bs';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ヘッダーコンポーネント
export default function Header() {
  return (
    <header>
      <div className='bg-black-color md:bg-white-color fixed z-10 flex w-full flex-col items-center justify-center shadow-md md:flex-row'>
        <Link href='/' className='w-full flex-auto self-start'>
          <Image src={`${BASE_PATH}/logo.png`} alt='ロゴマーク' width={128} height={128} priority />
        </Link>
        <div className='w-full flex-auto'>
          <nav className='flex flex-row justify-evenly px-2 md:justify-end'>
            <Link
              href='/'
              className='text-main flex flex-col items-center justify-center px-4 py-2 text-lg text-main-color text-opacity-80 hover:text-main-color md:flex-row md:text-xl md:text-base-color'
            >
              <BsHouseDoorFill />
              <p className='text-xs md:pl-2 md:text-base'>HOME</p>
            </Link>
            <Link
              href='/news'
              className='text-main flex flex-col items-center justify-center px-4 py-2 text-lg text-main-color text-opacity-80 hover:text-main-color md:flex-row md:text-xl md:text-base-color'
            >
              <BsBellFill />
              <p className='text-xs md:pl-2 md:text-base'>NEWS</p>
            </Link>
            <Link
              href='/works'
              className='text-main flex flex-col items-center justify-center px-4 py-2 text-lg text-main-color text-opacity-80 hover:text-main-color md:flex-row md:text-xl md:text-base-color'
            >
              <BsPhoneFill />
              <p className='text-xs md:pl-2 md:text-base'>WORKS</p>
            </Link>
            <Link
              href='/contact'
              className='text-main flex flex-col items-center justify-center px-4 py-2 text-lg text-main-color text-opacity-80 hover:text-main-color md:flex-row md:text-xl md:text-base-color'
            >
              <BsEnvelopeFill />
              <p className='text-xs md:pl-2 md:text-base'>CONTACT</p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
