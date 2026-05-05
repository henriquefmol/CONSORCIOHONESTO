"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { Qualifier } from "@/components/qualifier/Qualifier";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function HomePage() {
  const [qualifierOpen, setQualifierOpen] = useState(false);

  const handleSimulate = () => {
    // TODO: Meta Pixel — disparar evento "InitiateCheckout" (clique no CTA principal)
    // window.fbq?.("track", "InitiateCheckout");
    setQualifierOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Hero onSimulate={handleSimulate} />
      <Benefits />
      <HowItWorks onSimulate={handleSimulate} />
      <FAQ />
      <CTAFinal onSimulate={handleSimulate} />
      <Footer />

      <Qualifier open={qualifierOpen} onOpenChange={setQualifierOpen} />
      <StickyMobileCTA onSimulate={handleSimulate} />
    </main>
  );
}
