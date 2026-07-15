import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category?: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="bg-charcoal relative mb-3 aspect-3/4 overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
      </div>

      {/* Info */}
      <div>
        {category && (
          <p className="text-muted mb-1 text-xs tracking-widest uppercase">{category}</p>
        )}
        <h3 className="text-cream text-sm font-medium tracking-wide">{name}</h3>
        <p className="text-gold mt-1 text-sm">{price}</p>
      </div>
    </div>
  );
}
