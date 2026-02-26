import { Footer } from './footer';
import { Header } from './header';

export async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-27 flex flex-1 px-4">
        <section className="mx-auto w-full max-w-[680px]">{children}</section>
      </main>
      <Footer />
    </div>
  );
}
