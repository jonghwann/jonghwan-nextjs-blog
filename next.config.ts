import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['media4.giphy.com'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-frontmatter', 'remark-gfm'],
    rehypePlugins: ['rehype-slug', ['rehype-pretty-code', { theme: 'one-dark-pro' }]],
  },
});

export default withMDX(nextConfig);
