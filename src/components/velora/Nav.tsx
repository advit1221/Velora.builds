export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ivory/70 border-b border-border/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-script text-3xl text-burgundy leading-none">Velora</span>
          <span className="hidden md:inline text-[10px] tracking-luxe uppercase text-muted-foreground">Creative Web Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.18em] uppercase text-charcoal/80">
          <a href="#philosophy" className="hover:text-burgundy transition-colors">About</a>
          <a href="#services" className="hover:text-burgundy transition-colors">Services</a>
          <a href="#process" className="hover:text-burgundy transition-colors">Process</a>
          <a href="#contact" className="hover:text-burgundy transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="text-[11px] tracking-[0.22em] uppercase border border-charcoal/80 text-charcoal px-5 py-3 hover:bg-charcoal hover:text-cream transition-colors">
          Start a Project
        </a>
      </div>
    </header>
  );
}
