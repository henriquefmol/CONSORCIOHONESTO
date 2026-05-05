"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Escolha sua carta",
    description:
      "Defina o valor e o prazo que cabem no seu bolso. Casa, carro ou outro objetivo.",
  },
  {
    number: "02",
    title: "Pague as parcelas",
    description:
      "Mensalidade fixa, sem juros. Apenas a taxa de administração transparente.",
  },
  {
    number: "03",
    title: "Seja contemplado",
    description:
      "Por sorteio, lance ou estratégia. Use a carta para comprar à vista e negociar desconto.",
  },
];

type Props = {
  onSimulate: () => void;
};

export function HowItWorks({ onSimulate }: Props) {
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="container">
        {/* Header alinhado à direita — quebra de simetria com Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeExpo }}
          className="grid lg:grid-cols-12 gap-6 mb-12 items-end"
        >
          <div className="lg:col-span-7 lg:col-start-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 mb-4">
              Como funciona
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.05] text-paper">
              Da simulação à chave: o caminho.
            </h2>
          </div>
        </motion.div>

        {/* Timeline — números gigantes em serif italic à margem */}
        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: easeExpo,
                delay: i * 0.08,
              }}
              className="grid lg:grid-cols-12 gap-6 py-8 border-t border-white/[0.06] last:border-b last:border-white/[0.06] group"
            >
              {/* Editorial number */}
              <div className="lg:col-span-2">
                <div className="editorial-num text-6xl sm:text-7xl text-gold-400 leading-none">
                  {s.number}
                </div>
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-paper tracking-tight leading-tight">
                  {s.title}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base text-paper-dim leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeExpo, delay: 0.2 }}
          className="flex justify-end mt-12"
        >
          <Button
            size="lg"
            onClick={onSimulate}
            className="group"
            aria-label="Começar simulação"
          >
            Quero começar agora
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
