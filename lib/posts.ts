import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'posts');

// 型定義
interface PostMetadata {
  id: string;
  title: string;
  image: string;
  summary: string;
  date: string;
}

interface PostData extends PostMetadata {
  contentHtml: string;
}

// 記事一覧を取得
export async function getSortedPostsData(): Promise<PostMetadata[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostMetadata[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      image: matterResult.data.image,
      summary: matterResult.data.summary,
      date: matterResult.data.date,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 個別記事データを取得
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // `marked` を使用して Markdown を HTML に変換
  const contentHtml = await marked.parse(matterResult.content);

  return {
    id,
    title: matterResult.data.title,
    image: matterResult.data.image,
    summary: matterResult.data.summary,
    date: matterResult.data.date,
    contentHtml,
  };
}

// すべての投稿 ID を取得（動的ルート生成用）
export function getAllPostIds(): { params: { slug: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}
