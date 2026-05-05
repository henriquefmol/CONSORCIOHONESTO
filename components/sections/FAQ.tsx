"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "O que é consórcio do Banco do Brasil?",
    a: "É um grupo de pessoas que se reúne para comprar bens (imóveis, carros, etc.) de forma planejada. Cada participante paga uma parcela mensal, e mensalmente um ou mais membros são contemplados via sorteio ou lance, recebendo a carta de crédito para usar na compra.",
  },
  {
    q: "Como funciona o lance?",
    a: "O lance é um valor extra que você oferece para tentar antecipar sua contemplação. Pode ser pago com FGTS (no caso de imóveis), recursos próprios ou parte das suas parcelas futuras. Quem oferece o maior lance no mês é contemplado.",
  },
  {
    q: "Quanto tempo até ser contemplado?",
    a: "Não existe garantia de prazo — a regulamentação proíbe qualquer administradora de prometer data de contemplação. Pelo sorteio, pode acontecer já no primeiro mês ou ao longo do plano. Quem dá lance aumenta significativamente as chances de antecipar.",
  },
  {
    q: "Posso usar FGTS no consórcio?",
    a: "Sim, no caso de cartas para imóveis residenciais. O FGTS pode ser usado para dar lance, amortizar parcelas ou complementar o valor da carta na compra do imóvel — desde que cumpridas as exigências do governo.",
  },
  {
    q: "Como sei que não é golpe?",
    a: "Operamos como representante autorizado do Banco do Brasil, que é regulamentado pelo Banco Central (BACEN). Todo contrato é assinado diretamente com o BB Consórcios, e você nunca paga valores em conta de terceiros. Em caso de dúvida, sempre consulte o site oficial bb.com.br/consorcio.",
  },
  {
    q: "Preciso ter conta no Banco do Brasil?",
    a: "Não. Qualquer pessoa pode contratar o consórcio do BB, com ou sem conta no banco. Você só precisa ter renda compatível com a parcela e estar com o nome regular.",
  },
  {
    q: "E se eu não conseguir pagar uma parcela?",
    a: "Atrasos geram multa e juros sobre a parcela em atraso. Em caso de dificuldade, o ideal é renegociar diretamente com o BB Consórcios. Posso te orientar sobre alternativas como transferência da cota.",
  },
  {
    q: "Posso desistir depois?",
    a: "Sim, mas você só recebe os valores pagos após o encerramento do grupo (descontadas taxas), exceto em caso de contemplação ou venda da cota. Por isso é importante planejar antes de entrar.",
  },
];

export function FAQ() {
  return (
    <section className="py-32 sm:py-40">
      <div className="container max-w-5xl">
        {/* Header alinhado à esquerda — outro alinhamento ainda */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeExpo }}
          className="grid lg:grid-cols-12 gap-6 mb-16"
        >
          <div className="lg:col-span-2">
            <div className="editorial-num text-7xl text-gold-700/60">§ 04</div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 mb-4">
              Antes que você pergunte
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.025em] leading-[1.05] text-paper">
              Tire suas dúvidas antes de simular.
            </h2>
          </div>
        </motion.div>

        {/* Accordion sem wrapper glass — divisórias finas, tipografia carrega o peso */}
        <Accordion type="single" collapsible className="border-t border-white/[0.06]">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/[0.06]"
            >
              <AccordionTrigger className="font-display text-lg sm:text-xl font-medium text-paper tracking-tight py-6 hover:text-gold-300 transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-paper-dim leading-relaxed pb-6 max-w-2xl">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
