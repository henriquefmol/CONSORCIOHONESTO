"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onSimulate: () => void;
};

const easeExpo = [0.16, 1, 0.3, 1] as const;

/**
 * Barra fixa no rodapé do mobile com CTA principal.
 * - Aparece após 600px de scroll
 * - Esconde quando o CTAFinal entra em viewport (evita CTA duplicado)
 * - Throttle via requestAnimationFrame para mobile barato
 */
export function StickyMobileCTA({ onSimulate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [ctaFinalVisible, setCtaFinalVisible] = useState(false);

  // Scroll position com RAF throttle
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 600);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Detecta se CTAFinal está visível
  useEffect(() => {
    const target = document.querySelector("[data-cta-final]");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCtaFinalVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !ctaFinalVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: easeExpo }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/0 pt-8"
        >
          <Button
            size="xl"
            onClick={onSimulate}
            className="w-full"
            aria-label="Simular consórcio agora"
          >
            Simular minha carta
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
