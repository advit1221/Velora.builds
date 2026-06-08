import veloraLogo from "@/assets/velora-logo.png";
import { Nav } from "@/components/velora/Nav";
import { Hero } from "@/components/velora/Hero";
import { Philosophy } from "@/components/velora/Philosophy";
import { Services } from "@/components/velora/Services";
import { Process } from "@/components/velora/Process";
import { CTA } from "@/components/velora/CTA";
import { Footer } from "@/components/velora/Footer";

export function Home() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      <img src={veloraLogo} alt="Velora — Creative Web Studio" className="sr-only" />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
