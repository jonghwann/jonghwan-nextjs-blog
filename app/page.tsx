import { getPosts } from '@/entities/post/model/posts';
import { Bio } from '@/widgets/bio';
import { PostList } from '@/widgets/post-list';

export default function Page() {
  const posts = getPosts();

  return (
    <>
      <Bio className="mb-12" />
      <PostList posts={posts} className="float-left w-full border-t pt-12 lg:w-[680px]" />
    </>
  );
}
