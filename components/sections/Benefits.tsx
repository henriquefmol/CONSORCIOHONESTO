"use client";

import { motion } from "framer-motion";
import { TrendingDown, Wallet, Trophy, Building2 } from "lucide-react";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const heroBenefit = {
  icon: TrendingDown,
  title: "Sem juros.",
  description:
    "Você paga apenas a taxa de administração. No financiamento de R$ 200 mil, são até R$ 180 mil só de juros que você não desembolsa.",
};

const secondary = [
  {
    icon: Wallet,
    title: "Cabe no bolso",
    description:
      "Parcelas planejadas para o seu orçamento. Você escolhe o prazo e o valor.",
  },
  {
    icon: Trophy,
    title: "Lance e antecipação",
    description:
      "Use FGTS, recursos próprios ou estratégia de lance para ser contemplado antes.",
  },
  {
    icon: Building2,
    title: "Solidez do BB",
    description:
      "+218 anos de história, regulamentado pelo BACEN.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        {/* Header — alinhamento à esquerda, numeração editorial lateral */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeExpo }}
          className="grid lg:grid-cols-12 gap-6 mb-14 items-end"
        >
          <div className="lg:col-span-2 hidden lg:block">
            <div className="editorial-num text-7xl text-gold-700/60">§ 02</div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 mb-4">
              Por que consórcio BB
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.05] text-paper">
              Quatro motivos para fugir do financiamento.
            </h2>
          </div>
        </motion.div>

        {/* Layout assimétrico — 1 hero (col-span-7) + 3 cards stacked (col-span-5) */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Hero benefit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeExpo }}
            className="lg:col-span-7 surface-edge rounded-md p-8 sm:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold-400/10 border border-gold-400/30 text-gold-400">
              <heroBenefit.icon className="h-5 w-5" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-paper">
                {heroBenefit.title}
              </h3>
              <p className="text-base text-paper-dim leading-relaxed max-w-md">
                {heroBenefit.description}
              </p>
            </div>
          </motion.div>

          {/* Secondary stacked */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
            {secondary.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    ease: easeExpo,
                    delay: i * 0.06,
                  }}
                  className="surface-1 rounded-md p-5 flex items-start gap-4 hover:border-gold-400/30 transition-colors duration-300"
                >
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white/[0.03] border border-white/[0.08] text-gold-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium text-paper mb-1 leading-snug">
                      {b.title}
                    </h4>
                    <p className="text-sm text-paper-dim leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
