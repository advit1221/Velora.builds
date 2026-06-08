export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-[4.5rem]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-14">
          <div className="md:col-span-5">
            <div className="font-script text-5xl md:text-6xl text-cream mb-2">Velora</div>
            <div className="text-[10px] tracking-luxe uppercase text-cream/60 mb-5">Creative Web Studio</div>
            <p className="text-cream/65 max-w-sm leading-7 text-sm md:text-[15px]">
              Crafting thoughtful digital experiences.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-luxe uppercase text-cream/50 mb-4">Navigate</div>
            <ul className="space-y-2.5 text-cream/85 text-sm">
              <li><a href="#top" className="hover:text-cream">Home</a></li>
              <li><a href="#services" className="hover:text-cream">Services</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-luxe uppercase text-cream/50 mb-4">Contact</div>
            <ul className="space-y-2.5 text-cream/85 text-sm">
              <li><a href="mailto:hello@velora.studio" className="hover:text-cream">hello@velora.studio</a></li>
              <li><a href="https://instagram.com/velora.studio" className="hover:text-cream">@velora.studio</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-luxe uppercase text-cream/50 mb-4">Newsletter</div>
            <p className="text-cream/70 text-sm mb-3 leading-6">Occasional notes on craft, typography, and the web.</p>
            <form className="flex border-b border-cream/30" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent py-2.5 text-sm placeholder:text-cream/40 focus:outline-none" />
              <button className="text-[11px] tracking-luxe uppercase text-cream hover:text-burgundy">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/15 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[11px] tracking-[0.18em] uppercase text-cream/45">© 2026 Velora. Crafted with intention.</div>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase text-cream/45">
            <a href="https://instagram.com/velora.studio" className="hover:text-cream">Instagram</a>
            <a href="mailto:hello@velora.studio" className="hover:text-cream">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
