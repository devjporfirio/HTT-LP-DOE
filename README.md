# DOE Óvulos

Landing page do DOE, banco de óvulos que conecta clínicas de reprodução assistida parceiras a doadoras de óvulos.

## Instalar e rodar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção
npm run lint    # checa o código com ESLint
```

## Como mudar textos

Quase todo o texto da página vem de um único arquivo: `config/docs.ts`. Não precisa mexer nos componentes — só editar os valores desse arquivo.

Cada seção da home tem seu bloco:

| Bloco em `docsConfig` | Onde aparece |
| --- | --- |
| `hero` | Topo da página (título, subtítulo, botões, imagens) |
| `about` | Texto de introdução + cards "Fenomatch" e "Triagem rigorosa" |
| `rt` | Bloco da Dra. Ana Paula (foto, nome, credenciais, biografia) |
| `clinic` | Seção "Como se tornar uma clínica parceira" (título, texto, etapas) |
| `donor` | Seção "Quer ser uma doadora de óvulos" (título, texto) |
| `header` | Links e botões do menu |
| `footer` | E-mail, telefone e informações do rodapé |

Exemplo: para mudar o título da hero, edite `heading` dentro do bloco `hero`:

```ts
hero: {
  heading: "Banco de óvulos",
  ...
}
```

Textos com trechos em negrito ou destaque (como em `about.intro` e `rt.bio`) são arrays de partes:

```ts
intro: [
  { text: "O DOE é um banco de óvulos criado para " },
  { text: "auxiliar pacientes no sonho da maternidade", bold: true },
  { text: ". Com cuidado, ética e segurança..." },
],
```

Basta adicionar, remover ou editar os itens do array — cada `{ text: "..." }` vira um trecho, e `bold: true` (ou `emphasis: true`, dependendo do bloco) deixa aquele trecho destacado.

Os formulários (seções `clinic` e `donor`) ainda não têm os campos plugados ao HTML — estão aguardando a definição da integração com o RD Station.

## Como trocar imagens

As imagens ficam em `public/assets/images/`. Para trocar uma imagem, basta substituir o arquivo mantendo o mesmo nome, ou trocar o nome referenciado em `config/docs.ts`.

Imagens em uso hoje:

- `banner-main-desktop.png` / `banner-main-mobile.png` — foto de fundo da hero (referenciadas em `docsConfig.hero.image`). São duas versões porque a página troca a imagem por breakpoint (desktop a partir de 768px).
- `dra-ana-paula-aquino.png` — foto da Dra. Ana Paula (referenciada em `docsConfig.rt.photo`).

O logo (SVG) não é um arquivo de imagem — fica em `components/utils/icons.tsx`, dentro do objeto `Icons`.

## Fontes e cores

- Fontes: Lato e Rubik, carregadas em `lib/fonts.ts` a partir dos arquivos em `public/assets/fonts/`.
- Cores: todas cadastradas como variáveis em `styles/globals.css` (bloco `@theme`) — `coral`, `peach`, `cream`, `charcoal`, `body`, `white`, `input-shadow`. Para mudar uma cor da marca, edite o valor ali; ela se propaga para todo o site.

## Estrutura do projeto

```
app/                    rotas do Next.js (App Router)
components/
  pages/home/            as 5 seções da página inicial (section-1 a section-5)
  utils/                 header, footer, botão, ícones, campos de formulário
config/
  docs.ts                todo o conteúdo textual e de imagens do site
  site.ts                metadados (título, descrição, domínio)
lib/
  fonts.ts                configuração das fontes
  rd-station.ts           ponto de integração com o RD Station (pendente)
  utils.ts                helper de classes CSS (cn)
public/assets/            fontes, imagens
styles/globals.css        cores, fontes e utilitários globais
```
