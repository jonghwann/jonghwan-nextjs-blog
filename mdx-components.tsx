import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="mt-[2.1em] mb-[1.5rem] font-bold text-[2em] leading-[1.5] tracking-[-0.025em] lg:text-[2.2em] xl:text-[2.3em]"
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
      className="mb-[2rem] font-nanum-square-round leading-[1.9] sm:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem] [&_code]:mx-[0.2rem] [&_code]:break-words [&_code]:rounded-[0.4rem] [&_code]:bg-[#e9ecef] [&_code]:px-[0.3rem] [&_code]:py-[0.2rem] [&_code]:text-[0.9em] dark:[&_code]:bg-[#30323a]"
      {...props}
    >
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mt-[1.5rem] mb-[2rem] rounded-[0.5rem] border-l-[0.5rem] bg-[#fafafa] p-[1rem] dark:bg-[#16181a] [&>p]:mt-[2rem]"
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
      className="font-nanum-square-round sm:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem] xl:marker:text-[1.2rem] [&>p]:mt-[0.25rem] [&>p]:mb-[0.5rem]"
      {...props}
    >
      {children}
    </li>
  ),
  table: ({ children, ...props }) => (
    <div className="my-[2rem] overflow-x-auto rounded-[0.5rem] border">
      <table
        className="w-full min-w-[640px] border-collapse text-left font-nanum-square-round text-[0.95rem] leading-[1.7] sm:text-[1rem] [&_code]:mx-[0.1rem] [&_code]:break-words [&_code]:rounded-[0.35rem] [&_code]:bg-[#e9ecef] [&_code]:px-[0.25rem] [&_code]:py-[0.15rem] [&_code]:text-[0.9em] dark:[&_code]:bg-[#30323a]"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border-r bg-secondary px-[1rem] py-[0.8rem] align-top font-bold last:border-r-0"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-t border-r px-[1rem] py-[0.8rem] align-top last:border-r-0" {...props}>
      {children}
    </td>
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
  pre: ({ children, ...props }) => (
    <pre
      className="!bg-[#2d2d2d] mb-[2rem] overflow-auto rounded-[0.5rem] py-[1.05em] text-[0.85rem] leading-[1.9] shadow-[var(--shadow)] sm:text-[1rem] [&_[data-highlighted-line]]:bg-[#37373d] [&_code>span]:px-[1.05em] [&_code>span]:font-[Consolas,Monaco,monospace]"
      {...props}
    >
      {children}
    </pre>
  ),
  img: (props) => (
    <img
      src={props.src}
      alt={props.alt}
      className="mx-auto mt-8 mb-0 rounded-[0.5rem] shadow-[var(--shadow)]"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
