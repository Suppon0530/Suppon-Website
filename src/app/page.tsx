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
    <main className='bg-base-color'>
      <div className='pb-12 pt-28 md:pt-16'>
        <div className='flex snap-x snap-mandatory overflow-x-scroll'>
          <div className='w-full flex-none snap-center'>
            <Link href='/works/all-you-can-pack-sea-creatures'>
              <Image
                src={`${BASE_PATH}/feature-deepsea.png`}
                alt='feature-game'
                width={2000}
                height={2000}
                priority
              />
            </Link>
          </div>
          <div className='w-full flex-none snap-center'>
            <Link href='/works/kanji-shot'>
              <Image
                src={`${BASE_PATH}/feature-kanjishot.png`}
                alt='feature-game'
                width={2000}
                height={2000}
                priority
              />
            </Link>
          </div>
          <div className='w-full flex-none snap-center'>
            <Link href='/works/covered-with-mushrooms'>
              <Image
                src={`${BASE_PATH}/feature-mushroom.png`}
                alt='feature-game'
                width={2000}
                height={2000}
                priority
              />
            </Link>
          </div>
          <div className='w-full flex-none snap-center'>
            <Link href='/works/yojijukugo-detective'>
              <Image
                src={`${BASE_PATH}/feature-yojijukugo.png`}
                alt='feature-game'
                width={2000}
                height={2000}
                priority
              />
            </Link>
          </div>
        </div>
        <div className='flex justify-end px-8 pt-6'>
          <button className='rounded-md bg-main-color px-6 text-lg font-bold text-white-color'>
            MORE...
          </button>
        </div>
      </div>
      <div className='pb-12 pt-6 text-white-color'>
        <h1 className='relative px-4 text-left text-3xl font-bold'>
          NEWS
          <span className='absolute -bottom-1 left-3 w-2/3 border-b-4 border-main-color'></span>
          <span className='absolute -bottom-1 left-3 w-1/5 border-b-4 border-accent-color'></span>
        </h1>
        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-2 gap-8 px-8 pt-4 text-base-color md:grid-cols-4'>
            <Link href='/works/yojijukugo-detective'>
              <div className='place-content-center bg-base-sub-color px-4 pt-2'>
                <div className='flex flex-col pb-4'>
                  <div className='self-center'>
                    <Image
                      src={`${BASE_PATH}/icon-yojijukugo.png`}
                      alt='yojijukugo-detective'
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                  <div className='self-center px-2 text-sm'>
                    <p className='pt-2 font-bold text-main-color'>iOS/Android</p>
                    <p className='font-bold'>四字熟語探偵</p>
                    <p>部首から漢字を考えるゲーム！</p>
                    <p className='text-xs'>2024/10/5に両OSでリリース開始</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/works/covered-with-mushrooms'>
              <div className='place-content-center bg-base-sub-color px-4 pt-2'>
                <div className='flex flex-col pb-4'>
                  <div className='self-center'>
                    <Image
                      src={`${BASE_PATH}/icon-mushroom.png`}
                      alt='covered-with-mushrooms'
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                  <div className='self-center px-2 text-sm'>
                    <p className='pt-2 font-bold text-main-color'>iOS/Android</p>
                    <p className='font-bold'>キノコまみれ</p>
                    <p>冬虫夏草のシューティングゲーム！</p>
                    <p className='text-xs'>2024/3/8に両OSでリリース開始</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/works/all-you-can-pack-sea-creatures'>
              <div className='place-content-center bg-base-sub-color px-4 pt-2'>
                <div className='flex flex-col pb-4'>
                  <div className='self-center'>
                    <Image
                      src={`${BASE_PATH}/icon-deepsea.png`}
                      alt='all-you-can-pack-sea-creatures'
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                  <div className='self-center px-2 text-sm'>
                    <p className='pt-2 font-bold text-main-color'>iOS/Android</p>
                    <p className='font-bold'>深海生物の詰め放題</p>
                    <p>新感覚の詰め放題ゲーム！</p>
                    <p className='text-xs'>2023/12/10に両OSでリリース開始</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/works/kanji-shot'>
              <div className='place-content-center bg-base-sub-color px-4 pt-2'>
                <div className='flex flex-col pb-4'>
                  <div className='self-center'>
                    <Image
                      src={`${BASE_PATH}/icon-kanjishot.png`}
                      alt='kanji-shot'
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                  <div className='self-center px-2 text-sm'>
                    <p className='pt-2 font-bold text-main-color'>iOS/Android</p>
                    <p className='font-bold'>漢字ショット</p>
                    <p>部首から漢字を考えるゲーム！</p>
                    <p className='text-xs'>2023/11/23に両OSでリリース開始</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex justify-end px-8 pt-6'>
          <button className='rounded-md bg-main-color px-6 text-lg font-bold text-white-color'>
            MORE...
          </button>
        </div>
      </div>
      <div className='pb-12 pt-6 text-white-color'>
        <h1 className='relative px-4 text-left text-3xl font-bold text-white-color'>
          PROFILE
          <span className='absolute -bottom-1 left-3 w-2/3 border-b-4 border-main-color'></span>
          <span className='absolute -bottom-1 left-3 w-1/5 border-b-4 border-accent-color'></span>
        </h1>
        <div className='flex flex-col items-start justify-center px-8 pt-4 text-base'>
          <p className='text-left text-xl font-bold text-main-color'>名前：すっぽん</p>
          <p className='pt-2'>個人スマホゲーム開発者。</p>
          <p>
            <span className='text-lg text-main-color'>「興味が広がるきっかけを与えるゲーム」</span>
            を目標に開発中！
          </p>
          <p>iOS・Androidで4つのゲームをリリース中！</p>
          <div className='flex w-full items-center justify-center pt-6'>
            <a
              href='https://twitter.com/Suppon0530'
              className='px-5 text-center text-5xl hover:text-main-color'
            >
              <BsTwitterX />
            </a>
            <a
              href='https://github.com/Suppon0530'
              className='px-5 text-center text-5xl hover:text-main-color'
            >
              <BsGithub />
            </a>
            <a
              href='https://www.youtube.com/channel/UCjNFegT4YzkqoU46LLSiryg'
              className='px-5 text-center text-5xl hover:text-main-color'
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
