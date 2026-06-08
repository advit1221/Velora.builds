const steps = [
  { t: "Listen", d: "We start by understanding the business behind the screen — what it offers, who it serves, and where it wants to go." },
  { t: "Shape", d: "Sitemaps, structure, and direction drafted with care before a single pixel is placed." },
  { t: "Design", d: "Interface and identity come together — typography, motion, and detail tuned with intention." },
  { t: "Build", d: "Engineered cleanly, deployed carefully, and handed over ready for what comes next." },
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-20 bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-cream/40" />
          <span className="text-[10px] tracking-luxe uppercase text-cream/60">The Process</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.04] tracking-[-0.02em] max-w-3xl mb-10 md:mb-12">
          A <em className="font-script text-cream/90 not-italic inline-block mx-2">considered</em> path from first idea to finished site.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
          {steps.map((s, i) => (
            <div key={i} className="group bg-charcoal p-7 md:p-8 hover:bg-wine/40 transition-colors duration-700">
              <div className="font-display text-6xl md:text-7xl text-cream/15 group-hover:text-cream/40 transition-colors duration-700 mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-px w-12 bg-cream/30 mb-5 origin-left group-hover:w-20 group-hover:bg-cream transition-all duration-700" />
              <h3 className="font-display text-2xl md:text-[2rem] text-cream mb-4">{s.t}</h3>
              <p className="text-cream/65 leading-7 text-sm md:text-[15px] max-w-[30ch]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
