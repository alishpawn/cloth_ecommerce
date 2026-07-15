import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

const featured = products.slice(0, 6);

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="mb-14 text-center">
        <p className="text-gold mb-3 text-sm tracking-[0.3em] uppercase">
          Curated For You
        </p>
        <h2 className="text-cream text-3xl font-bold md:text-4xl">Featured Pieces</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/collection"
          className="text-cream hover:border-gold hover:text-gold inline-flex items-center gap-2 border border-white/10 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500"
        >
          View All Products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
