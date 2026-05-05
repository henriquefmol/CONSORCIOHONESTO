"use client";

import { motion } from "framer-motion";
import { OBJETIVOS } from "./options";
import type { QualifierData } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  value: QualifierData["objetivo"];
  onChange: (v: QualifierData["objetivo"]) => void;
};

export function Step1Objetivo({ value, onChange }: Props) {
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
          Qual o seu objetivo?
        </h3>
        <p className="text-sm text-muted-foreground">
          Escolha o que você quer conquistar com seu consórcio.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3" role="radiogroup">
        {OBJETIVOS.map((opt) => {
          const active = value === opt.value;
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.value)}
              className={cn(
                "group relative rounded-xl border p-5 text-left transition-all",
                "hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
                active
                  ? "border-gold-500 bg-gold-500/[0.08] shadow-lg shadow-gold-500/10"
                  : "border-white/[0.08] bg-white/[0.02]"
              )}
            >
              <div
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl mb-3 transition-colors",
                  active
                    ? "bg-gold-500/20 border border-gold-500/40 text-gold-300"
                    : "bg-white/[0.04] border border-white/[0.08] text-foreground/80"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-base">{opt.label}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {opt.desc}
              </div>
              {active && (
                <motion.div
                  layoutId="step1-check"
                  className="absolute top-3 right-3 h-2 w-2 rounded-full bg-gold-400"
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
