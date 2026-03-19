import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import type { Navigation, Post } from '@/entities/post';
import { getPost, getPostNavigation, getPosts } from '@/entities/post/model/posts';
import { SITE_CONFIG } from '@/shared/config';
import { generateToc } from '@/shared/lib';
import { ScrollProgressBar } from '@/shared/ui';
import { Bio } from '@/widgets/bio';
import { Giscus } from '@/widgets/giscus';
import { PostHeader } from '@/widgets/post-header';
import { PostNavigation } from '@/widgets/post-navigation';
import { PostSeries } from '@/widgets/post-series-list';
import { PostToc } from '@/widgets/post-toc';

const getCachedPost = cache(getPost);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { title: postTitle, description, date } = getCachedPost(slug);

  const title = `${postTitle} | ${SITE_CONFIG.title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: dayjs(date).toISOString(),
      url: `${SITE_CONFIG.url}/${slug}`,
      images: [SITE_CONFIG.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let PostContent: React.ComponentType;
  let post: Post;
  let navigation: Navigation;

  try {
    const { default: PostComponent } = await import(`../../content/${slug}.mdx`);
    PostContent = PostComponent;
    post = getCachedPost(slug);
    navigation = getPostNavigation(slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const toc = generateToc(post.content ?? '');
  const seriesPosts = post.series ? getPosts({ series: post.series }) : [];

  return (
    <div>
      <ScrollProgressBar />
      <PostHeader {...post} />

      <div className="flex gap-14">
        <div className="w-full lg:min-w-[680px]">
          {post.series && seriesPosts.length > 1 && (
            <PostSeries
              series={post.series}
              posts={seriesPosts}
              currentSlug={slug}
              className="mb-8"
            />
          )}

          <PostContent />
          <PostNavigation navigation={navigation} />
          <Bio className="my-12 border-b pb-8" />
          <Giscus />
        </div>

        <PostToc className="hidden xl:block" toc={toc} />
      </div>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
