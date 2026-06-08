const tenets = [
  { t: "No templates", d: "Every site is designed from a blank canvas, shaped around the business it represents." },
  { t: "No shortcuts", d: "Care lives in the details — the spacing, the typography, the moments between clicks." },
  { t: "Story first", d: "A site should tell a story and build trust, not just list what you do." },
  { t: "Built to last", d: "Thoughtful design and purposeful development that hold up well beyond launch day." },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-6 md:sticky md:top-32 self-start">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-burgundy/60" />
            <span className="text-[10px] tracking-luxe uppercase text-burgundy">Built Differently</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05] tracking-[-0.02em] mb-10">
            The internet is crowded with <em className="font-script text-burgundy not-italic inline-block mx-2">forgettable</em> websites.
          </h2>
          <div className="bg-burgundy text-cream p-10 md:p-12 relative">
            <div className="absolute inset-0 border border-cream/10 m-3 pointer-events-none" />
            <div className="font-script text-6xl text-cream/30 leading-none mb-6">"</div>
            <p className="font-display text-3xl md:text-4xl leading-relaxed italic text-cream">
              A website should do more than exist. It should tell a story, build trust, and create a lasting impression.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="w-8 h-px bg-cream/40" />
              <span className="text-[10px] tracking-luxe uppercase text-cream/60">Velora</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 space-y-px bg-border">
          {tenets.map((t, i) => (
            <div key={i} className="bg-ivory p-10 md:p-12 hover:bg-cream/50 transition-colors duration-700">
              <div className="flex items-baseline gap-6 mb-4">
                <span className="font-display text-burgundy text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal">{t.t}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12 md:pl-14">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
