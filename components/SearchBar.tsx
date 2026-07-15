"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";
import { products, type Product } from "@/lib/products";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleChange(value: string) {
    setQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (value.trim().length === 0) {
      setResults([]);
      setIsOpen(false);
      setLoading(false);
      return;
    }

    setLoading(true);

    debounceRef.current = setTimeout(() => {
      const q = value.toLowerCase();
      const matched = products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
      setResults(matched);
      setIsOpen(true);
      setLoading(false);
    }, 300);
  }

  function handleSelect() {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <Search className="text-muted pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => query.trim().length > 0 && results.length > 0 && setIsOpen(true)}
          placeholder="Search products..."
          className="bg-charcoal text-cream placeholder-muted/50 focus:border-gold w-full border border-white/10 py-2 pr-4 pl-10 text-sm transition-colors focus:outline-none"
        />
        {loading && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2">
            <Loader2 className="text-gold h-4 w-4 animate-spin" />
          </div>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="bg-charcoal absolute top-full right-0 left-0 z-50 mt-2 max-h-80 overflow-y-auto border border-white/10 shadow-2xl">
          {results.map((product) => (
            <Link
              key={product.name}
              href="/collection"
              onClick={handleSelect}
              className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-white/5"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={48}
                height={56}
                className="shrink-0 rounded-sm object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-cream truncate text-sm font-medium">{product.name}</p>
                <p className="text-muted text-xs tracking-wider uppercase">
                  {product.category}
                </p>
              </div>
              <p className="text-gold shrink-0 text-sm font-semibold">{product.price}</p>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && !loading && (
        <div className="bg-charcoal absolute top-full right-0 left-0 z-50 mt-2 border border-white/10 px-4 py-6 text-center shadow-2xl">
          <p className="text-muted text-sm">
            No products found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
