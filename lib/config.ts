/**
 * CONFIGURAÇÃO PRINCIPAL DO REPRESENTANTE
 * Edite este arquivo para personalizar nome, telefone e dados de contato.
 */
export const config = {
  // ⚠️ TROCAR AQUI o número do WhatsApp do representante (formato internacional, só dígitos)
  whatsappNumber: "5531999238463",

  representative: {
    name: "Marcão",
    role: "Representante autorizado Banco do Brasil Consórcios",
    email: "contato@exemplo.com.br",
    city: "Belo Horizonte / MG",
  },

  // Vagas reais disponíveis no grupo (gatilho de escassez específica)
  vagasRestantes: 7,

  meta: {
    title: "Consórcio Banco do Brasil | Realize seu sonho sem juros",
    description:
      "Simule seu consórcio Banco do Brasil em 30 segundos. Sem juros, sem entrada, sem precisar ser correntista. Carta de crédito para casa, carro e mais.",
    url: "https://exemplo.com.br",
    ogImage: "/og-image.png",
  },
} as const;
