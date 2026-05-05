"use client";

import { motion } from "framer-motion";
import { FAIXAS_CARTA } from "./options";
import type { QualifierData } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  value: QualifierData["faixaCarta"];
  onChange: (v: QualifierData["faixaCarta"]) => void;
};

export function Step2Carta({ value, onChange }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight">
          Qual o valor da carta de crédito?
        </h3>
        <p className="text-sm text-muted-foreground">
          Escolha a faixa que mais se aproxima do que você precisa.
        </p>
      </div>

      <div className="space-y-2" role="radiogroup">
        {FAIXAS_CARTA.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.value)}
              className={cn(
                "w-full rounded-xl border p-4 text-left transition-all",
                "hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
                "flex items-center justify-between",
                active
                  ? "border-gold-500 bg-gold-500/[0.08] shadow-lg shadow-gold-500/10"
                  : "border-white/[0.08] bg-white/[0.02]"
              )}
            >
              <span className="font-medium">{opt.label}</span>
              <span
                className={cn(
                  "h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                  active ? "border-gold-400" : "border-white/20"
                )}
              >
                {active && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-2.5 w-2.5 rounded-full bg-gold-400"
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
