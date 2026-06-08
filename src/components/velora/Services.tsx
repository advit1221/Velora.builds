const services = [
  { t: "Website Design", d: "Clean, modern interfaces crafted around your brand and audience." },
  { t: "Website Development", d: "Fast, responsive websites built with attention to detail." },
  { t: "Creative Direction", d: "Helping brands establish a memorable and consistent digital presence." },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-10 md:mb-12 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-px bg-burgundy/60" />
              <span className="text-[10px] tracking-luxe uppercase text-burgundy">What We Do</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-[1.04] tracking-[-0.02em] max-w-3xl">
              A focused <em className="font-script text-burgundy not-italic inline-block mx-2">practice</em>.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground text-base md:text-lg leading-7 max-w-xl">
            Three disciplines, one studio. Every engagement is shaped end to end — from the first conversation to the finished site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s, i) => (
            <article key={i} className="group relative p-7 md:p-8 border-r border-b border-border bg-card hover:bg-cream transition-colors duration-700">
              <div className="text-[10px] tracking-luxe uppercase text-burgundy/70 mb-6">
                {String(i + 1).padStart(2, "0")} — Discipline
              </div>
              <h3 className="font-display text-xl md:text-2xl text-charcoal mb-4 leading-snug">{s.t}</h3>
              <p className="text-muted-foreground leading-7 text-sm md:text-[15px] max-w-[28ch]">{s.d}</p>
              <div className="mt-8 flex items-center gap-3 text-[11px] tracking-luxe uppercase text-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Inquire</span>
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 text-[11px] tracking-luxe uppercase text-charcoal border-b border-charcoal/40 pb-1 hover:border-burgundy hover:text-burgundy transition-colors">
            Need something unique? Let's discuss it.
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
