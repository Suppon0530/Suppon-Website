'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextConfig from '../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ホームコンポーネント
export default function Home() {
  return (
    <main className='grid grid-rows-home place-content-start bg-gray-100 text-gray-900'>
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
      <div className='row-start-2 pt-12'>
        <h1 className='px-4 text-left text-3xl font-bold'>NEWS</h1>
        <p className='px-4 text-lg'>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテストテストテストテストテストテスト
          テストテストテストテストテスト
        </p>
      </div>
      <div className='row-start-3 pt-12'>
        <h1 className='px-4 text-left text-3xl font-bold'>WORKS</h1>
        <div className='grid grid-cols-2 pt-4 sm:grid-cols-3 md:grid-cols-4'>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/yojijukugo-detective'>
              <Image
                src={`${BASE_PATH}/icon-yojijukugo.png`}
                alt='yojijukugo-detective'
                width={150}
                height={150}
                priority
              />
            </Link>
            <p className='text-start text-sm font-bold'>四字熟語探偵</p>
            <p className='text-end text-sm font-bold'>iOS・Android</p>
          </div>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/covered-with-mushrooms'>
              <Image
                src={`${BASE_PATH}/icon-mushroom.png`}
                alt='covered-with-mushrooms'
                width={150}
                height={150}
                priority
              />
            </Link>
            <p className='text-left text-sm font-bold'>キノコまみれ</p>
            <p className='text-end text-sm font-bold'>iOS・Android</p>
          </div>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/all-you-can-pack-sea-creatures'>
              <Image
                src={`${BASE_PATH}/icon-deepsea.png`}
                alt='all-you-can-pack-sea-creatures'
                width={150}
                height={150}
                priority
              />
            </Link>
            <p className='text-left text-sm font-bold'>深海生物の詰め放題</p>
            <p className='text-end text-sm font-bold'>iOS・Android</p>
          </div>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/kanji-shot'>
              <Image
                src={`${BASE_PATH}/icon-kanjishot.png`}
                alt='kanji-shot'
                width={150}
                height={150}
                priority
              />
            </Link>
            <p className='text-left text-sm font-bold'>漢字ショット</p>
            <p className='text-end text-sm font-bold'>iOS・Android</p>
          </div>
        </div>
      </div>
      <div className='row-start-4 py-12'>
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
