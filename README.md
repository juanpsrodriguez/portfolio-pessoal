# Portfólio — Juan Rodriguez

Site pessoal de Juan Rodriguez, desenvolvedor e criador digital em Niterói/RJ. A homepage reúne projetos demonstrativos, áreas de trabalho, ferramentas, processo e contato direto por WhatsApp.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS responsivo
- npm

## Rodar localmente

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

## Conteúdo editável

Contatos, projetos, áreas e ferramentas ficam centralizados em `lib/site-data.ts`. Antes de mudanças relevantes, leia também `BRIEFING.md`, `AGENTS.md` e `AI_HANDOFF.md`.

## Deploy

O projeto está preparado para Vercel. Após o primeiro deploy, defina `NEXT_PUBLIC_SITE_URL` com a URL pública definitiva para completar `metadataBase`.
