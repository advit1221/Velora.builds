const tenets = [
  { t: "No templates", d: "Every site is designed from a blank canvas, shaped around the business it represents." },
  { t: "No shortcuts", d: "Care lives in the details — the spacing, the typography, the moments between clicks." },
  { t: "Story first", d: "A site should tell a story and build trust, not just list what you do." },
  { t: "Built to last", d: "Thoughtful design and purposeful development that hold up well beyond launch day." },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="md:col-span-6 self-start">
          <div className="flex items-center gap-4 mb-5">
            <span className="w-10 h-px bg-burgundy/60" />
            <span className="text-[10px] tracking-luxe uppercase text-burgundy">Built Differently</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-[1.04] tracking-[-0.02em] max-w-xl mb-6">
            The internet is crowded with <em className="font-script text-burgundy not-italic inline-block mx-2">forgettable</em> websites.
          </h2>
          <div className="bg-burgundy text-cream p-7 md:p-8 relative">
            <div className="absolute inset-0 border border-cream/10 m-2.5 pointer-events-none" />
            <div className="font-script text-5xl text-cream/30 leading-none mb-4">"</div>
            <p className="font-display text-2xl md:text-3xl leading-[1.35] italic text-cream max-w-xl">
              A website should do more than exist. It should tell a story, build trust, and create a lasting impression.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <span className="w-8 h-px bg-cream/40" />
              <span className="text-[10px] tracking-luxe uppercase text-cream/60">Velora</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 space-y-px bg-border">
          {tenets.map((t, i) => (
            <div key={i} className="bg-ivory p-7 md:p-8 hover:bg-cream/50 transition-colors duration-700">
              <div className="flex items-baseline gap-5 mb-3">
                <span className="font-display text-burgundy text-xl md:text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl md:text-2xl text-charcoal leading-tight">{t.t}</h3>
              </div>
              <p className="text-muted-foreground leading-7 text-sm md:text-[15px] pl-8 md:pl-10 max-w-[46ch]">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
