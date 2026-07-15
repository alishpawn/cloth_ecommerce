import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="bg-dark-bg relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
              alt="Urban Thread story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold mb-4 text-sm tracking-[0.3em] uppercase">Our Story</p>
            <h2 className="text-cream mb-6 text-3xl leading-tight font-bold md:text-4xl">
              Crafted With
              <span className="text-gold"> Purpose</span>
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              Urban Thread was born from a simple belief: fashion should be an expression
              of who you are, not just what you wear. Every piece in our collection is
              thoughtfully designed to empower your individuality.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
              We source premium fabrics and work with skilled artisans to create clothing
              that feels as good as it looks. From everyday essentials to statement
              pieces, each item tells a story of quality and craftsmanship.
            </p>
            <Link
              href="/collection"
              className="bg-gold text-dark-bg hover:bg-gold/90 inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-500"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
