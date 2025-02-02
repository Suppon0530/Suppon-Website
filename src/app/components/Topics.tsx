import Image from 'next/image';
import Link from 'next/link';
import nextConfig from '../..//../next.config';
const BASE_PATH = nextConfig.basePath || '';
import { getSortedPostsData } from '../../../lib/posts';

// 型定義
interface PostMetadata {
  id: string;
  title: string;
  image: string;
  summary: string;
  date: string;
}

export default async function Topics() {
  const allPostsData: PostMetadata[] = await getSortedPostsData();

  return (
    <div className='grid grid-cols-2 gap-4 px-4 pt-4 text-base-color md:grid-cols-4 md:gap-8 md:px-8'>
      {allPostsData.map(({ id, image, summary, date, title }) => (
        <div key={id}>
          <Link href={`/topics/${id}`} className='text-base-color'>
            <div className='h-80 w-full place-content-start bg-base-sub-color px-3 py-3 md:w-11/12'>
              <div className='flex h-full flex-col justify-between'>
                <div className='flex flex-col items-center'>
                  <Image
                    src={`${BASE_PATH}${image}`}
                    alt='app-icon'
                    width={150}
                    height={150}
                    priority
                  />
                  <div className='px-2 text-sm'>
                    <div className='pt-2 text-[14px] font-bold'>{summary}</div>
                  </div>
                </div>
                <div className='self-start px-2 text-xs'>{date}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
