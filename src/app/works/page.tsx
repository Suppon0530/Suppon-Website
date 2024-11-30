'use client';

import React from 'react';
import Image from 'next/image';
import nextConfig from '../../../next.config';
const BASE_PATH = nextConfig.basePath || '';

// ワークスコンポーネント
export default function Works() {
  return (
    <main className='grid grid-rows-1 bg-gray-100 text-gray-900'>
      <div className='row-start-1 pb-12 pt-4'></div>
    </main>
  );
}
