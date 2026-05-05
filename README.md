# Landing Page — Consórcio Banco do Brasil

Landing page de alta conversão para representante autorizado de consórcio do Banco do Brasil. Stack moderno, mobile-first, otimizado para tráfego pago do Meta Ads.

🌐 **Produção:** https://consorciohonesto.com.br

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animações)
- React Hook Form + Zod (validação)
- Lucide React (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm run start
```

## Personalização (importante)

### 1. Trocar o número do WhatsApp

Edite `lib/config.ts`:

```ts
whatsappNumber: "5531999999999", // ← formato internacional, só dígitos
```

O qualificador monta automaticamente o link `wa.me/...` com a mensagem pré-preenchida baseada nas respostas do lead.

### 2. Personalizar dados do representante

Em `lib/config.ts`:

```ts
representative: {
  name: "Marcão",
  role: "Representante autorizado Banco do Brasil Consórcios",
  email: "contato@exemplo.com.br",
  city: "Belo Horizonte / MG",
},
```

### 3. Ajustar vagas restantes (gatilho de escassez)

```ts
vagasRestantes: 7, // número exibido no Hero e no CTA Final
```

### 4. SEO e Open Graph

Em `lib/config.ts`:

```ts
meta: {
  title: "...",
  description: "...",
  url: "https://seu-dominio.com.br",
  ogImage: "/og-image.png", // adicionar imagem 1200x630 em /public
},
```

## Adicionar Meta Pixel (tracking)

A página já tem `TODO`s comentados nos pontos-chave. Para ativar:

### a) Page View

Em `app/layout.tsx`, descomentar e preencher o `YOUR_PIXEL_ID`:

```tsx
import Script from "next/script";

<Script id="fb-pixel" strategy="afterInteractive">
  {`!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');`}
</Script>
```

### b) Início do Qualificador (InitiateCheckout)

Em `app/page.tsx`, dentro de `handleSimulate`:

```tsx
window.fbq?.("track", "InitiateCheckout");
```

### c) Clique final no WhatsApp (Lead)

Em `components/qualifier/Qualifier.tsx`, dentro de `handleFinalSubmit`:

```tsx
window.fbq?.("track", "Lead");
```

Adicionar tipagem global em `next-env.d.ts` (ou criar `types/global.d.ts`):

```ts
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
```

## Estrutura de pastas

```
app/
  layout.tsx            # SEO, fontes, Pixel base
  page.tsx              # Composição da landing
  globals.css           # Tokens + utilities

components/
  qualifier/
    Qualifier.tsx       # Modal stepper (4 steps)
    Step1Objetivo.tsx   # Casa / Carro
    Step2Carta.tsx      # Faixa de valor
    Step3Lance.tsx      # Sim/Não + sub-pergunta
    ContactStep.tsx     # WhatsApp + submit
    options.ts          # Opções de cada step
  sections/
    Hero.tsx            # Headline + CTA + selos + card visual
    Benefits.tsx        # 4 cards de benefícios
    HowItWorks.tsx      # 3 passos
    FAQ.tsx             # 8 perguntas (accordion)
    CTAFinal.tsx        # CTA reforço
    Footer.tsx          # Contato + disclaimer
  ui/                   # Primitives shadcn (button, dialog, accordion...)

lib/
  config.ts             # ⚠️ Personalização (whatsapp, nome, etc.)
  whatsapp.ts           # Builder do deeplink wa.me com mensagem
  utils.ts              # cn(), formatPhoneBR(), onlyDigits()
```

## Deploy na Vercel

```bash
npx vercel
```

Ou conecte o repositório no painel da Vercel — sem configuração adicional.

## Checklist técnico

- [x] 100% responsivo, mobile-first
- [x] Build estático (sem backend)
- [x] SEO + Open Graph configurados
- [x] Acessibilidade (semântica, aria, navegação por teclado no qualificador)
- [x] Tracking-ready (TODOs do Meta Pixel)
- [x] Lighthouse-friendly (next/font, lazy via framer-motion `whileInView`)

## Decisões de produto (baseadas em pesquisa de mercado)

1. **Selos de regulação acima da dobra** — ataca preventivamente o medo de golpe (objeção mais silenciosa do nicho).
2. **"Não precisa ser correntista BB" no hero** — elimina barreira de saída antes que o usuário pergunte.
3. **Comparador consórcio vs. financiamento no card visual do Hero** — derruba a objeção mais difícil sem complexidade extra.
4. **Stepper de 3 perguntas + step de contato** — comprometimento progressivo, sem cansar.
5. **CTA final com copy de descoberta** — "Veja quanto cabe no seu bolso" converte mais que "Falar com especialista" no perfil de tráfego frio.
