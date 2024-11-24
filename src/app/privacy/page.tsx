'use client';

import React from 'react';
import Image from 'next/image';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// プライバシーコンポーネント
export default function Privacy() {
  return (
    <main className='grid grid-rows-1 bg-gray-100 text-gray-900'>
      <div className='row-start-1 pb-12 pt-4'>
        <h1 className='px-4 py-4 text-center text-3xl font-bold'>プライバシーポリシー</h1>
        <p className='px-4 text-right text-base'>作成日 2024年11月25日</p>
        <p className='px-4 text-right text-base'>最終更新日 2024年11月25日</p>
        <p className='px-4 pt-8 text-base'>
          Hiroto Nakaharaは、個人情報の取り扱いに関して、以下のプライバシーポリシーを定めています。
        </p>
        <p className='px-4 text-base'>
          Hiroto
          Nakaharaのサービスを利用するにあたっては、本プライバシーポリシーに同意する必要があります。
        </p>
        <h2 className='px-4 pt-12 text-left text-xl font-bold'>個人情報</h2>
        <p className='px-4 text-base'>test</p>
        <h2 className='px-4 pt-8 text-left text-xl font-bold'>ログデータ</h2>
        <p className='px-4 text-base'>test</p>
        <h2 className='px-4 pt-8 text-left text-xl font-bold'>クッキーの使用</h2>
        <p className='px-4 text-base'>test</p>
        <h2 className='px-4 pt-8 text-left text-xl font-bold'>分析ツール</h2>
        <p className='px-4 text-base'>test</p>
        <h2 className='px-4 pt-8 text-left text-xl font-bold'>セキュリティ</h2>
        <p className='px-4 text-base'>test</p>
        <h2 className='px-4 pt-8 text-left text-xl font-bold'>プライバシーポリシーの変更</h2>
        <p className='px-4 text-base'>
          プライバシーポリシーを随時変更できるものとします。
          変更後の本プライバシーポリシーは、本ウェブサイト上に掲示することとし、当該掲示がなされた時点からその効力を生じるものとします。
        </p>
        <h2 className='px-4 pt-8 text-left text-xl font-bold'>お問い合わせ</h2>
        <p className='px-4 text-base'>
          個人情報に関するお問合せについては、以下のよりご連絡ください。
        </p>
        <ul className='px-4 text-base'>
          <li>g-mail : Suppon9089@gmail.com</li>
          <li>X : https://github.com/Suppon0530</li>
        </ul>
      </div>
    </main>
  );
}
