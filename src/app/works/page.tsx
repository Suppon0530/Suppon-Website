'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ワークスコンポーネント
export default function Works() {
  return (
    <main className='grid grid-rows-4 bg-gray-100 text-gray-900'>
      <div className='row-start-1 pt-6'>
        <h1 className='px-4 text-left text-3xl font-bold'>四字熟語探偵</h1>
        <p className='px-4 pt-4 text-lg font-bold'>
          破れたイラストから「四字熟語」を推理するゲーム！
        </p>
        <p className='px-4 text-lg font-bold'>正しい漢字を組み合わせて四字熟語を完成させよう！</p>
        <div className='grid grid-cols-1 pt-4 md:grid-cols-2'>
          <div className='place-content-end px-4 pb-4'>
            <Link href='/works/yojijukugo-detective'>
              <Image
                src={`${BASE_PATH}/feature-yojijukugo.png`}
                alt='yojijukugo-detective'
                width={1000}
                height={1000}
                priority
              />
            </Link>
          </div>
          <div className='place-content-end px-4 pb-4'>
            <p>
              ゲーム感覚で「四字熟語」が学べる【四字熟語探偵】をリリース！推理×四字熟語を組み合わせた異色のゲーム。
            </p>
            <div className='flex justify-center gap-4 pt-4'>
              <a href='https://t.co/Qw0qlCLtyl'>
                <Image
                  alt='App Atore'
                  src={`${BASE_PATH}/app-store.svg`}
                  width='180'
                  height='180'
                />
              </a>
              <a href='https://t.co/5XAQQNhxtL'>
                <Image
                  alt='Google Play'
                  src={`${BASE_PATH}/google-play-store.png`}
                  width='220'
                  height='220'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row-start-2 pt-6'>
        <h1 className='px-4 text-left text-3xl font-bold'>キノコまみれ</h1>
        <p className='px-4 pt-4 text-lg font-bold'>冬虫夏草をGETするシューティングゲーム！</p>
        <p className='px-4 text-lg font-bold'>登場する昆虫・冬虫夏草は10種類！</p>
        <div className='grid grid-cols-1 pt-4 md:grid-cols-2'>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/covered-with-mushrooms'>
              <Image
                src={`${BASE_PATH}/feature-mushroom.png`}
                alt='covered-with-mushrooms'
                width={1000}
                height={1000}
                priority
              />
            </Link>
          </div>
          <div className='place-content-end px-4 pb-4'>
            <p>
              冬虫夏草をGETするシューティングゲーム【キノコまみれ】をリリース！敵の攻撃を避けながらキノコを当てていき、冬虫夏草をGETするゲーム。
            </p>
            <div className='flex justify-center gap-4 pt-4'>
              <a href='https://t.co/6IU4Stl69W'>
                <Image
                  alt='App Atore'
                  src={`${BASE_PATH}/app-store.svg`}
                  width='180'
                  height='180'
                />
              </a>
              <a href='https://t.co/BlhQPk1Llh'>
                <Image
                  alt='Google Play'
                  src={`${BASE_PATH}/google-play-store.png`}
                  width='220'
                  height='220'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row-start-3 pt-6'>
        <h1 className='px-4 text-left text-3xl font-bold'>深海生物の詰め放題</h1>
        <p className='px-4 pt-4 text-lg font-bold'>深海生物を網につめていくシンプルなゲーム！</p>
        <p className='px-4 text-lg font-bold'>登場する深海生物は20種類！</p>
        <div className='grid grid-cols-1 pt-4 md:grid-cols-2'>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/all-you-can-pack-sea-creatures'>
              <Image
                src={`${BASE_PATH}/feature-deepsea.png`}
                alt='all-you-can-pack-sea-creatures'
                width={1000}
                height={1000}
                priority
              />
            </Link>
          </div>
          <div className='place-content-end px-4 pb-4'>
            <p>
              新たな詰め放題【深海生物の詰め放題】をリリース！日常生活では体験できない深海生物を網につめるゲーム。
            </p>
            <div className='flex justify-center gap-4 pt-4'>
              <a href='https://t.co/uzmo9Lx0rs'>
                <Image
                  alt='App Atore'
                  src={`${BASE_PATH}/app-store.svg`}
                  width='180'
                  height='180'
                />
              </a>
              <a href='https://t.co/O4UV4fe2DK'>
                <Image
                  alt='Google Play'
                  src={`${BASE_PATH}/google-play-store.png`}
                  width='220'
                  height='220'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row-start-4 pb-12 pt-6'>
        <h1 className='px-4 text-left text-3xl font-bold'>漢字ショット</h1>
        <p className='px-4 pt-4 text-lg font-bold'>部首から漢字を考える新感覚ゲーム！</p>
        <p className='px-4 text-lg font-bold'>
          小学生レベルの簡単な漢字から漢検1級レベルの難読漢字まで登場！
        </p>
        <div className='grid grid-cols-1 pt-4 md:grid-cols-2'>
          <div className='grid place-content-center px-4 pb-4'>
            <Link href='/works/kanji-shot'>
              <Image
                src={`${BASE_PATH}/feature-kanjishot.png`}
                alt='kanji-shot'
                width={1000}
                height={1000}
                priority
              />
            </Link>
          </div>
          <div className='place-content-end px-4 pb-4'>
            <p>
              正しい部首を選択して、敵を倒す漢字クイズゲーム【漢字ショット】をリリース！部首から問題となる漢字を考える一風なゲーム。
            </p>
            <div className='flex justify-center gap-4 pt-4'>
              <a href='https://t.co/ws3FNBUKUR'>
                <Image
                  alt='App Atore'
                  src={`${BASE_PATH}/app-store.svg`}
                  width='180'
                  height='180'
                />
              </a>
              <a href='https://t.co/gxjUlHNq5U'>
                <Image
                  alt='Google Play'
                  src={`${BASE_PATH}/google-play-store.png`}
                  width='220'
                  height='220'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
