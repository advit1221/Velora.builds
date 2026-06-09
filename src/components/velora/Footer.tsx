export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-[4.5rem]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-14">
          <div className="md:col-span-5">
            <div className="font-script text-5xl md:text-6xl text-cream mb-2">
              Velora
            </div>

            <div className="text-[10px] tracking-luxe uppercase text-cream/60 mb-5">
              Website Design Agency
            </div>

            <p className="text-cream/65 max-w-sm leading-7 text-sm md:text-[15px]">
              Crafting thoughtful digital experiences.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-luxe uppercase text-cream/50 mb-4">
              Navigate
            </div>

            <ul className="space-y-2.5 text-cream/85 text-sm">
              <li>
                <a href="#top" className="hover:text-cream">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-cream">
                  Services
                </a>
              </li>

              <li>
                <a href="/inquiry" className="hover:text-cream">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-luxe uppercase text-cream/50 mb-4">
              Contact
            </div>

            <ul className="space-y-2.5 text-cream/85 text-sm">
              <li>
                <a
                  href="mailto:hello.velorabuilds@gmail.com"
                  className="hover:text-cream"
                >
                  hello.velorabuilds@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/velora.builds"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cream"
                >
                  @velora.builds
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3"></div>
        </div>

        <div className="border-t border-cream/15 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[11px] tracking-[0.18em] uppercase text-cream/45">
            © 2026 Velora. Crafted with intention.
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase text-cream/45">
            <a
              href="https://instagram.com/velora.builds"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream"
            >
              Instagram
            </a>

            <a
              href="mailto:hello.velorabuilds@gmail.com"
              className="hover:text-cream"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}