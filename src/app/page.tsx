'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitterX, BsGithub, BsYoutube, BsApple, BsGooglePlay } from 'react-icons/bs';
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
      <div className='row-start-4 pt-12'>
        <h1 className='px-4 text-left text-3xl font-bold'>PROFILE</h1>
        <div className='bg-main-sub flex flex-row items-center justify-center px-8 py-12'>
          <div className='flex items-center text-base'>
            <Image
              className='border border-accent bg-base'
              src={`${BASE_PATH}/suppon-icon.png`}
              alt='yojijukugo-detective'
              width={160}
              height={160}
              priority
            />
          </div>
          <div className='pl-20 text-base'>
            <p className='text-center text-xl font-bold text-accent'>すっぽん</p>
            <p>個人スマホゲーム開発者。</p>
            <p>
              <span className='text-accent'>「興味が広がるきっかけを与えるゲーム」</span>
              を目標に開発中！
            </p>
            <p>iOS・Androidで4つのゲームをリリース中！</p>
            <div className='flex items-center justify-center pt-4'>
              <a
                href='https://twitter.com/Suppon0530'
                className='px-2 text-center text-4xl hover:text-accent'
              >
                <BsTwitterX className='mr-2' />
              </a>
              <a
                href='https://github.com/Suppon0530'
                className='px-2 text-center text-4xl hover:text-accent'
              >
                <BsGithub className='mr-2' />
              </a>
              <a
                href='https://www.youtube.com/channel/UCjNFegT4YzkqoU46LLSiryg'
                className='px-2 text-center text-4xl hover:text-accent'
              >
                <BsYoutube className='mr-2' />
              </a>
              <a
                href='https://apps.apple.com/us/developer/hiroto-nakahara/id1717568935'
                className='px-2 text-center text-4xl hover:text-accent'
              >
                <BsApple className='mr-2' />
              </a>
              <a
                href='https://play.google.com/store/apps/developer?id=Hiroto+Nakahara'
                className='px-2 text-center text-4xl hover:text-accent'
              >
                <BsGooglePlay className='mr-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
