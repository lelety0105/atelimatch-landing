# AteliMatch — landing page

Página pública em React, TypeScript, Tailwind CSS 4, Radix/shadcn e Motion. O diretório recebido continha apenas componentes, sem aplicativo ou gerenciador de dependências configurado; foi adicionada uma entrada Vite para executá-los.

## Executar

Com Node.js 22 instalado:

```sh
npm install
npm run dev
npm run build
```

O build estático é gerado em `dist/`.

## Conteúdo e publicação

- `src/config/site.ts`: links de conversão, FAQ, demonstrações, logo, capturas e canonical. Os links pendentes abrem avisos acessíveis, sem cadastro fictício.
- `src/components/landing/Sections.tsx`: textos das seções e fotografias editoriais dos segmentos.
- `src/components/landing/hero.tsx`: chamada principal.
- `src/styles.css`: cores, tipografia, movimento e utilitários visuais.
- `public/atelimatch-logo.png`: logo original fornecida.
- `index.html`: título, descrição e Open Graph.

Não foram fornecidos vídeos, capturas do software, domínio, endereços de cadastro/login ou documentos legais. Os espaços de demonstração são placeholders explícitos. Para adicionar vídeos, preencha `video` e `poster` em cada demonstração; o player tem controles, `preload="none"` e é desmontado ao trocar de aba. As categorias seguem o briefing e deverão ser conferidas com os vídeos reais.

Antes de publicar, configure o domínio canônico, adicione `og:url` e uma imagem Open Graph com URL absoluta, gere `public/sitemap.xml` com o endereço oficial e adicione essa URL em `public/robots.txt`. Não há sitemap com domínio inventado. Dados estruturados de produto foram omitidos até a confirmação dos dados comerciais e técnicos.

Os eventos `atelimatch:analytics` são eventos locais do navegador. Nenhum provedor de rastreamento foi instalado. Um consumidor futuro deve respeitar o consentimento do visitante.

Fotografias externas ilustrativas: UPS (Made in Italy), Salzburg.info (Madl), Hürriyet Daily News, Viggo Tailoring e Kallxo. Não representam clientes do AteliMatch. Substitua por fotografias próprias/licenciadas aprovadas antes de publicar. A fonte Inter usa Google Fonts; para eliminar essa dependência externa, hospede os arquivos localmente.

Referência de arquitetura comercial consultada: https://gestaoclick.com.br/segmentos/software-para-atelie/. Funcionalidades e condições comerciais dessa referência não foram importadas para o AteliMatch.
