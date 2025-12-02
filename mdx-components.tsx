import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { CodeBlockHeader } from '@/shared/ui';

const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="mt-[2.1em] mb-[1.5em] font-bold text-[2em] leading-[1.5] tracking-[-0.025em] lg:text-[2.2em] xl:text-[2.3em]"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mt-[2em] mb-[1.5rem] font-bold text-[1.8em] leading-[1.5] tracking-[-0.025em] lg:text-[1.9em] xl:text-[2em]"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p
      className="mb-[2rem] font-nanum-square-round text-[#24292e] leading-[1.9] sm:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem] dark:text-foreground [&_code]:mx-[0.2rem] [&_code]:break-words [&_code]:rounded-[0.4rem] [&_code]:bg-[#e83e8c1a] [&_code]:px-[0.3rem] [&_code]:py-[0.2rem] [&_code]:text-[#e83e8c] [&_code]:text-[0.9em] dark:[&_code]:bg-[#323232] dark:[&_code]:text-[#ff8926]"
      {...props}
    >
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mt-[1.5rem] mb-[2rem] rounded-[0.5rem] border-l-[0.5rem] bg-[#f4f4f4] p-[1rem] dark:bg-[#1a1b1d] [&>p]:mt-[2rem]"
      {...props}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-[2rem] list-disc pl-[1.5rem]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-[2rem] list-decimal pl-[1.5rem]" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      className="font-nanum-square-round sm:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem] [&>p]:mt-[0.25rem] [&>p]:mb-[0.5rem]"
      {...props}
    >
      {children}
    </li>
  ),
  em: ({ children, ...props }) => (
    <em
      className="block p-[10px] text-center text-[0.9rem] text-tertiary-foreground not-italic leading-[1.9]"
      {...props}
    >
      {children}
    </em>
  ),
  a: ({ children, ...props }) => (
    <a
      target="_blank"
      className="underline decoration-dashed underline-offset-[0.45em] hover:text-accent-foreground"
      {...props}
    >
      {children}
    </a>
  ),
  pre: ({ children, ...props }) => {
    const language = props['data-language'];

    return (
      <div className="mb-[2rem]">
        {language && <CodeBlockHeader language={language} />}

        <pre
          className="overflow-auto rounded-b-[0.5rem] py-[1em] leading-[1.9] sm:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem] [&_[data-highlighted-line]]:bg-[#31333d] [&_code>span]:px-[1em]"
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
  img: (props) => (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-full rounded-[0.5rem] shadow-[var(--shadow)]"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
