"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Midnight Soul Oversized Tee",
    category: "Oversized",
    price: 44.99,
    originalPrice: 54.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    badge: "Best Seller",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Essential Black T-Shirt",
    category: "Essentials",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4ecb?auto=format&fit=crop&w=900&q=80",
    badge: "New",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Urban Spirit Graphic Tee",
    category: "Graphic",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Vintage Soul Washed Tee",
    category: "Vintage",
    price: 46.99,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80",
    badge: "Limited",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Everyday White Essential",
    category: "Essentials",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Bold Expression Tee",
    category: "Graphic",
    price: 42.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    badge: "Sale",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Stone Grey Oversized Tee",
    category: "Oversized",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Retro Heart Vintage Tee",
    category: "Vintage",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=900&q=80",
    badge: "New",
    rating: 4.9,
  },
];

const categories = [
  {
    name: "Oversized Tees",
    description: "Relaxed fits made for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Graphic Tees",
    description: "Bold designs that express your personality.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Essential Tees",
    description: "Clean basics that belong in every wardrobe.",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80",
  },
];

const reviews = [
  {
    name: "Aarav",
    text: "The fabric feels premium and the oversized fit is exactly what I wanted.",
  },
  {
    name: "Simran",
    text: "Fast delivery, great packaging and the print quality looks amazing.",
  },
  {
    name: "Daniel",
    text: "One of the most comfortable T-shirts I own. I will definitely order again.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favourites, setFavourites] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  function toggleFavourite(productId: number) {
    setFavourites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <div className="bg-black px-4 py-2 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        Free shipping on Canadian orders over $100
      </div>

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
            className="text-xl font-black tracking-[-0.06em] sm:text-2xl"
          >
            THESOULSTORE
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a className="transition hover:text-neutral-500" href="#home">
              Home
            </a>
            <a className="transition hover:text-neutral-500" href="#shop">
              Shop
            </a>
            <a
              className="transition hover:text-neutral-500"
              href="#collections"
            >
              Collections
            </a>
            <a className="transition hover:text-neutral-500" href="#about">
              Our Story
            </a>
            <a className="transition hover:text-neutral-500" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen((current) => !current)}
              className="rounded-full p-2 transition hover:bg-neutral-100"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="relative rounded-full p-2 transition hover:bg-neutral-100"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="h-5 w-5" />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-neutral-200 bg-white px-4 py-4">
            <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-full border border-neutral-300 px-5 py-3">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search T-shirts..."
                className="w-full bg-transparent text-sm outline-none"
                autoFocus
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 lg:hidden">
          <div className="h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black tracking-[-0.06em]">
                THESOULSTORE
              </span>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2 hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-7 text-xl font-bold">
              {[
                ["Home", "#home"],
                ["Shop", "#shop"],
                ["Collections", "#collections"],
                ["Our Story", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
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
          </div>
        </div>
      )}

      <section
        id="home"
        className="relative isolate min-h-[700px] overflow-hidden bg-neutral-900"
      >
        <img
          src="https://images.unsplash.com/photo-1551488831-1e60fb3e2ed9?auto=format&fit=crop&w=2000&q=85"
          alt="TheSoulStore streetwear collection"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="mx-auto flex min-h-[700px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4" />
              New collection available now
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              WEAR YOUR
              <span className="block text-neutral-300">SOUL.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
              Premium oversized, graphic and essential T-shirts designed for
              comfort, confidence and everyday expression.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-neutral-200"
              >
                Shop the collection
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-full border border-white/50 bg-black/20 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-black"
              >
                Explore styles
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-neutral-200">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                Premium cotton
              </span>

              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Fast shipping
              </span>

              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />
                Top-rated quality
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="collections"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              Collections
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Shop By Style
            </h2>
          </div>

          <ArrowRight className="hidden h-7 w-7 lg:block" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {category.name}
                </h3>

                <p className="mt-3 text-neutral-600">
                  {category.description}
                </p>

                <button
                  className="mt-6 font-bold"
                  onClick={() =>
                    setSelectedCategory(
                      category.name.replace(" Tees", "")
                    )
                  }
                >
                  Shop Collection →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="shop"
        className="bg-neutral-100 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
                Store
              </p>

              <h2 className="mt-2 text-4xl font-black">
                Featured Products
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">

              {[
                "All",
                "Oversized",
                "Graphic",
                "Essentials",
                "Vintage",
              ].map((category) => (

                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover"
                  />

                  {product.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                      {product.badge}
                    </span>
                  )}

                  <button
                    onClick={() =>
                      toggleFavourite(product.id)
                    }
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favourites.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }`}
                    />
                  </button>

                </div>

                <div className="p-6">

                  <p className="text-sm text-neutral-500">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-1">

                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="text-sm font-semibold">
                      {product.rating}
                    </span>

                  </div>

                  <div className="mt-5 flex items-center gap-3">

                    <span className="text-2xl font-black">
                      ${product.price}
                    </span>

                    {product.originalPrice && (
                      <span className="text-neutral-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}

                  </div>

                  <button
                    onClick={() =>
                      setCartCount(cartCount + 1)
                    }
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 font-bold text-white transition hover:bg-neutral-800"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Add to Bag
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="TheSoulStore"
            className="rounded-3xl object-cover shadow-xl"
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              OUR STORY
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight">
              Clothing That Speaks Without Words
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              At TheSoulStore, we believe clothing should be more than fabric.
              Every oversized fit, every graphic, and every stitch is designed
              to help you express yourself confidently. We focus on premium
              materials, timeless styles and everyday comfort.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-black">50K+</h3>
                <p className="text-neutral-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">100%</h3>
                <p className="text-neutral-500">Premium Cotton</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">4.9★</h3>
                <p className="text-neutral-500">Average Rating</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">24/7</h3>
                <p className="text-neutral-500">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">
            CUSTOMER REVIEWS
          </p>

          <h2 className="mt-4 text-center text-5xl font-black">
            What People Say
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl bg-neutral-900 p-8"
              >
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="leading-8 text-neutral-300">
                  "{review.text}"
                </p>

                <h4 className="mt-6 font-black">
                  {review.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-5xl font-black">
            Join TheSoulStore Club
          </h2>

          <p className="mt-5 text-lg text-neutral-600">
            Get early access to new collections, exclusive discounts and
            limited drops.
          </p>

          {subscribed ? (
            <div className="mt-8 rounded-2xl bg-green-100 p-5 font-bold text-green-700">
              🎉 You're subscribed!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-neutral-300 px-6 py-4 outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-black px-8 py-4 font-bold text-white hover:bg-neutral-800"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <footer
        id="contact"
        className="bg-neutral-950 py-20 text-neutral-300"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="text-3xl font-black text-white">
              THESOULSTORE
            </h3>

            <p className="mt-5 leading-7">
              Premium oversized and graphic T-shirts built for everyday
              comfort and timeless style.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Shop
            </h4>

            <ul className="mt-5 space-y-3">
              <li>Oversized</li>
              <li>Graphic</li>
              <li>Vintage</li>
              <li>Essentials</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Company
            </h4>

            <ul className="mt-5 space-y-3">
              <li>About</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Contact
            </h4>

            <ul className="mt-5 space-y-3">
              <li>support@thesoulstore.com</li>
              <li>+1 (555) 555-5555</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} TheSoulStore. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}