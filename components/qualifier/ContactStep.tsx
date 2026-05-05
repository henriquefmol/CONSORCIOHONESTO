"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPhoneBR, onlyDigits } from "@/lib/utils";

const phoneSchema = z.object({
  telefone: z
    .string()
    .min(14, "Informe um WhatsApp válido")
    .refine((v) => onlyDigits(v).length >= 10, "Informe um WhatsApp válido"),
});

type FormData = z.infer<typeof phoneSchema>;

type Props = {
  onSubmit: (telefone: string) => void;
};

export function ContactStep({ onSubmit }: Props) {
  const [phone, setPhone] = useState("");
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(phoneSchema),
    mode: "onSubmit",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneBR(e.target.value);
    setPhone(formatted);
    setValue("telefone", formatted, { shouldValidate: false });
  };

  const submit = (data: FormData) => {
    onSubmit(data.telefone);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      <div className="flex items-center gap-3 rounded-md border-l-2 border-l-gold-400 bg-white/[0.02] p-3">
        <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0" />
        <div className="text-sm text-paper-dim">
          Última pergunta antes de te conectar com o Marcão.
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-2xl font-medium tracking-tight text-paper">
          Onde te chamamos no WhatsApp?
        </h3>
        <p className="text-sm text-paper-dim">
          Resposta direta com o representante. Sem ligação, sem cadastro.
        </p>
      </div>

      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div>
          <label
            htmlFor="telefone"
            className="block text-sm font-medium mb-2"
          >
            Seu WhatsApp
          </label>
          <Input
            id="telefone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="(31) 99999-9999"
            {...register("telefone")}
            value={phone}
            onChange={handleChange}
            aria-invalid={!!errors.telefone}
            aria-describedby={errors.telefone ? "telefone-error" : undefined}
          />
          {errors.telefone && (
            <p
              id="telefone-error"
              className="text-sm text-red-400 mt-1.5"
              role="alert"
            >
              {errors.telefone.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="whatsapp"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          <MessageCircle className="h-5 w-5" />
          Falar com especialista no WhatsApp
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-gold-400" />
          Seus dados estão protegidos. Sem spam.
        </div>
      </form>
    </motion.div>
  );
}
