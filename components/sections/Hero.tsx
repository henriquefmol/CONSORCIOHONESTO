"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

type Props = {
  onSimulate: () => void;
};

const easeExpo = [0.16, 1, 0.3, 1] as const;

export function Hero({ onSimulate }: Props) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
      {/* Glow âncora — único por página, no Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-gold-400/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20 items-center">
          {/* Left: copy */}
          <div className="space-y-6 max-w-2xl order-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeExpo }}
              className="flex items-center gap-3"
            >
              {/* Selo institucional — substitui badge genérica */}
              <div className="flex items-center gap-2 rounded-sm border border-gold-400/30 bg-gold-400/[0.05] px-2.5 py-1.5">
                {/* TODO: substituir por SVG real do logo BB. Placeholder textual estilizado. */}
                <span className="font-display text-xs font-semibold tracking-wider text-gold-300">
                  BB
                </span>
                <span className="h-3 w-px bg-gold-400/30" />
                <span className="text-[11px] font-medium text-paper-dim">
                  Representante autorizado
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeExpo, delay: 0.05 }}
              className="font-display text-[2.75rem] sm:text-6xl lg:text-[4rem] font-medium tracking-[-0.03em] leading-[0.98] text-balance"
            >
              Realize o sonho da{" "}
              <span className="text-display-gold whitespace-nowrap">
                casa ou do carro
              </span>{" "}
              sem pagar juros.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeExpo, delay: 0.12 }}
              className="text-lg text-paper-dim leading-relaxed max-w-xl"
            >
              Consórcio do Banco do Brasil com parcelas que cabem no seu bolso.
              Sem entrada e{" "}
              <strong className="text-paper font-semibold">
                sem precisar ser correntista do BB
              </strong>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeExpo, delay: 0.18 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2"
            >
              <Button
                size="xl"
                onClick={onSimulate}
                className="group w-full sm:w-auto"
                aria-label="Simular minha carta de consórcio"
              >
                Simular minha carta
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-paper-dim sm:px-2">
                <Sparkles className="h-4 w-4 text-gold-400" />
                Resposta em 30 segundos
              </div>
            </motion.div>

            {/* Assinatura humana — foto + nome do representante */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeExpo, delay: 0.3 }}
              className="flex items-center gap-3 pt-6 border-t border-white/[0.06]"
            >
              {/* TODO: substituir /public/marcao.jpg pela foto real do representante */}
              <div className="relative h-11 w-11 rounded-full overflow-hidden bg-gradient-to-br from-gold-700 to-gold-900 ring-2 ring-gold-400/20">
                <span className="absolute inset-0 flex items-center justify-center font-display text-base font-medium text-gold-200">
                  M
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-medium text-paper">
                  Marcão
                </div>
                <div className="text-[11px] text-muted-foreground">
                  Representante BB · Belo Horizonte/MG
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-[11px] text-gold-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                BACEN
              </div>
            </motion.div>
          </div>

          {/* Right: card simplificado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeExpo, delay: 0.2 }}
            className="relative order-2"
          >
            <HeroCard onSimulate={onSimulate} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ onSimulate }: { onSimulate: () => void }) {
  return (
    <div className="relative">
      {/* Glow leve atrás */}
      <div className="absolute -inset-3 bg-gold-400/[0.12] rounded-2xl blur-3xl pointer-events-none" />

      <div className="relative surface-edge rounded-md p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
              BB
            </span>
            <span className="h-3 w-px bg-paper-dim/30" />
            <span className="text-[11px] uppercase tracking-wider text-paper-dim">
              Carta de crédito
            </span>
          </div>
          <span className="text-[10px] font-medium text-emerald-300/90">
            ● Disponível
          </span>
        </div>

        <div>
          <div className="text-xs text-paper-dim mb-1">Valor</div>
          <div className="font-display text-5xl font-medium text-paper tabular-nums tracking-tight">
            R$ 200.000
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/[0.06]">
          <div>
            <div className="text-[11px] text-paper-dim">Parcela</div>
            <div className="text-base font-semibold text-paper tabular-nums">
              R$ 1.180
            </div>
          </div>
          <div>
            <div className="text-[11px] text-paper-dim">Prazo</div>
            <div className="text-base font-semibold text-paper tabular-nums">
              200×
            </div>
          </div>
          <div>
            <div className="text-[11px] text-paper-dim">Juros</div>
            <div className="text-base font-semibold text-emerald-300 tabular-nums">
              R$ 0
            </div>
          </div>
        </div>

        {/* Sem segundo CTA aqui — tira duplicação */}
        <div className="text-[11px] text-paper-dim leading-relaxed border-t border-white/[0.06] pt-4">
          *Valores ilustrativos. Sua simulação personalizada é montada via WhatsApp,
          conforme {config.vagasRestantes} vagas restantes no grupo do mês.
        </div>
      </div>
    </div>
  );
}
