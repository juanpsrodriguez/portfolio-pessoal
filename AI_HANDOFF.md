# AI Handoff — Portfólio Juan Rodriguez

## Objetivo atual

Entregar a primeira versão local completa do portfólio profissional de Juan Rodriguez, sem deploy, pronta para revisão visual e posterior publicação no GitHub/Vercel.

## Estado do projeto

- Projeto Next.js 16 + React 19 + TypeScript com npm e `package-lock.json`, usando scripts padrão compatíveis com Vercel.
- Homepage completa implementada com header, hero, projetos, áreas, sobre, ferramentas, processo, contato e footer.
- Configuração de contatos, projetos, áreas e ferramentas centralizada em `lib/site-data.ts`.
- E-mail público integrado ao bloco de contato com link `mailto:` e o mesmo padrão visual dos demais dados; verificado em 320 px sem overflow horizontal.
- Metadata em português e favicon próprio configurados.
- Capturas reais dos três projetos feitas, otimizadas para WebP e integradas.
- Revisão visual realizada em 320, 390, 430, 768, 1440 e 1920 px; navegação móvel corrigida para fechar após selecionar um link.
- Dependências e arquivos do starter foram reduzidos ao mínimo necessário para o portfólio.

## Arquivos principais

- `app/page.tsx`: homepage.
- `app/globals.css`: tokens, identidade visual, layout e responsividade.
- `app/layout.tsx`: metadata e estrutura HTML.
- `lib/site-data.ts`: fonte central de dados editáveis.
- `public/favicon.svg`: símbolo JR.
- `components/mobile-menu.tsx`: navegação móvel acessível.
- `README.md`: instruções de execução, validação e deploy.
- `BRIEFING.md`, `AGENTS.md`, `AI_HANDOFF.md`: contexto e continuidade.

## Decisões visuais e técnicas

- Conceito “concreto + litoral”: papel mineral, preto tinta, verde profundo, laranja de sinalização e amarelo ácido.
- Grid editorial assimétrico, tipografia grande e textura discreta; referências costeiras sem transformar o site em tema de surf.
- Homepage única e estática, sem CMS, backend, autenticação ou formulário.
- WhatsApp é o contato principal. Metadata base usa `NEXT_PUBLIC_SITE_URL` somente quando configurada.

## Quatro áreas

Web, Jogos e protótipos, Apps e software, Criação visual. Não inventar cases para as três categorias que ainda não têm projetos documentados.

## Dados confirmados

- WhatsApp: +55 21 99834-2574 — https://wa.me/5521998342574
- E-mail: jrodriguez@id.uff.br — mailto:jrodriguez@id.uff.br
- GitHub: https://github.com/juanpsrodriguez
- Cais 27: https://barbearia-demo-nu.vercel.app/
- Linho & Sal: https://restaurant-demo-olive-seven.vercel.app/
- SAL & LIXA: https://surf-skate-shop-demo.vercel.app/

## Comandos

- Instalar: `npm ci`
- Rodar: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

## Limitações e pendências

- Imagens usadas: `public/images/projects/cais-27.webp`, `linho-e-sal.webp` e `sal-e-lixa.webp`, todas capturas reais dos URLs confirmados.
- Links externos de projetos, GitHub e WhatsApp responderam com HTTP 200.
- `npm run lint`, `npm run typecheck` e `npm run build` passaram após uma instalação limpa com `npm ci`.
- Build gera a homepage como conteúdo estático prerenderizado.
- Preview local atual: `http://localhost:3001` (a porta 3000 já estava ocupada por outro processo).
- `NEXT_PUBLIC_SITE_URL` fica pendente até o domínio definitivo.

## PRÓXIMO PASSO EXATO

Juan deve revisar visualmente `http://localhost:3001`. Após aprovação, configurar o repositório remoto/GitHub e publicar na Vercel; então definir `NEXT_PUBLIC_SITE_URL` com o domínio final.
