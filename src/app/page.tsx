'use client';

import React from 'react';
import Image from 'next/image';
import nextConfig from '../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ホームコンポーネント
export default function Home() {
  return (
    <main className='grid grid-rows-home justify-items-center bg-gray-100 text-gray-900'>
      <div className='row-start-1'>
        <div className='flex snap-x snap-mandatory overflow-x-scroll'>
          <div className='w-full flex-none snap-center'>
            <Image
              src={`${BASE_PATH}/feature-deepsea.png`}
              alt='feature-game'
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className='w-full flex-none snap-center'>
            <Image
              src={`${BASE_PATH}/feature-kanjishot.png`}
              alt='feature-game'
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className='w-full flex-none snap-center'>
            <Image
              src={`${BASE_PATH}/feature-mushroom.png`}
              alt='feature-game'
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className='w-full flex-none snap-center'>
            <Image
              src={`${BASE_PATH}/feature-yojijukugo.png`}
              alt='feature-game'
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
      </div>
      <div className='row-start-2 pt-16'>
        <h1 className='px-4 text-left text-3xl font-bold'>NEWS</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
      <div className='row-start-3 pt-16'>
        <h1 className='px-4 text-left text-3xl font-bold'>WORKS</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
      <div className='row-start-4 py-16'>
        <h1 className='px-4 text-left text-3xl font-bold'>PROFILE</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
    </main>
  );
}
