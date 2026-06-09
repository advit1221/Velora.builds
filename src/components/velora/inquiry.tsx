export default function ContactPage() {
  return (
    <main className="min-h-screen bg-burgundy text-cream flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-2xl w-full">
        {/* Small Label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-cream/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
            Contact
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] mb-8">
          Hello from Velora.
        </h1>

        {/* Body */}
        <div className="max-w-xl">
          <p className="text-lg md:text-xl text-cream/85 leading-relaxed">
            Thank you for reaching out.
          </p>

          <p className="mt-4 text-cream/70 text-base md:text-lg leading-relaxed">
            Send us a message and we'll get back to you shortly.
          </p>

          <p className="mt-2 text-cream/70 text-base md:text-lg leading-relaxed">
            We typically respond within an hour.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-14 space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">
              Email
            </div>
            <a
              href="mailto:hello.velorabuilds@gmail.com"
              className="font-display text-2xl md:text-3xl hover:text-cream/80 transition-colors"
            >
              hello.velorabuilds@gmail.com
            </a>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">
              Instagram
            </div>
            <a
              href="https://instagram.com/velora.builds"
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl md:text-3xl hover:text-cream/80 transition-colors"
            >
              @velora.builds
            </a>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">
              Phone
            </div>
            <a
              href="tel:+919625325576"
              className="font-display text-2xl md:text-3xl hover:text-cream/80 transition-colors"
            >
              +91 96253 25576
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16">
          <p className="font-script text-5xl text-cream/80">
            Looking forward to hearing from you.
          </p>
        </div>
      </div>
    </main>
  );
}