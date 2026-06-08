const services = [
  { t: "Website Design", d: "Clean, modern interfaces crafted around your brand and audience." },
  { t: "Website Development", d: "Fast, responsive websites built with attention to detail." },
  { t: "Creative Direction", d: "Helping brands establish a memorable and consistent digital presence." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-burgundy/60" />
              <span className="text-[10px] tracking-luxe uppercase text-burgundy">What We Do</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-charcoal leading-[1.05] tracking-[-0.02em]">
              A focused <em className="font-script text-burgundy not-italic inline-block mx-2">practice</em>.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground text-lg leading-relaxed">
            Three disciplines, one studio. Every engagement is shaped end to end — from the first conversation to the finished site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s, i) => (
            <article key={i} className="group relative p-10 md:p-12 border-r border-b border-border bg-card hover:bg-cream transition-colors duration-700">
              <div className="text-[10px] tracking-luxe uppercase text-burgundy/70 mb-8">
                {String(i + 1).padStart(2, "0")} — Discipline
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-5 leading-snug">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="mt-10 flex items-center gap-3 text-[11px] tracking-luxe uppercase text-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Inquire</span>
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 text-[12px] tracking-luxe uppercase text-charcoal border-b border-charcoal/40 pb-1 hover:border-burgundy hover:text-burgundy transition-colors">
            Need something unique? Let's discuss it.
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
