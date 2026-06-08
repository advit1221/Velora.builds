export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ivory/75 border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 h-16 md:h-[4.5rem] flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-script text-2xl md:text-3xl text-burgundy leading-none">Velora</span>
          <span className="hidden md:inline text-[10px] tracking-luxe uppercase text-muted-foreground">Website Design Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.18em] uppercase text-charcoal/80">
          <a href="#philosophy" className="hover:text-burgundy transition-colors">About</a>
          <a href="#services" className="hover:text-burgundy transition-colors">Services</a>
          <a href="#process" className="hover:text-burgundy transition-colors">Process</a>
          <a href="#contact" className="hover:text-burgundy transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="text-[10px] tracking-[0.22em] uppercase border border-charcoal/75 text-charcoal px-4 py-2.5 hover:bg-charcoal hover:text-cream transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}
