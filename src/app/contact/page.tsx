import { Mail } from "lucide-react";

export default function ContactPage() {
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

      <section className="container-width py-20 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>

            <h1 className="mt-5 text-5xl font-black leading-none tracking-[-0.055em] sm:text-7xl">
              Let&apos;s talk.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
              Questions about Collection 001, your order, shipping, returns or
              collaborations? Contact TheSoulStore and include as much detail as
              possible.
            </p>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-8 sm:p-12">
            <Mail className="h-8 w-8" />

            <h2 className="mt-8 text-2xl font-black">Email us</h2>

            <a
              href="mailto:thesoulstore.ca@gmail.com"
              className="mt-4 inline-block break-all text-lg font-semibold underline"
            >
              thesoulstore.ca@gmail.com
            </a>

            <p className="mt-5 leading-7 text-neutral-600">
              We aim to respond within 2–3 business days.
            </p>

            <div className="mt-10 border-t border-neutral-300 pt-8">
              <h3 className="font-bold">Based in</h3>
              <p className="mt-2 text-neutral-600">
                Calgary, Alberta, Canada
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}