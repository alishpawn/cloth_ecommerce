import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex h-[85vh] items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="from-dark-bg via-charcoal to-dark-bg absolute inset-0 bg-gradient-to-br" />

      {/* Decorative elements */}
      <div className="bg-gold/5 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-gold/3 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-gold mb-6 text-sm tracking-[0.3em] uppercase">
          New Season Collection
        </p>
        <h1 className="text-cream mb-6 text-5xl leading-tight font-bold md:text-7xl lg:text-8xl">
          Redefine Your
          <span className="text-gold block font-light italic">Style</span>
        </h1>
        <p className="text-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
          Discover curated pieces that blend modern aesthetics with timeless elegance.
          Fashion designed for those who dare to stand out.
        </p>
        <Link
          href="/collection"
          className="border-gold text-gold hover:bg-gold hover:text-dark-bg inline-flex items-center gap-2 border px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500"
        >
          Explore Collection
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
