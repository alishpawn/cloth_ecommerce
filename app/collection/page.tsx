"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products as allProducts } from "@/lib/products";

const categories = ["All", "Men", "Women", "Accessories"];

export default function CollectionPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <p className="text-gold mb-3 text-sm tracking-[0.3em] uppercase">
            Our Collection
          </p>
          <h1 className="text-cream text-4xl font-bold md:text-5xl">Shop the Look</h1>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 sm:px-6 sm:text-sm ${
                active === cat
                  ? "bg-gold text-dark-bg"
                  : "text-muted hover:border-gold hover:text-gold border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted py-20 text-center">
            No products found in this category.
          </p>
        )}
      </section>
    </>
  );
}
