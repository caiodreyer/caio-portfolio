/*
  TEXTOS GERAIS DO SITE
  ---------------------------------------------------------------
  Edite aqui nome, apresentação, sobre, percurso, contato e a página
  do Grupo Brio. Os projetos ficam em content/projects.js.
*/
window.SITE = {
  name: "Caio Dreyer",
  role: "Design digital e UX/UI",
  tagline: "Web, marca e direção de arte",
  location: "Porto Alegre, Brasil",

  intro: {
    eyebrow: "Olá, eu sou o Caio",
    statement: "Designer digital e UX/UI. Crio sites, marcas e conteúdos que fazem uma ideia chegar inteira até quem precisa dela.",
    paragraphs: [
      "Há seis anos trabalho com marcas de saúde, turismo, eventos, direito e serviços. Já desenhei landing pages de conversão, identidades visuais, campanhas e carrosséis editoriais, quase sempre tratando tudo como um único sistema.",
      "Estudo Design de Produto na UFRGS e uso inteligência artificial no dia a dia, da direção de imagem à automação de processos."
    ]
  },

  divider: "Web, marca e conteúdo pensados como um só sistema.",

  about: {
    title: "Sobre mim",
    statement: "Atuo com foco em soluções visuais criativas, reunindo experiências em design gráfico, desenvolvimento de identidade visual, criação de conteúdos para redes sociais, edição de vídeo e estratégias de comunicação digital.",
    paragraphs: [
      "Atualmente tenho me aprofundado em disciplinas ligadas à experiência do usuário (UX) e interfaces digitais (UI), desenvolvendo landing pages e interfaces para nossos colaboradores e clientes.",
      "Graduando em Design de Produto pela UFRGS – Universidade Federal do Rio Grande do Sul, em Porto Alegre."
    ],
    photo: { src: "img/caio.jpg", alt: "Caio Dreyer de camisa branca e óculos escuros, encostado numa parede clara sob a luz do fim de tarde" }
  },

  experience: [
    { years: "2025 — hoje", role: "Designer digital e UX/UI", place: "Grupo Brio", text: "Único designer da agência: landing pages, sites institucionais, social media, campanhas e materiais digitais para clientes e para a própria Brio.", link: { href: "#grupo-brio", label: "Ver clientes" } },
    { years: "2025 — hoje", role: "Automação de vídeo com IA", place: "Projeto independente", text: "Scripts em Python, PowerShell e FFmpeg, desenvolvidos com o Claude como parceiro de programação, que automatizam etapas da produção de vídeo." },
    { years: "2024 — hoje", role: "Designer e social media", place: "Riki Imunizadora", text: "Peças para redes e campanhas sazonais, redação e planejamento de pautas." },
    { years: "2020 — hoje", role: "Designer gráfico e digital", place: "Freelancer", text: "Identidades visuais e materiais gráficos para clientes de diversos setores." },
    { years: "2020 — 2021", role: "Diretor de arte", place: "Co.De · ESPM", text: "Branding e direção de arte na agência de Comunicação e Design da ESPM." }
  ],

  education: [
    { years: "2022 — 2027", course: "Design de Produto", place: "UFRGS" },
    { years: "2021 — 2022", course: "Design & Marketing", place: "ESPM" }
  ],

  tools: "Figma, Pacote Adobe, Stitch, Zeroheight, Maze, Hotjar, Midjourney, ChatGPT, Claude, Python e FFmpeg",
  languages: "Português nativo, inglês avançado",

  contact: {
    title: "Vamos conversar?",
    text: "Estou aberto a vagas remotas e a novos projetos.",
    email: "caiodreyer@gmail.com",
    links: [
      { label: "LinkedIn", value: "linkedin.com/in/caiodreyer", href: "https://www.linkedin.com/in/caiodreyer" },
      { label: "Behance", value: "behance.net/caiodreyer", href: "https://www.behance.net/caiodreyer" }
    ]
  },

  brio: {
    period: "2025 — hoje",
    lede: "Uma agência, muitas marcas ao mesmo tempo, cada uma com sua identidade, seu público e seu objetivo.",
    details: [["Período", "2025 — hoje"], ["Papel", "Designer digital e UX/UI"], ["Entregas", "Landing pages, social media, campanhas, eBooks"]],
    about: [
      "No Grupo Brio fui o único designer da agência, responsável pela parte visual de todos os clientes e da comunicação da própria Brio.",
      "Cada projeto partia da identidade que o cliente já tinha. O desafio era levar essa identidade para o digital sem perder consistência, mesmo com várias entregas na mesma semana."
    ],
    clients: [
      { name: "Dr. Marcelo Marins", sector: "Emagrecimento clínico", kind: "Landing page", year: "2026", case: "marcelo-marins" },
      { name: "Dr. Fábio Pantaleão", sector: "Nutrologia e saúde hormonal", kind: "Landing page", year: "2026", case: "fabio-pantaleao" },
      { name: "Dr. Cristiano Cruz", sector: "Nutrologia e Ortopedia", kind: "Landing page", year: "2025", case: "cristiano-cruz" },
      { name: "Dra. Alexandra Galhardo", sector: "Emagrecimento e longevidade", kind: "Landing page", year: "2025", case: "alexandra-galhardo" },
      { name: "Fazenda do Rosa", sector: "Pousada e eventos", kind: "Proposta de casamento", year: "2026", case: "rosa-casamento" },
      { name: "Fazenda do Rosa", sector: "Pousada e eventos", kind: "Campanhas para Instagram", year: "2025–26", case: "rosa-campanhas" },
      { name: "Atria Intervenção", sector: "Radiologia intervencionista", kind: "Carrosséis e ilustrações com IA", year: "2026", case: "atria" },
      { name: "Aragao Law", sector: "Advocacia internacional · EUA", kind: "Carrosséis para Instagram", year: "2026", case: "aragao-law" },
      { name: "Dra. Gabi Castello Branco", sector: "Endocrinologia", kind: "Carrosséis para Instagram", year: "2025", case: "gabi-castello-branco" },
      { name: "Hospital Piltcher", sector: "Hospital · Pelotas, RS", kind: "Campanhas para Instagram", year: "2025–26", case: "hospital-piltcher" },
      { name: "Dr. Otávio Piltcher", sector: "Otorrinolaringologia", kind: "Carrosséis para Instagram", year: "2025", case: "otavio-piltcher" },
      { name: "Grupo Brio e BRIO Lab", sector: "Comunicação da própria agência", kind: "Carrosséis e manifestos", year: "2025", case: "grupo-brio-institucional" }
    ]
  }
};
