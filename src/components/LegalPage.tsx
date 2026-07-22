import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="container-width flex h-20 items-center justify-between">
          <a
            href="/"
            className="text-lg font-black tracking-[-0.055em] sm:text-xl"
          >
            THE SOUL STORE
          </a>

          <a
            href="/"
            className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-600 hover:text-black"
          >
            Back home
          </a>
        </div>
      </header>

      <article className="container-width max-w-4xl py-16 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
          TheSoulStore
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
          {title}
        </h1>

        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {lastUpdated}
        </p>

        <div className="legal-content mt-12 space-y-10 text-base leading-8 text-neutral-700">
          {children}
        </div>
      </article>
    </main>
  );
}