import { Flourish } from "./Flourish";

export function CTA() {
  return (
    <section id="contact" className="relative bg-burgundy text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Flourish className="absolute top-16 left-8 w-80 text-cream" />
        <Flourish className="absolute bottom-16 right-8 w-80 text-cream rotate-180" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 text-center relative">
        <div className="flex justify-center items-center gap-4 mb-5">
          <span className="w-10 h-px bg-cream/50" />
          <span className="text-[10px] tracking-luxe uppercase text-cream/70">An Invitation</span>
          <span className="w-10 h-px bg-cream/50" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.02em] max-w-4xl mx-auto">
          Ready to build something
          <br />
          <em className="font-script text-cream text-[1.08em] block mt-2">remarkable?</em>
        </h2>
        <p className="mt-5 max-w-lg mx-auto text-cream/75 text-base md:text-lg leading-7">
          Whether you are launching something new or rethinking your current presence, we are always interested in ambitious ideas and meaningful projects.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@velora.studio" className="inline-flex items-center gap-3 bg-cream text-burgundy px-8 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-ivory transition-colors">
            Book A Call With Us
            <span>→</span>
          </a>
        </div>
        <div className="mt-4">
          <a href="mailto: hello.velorabuilds@gmail.com" className="text-[11px] tracking-luxe uppercase text-cream/60 hover:text-cream border-b border-cream/30 hover:border-cream pb-1 transition-colors">
            hello.velorabuilds@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
