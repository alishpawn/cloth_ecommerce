import type { Metadata } from "next";
import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/Footer";
import { contact, social, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Butta Store | Contact",
  description: "Curating modern, timeless fashion for the bold and the sophisticated.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-16 text-center">
          <p className="text-gold mb-3 text-sm tracking-[0.3em] uppercase">
            Get In Touch
          </p>
          <h1 className="text-cream text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-muted mx-auto mt-4 max-w-xl">
            Have a question, want to collaborate, or just want to say hello? We&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info + Social */}
          <div className="space-y-10">
            {/* Direct Contact */}
            <div>
              <h2 className="text-cream mb-6 text-xl font-bold">Reach Out Directly</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-gold flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted text-xs tracking-wider uppercase">Email</p>
                    <p className="text-cream">{contact.EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-gold flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted text-xs tracking-wider uppercase">Phone</p>
                    <p className="text-cream">{contact.PHONE}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-cream mb-6 text-xl font-bold">Chat With Us</h2>
              <p className="text-muted mb-6 text-sm">
                Tap below to start a conversation with us on your favorite platform. We
                typically respond within a few hours!
              </p>

              <div className="flex gap-3">
                {/* Instagram DM */}
                <Link
                  href={`https://ig.me/m/${social.INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400">
                    <InstagramIcon className="h-6 w-6 text-white" />
                  </div>
                </Link>

                {/* WhatsApp */}
                <Link href={WHATSAPP.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600">
                    <WhatsAppIcon className="h-6 w-6 text-white" />
                  </div>
                </Link>

                {/* Facebook Messenger */}
                <Link
                  href={`https://m.me/${social.FACEBOOK}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
                    <FacebookIcon className="h-6 w-6 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-cream mb-6 text-xl font-bold">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="text-muted mb-2 block text-xs tracking-wider uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-charcoal text-cream placeholder-muted/50 focus:border-gold w-full border border-white/10 px-4 py-3 transition-colors focus:outline-none"
                />
              </div>
              <div>
                <label className="text-muted mb-2 block text-xs tracking-wider uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-charcoal text-cream placeholder-muted/50 focus:border-gold w-full border border-white/10 px-4 py-3 transition-colors focus:outline-none"
                />
              </div>
              <div>
                <label className="text-muted mb-2 block text-xs tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="bg-charcoal text-cream placeholder-muted/50 focus:border-gold w-full resize-none border border-white/10 px-4 py-3 transition-colors focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gold text-dark-bg hover:bg-gold/90 flex w-full items-center justify-center gap-2 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-500"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
