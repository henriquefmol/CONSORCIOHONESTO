"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FAIXAS_LANCE } from "./options";
import type { QualifierData } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  temLance: QualifierData["temLance"];
  faixaLance: QualifierData["faixaLance"];
  onChangeTemLance: (v: QualifierData["temLance"]) => void;
  onChangeFaixaLance: (v: QualifierData["faixaLance"]) => void;
};

export function Step3Lance({
  temLance,
  faixaLance,
  onChangeTemLance,
  onChangeFaixaLance,
}: Props) {
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
          Tem valor disponível para dar lance?
        </h3>
        <p className="text-sm text-muted-foreground">
          Quem dá lance pode antecipar a contemplação. Não obrigatório.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3" role="radiogroup">
        <button
          type="button"
          role="radio"
          aria-checked={temLance === "sim"}
          onClick={() => onChangeTemLance("sim")}
          className={cn(
            "rounded-xl border p-4 text-left transition-all",
            "hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
            temLance === "sim"
              ? "border-gold-500 bg-gold-500/[0.08]"
              : "border-white/[0.08] bg-white/[0.02]"
          )}
        >
          <div className="font-semibold">Sim, tenho reserva</div>
          <div className="text-xs text-muted-foreground mt-1">
            Quero antecipar a contemplação
          </div>
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={temLance === "nao"}
          onClick={() => {
            onChangeTemLance("nao");
            onChangeFaixaLance(null);
          }}
          className={cn(
            "rounded-xl border p-4 text-left transition-all",
            "hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
            temLance === "nao"
              ? "border-gold-500 bg-gold-500/[0.08]"
              : "border-white/[0.08] bg-white/[0.02]"
          )}
        >
          <div className="font-semibold">Ainda não</div>
          <div className="text-xs text-muted-foreground mt-1">
            Prefiro não informar
          </div>
        </button>
      </div>

      <AnimatePresence>
        {temLance === "sim" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3 pt-2 overflow-hidden"
          >
            <p className="text-sm font-medium text-foreground">
              Qual valor você tem disponível?
            </p>
            <div className="grid grid-cols-2 gap-2" role="radiogroup">
              {FAIXAS_LANCE.map((opt) => {
                const active = faixaLance === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => onChangeFaixaLance(opt.value)}
                    className={cn(
                      "rounded-lg border p-3 text-sm font-medium text-left transition-all",
                      "hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
                      active
                        ? "border-gold-500 bg-gold-500/[0.08]"
                        : "border-white/[0.08] bg-white/[0.02]"
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
