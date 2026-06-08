import { Flourish } from "./Flourish";

export function CTA() {
  return (
    <section id="contact" className="relative bg-burgundy text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Flourish className="absolute top-20 left-10 w-96 text-cream" />
        <Flourish className="absolute bottom-20 right-10 w-96 text-cream rotate-180" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-28 text-center relative">
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="w-12 h-px bg-cream/50" />
          <span className="text-[10px] tracking-luxe uppercase text-cream/70">An Invitation</span>
          <span className="w-12 h-px bg-cream/50" />
        </div>
        <h2 className="font-display text-5xl md:text-8xl leading-[1.02] tracking-[-0.02em] max-w-5xl mx-auto">
          Ready to build something
          <br />
          <em className="font-script text-cream text-[1.1em] block mt-3">remarkable</em>?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-cream/75 text-lg leading-relaxed">
          Whether you are launching something new or rethinking your current presence, we are always interested in ambitious ideas and meaningful projects.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <a href="mailto:hello@velora.studio" className="inline-flex items-center gap-3 bg-cream text-burgundy px-10 py-5 text-[12px] tracking-[0.22em] uppercase hover:bg-ivory transition-colors">
            Book A Call With Us
            <span>→</span>
          </a>
        </div>
        <div className="mt-8">
          <a href="mailto:hello@velora.studio" className="text-[11px] tracking-luxe uppercase text-cream/60 hover:text-cream border-b border-cream/30 hover:border-cream pb-1 transition-colors">
            hello@velora.studio
          </a>
        </div>
      </div>
    </section>
  );
}
