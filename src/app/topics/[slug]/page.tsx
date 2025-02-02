import { getPostData, getAllPostIds } from '../../../../lib/posts';

// 型定義
interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({ slug: path.params.slug }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData: PostData = await getPostData(params.slug);

  return (
    <article className='prose lg:prose-xl mx-auto pt-28 md:pt-16'>
      <h1>{postData.title}</h1>
      <p className='text-gray-500'>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
