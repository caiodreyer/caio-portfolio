# Caio Dreyer — Portfólio

Site estático (HTML, CSS e JavaScript puros). Não precisa de instalação, build nem banco de dados.

## Estrutura

```
index.html              página única do site (cabeçalho, rodapé, metadados)
assets/css/styles.css   todo o visual (cores e fontes no topo, em :root)
assets/js/app.js        monta as telas a partir do conteúdo
content/site.js         textos gerais: apresentação, sobre, percurso, contato, Grupo Brio, textos da interface
content/projects.js     os projetos (a ordem do arquivo é a ordem na página)
content/*.en.js         as mesmas coisas em inglês
img/                    imagens
  covers/               capas dos cards (4:3, 1600x1200)
  heroes/               imagens largas do topo de alguns casos
  textures/             gradientes (g1 abertura, g3 faixa, g4 contato; "-m" é o recorte para celular)
favicon.svg, robots.txt, vercel.json
tools/build_preview.py  gera uma versão de arquivo único só para pré-visualização (opcional)
tools/build_en_projects.js  gerou a primeira versão de projects.en.js (não precisa rodar de novo)
```

## Editar textos
- Apresentação, sobre, experiência, contato: `content/site.js`.
- Projetos: `content/projects.js`. O comentário no topo explica cada campo.

## Adicionar um projeto
1. Coloque as imagens em `img/` (uma pasta por projeto, se forem muitas).
2. Crie uma capa 4:3 em `img/covers/`.
3. Copie um projeto parecido em `content/projects.js`, troque `slug`, textos e caminhos.
4. Abra o site e confira em `seusite.com/#slug-do-projeto`.

## Ver no computador
Abra a pasta num terminal e rode `python3 -m http.server`, depois acesse `http://localhost:8000`.
(Abrir o index.html direto também funciona na maioria dos navegadores.)

## Publicar na Vercel (via GitHub)
1. Crie um repositório no GitHub e envie esta pasta (pode arrastar os arquivos no próprio site do GitHub).
2. Na Vercel, clique em "Add New → Project", importe o repositório e mantenha as opções padrão
   (Framework: Other, sem comando de build, diretório raiz `/`). Clique em Deploy.
3. A cada alteração enviada ao GitHub, a Vercel publica a nova versão sozinha.

## Domínio próprio
Em Vercel → Project → Settings → Domains, adicione o domínio e siga as instruções de DNS.
Depois troque `https://caiodreyer.vercel.app/` pelo novo domínio nas tags `og:` do `index.html` e no `sitemap.xml`.

## Versão em inglês
O site tem português (padrão) e inglês. O botão PT/EN fica no topo, e o inglês também abre direto em
`caiodreyer.vercel.app/en` (ou `?lang=en` no computador).
- Textos gerais em inglês: `content/site.en.js` (mesmos campos de `site.js`, incluindo `ui`, os textos de menus e botões).
- Projetos em inglês: `content/projects.en.js`. A ordem na página vem sempre de `projects.js`.
- Ao adicionar um projeto, copie o bloco dele para `projects.en.js` e traduza só os textos
  (mantenha slug, type, imagens e nomes de arquivo). Se faltar a versão em inglês, o site mostra o projeto em português.
