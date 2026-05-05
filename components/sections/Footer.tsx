import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { config } from "@/lib/config";
import { onlyDigits } from "@/lib/utils";

export function Footer() {
  const phoneDigits = onlyDigits(config.whatsappNumber);
  const phoneDisplay = `(${phoneDigits.slice(2, 4)}) ${phoneDigits.slice(
    4,
    9
  )}-${phoneDigits.slice(9)}`;

  return (
    <footer className="border-t border-white/[0.06] py-16">
      <div className="container">
        {/* Layout assinatura pessoal — não 3-col SaaS */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Assinatura grande à esquerda */}
          <div className="lg:col-span-7 space-y-3">
            <div className="font-display text-4xl sm:text-5xl font-medium text-paper tracking-[-0.025em]">
              {config.representative.name}
            </div>
            <div className="text-sm text-paper-dim max-w-md leading-relaxed">
              Representante autorizado Banco do Brasil Consórcios desde 2018.
              Atendo direto pelo WhatsApp em {config.representative.city}.
            </div>
          </div>

          {/* Coluna direita empilhada */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <a
                href={`https://wa.me/${phoneDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-paper hover:text-gold-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-gold-400" />
                {phoneDisplay}
              </a>
              <a
                href={`mailto:${config.representative.email}`}
                className="flex items-center gap-3 text-sm text-paper-dim hover:text-gold-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-gold-400" />
                {config.representative.email}
              </a>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs text-paper-dim">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
                Banco do Brasil — Regulamentado pelo BACEN
              </div>
              <div className="text-xs text-paper-dim/70">
                Site com certificado SSL
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] space-y-2">
          <p className="text-xs text-paper-dim/70 leading-relaxed max-w-3xl">
            Representante autorizado do Banco do Brasil. Consórcio é
            regulamentado pelo Banco Central do Brasil. Este site não é o canal
            oficial do Banco do Brasil. Antes de aderir, leia atentamente o
            contrato de adesão e o regulamento do grupo. A administradora não
            garante data de contemplação.
          </p>
          <p className="text-xs text-paper-dim/60">
            © {new Date().getFullYear()} {config.representative.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
