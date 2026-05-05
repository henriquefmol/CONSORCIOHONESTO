"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Step1Objetivo } from "./Step1Objetivo";
import { Step2Carta } from "./Step2Carta";
import { Step3Lance } from "./Step3Lance";
import { ContactStep } from "./ContactStep";
import type { QualifierData } from "@/lib/whatsapp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const TOTAL_STEPS = 4;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const initialData: QualifierData = {
  objetivo: null,
  faixaCarta: null,
  temLance: null,
  faixaLance: null,
  telefone: "",
};

export function Qualifier({ open, onOpenChange }: Props) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QualifierData>(initialData);

  // Reset on open
  useEffect(() => {
    if (open) {
      setStep(1);
      setData(initialData);
      // TODO: Meta Pixel — disparar evento "Lead" / "InitiateCheckout" (início do qualificador)
      // window.fbq?.("track", "InitiateCheckout");
    }
  }, [open]);

  const canAdvance = (() => {
    if (step === 1) return !!data.objetivo;
    if (step === 2) return !!data.faixaCarta;
    if (step === 3) {
      if (!data.temLance) return false;
      if (data.temLance === "sim") return !!data.faixaLance;
      return true;
    }
    return false;
  })();

  const handleNext = () => {
    if (step < TOTAL_STEPS && canAdvance) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinalSubmit = (telefone: string) => {
    const finalData: QualifierData = { ...data, telefone };
    setData(finalData);
    // TODO: Meta Pixel — disparar evento "Lead" / "Contact" (clique final no WhatsApp)
    // window.fbq?.("track", "Lead");
    const url = buildWhatsAppUrl(finalData);
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg p-0 gap-0 overflow-hidden">
        <div className="px-6 pt-6">
          <DialogTitle className="sr-only">Simule seu consórcio</DialogTitle>
          <DialogDescription className="sr-only">
            Responda 3 perguntas rápidas e fale com o especialista no WhatsApp.
          </DialogDescription>

          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Passo {Math.min(step, TOTAL_STEPS)} de {TOTAL_STEPS}
            </div>
            <div className="text-xs text-muted-foreground">
              {step === TOTAL_STEPS ? "Quase lá" : "30 segundos"}
            </div>
          </div>

          <Progress value={(step / TOTAL_STEPS) * 100} className="mb-6" />
        </div>

        <div className="px-6 pb-6 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div key={step}>
              {step === 1 && (
                <Step1Objetivo
                  value={data.objetivo}
                  onChange={(v) => setData({ ...data, objetivo: v })}
                />
              )}
              {step === 2 && (
                <Step2Carta
                  value={data.faixaCarta}
                  onChange={(v) => setData({ ...data, faixaCarta: v })}
                />
              )}
              {step === 3 && (
                <Step3Lance
                  temLance={data.temLance}
                  faixaLance={data.faixaLance}
                  onChangeTemLance={(v) =>
                    setData({ ...data, temLance: v })
                  }
                  onChangeFaixaLance={(v) =>
                    setData({ ...data, faixaLance: v })
                  }
                />
              )}
              {step === 4 && <ContactStep onSubmit={handleFinalSubmit} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {step < TOTAL_STEPS && (
          <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] bg-white/[0.02] px-6 py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrev}
              disabled={step === 1}
              aria-label="Voltar"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canAdvance}
              size="lg"
              className="min-w-[140px]"
            >
              Continuar
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
