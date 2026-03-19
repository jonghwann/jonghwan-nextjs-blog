import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/entities/post';
import { cn, slugify } from '@/shared/lib';

interface PostSeriesProps {
  series: string;
  posts: Post[];
  currentSlug: string;
  className: string;
}

export function PostSeries({ series, posts, currentSlug, className }: PostSeriesProps) {
  const seriesSlug = slugify(series);
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div className={cn('rounded-lg border bg-muted/40 px-6 py-5', className)}>
      <Link href={`/series/${seriesSlug}`} className="mb-4 inline-block font-bold hover:underline">
        SERIES: {series}
      </Link>

      <ol className="space-y-2">
        {sortedPosts.map((post, index) => {
          const isCurrent = post.slug === currentSlug;
          return (
            <li key={post.slug} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-secondary-foreground text-sm">
                {index + 1}.
              </span>

              {isCurrent ? (
                <span className="flex items-center gap-1.5 font-semibold text-sm leading-relaxed">
                  {post.title}
                  <ArrowLeft size={14} />
                </span>
              ) : (
                <Link
                  href={`/${post.slug}`}
                  className="text-secondary-foreground text-sm leading-relaxed hover:text-foreground hover:underline"
                >
                  {post.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
