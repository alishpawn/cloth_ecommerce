import Link from "next/link";
import { InstagramIcon } from "./Footer";

export default function InstagramCTA() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-gold mb-4 text-sm tracking-[0.3em] uppercase">
          Stay Connected
        </p>
        <h2 className="text-cream mb-6 text-3xl font-bold md:text-4xl">
          Follow Us on Instagram
        </h2>
        <p className="text-muted mx-auto mb-10 max-w-xl">
          Get a behind-the-scenes look at our latest collections, styling tips, and
          exclusive drops. Join our community of fashion enthusiasts.
        </p>
        <Link
          href="https://ig.me/m/urbanthread"
          target="_blank"
          rel="noopener noreferrer"
          className="border-gold text-gold hover:bg-gold hover:text-dark-bg inline-flex items-center gap-3 border px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500"
        >
          <InstagramIcon className="h-5 w-5" />
          Chat with Us on Instagram
        </Link>
      </div>
    </section>
  );
}
