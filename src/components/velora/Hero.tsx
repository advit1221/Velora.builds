import { Flourish } from "./Flourish";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28 pb-16 md:pb-18 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6 reveal">
            <span className="w-10 md:w-12 h-px bg-burgundy/60" />
            <span className="text-[10px] tracking-luxe uppercase text-burgundy">Website Design Agency</span>
            <span className="w-10 md:w-12 h-px bg-burgundy/60" />
          </div>
          <h1 className="reveal delay-1 font-display text-[40px] sm:text-5xl lg:text-[76px] leading-[0.96] tracking-[-0.03em] text-charcoal max-w-5xl mx-auto">
            Websites that make businesses
            <br />
            <em className="font-script not-italic text-burgundy text-[1.12em] inline-block mx-2">impossible</em>
            <span className="italic font-normal">to ignore.</span>
          </h1>
          <Flourish className="reveal delay-2 w-36 md:w-44 h-4 mt-7 mx-auto text-burgundy" />
          <p className="reveal delay-2 mt-6 max-w-[560px] mx-auto text-base md:text-[17px] text-muted-foreground leading-7">
            Velora designs and develops thoughtful websites for businesses, founders, and creators who want to stand out online. Every project is crafted from the ground up with clarity, creativity, and purpose.
          </p>
          <div className="reveal delay-3 mt-8 flex justify-center">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-burgundy text-cream px-8 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-wine transition-colors">
              Book A Call With Us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
