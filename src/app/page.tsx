import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitterX, BsGithub, BsYoutube } from 'react-icons/bs';
import nextConfig from '../../next.config';
import Topics from './components/Topics';
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
          TOPICS
          <span className='absolute -bottom-1 left-3 w-2/3 border-b-4 border-main-color'></span>
          <span className='absolute -bottom-1 left-3 w-1/5 border-b-4 border-accent-color'></span>
        </h1>
        <div className='flex items-center justify-center'>
          <Topics />
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
