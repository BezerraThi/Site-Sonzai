# Sonzai — Landing Page

Landing page da Sonzai (存在 — existência, presença): tecnologia e marketing de alta performance.

Construída com **React + Vite + TypeScript + Framer Motion**.

## Antes de publicar

Abra [`src/config.ts`](src/config.ts) e troque os dados de contato:

```ts
export const WHATSAPP_NUMBER = "5511999999999"; // seu número, só dígitos (DDI + DDD)
export const CONTACT_EMAIL = "contato@sonzai.com.br";
export const INSTAGRAM_URL = "https://instagram.com/sonzai";
```

O formulário de briefing monta a mensagem preenchida e abre direto no WhatsApp
desse número — não precisa de backend.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub (ou use `npx vercel` direto).
2. Na Vercel: **Add New Project** → importe o repositório.
3. A Vercel detecta Vite automaticamente (build `npm run build`, output `dist`).
4. Deploy. Pronto.

## Estrutura

| Seção | O que faz |
| --- | --- |
| Hero | Tese da marca + CTAs + ticker de serviços |
| Manifesto | O significado de Sonzai (存在) e o posicionamento |
| O sistema | Os 4 estágios: tráfego → funil → nutrição → automação |
| Métricas | O vocabulário de performance que a Sonzai mede |
| CTA | Chamada intermediária para o briefing |
| Briefing | Formulário "complete a frase" que abre no WhatsApp |
