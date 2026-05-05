"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

const easeExpo = [0.16, 1, 0.3, 1] as const;

type Props = {
  onSimulate: () => void;
};

export function CTAFinal({ onSimulate }: Props) {
  return (
    <section
      data-cta-final
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Full-bleed background — sem container, contraste com seções anteriores */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeExpo }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: tipografia rítmica */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-gold-400">
              <Sparkles className="h-3.5 w-3.5" />
              {config.vagasRestantes} vagas no grupo do mês
            </div>

            {/* Headline em 3 frases curtas — rítmica, ponto final como respiração */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.02] text-paper text-balance">
              30 segundos.
              <br />
              Um WhatsApp.
              <br />
              <span className="text-paper-dim italic font-light">
                Sua carta.
              </span>
            </h2>

            <p className="text-lg text-paper-dim leading-relaxed max-w-lg">
              Simule sua carta agora e fale direto comigo no WhatsApp.
              Sem ligação, sem enrolação. Resposta personalizada na hora.
            </p>
          </div>

          {/* Right: CTA card */}
          <div className="lg:col-span-5">
            <div className="surface-edge rounded-md p-7 space-y-5">
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-400">
                  Próximo passo
                </div>
                <div className="font-display text-2xl font-medium text-paper">
                  Veja quanto cabe no seu bolso
                </div>
              </div>

              <Button
                size="xl"
                onClick={onSimulate}
                className="w-full"
                aria-label="Iniciar simulação"
              >
                Simular minha carta
              </Button>

              <div className="grid grid-cols-3 gap-3 text-[11px] text-paper-dim">
                <div className="flex flex-col items-center gap-1 py-2 border-t border-white/[0.06]">
                  <span className="text-paper font-medium">Sem custo</span>
                </div>
                <div className="flex flex-col items-center gap-1 py-2 border-t border-white/[0.06]">
                  <span className="text-paper font-medium">Sem cadastro</span>
                </div>
                <div className="flex flex-col items-center gap-1 py-2 border-t border-white/[0.06]">
                  <span className="text-paper font-medium">Sem ligação</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
