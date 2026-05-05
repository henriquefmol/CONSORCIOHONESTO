import { config } from "./config";
import { onlyDigits } from "./utils";

export type QualifierData = {
  objetivo: "casa" | "carro" | null;
  faixaCarta:
    | "ate-100k"
    | "100k-200k"
    | "200k-300k"
    | "300k-400k"
    | "acima-400k"
    | null;
  temLance: "sim" | "nao" | null;
  faixaLance:
    | "ate-20k"
    | "20-50k"
    | "50-100k"
    | "acima-100k"
    | null;
  telefone: string;
};

const objetivoLabel: Record<NonNullable<QualifierData["objetivo"]>, string> = {
  casa: "Casa",
  carro: "Carro",
};

const faixaCartaLabel: Record<NonNullable<QualifierData["faixaCarta"]>, string> = {
  "ate-100k": "Até R$ 100 mil",
  "100k-200k": "R$ 100 mil a R$ 200 mil",
  "200k-300k": "R$ 200 mil a R$ 300 mil",
  "300k-400k": "R$ 300 mil a R$ 400 mil",
  "acima-400k": "Acima de R$ 400 mil",
};

const faixaLanceLabel: Record<NonNullable<QualifierData["faixaLance"]>, string> = {
  "ate-20k": "Até R$ 20 mil",
  "20-50k": "R$ 20 mil a R$ 50 mil",
  "50-100k": "R$ 50 mil a R$ 100 mil",
  "acima-100k": "Acima de R$ 100 mil",
};

/**
 * Constrói a mensagem do WhatsApp já URL-encoded com base nas respostas do qualificador.
 */
export function buildWhatsAppUrl(data: QualifierData): string {
  const objetivo = data.objetivo ? objetivoLabel[data.objetivo] : "—";
  const valor = data.faixaCarta ? faixaCartaLabel[data.faixaCarta] : "—";
  const possuiLance = data.temLance === "sim" ? "Sim" : "Não";

  const linhasLance =
    data.temLance === "sim" && data.faixaLance
      ? `\nValor disponível para lance: ${faixaLanceLabel[data.faixaLance]}`
      : "";

  const message = `Olá! Quero saber mais sobre consórcio.

📋 Resumo da minha simulação:

Objetivo: ${objetivo}
Valor da carta: ${valor}
Possui valor para lance: ${possuiLance}${linhasLance}

Aguardo seu contato!`;

  const phone = onlyDigits(config.whatsappNumber);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
