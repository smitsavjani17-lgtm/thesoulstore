"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Menu,
  X,
} from "lucide-react";

function InstagramIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navigation = [
  ["Home", "#home"],
  ["Collection", "#collection"],
  ["About", "#about"],
  ["Journal", "#journal"],
  ["Contact", "#contact"],
];

const principles = [
  {
    number: "01",
    title: "Intentional design",
    text: "Clean silhouettes and thoughtful details designed to remain relevant beyond one season.",
  },
  {
    number: "02",
    title: "Quality first",
    text: "We are currently testing fabrics, construction and fit before releasing our first collection.",
  },
  {
    number: "03",
    title: "Limited releases",
    text: "Small, considered drops allow us to focus on quality and improve with every release.",
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Material selection",
    text: "Testing fabric weight, texture and durability.",
  },
  {
    number: "02",
    title: "Fit development",
    text: "Refining the silhouette through physical samples.",
  },
  {
    number: "03",
    title: "Final production",
    text: "Beginning only after every detail is approved.",
  },
];

const journalItems = [
  {
    title: "Sampling",
    text: "Choosing the right manufacturer and reviewing the first physical samples.",
  },
  {
    title: "Development",
    text: "Adjusting measurements, construction and finishing based on real wear tests.",
  },
  {
    title: "Launch",
    text: "Producing a small first drop and introducing TheSoulStore to Calgary.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const cleanedEmail = email.trim();

  if (!cleanedEmail) {
    setFormError("Please enter your email address.");
    return;
  }

  setSubmitting(true);
  setFormError("");

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: cleanedEmail,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to join the waitlist.");
    }

    setSubscribed(true);
    setEmail("");
  } catch (error) {
    setFormError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
}

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <div className="bg-black px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs">
        Collection 001 — In development
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
        <div className="container-width flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-full p-2 transition hover:bg-neutral-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a
            href="#home"
            className="text-lg font-black tracking-[-0.055em] sm:text-xl"
            aria-label="TheSoulStore home"
          >
            THE SOUL STORE
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] lg:flex">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                className="transition hover:text-neutral-500"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#waitlist"
            className="hidden items-center justify-center rounded-full border border-black !bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] !text-black transition hover:!bg-black hover:!text-white sm:inline-flex"
          >
            Join waitlist
          </a>

          <a
            href="#waitlist"
            className="rounded-full p-2 transition hover:bg-neutral-100 sm:hidden"
            aria-label="Join the waitlist"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-black tracking-[-0.055em]">
                THE SOUL STORE
              </span>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2 transition hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-7 text-lg font-bold">
              {navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-neutral-200 pb-4"
                >
                  {label}
                  <ChevronRight className="h-5 w-5" />
                </a>
              ))}
            </nav>

            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-bold text-white"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      )}

      <section
        id="home"
        className="relative isolate min-h-[calc(100vh-112px)] overflow-hidden bg-neutral-950"
      >
        <img
          src="/hero.jpg"
          alt="TheSoulStore Hero"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

        <div className="container-width flex min-h-[calc(100vh-112px)] items-center py-24">
          <div className="fade-up max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-300">
              Calgary, Canada
            </p>

            <h1 className="mt-6 text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-8xl lg:text-[7.5rem]">
              WEAR YOUR
              <span className="block text-neutral-300">SOUL.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
              Modern streetwear built around clean design, confident silhouettes
              and quality you can feel. Our first collection is currently in
              development.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-neutral-800 hover:text-white"
              >
                Get early access
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white bg-transparent px-7 py-4 text-sm font-bold text-white transition hover:bg-neutral-800 hover:text-white"              >
                Discover the brand
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="collection"
        className="border-b border-neutral-200 py-24 sm:py-32"
      >
        <div className="container-width">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                Collection 001
              </p>

              <h2 className="section-title mt-5">
                Built slowly.
                <span className="block text-neutral-400">
                  Released with purpose.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-lg leading-8 text-neutral-600">
                We are currently working with manufacturers, reviewing samples
                and refining every detail of our first release. Nothing goes
                live until the fabric, fit and construction meet our standard.
              </p>

              <a
                href="#waitlist"
                className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-bold uppercase tracking-[0.14em]"
              >
                Be first to know
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {developmentSteps.map((step) => (
              <article
                key={step.number}
                className="min-h-72 border border-neutral-200 bg-neutral-50 p-8"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-neutral-400">
                  {step.number}
                </span>

                <h3 className="mt-20 text-2xl font-black tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-neutral-950 py-24 text-white sm:py-32"
      >
        <div className="container-width grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
              alt="Modern monochrome fashion"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
              Our philosophy
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Clothing should feel personal, not disposable.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-300">
              TheSoulStore was created in Calgary for people who express
              confidence through simplicity. We are building a streetwear label
              focused on intentional design, thoughtful construction and pieces
              that become part of your everyday identity.
            </p>

            <div className="mt-12 divide-y divide-neutral-800 border-y border-neutral-800">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-neutral-500">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold">{principle.title}</h3>
                    <p className="mt-2 leading-7 text-neutral-400">
                      {principle.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="py-24 sm:py-32">
        <div className="container-width">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
            Behind the brand
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="section-title">
              Follow Collection 001 from sample to launch.
            </h2>

            <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
              We will share the process honestly: fabric tests, sample changes,
              campaign preparation and the decisions behind our first drop.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {journalItems.map((item, index) => (
              <article
                key={item.title}
                className="group border-t border-black pt-6"
              >
                <span className="text-xs font-bold text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-3xl font-black tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-neutral-100 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
            Early access
          </p>

          <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.055em] sm:text-7xl">
            Join before the first drop.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            Get launch updates, sample previews and first access to Collection
            001. No spam - only meaningful updates from TheSoulStore.
          </p>

          {subscribed ? (
            <div
              className="mt-10 border border-neutral-300 bg-white p-6 font-bold"
              role="status"
            >
              You&apos;re on the list. Welcome to TheSoulStore.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-10 max-w-2xl"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={email}
                  disabled={submitting}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-14 flex-1 border border-neutral-300 bg-white px-5 text-black outline-none transition placeholder:text-neutral-500 focus:border-black disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="min-h-14 border border-black !bg-black px-8 text-sm font-bold uppercase tracking-[0.14em] !text-white transition hover:!bg-neutral-800 hover:!text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Joining..." : "Join waitlist"}
                </button>
              </div>

              {formError && (
                <p className="mt-3 text-left text-sm font-medium text-red-600">
                  {formError}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
      

      <footer id="contact" className="bg-black py-16 text-neutral-300">
        <div className="container-width">
          <div className="grid gap-12 border-b border-neutral-800 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <h3 className="text-2xl font-black tracking-[-0.055em] text-white">
                THE SOUL STORE
              </h3>

              <p className="mt-5 max-w-md leading-7 text-neutral-400">
                Modern streetwear designed in Calgary. Collection 001 is
                currently in development.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Explore
              </h4>

              <ul className="mt-5 space-y-3 text-sm text-neutral-400">
                <li>
                  <a className="hover:text-white" href="#about">
                    About
                  </a>
                </li>

                <li>
                  <a className="hover:text-white" href="#journal">
                    Journal
                  </a>
                </li>

                <li>
                  <a className="hover:text-white" href="#waitlist">
                    Waitlist
                  </a>
                </li>

                <li>
                  <a className="hover:text-white" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Connect
              </h4>

              <ul className="mt-5 space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    className="inline-flex items-center gap-2 hover:text-white"
                    href="mailto:thesoulstore.ca@gmail.com"
                  >
                    <Mail className="h-4 w-4" />
                    thesoulstore.ca@gmail.com
                  </a>
                </li>

                <li>
                  <a
                    className="inline-flex items-center gap-2 hover:text-white"
                    href="#"
                    aria-label="TheSoulStore on Instagram"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    className="hover:text-white"
                    href="#"
                    aria-label="TheSoulStore on TikTok"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} TheSoulStore. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a className="hover:text-white" href="#">
                Privacy
              </a>

              <a className="hover:text-white" href="#">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}