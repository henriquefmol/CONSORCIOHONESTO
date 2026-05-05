import { Home, Car, type LucideIcon } from "lucide-react";
import type { QualifierData } from "@/lib/whatsapp";

export const OBJETIVOS: {
  value: NonNullable<QualifierData["objetivo"]>;
  label: string;
  icon: LucideIcon;
  desc: string;
}[] = [
  {
    value: "casa",
    label: "Casa",
    icon: Home,
    desc: "Imóvel residencial, terreno ou reforma",
  },
  {
    value: "carro",
    label: "Carro",
    icon: Car,
    desc: "Veículo novo ou seminovo",
  },
];

export const FAIXAS_CARTA: {
  value: NonNullable<QualifierData["faixaCarta"]>;
  label: string;
}[] = [
  { value: "ate-100k", label: "Até R$ 100 mil" },
  { value: "100k-200k", label: "R$ 100 mil a R$ 200 mil" },
  { value: "200k-300k", label: "R$ 200 mil a R$ 300 mil" },
  { value: "300k-400k", label: "R$ 300 mil a R$ 400 mil" },
  { value: "acima-400k", label: "Acima de R$ 400 mil" },
];

export const FAIXAS_LANCE: {
  value: NonNullable<QualifierData["faixaLance"]>;
  label: string;
}[] = [
  { value: "ate-20k", label: "Até R$ 20 mil" },
  { value: "20-50k", label: "R$ 20 mil a R$ 50 mil" },
  { value: "50-100k", label: "R$ 50 mil a R$ 100 mil" },
  { value: "acima-100k", label: "Acima de R$ 100 mil" },
];
