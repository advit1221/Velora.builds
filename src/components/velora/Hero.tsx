import { Flourish } from "./Flourish";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10 reveal">
            <span className="w-12 h-px bg-burgundy/60" />
            <span className="text-[10px] tracking-luxe uppercase text-burgundy">Creative Web Studio</span>
            <span className="w-12 h-px bg-burgundy/60" />
          </div>
          <h1 className="reveal delay-1 font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[1.02] tracking-[-0.02em] text-charcoal">
            Websites that make
            <br />
            businesses
            <br />
            <em className="font-script not-italic text-burgundy text-[1.15em] inline-block mr-3">impossible</em>
            <span className="italic font-normal">to ignore.</span>
          </h1>
          <Flourish className="reveal delay-2 w-48 h-4 mt-10 mx-auto text-burgundy" />
          <p className="reveal delay-2 mt-8 max-w-[620px] mx-auto text-lg text-muted-foreground leading-relaxed">
            Velora designs and develops thoughtful websites for businesses, founders, and creators who want to stand out online. Every project is crafted from the ground up with clarity, creativity, and purpose.
          </p>
          <div className="reveal delay-3 mt-12 flex justify-center">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-burgundy text-cream px-9 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-wine transition-colors">
              Book A Call With Us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
