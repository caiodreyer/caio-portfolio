/*
  PROJETOS DO PORTFÓLIO
  ---------------------------------------------------------------
  Cada item abaixo é um projeto. A ordem aqui é a ordem na página inicial:
  primeiro os de UX/UI (type "web"), depois os de design gráfico. Em cada grupo,
  a ordem é a deste arquivo (definida pelo Caio).

  Campos principais
    slug        endereço da página (ex.: #marcelo-marins). Sem espaços nem acentos.
    type        "web" (seção UX/UI) ou "grafico" (seção Design gráfico)
    discipline  categoria curta exibida no card
    title, year, summary (texto do card), lede (frase de abertura do caso)
    brio        true se foi feito no Grupo Brio
    cover       capa do card (proporção 4:3, 1600x1200)
    hero        imagem larga do topo do caso (opcional)
    intro       parágrafos de "Sobre o projeto"
    details     pares [rótulo, valor] da ficha técnica
    tldr        (opcional, só web) Desafio / Solução / Meu papel
    link        (opcional) link externo, ex.: Behance
    blocks      conteúdo do caso, em ordem. Tipos:
                text  {h, p:[...]}            parágrafos com título
                image {src, ratio, alt, cap}  imagem larga
                pair  {items:[img,img], cap}  duas imagens lado a lado
                scroll{src, label, alt, cap}  página longa rolável numa janela
                deck  {dir, files|titles, ratio, multi, label, cap}  carrossel
                stat  {value, label, note, link}  número em destaque
                list  {h, items:[[k,v]]}      lista de pares
*/
window.PROJECTS = [
  {
    "slug": "marcelo-marins",
    "type": "web",
    "discipline": "Landing page",
    "title": "Dr. Marcelo Marins",
    "year": "2026",
    "brio": true,
    "summary": "Landing page para um médico de emagrecimento clínico que começa desmontando mitos e termina filtrando quem é o paciente certo.",
    "cover": {
      "src": "img/covers/marins.jpg",
      "alt": "Topo da landing page do Dr. Marcelo Marins sobre fundo neutro"
    },
    "hero": {
      "src": "img/marins-hero.jpg",
      "ratio": "1800/752",
      "alt": "Abertura da landing page: Se dieta da moda regulasse biologia, você não estaria no efeito platô, ao lado do retrato do médico"
    },
    "lede": "Uma página que primeiro tira a culpa do paciente e só depois apresenta o tratamento.",
    "intro": [
      "O Dr. Marcelo Marins atua com emagrecimento clínico e saúde metabólica, a partir da Medicina Integrativa e da Longevidade. O paciente típico já tentou de tudo, de low carb a jejum e termogênicos, e chega frustrado com o efeito sanfona. A página foi criada do zero para transformar essa frustração em uma consulta."
    ],
    "details": [
      [
        "Ano",
        "2026"
      ],
      [
        "Cliente",
        "Dr. Marcelo Marins"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Papel",
        "Designer digital e UX/UI"
      ],
      [
        "Entrega",
        "Landing page"
      ],
      [
        "Área",
        "Emagrecimento clínico e medicina integrativa"
      ]
    ],
    "tldr": [
      [
        "Desafio",
        "Falar com pessoas cansadas de dietas que não funcionaram, em um nicho cheio de promessas rápidas, e atrair pacientes dispostos a um acompanhamento sério."
      ],
      [
        "Solução",
        "Uma landing page que desmonta mitos sobre emagrecimento, explica o método em quatro passos e deixa claro, antes do agendamento, para quem o tratamento é indicado."
      ],
      [
        "Meu papel",
        "Arquitetura do conteúdo, design da interface e adaptação da identidade do médico para a web."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Começar pelo que o paciente já tentou",
        "p": [
          "O título de abertura provoca: se dieta da moda regulasse biologia, você não estaria no efeito platô. A frase reconhece o esforço do visitante e muda o culpado de lugar. O problema deixa de ser falta de força de vontade e passa a ser resistência à insulina, inflamação e rotina desorganizada.",
          "Logo abaixo, o bloco Ciclo de estagnação metabólica coloca três crenças comuns entre aspas, como frases que o próprio paciente já disse, e responde cada uma com o que acontece no corpo. É o momento em que a pessoa se reconhece e passa a confiar na página."
        ]
      },
      {
        "type": "image",
        "src": "img/marins-mitos.jpg",
        "ratio": "1318/337",
        "alt": "Três cartões de mitos: É só comer menos e se exercitar mais, Jejum resolve tudo e Esse suplemento seca tudo, cada um com a explicação abaixo",
        "cap": "Três mitos escritos na voz do paciente, cada um com a resposta do médico."
      },
      {
        "type": "text",
        "h": "Tornar a consulta concreta",
        "p": [
          "Para quem nunca passou por esse tipo de atendimento, consulta médica pode parecer algo vago. A página resolve isso de duas formas. Um cartão de Diagnóstico de Precisão, com barras de perfil inflamatório e eficiência hormonal, mostra de forma visual que o tratamento parte de dados. Em seguida, o atendimento é explicado em quatro passos numerados, da avaliação individual aos ajustes periódicos."
        ]
      },
      {
        "type": "image",
        "src": "img/marins-diagnostico.jpg",
        "ratio": "1332/443",
        "alt": "Seção Metabolismo vs. Calorias e Sinais do Corpo ao lado do cartão escuro Diagnóstico de Precisão com barras de progresso",
        "cap": "O cartão de diagnóstico traduz a ideia de medicina baseada em dados em um elemento visual."
      },
      {
        "type": "text",
        "h": "Filtrar antes de converter",
        "p": [
          "Antes do botão de agendamento, a seção Este tratamento é para você? divide o público em duas colunas. A verde descreve quem deve agendar. A vermelha diz com franqueza quem não vai encontrar ali o que procura, como quem busca fórmulas mágicas de sete dias.",
          "Pode parecer contraintuitivo afastar visitantes de uma página de conversão, mas o filtro melhora a qualidade dos agendamentos e reforça o posicionamento sério do médico. Quem continua a leitura chega à consulta com a expectativa certa."
        ]
      },
      {
        "type": "image",
        "src": "img/marins-para-voce.jpg",
        "ratio": "1038/477",
        "alt": "Seção Este tratamento é para você, com coluna verde de quem é indicado e coluna vermelha de quem não é",
        "cap": "Duas colunas que qualificam o paciente antes do agendamento."
      },
      {
        "type": "scroll",
        "src": "img/marins-completa.jpg",
        "label": "Landing page · Dr. Marcelo Marins",
        "alt": "Landing page completa do Dr. Marcelo Marins: abertura, mitos, citação, diagnóstico de precisão, atendimento em quatro passos, para quem é o tratamento, avaliações no Google, sobre o médico e contato",
        "cap": "A página completa. Role dentro da janela para percorrer do primeiro mito ao agendamento."
      },
      {
        "type": "text",
        "h": "Identidade e prova social",
        "p": [
          "A paleta parte do azul-marinho e do ciano da marca, com fundos em azul muito claro que mantêm a página leve apesar da quantidade de informação. Uma faixa escura com a citação do médico, cortada por um arco, marca a virada entre o problema e a solução. Mais abaixo, as avaliações do Google e o selo com o CRM fecham o argumento com credibilidade antes do chamado final."
        ]
      }
    ]
  },
  {
    "slug": "fabio-pantaleao",
    "type": "web",
    "discipline": "Landing page",
    "title": "Dr. Fábio Pantaleão",
    "year": "2026",
    "brio": true,
    "summary": "Landing page criada do zero, a partir da identidade do cliente, para captar novos pacientes de nutrologia e saúde hormonal.",
    "cover": {
      "src": "img/covers/fabio.jpg",
      "alt": "Topo da landing page do Dr. Fábio Pantaleão sobre fundo neutro"
    },
    "hero": {
      "src": "img/fabio-hero.jpg",
      "ratio": "1921/800",
      "alt": "Abertura da landing page, com a pergunta sobre queda de energia e o botão para agendar avaliação hormonal"
    },
    "lede": "Uma página que parte dos sintomas que o paciente reconhece e o conduz, bloco a bloco, até o agendamento.",
    "intro": [
      "O Dr. Fábio Pantaleão atende em São José do Rio Preto, SP, com foco em nutrologia e suporte hormonal. Ele precisava de um canal digital que trouxesse novos pacientes para o consultório, e a landing page foi criada para cumprir esse papel.",
      "Desenvolvi o projeto em fevereiro de 2026, durante meu trabalho no Grupo Brio. A página nasceu do zero, com um objetivo central: transformar a visita de alguém que suspeita de um desequilíbrio hormonal em uma consulta de avaliação agendada."
    ],
    "details": [
      [
        "Data",
        "Fevereiro de 2026"
      ],
      [
        "Cliente",
        "Dr. Fábio Pantaleão"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Papel",
        "Designer digital e UX/UI"
      ],
      [
        "Entrega",
        "Landing page"
      ]
    ],
    "tldr": [
      [
        "Desafio",
        "Atrair novos pacientes pelo digital para um consultório de nutrologia e saúde hormonal."
      ],
      [
        "Solução",
        "Uma landing page criada do zero, que conduz o visitante dos sintomas até o agendamento da avaliação."
      ],
      [
        "Meu papel",
        "Estrutura de conteúdo, design da interface e adaptação da identidade visual do cliente para a web."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Por que uma landing page",
        "p": [
          "Uma landing page para um médico é uma página criada com um objetivo de marketing específico: transformar pessoas interessadas no tratamento em potenciais pacientes e incentivar o agendamento de consultas.",
          "Diferentemente de um site institucional, que reúne muitas informações sobre o profissional, a landing page é mais estratégica e direcionada à conversão. Cada seção existe para aproximar o visitante de uma única ação."
        ]
      },
      {
        "type": "text",
        "h": "Ponto de partida",
        "p": [
          "O cliente já tinha uma identidade visual definida, com logotipo, paleta e tipografia. Em vez de reinventar a marca, usei esse material como base e traduzi a identidade para o ambiente digital.",
          "Isso significou decidir como as cores se comportam em grandes áreas e em botões, como a tipografia se organiza em títulos longos e qual seria o ritmo entre seções claras e escuras. O resultado é uma página que parece uma extensão natural do consultório, e não uma peça à parte."
        ]
      },
      {
        "type": "image",
        "src": "img/fabio-servicos.jpg",
        "ratio": "1120/600",
        "alt": "Cartões das áreas de cuidado: suporte hormonal, nutrologia esportiva, emagrecimento, terapia injetável e transtornos de humor",
        "cap": "Áreas de cuidado apresentadas como cartões curtos, cada um com um ícone e uma frase."
      },
      {
        "type": "text",
        "h": "Estrutura",
        "p": [
          "Antes de desenhar, organizei o conteúdo a partir do caminho que um paciente percorre até decidir marcar uma consulta. A página abre falando dos sintomas na linguagem de quem os sente, como cansaço, queda de libido e falta de energia, para que o visitante se reconheça logo na primeira dobra.",
          "Em seguida vêm as áreas de cuidado, que mostram que existe tratamento para aquele problema, e os relatos de pacientes, que trazem prova social. A trajetória do médico sustenta a autoridade com formação e registro profissional. Por fim, os diferenciais e as perguntas frequentes respondem às últimas objeções, principalmente sobre a segurança dos implantes e sobre quem pode fazer reposição hormonal.",
          "Quase todo bloco termina com uma chamada para agendar. Assim, a decisão fica sempre a um clique de distância, no momento exato em que o visitante se convence."
        ]
      },
      {
        "type": "scroll",
        "src": "img/fabio-completa.jpg",
        "label": "Landing page · Dr. Fábio Pantaleão",
        "alt": "Landing page completa do Dr. Fábio Pantaleão: abertura, áreas de cuidado, relatos, sobre o médico, diferenciais, perguntas frequentes e contato",
        "cap": "A página completa. Role dentro da janela para navegar do início ao contato."
      },
      {
        "type": "text",
        "h": "Linguagem visual",
        "p": [
          "O verde profundo da marca sustenta o tom de saúde e confiança. O laranja aparece só nas chamadas para ação e no cartão principal, então o próximo passo é sempre o elemento mais visível da tela.",
          "Os cartões brancos sobre o fundo verde organizam informações curtas em blocos fáceis de escanear, uma escolha pensada também para a leitura no celular. A alternância entre seções claras e escuras marca a passagem de um assunto para o outro e dá ritmo a uma página longa."
        ]
      },
      {
        "type": "image",
        "src": "img/fabio-faq.jpg",
        "ratio": "800/475",
        "alt": "Perguntas frequentes sobre implantes e reposição hormonal",
        "cap": "As perguntas frequentes respondem às objeções mais comuns antes do contato."
      }
    ]
  },
  {
    "slug": "alexandra-galhardo",
    "type": "web",
    "discipline": "Landing page",
    "title": "Dra. Alexandra Galhardo",
    "year": "2025",
    "brio": true,
    "summary": "Landing page criada do zero, a partir da identidade da médica, para captar pacientes em busca de emagrecimento, saúde hormonal e longevidade.",
    "cover": {
      "src": "img/covers/alexandra.jpg",
      "alt": "Topo da landing page da Dra. Alexandra Galhardo sobre fundo neutro"
    },
    "hero": {
      "src": "img/alexandra-hero.jpg",
      "ratio": "1920/788",
      "alt": "Abertura da landing page, com o retrato da médica ao lado da pergunta sobre disposição"
    },
    "lede": "Uma página calorosa e sofisticada, que apresenta a médica antes do tratamento e conduz a paciente até a avaliação.",
    "intro": [
      "A Dra. Alexandra Galhardo atende em Ribeirão Preto, SP, com foco em emagrecimento, modulação hormonal, performance e longevidade, e tem um público majoritariamente feminino. Ela queria ampliar a captação de pacientes pelo digital, com uma página à altura do cuidado que oferece no consultório.",
      "Desenvolvi a landing page em 2025, durante meu trabalho no Grupo Brio. O projeto começou do zero, com um objetivo claro: levar a visitante a agendar uma avaliação individualizada."
    ],
    "details": [
      [
        "Data",
        "2025"
      ],
      [
        "Cliente",
        "Dra. Alexandra Galhardo"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Papel",
        "Designer digital e UX/UI"
      ],
      [
        "Entrega",
        "Landing page"
      ]
    ],
    "tldr": [
      [
        "Desafio",
        "Ampliar a captação de pacientes, com público majoritariamente feminino, sem perder a sofisticação da marca."
      ],
      [
        "Solução",
        "Uma landing page editorial, com a médica em primeiro plano e as especialidades traduzidas em benefícios."
      ],
      [
        "Meu papel",
        "Estrutura de conteúdo, design da interface e adaptação da identidade visual da cliente para a web."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Por que uma landing page",
        "p": [
          "Uma landing page médica cumpre uma função diferente da de um site institucional. Em vez de reunir tudo sobre a profissional, ela concentra a atenção em uma única ação: o agendamento da consulta.",
          "Por isso, cada bloco foi escrito e desenhado para transformar o interesse da visitante em uma decisão, sem distrações nem caminhos paralelos."
        ]
      },
      {
        "type": "text",
        "h": "Ponto de partida",
        "p": [
          "A identidade visual da médica já existia e foi a base de todas as decisões. Os tons quentes de café e areia, a serifa elegante e o retrato fotográfico pediam uma atmosfera mais editorial e intimista, bem diferente do visual clínico comum na área da saúde.",
          "Meu trabalho foi levar essa identidade para a web: transformar a paleta em superfícies, botões e estados, organizar a tipografia em uma hierarquia clara e dar à fotografia o protagonismo que ela merece."
        ]
      },
      {
        "type": "image",
        "src": "img/alexandra-servicos.jpg",
        "ratio": "980/715",
        "alt": "Cartões de especialidades: emagrecimento, modulação hormonal, performance e vitalidade, longevidade",
        "cap": "Cada especialidade em dois níveis: o que é o tratamento e o que a paciente ganha com ele."
      },
      {
        "type": "text",
        "h": "Estrutura",
        "p": [
          "A abertura coloca a médica e a pergunta lado a lado. A foto cria proximidade logo no primeiro contato, e o título fala de uma sensação que a visitante reconhece: a disposição que diminuiu e o corpo que já não responde como antes.",
          "Nas especialidades, cada cartão separa o que é o tratamento do ganho que ele traz. Essa divisão traduz termos médicos em benefícios concretos e ajuda a paciente a se identificar com uma das frentes de cuidado.",
          "Em seguida vêm as histórias de pacientes, acompanhadas da nota no Google, a apresentação da médica com o registro profissional em destaque e os diferenciais do acompanhamento. O rodapé reúne todos os canais de contato, com o WhatsApp como atalho principal e o mapa do consultório."
        ]
      },
      {
        "type": "scroll",
        "src": "img/alexandra-completa.jpg",
        "label": "Landing page · Dra. Alexandra Galhardo",
        "alt": "Landing page completa da Dra. Alexandra Galhardo: abertura, especialidades, depoimentos, sobre a médica, diferenciais e contato",
        "cap": "A página completa. Role dentro da janela para navegar do início ao contato."
      },
      {
        "type": "text",
        "h": "Linguagem visual",
        "p": [
          "O marrom profundo funciona como cor de ação. Ele aparece nos botões e no rodapé e guia o olhar até o agendamento sem quebrar a atmosfera calma da página. O fundo claro e os cartões brancos deixam bastante respiro entre os blocos, reforçando a ideia de um atendimento atento e sem pressa.",
          "A serifa nos títulos e a sans-serif no texto corrido equilibram elegância e legibilidade. O selo com o CRM, sobreposto à fotografia, une proximidade e autoridade em um único elemento."
        ]
      },
      {
        "type": "image",
        "src": "img/alexandra-sobre.jpg",
        "ratio": "1320/820",
        "alt": "Seção sobre a médica, com retrato e selo do registro profissional",
        "cap": "Retrato e registro profissional no mesmo elemento."
      }
    ]
  },
  {
    "slug": "cristiano-cruz",
    "type": "web",
    "discipline": "Landing page",
    "title": "Dr. Cristiano Cruz",
    "year": "2025",
    "brio": true,
    "summary": "Landing page para um nutrólogo com experiência em Ortopedia, construída para transformar um diferencial técnico em novos pacientes.",
    "cover": {
      "src": "img/covers/cristiano.jpg",
      "alt": "Topo da landing page do Dr. Cristiano Cruz sobre fundo neutro"
    },
    "hero": {
      "src": "img/cristiano-hero.jpg",
      "ratio": "1920/570",
      "alt": "Abertura da landing page, com a pergunta sobre cansaço e dores ao lado do retrato do médico"
    },
    "lede": "Uma página que fala com o paciente na primeira pessoa e faz da união entre Nutrologia e Ortopedia o argumento central.",
    "intro": [
      "O Dr. Cristiano Cruz é médico nutrólogo, com atuação em perda de peso e reposição hormonal, e atende em Uberlândia, MG. O que o diferencia de outros profissionais da área é a formação em Ortopedia, que permite tratar ao mesmo tempo o metabolismo, a dor e a mobilidade.",
      "Em 2025, ele precisava de uma página capaz de explicar essa combinação para quem nunca tinha ouvido falar dela e, a partir disso, gerar novos agendamentos. Desenhei a landing page do zero com esse duplo papel: informar e converter."
    ],
    "details": [
      [
        "Data",
        "2025"
      ],
      [
        "Cliente",
        "Dr. Cristiano Cruz"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Papel",
        "Designer digital e UX/UI"
      ],
      [
        "Entrega",
        "Landing page"
      ],
      [
        "Setor",
        "Nutrologia e Ortopedia"
      ]
    ],
    "tldr": [
      [
        "Desafio",
        "Comunicar uma proposta pouco comum, que une Nutrologia e Ortopedia, e transformar esse diferencial em consultas agendadas."
      ],
      [
        "Solução",
        "Uma landing page escrita na voz do próprio médico, que parte da dor e do cansaço do paciente e apresenta a abordagem integrada como resposta."
      ],
      [
        "Meu papel",
        "Arquitetura do conteúdo, design da interface e tradução da identidade do Núcleo Dr. Cristiano Cruz para o digital."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Do logotipo à tela",
        "p": [
          "O ponto de partida foi a marca Núcleo Dr. Cristiano Cruz, com seu monograma em traço contínuo e uma paleta de verdes suaves. A partir desse material, construí o sistema visual da página: o verde-menta virou fundo de seções e cor dos botões, o cinza-claro passou a separar os blocos e a tipografia sem serifa, de desenho geométrico, ganhou uma escala clara entre títulos e textos.",
          "O logotipo reaparece na seção de diferenciais, ao lado de uma foto do médico, como uma assinatura que fecha a apresentação antes do contato."
        ]
      },
      {
        "type": "image",
        "src": "img/cristiano-servicos.jpg",
        "ratio": "1260/680",
        "alt": "Seção Como posso te ajudar, com cinco cartões de serviços sobre fundo verde-menta",
        "cap": "As cinco frentes de cuidado, cada uma com ícone de traço fino e uma descrição curta."
      },
      {
        "type": "text",
        "h": "Uma conversa em primeira pessoa",
        "p": [
          "Muitas páginas médicas falam sobre o profissional. Esta fala como o profissional. A abertura pergunta se o visitante se sente cansado, sem energia e com dores, e logo em seguida responde em tom pessoal, com o médico se apresentando e dizendo que sabe como ajudar.",
          "Essa escolha de voz aproxima o paciente e reduz a distância que a linguagem médica costuma criar. Ela também sustenta um dos diferenciais da página: o médico já passou pela própria jornada de saúde e leva essa experiência para o atendimento."
        ]
      },
      {
        "type": "scroll",
        "src": "img/cristiano-completa.jpg",
        "label": "Landing page · Dr. Cristiano Cruz",
        "alt": "Landing page completa do Dr. Cristiano Cruz: abertura, serviços, depoimentos, autoridade e experiência, diferenciais e contato",
        "cap": "A página completa. Role dentro da janela para acompanhar o percurso até o contato."
      },
      {
        "type": "text",
        "h": "O percurso da página",
        "p": [
          "Depois da abertura, a seção Como posso te ajudar apresenta cinco frentes de cuidado, da reposição hormonal ao manejo da dor crônica, em cartões que podem ser lidos rapidamente. Os depoimentos, reunidos em Jornadas de Sucesso, trazem nome, idade e profissão, o que torna as histórias mais concretas.",
          "A seção de autoridade reúne a trajetória do médico e os registros de especialista. Na sequência, os diferenciais explicam por que a abordagem integrada é única, e o bloco final concentra WhatsApp, telefone, redes sociais, endereço e mapa. As chamadas para agendar aparecem sempre logo depois de um argumento forte, quando o visitante está mais perto de decidir."
        ]
      },
      {
        "type": "image",
        "src": "img/cristiano-diferenciais.jpg",
        "ratio": "1175/473",
        "alt": "Seção Nossos Diferenciais ao lado do logotipo Núcleo Dr. Cristiano Cruz e de um retrato do médico",
        "cap": "Os diferenciais ao lado da marca, uma assinatura antes do contato."
      },
      {
        "type": "text",
        "h": "Cor e respiro",
        "p": [
          "O verde-menta ocupa grandes áreas, como o bloco de serviços, a seção de autoridade e o contato, e deixa a página leve e associada a bem-estar. Os cartões brancos de cantos arredondados destacam o conteúdo sobre esse fundo e mantêm a leitura confortável.",
          "Os retratos do médico, com fundo neutro e roupas em tons escuros, aparecem em momentos escolhidos: na abertura, para gerar confiança imediata, e nas seções de autoridade e diferenciais, para lembrar quem está por trás do cuidado."
        ]
      }
    ]
  },
  {
    "slug": "grupo-brio-institucional",
    "type": "grafico",
    "discipline": "Social media · Institucional",
    "title": "Grupo Brio: conteúdo da própria agência",
    "year": "2025",
    "brio": true,
    "summary": "Carrosséis e manifestos para o Instagram da agência, vendendo branding e posicionamento com ideias, referências e números reais.",
    "cover": {
      "src": "img/covers/brio.jpg",
      "alt": "Quatro peças do Grupo Brio e do BRIO Lab em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/brio.jpg",
      "ratio": "2000/860",
      "alt": "Quatro peças lado a lado: capa sobre reconhecimento de marca, card de engenharia cognitiva, card do case com faturamento de 626 mil reais e manifesto do BRIO Lab"
    },
    "lede": "Quando o cliente é a própria agência, o conteúdo precisa provar na prática o que ela vende.",
    "intro": [
      "Além de atender clientes, criei conteúdo para o Instagram do próprio Grupo Brio. A tarefa era diferente: em vez de vender um produto, era preciso vender um jeito de pensar marcas. Cada peça tinha de mostrar, na própria execução, o padrão de qualidade que a agência promete."
    ],
    "details": [
      [
        "Ano",
        "2025"
      ],
      [
        "Cliente",
        "Grupo Brio e BRIO Lab"
      ],
      [
        "Tipo",
        "Comunicação institucional"
      ],
      [
        "Entregas",
        "Carrosséis e manifestos para Instagram"
      ],
      [
        "Formato",
        "4:5"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Direção visual",
        "p": [
          "Os carrosséis de autoridade combinam fotografia cinematográfica, pintura clássica e ícones que o público reconhece na hora. O roxo e o verde-limão marcam as palavras-chave, e a serifa itálica aparece nos momentos de virada do argumento.",
          "Um dos carrosséis conta como case a campanha que criei para a Fazenda do Rosa, que somou R$ 626 mil em faturamento com R$ 1.424 investidos em mídia."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/brio/",
        "files": [
          "marca-1",
          "marca-2",
          "marca-3",
          "marca-4",
          "marca-5",
          "marca-6",
          "marca-7",
          "marca-8",
          "marca-9"
        ],
        "label": "Carrossel Reconhecimento de marca",
        "titles": [
          "Reconhecimento de marca não acontece por acaso e nunca aconteceu.",
          "Narrativas consistentes, repetição estratégica e diferenciação simbólica.",
          "Por trás de toda marca memorável existe uma arquitetura precisa, construída com método e intenção.",
          "Não acontece por acaso ou de forma orgânica.",
          "Engenharia cognitiva: marcas se tornam familiares porque ocupam a mente com frequência.",
          "Marcas com identidade visual forte são vistas como confiáveis, únicas e legítimas.",
          "Esse símbolo não precisa ser complexo, mas precisa ser facilmente notado.",
          "No fim, o que o mercado chama de reconhecimento é um choque entre familiaridade, coerência e simbologia.",
          "Reconhecimento é uma construção invisível. Não é questão de viralizar, é questão de posicionamento."
        ],
        "cap": "Reconhecimento de marca · Setembro de 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/brio/",
        "files": [
          "case-1",
          "case-2",
          "case-3",
          "case-4",
          "case-5",
          "case-6",
          "case-7",
          "case-8"
        ],
        "label": "Carrossel Case Fazenda do Rosa",
        "titles": [
          "De R$ 1.500 para R$ 626 mil: o case real de uma pousada em SC.",
          "Sabíamos que, se fôssemos direto ao ponto com o desconto, viraríamos só mais um post perdido no feed.",
          "No papel, parecia só mais uma promoção de 50% de desconto em hospedagens.",
          "Vendíamos uma experiência, não uma diária.",
          "A urgência virou real.",
          "Utilizar o tráfego pago foi apenas apoio. O valor veio do orgânico.",
          "Foi um case de marca: faturamento de R$ 626 mil com R$ 1.424 investidos em mídia.",
          "Sua marca tem valor, mas ainda não comunica isso com alma? Talvez o próximo case seja o seu."
        ],
        "cap": "Case Fazenda do Rosa · Setembro de 2025."
      },
      {
        "type": "text",
        "h": "Três capas para o mesmo case",
        "p": [
          "O case foi publicado com três capas diferentes, todas com o mesmo título sobre fotografias distintas do mar. Cada imagem dá um tom à mesma mensagem: a onda em formação sugere força, a arrebentação sugere impacto e o horizonte calmo sugere descanso. Assim, o conteúdo voltou ao feed mais de uma vez sem parecer repetido."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/brio/",
        "files": [
          "capa-1",
          "capa-2",
          "capa-3"
        ],
        "label": "Três versões de capa do case",
        "titles": [
          "Versão de capa com onda em formação.",
          "Versão de capa com onda arrebentando.",
          "Versão de capa com mar calmo e ilha no horizonte."
        ],
        "cap": "As três capas publicadas para o mesmo case."
      },
      {
        "type": "text",
        "h": "BRIO Lab",
        "p": [
          "Para o BRIO Lab, a frente criativa da agência, criei peças únicas em tom de manifesto. Uma serifa clássica sustenta a frase, e uma palavra-chave ganha destaque, seja em caligrafia, como em Brio e excelência, seja em itálico pesado verde-limão, como em desinformação. As imagens surreais, entre uma armadura de cristal e dois reis num tabuleiro de xadrez, dão à marca um ar de galeria de arte."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/brio/",
        "files": [
          "lab-1",
          "lab-2",
          "lab-3"
        ],
        "label": "Manifestos BRIO Lab",
        "titles": [
          "Tudo teremos se tivermos Brio.",
          "Nossa missão é fazer com que a excelência ocupe o seu devido espaço.",
          "Onde os bons profissionais se calam, a desinformação ganha voz."
        ],
        "cap": "Manifestos do BRIO Lab."
      }
    ]
  },
  {
    "slug": "rosa-campanhas",
    "type": "grafico",
    "discipline": "Campanha digital",
    "title": "Fazenda do Rosa: campanhas para Instagram",
    "year": "2025–26",
    "brio": true,
    "summary": "Conteúdo para o Instagram de uma pousada à beira-mar, que vende primeiro a sensação de descanso e só depois a oferta.",
    "cover": {
      "src": "img/covers/rosa-campanhas.jpg",
      "alt": "Quatro posts da Fazenda do Rosa em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/rosa-campanhas.jpg",
      "ratio": "2000/860",
      "alt": "Um post de cada campanha lado a lado: Você não precisa de férias, Onde o pulso encontra a pausa e Troque a exaustão pela renovação"
    },
    "lede": "Carrosséis que vendem descanso começando pela sensação, e só depois pela oferta.",
    "intro": [
      "A Fazenda do Rosa é uma pousada à beira-mar na Praia do Rosa, em Imbituba, SC, a mesma da proposta de casamento. Quem procura a pousada busca uma pausa de verdade, e a comunicação precisava vender a experiência de estar lá antes de falar em preço, seja no posicionamento da marca, seja em datas como o Carnaval.",
      "Os conteúdos seguem uma mesma linguagem: fotografia da região em tela cheia, a assinatura Fazenda do Rosa espaçada no topo como o cabeçalho de uma revista e textos em que o peso da fonte destaca as palavras que contam a história. No Carnaval, a caligrafia da marca entra no título."
    ],
    "details": [
      [
        "Período",
        "Dez 2025 — Fev 2026"
      ],
      [
        "Cliente",
        "Fazenda do Rosa"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Entregas",
        "Carrosséis para Instagram"
      ],
      [
        "Formatos",
        "4:5 e 1:1"
      ]
    ],
    "blocks": [
      {
        "type": "stat",
        "value": "R$ 626 mil",
        "label": "de faturamento com R$ 1.424 investidos em mídia",
        "note": "Resultado da campanha de 50% de maio para a Fazenda do Rosa, cuja parte visual eu criei como único designer do Grupo Brio, na mesma linguagem dos carrosséis abaixo. A agência transformou o resultado em case no próprio Instagram.",
        "link": {
          "href": "#grupo-brio-institucional",
          "label": "Ver o case contado pela agência"
        }
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/rosa-promo/",
        "files": [
          "ferias-1",
          "ferias-2",
          "ferias-3",
          "ferias-4",
          "ferias-5"
        ],
        "label": "Carrossel Você não precisa de férias",
        "titles": [
          "Você não precisa de férias. Você precisa se lembrar de quem você é.",
          "O piloto automático assumiu o controle? Quando a vida vira um checklist, é hora de pausar.",
          "Por que a viagem desbloqueia a alma: mudar de ambiente tira o cérebro do modo alerta.",
          "O reencontro: na Fazenda, sem o ruído da cidade, você volta a escutar a sua intuição.",
          "Volte para casa diferente. Está na hora desse reencontro? Link na bio."
        ],
        "cap": "Você não precisa de férias · Dezembro de 2025."
      },
      {
        "type": "deck",
        "ratio": "1/1",
        "multi": true,
        "dir": "img/rosa-promo/",
        "files": [
          "carnaval-a-1",
          "carnaval-a-2",
          "carnaval-a-3",
          "carnaval-a-4"
        ],
        "label": "Carrossel Carnaval 2026, Onde o pulso encontra a pausa",
        "titles": [
          "Onde o pulso encontra a pausa. Carnaval 2026, Fazenda do Rosa.",
          "De dia, a vibração do Maram. À noite, o refúgio da EcoSuíte.",
          "Sua base estratégica para o feriado: 30% off nas EcoSuítes, mínimo de 3 diárias.",
          "Últimas vagas. Garanta seu lugar no paraíso, reserve agora."
        ],
        "cap": "Carnaval 2026 · Onde o pulso encontra a pausa."
      },
      {
        "type": "deck",
        "ratio": "1/1",
        "multi": true,
        "dir": "img/rosa-promo/",
        "files": [
          "carnaval-b-1",
          "carnaval-b-2",
          "carnaval-b-3",
          "carnaval-b-4"
        ],
        "label": "Carrossel Carnaval 2026, Comece o ano com a bateria no 100%",
        "titles": [
          "Comece o ano com a bateria no 100%. Carnaval 2026, Fazenda do Rosa.",
          "Troque a exaustão pela renovação. Celebre no Maram e recarregue na EcoSuíte.",
          "Condição exclusiva: 30% off nas EcoSuítes, mínimo de 3 diárias. O luxo de ter privacidade absoluta.",
          "Poucas unidades disponíveis para fevereiro. Garanta seu reset no link."
        ],
        "cap": "Carnaval 2026 · Comece o ano com a bateria no 100%."
      }
    ]
  },
  {
    "slug": "atria",
    "type": "grafico",
    "discipline": "Social media · Ilustração com IA",
    "title": "Atria Intervenção",
    "year": "2026",
    "brio": true,
    "summary": "Carrosséis editoriais que explicam procedimentos de radiologia intervencionista para pacientes.",
    "cover": {
      "src": "img/covers/atria.jpg",
      "alt": "Quatro páginas dos carrosséis da Atria Intervenção em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/atria.jpg",
      "ratio": "2000/860",
      "alt": "Quatro páginas lado a lado: mioma uterino, embolização uterina, crioablação e fechamento com a marca Atria"
    },
    "lede": "Temas médicos delicados contados com a calma e a clareza de uma revista.",
    "intro": [
      "A Atria Intervenção atua em Passo Fundo, RS, com radiologia intervencionista: tratamentos minimamente invasivos, guiados por imagem, que muitas vezes substituem uma cirurgia convencional. Boa parte do público nunca ouviu falar desses procedimentos, e chega até eles depois de um diagnóstico que já assusta."
    ],
    "details": [
      [
        "Ano",
        "2026"
      ],
      [
        "Cliente",
        "Atria Intervenção"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Especialidade",
        "Radiologia intervencionista"
      ],
      [
        "Entregas",
        "Carrosséis e ilustrações com IA"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Um carrossel que se lê como revista",
        "p": [
          "Em vez de posts soltos, os conteúdos seguem um sistema de páginas. Todo card tem o mesmo cabeçalho, com o nome da clínica de um lado e o lema Inovação e precisão do outro, e a numeração no rodapé. A leitura alterna entre fotografia em tela cheia e páginas de texto em azul, branco ou café, o que dá ritmo sem quebrar a unidade.",
          "Os títulos usam uma serifa de alto contraste, misturando pesos leves e pesados para que a palavra principal salte da frase. O texto corrido fica em uma sans geométrica, e as informações que o paciente não pode perder ganham um fundo de cor, como um marca-texto."
        ]
      },
      {
        "type": "text",
        "h": "Ilustrações com IA",
        "p": [
          "Para explicar o procedimento sem recorrer a imagens clínicas que poderiam assustar, criei as ilustrações com inteligência artificial, em um estilo de gravura antiga em preto e branco. O traço técnico remete aos livros de anatomia e passa seriedade, enquanto as etiquetas em azul da marca apontam exatamente o que o paciente precisa observar: o mioma, o cateter e o resultado depois do tratamento."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/atria/",
        "files": [
          "mioma-1",
          "mioma-2",
          "mioma-3",
          "mioma-4",
          "mioma-5"
        ],
        "label": "Carrossel Embolização uterina",
        "titles": [
          "Você foi informada de que a única solução para o seu mioma é a cirurgia? Existe algo que talvez ninguém tenha te contado.",
          "O mioma uterino é um tumor benigno e uma das condições ginecológicas mais comuns. Existe uma alternativa minimamente invasiva: a embolização uterina.",
          "A embolização uterina é feita pela Radiologia Intervencionista, sem cortes, sem anestesia geral e sem retirada do útero. Ilustração do procedimento.",
          "A recuperação é mais rápida do que em cirurgias convencionais. Ilustração do mioma antes e depois do tratamento.",
          "Conhecer todas as opções disponíveis é o que permite tomar a decisão mais adequada para o seu caso."
        ],
        "cap": "Embolização uterina."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/atria/",
        "files": [
          "crio-1",
          "crio-2",
          "crio-3",
          "crio-4"
        ],
        "label": "Carrossel Crioablação renal",
        "titles": [
          "Um novo recurso para o tratamento do câncer renal na região. Foto da equipe durante o procedimento.",
          "Nem todo tumor renal precisa ser tratado da mesma forma. Casos em que a crioablação pode ser considerada.",
          "O procedimento reuniu a experiência da Urologia e da Radiologia Intervencionista. Foto com a equipe identificada.",
          "A crioablação por gás argônio amplia as alternativas de tratamento. Atria Intervenção: preservar a vida com inovação e precisão."
        ],
        "cap": "Crioablação renal."
      }
    ]
  },
  {
    "slug": "rosa-casamento",
    "type": "grafico",
    "discipline": "Design editorial",
    "title": "Fazenda do Rosa: proposta de casamento",
    "year": "2026",
    "brio": true,
    "summary": "Apresentação comercial de 30 páginas para vender casamentos à beira-mar na Praia do Rosa, SC.",
    "cover": {
      "src": "img/covers/rosa-casamento.jpg",
      "alt": "Páginas da proposta de casamento da Fazenda do Rosa dispostas sobre fundo neutro"
    },
    "hero": {
      "src": "img/rosa-casamento/05.jpg",
      "ratio": "16/9",
      "alt": "Página da proposta com foto de uma cerimônia ao ar livre, com convidados e vista para o mar"
    },
    "lede": "Uma apresentação que faz o casal imaginar o próprio casamento à beira-mar antes mesmo da primeira visita.",
    "intro": [
      "Proposta comercial de casamento da Fazenda do Rosa, pousada à beira-mar na Praia do Rosa, em Imbituba, SC. A apresentação reúne espaços, gastronomia, experiências, formatos de hospedagem, serviços e depoimentos de clientes.",
      "A diagramação é editorial: fotografias em página inteira, títulos em caligrafia e um verde-oliva que conversa com a paisagem da pousada. Desenvolvi o material durante meu trabalho no Grupo Brio."
    ],
    "details": [
      [
        "Data",
        "2026"
      ],
      [
        "Cliente",
        "Fazenda do Rosa"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Entrega",
        "Apresentação comercial, 30 páginas"
      ],
      [
        "Local",
        "Praia do Rosa, SC"
      ]
    ],
    "blocks": [
      {
        "type": "deck",
        "dir": "img/rosa-casamento/",
        "label": "Proposta de casamento",
        "cap": "A apresentação completa. Use as setas ou deslize para passar as páginas.",
        "titles": [
          "Capa",
          "Apresentação da proposta",
          "Casal na cerimônia",
          "Formatos de casamento",
          "Cerimônia ao ar livre",
          "Detalhes do Casamento Maram",
          "Salão decorado",
          "Gastronomia Maram",
          "Experiências com exclusividade",
          "Experiências com pacotes adicionais",
          "Dia do noivo",
          "Brunch da noiva",
          "Luau à beira-mar",
          "Luau à noite",
          "Formatos de hospedagem",
          "Formato com exclusividade",
          "Restaurante",
          "Formato sem exclusividade",
          "Hidromassagem com vista para o mar",
          "Outras acomodações",
          "Suíte decorada",
          "Cabanas Praia e Mar",
          "Cabanas Bem-Estar",
          "Cabanas Jardim",
          "Eco Suítes",
          "Serviços inclusos",
          "Noiva e convidada",
          "Sugestões",
          "Festa",
          "Depoimentos de clientes"
        ]
      }
    ]
  },
  {
    "slug": "aragao-law",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Aragao Law",
    "year": "2026",
    "brio": true,
    "summary": "Conteúdo jurídico para brasileiros com patrimônio nos Estados Unidos, com a estética de uma revista de estilo de vida.",
    "cover": {
      "src": "img/covers/aragao.jpg",
      "alt": "Quatro cards dos carrosséis da Aragao Law em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/aragao.jpg",
      "ratio": "2000/860",
      "alt": "Quatro cards do carrossel sobre joint tenancy, com lancha, villa, título Quarenta por cento e fechamento"
    },
    "lede": "Direito internacional explicado com a elegância que o público dele espera.",
    "intro": [
      "A Aragao Law é um escritório de advocacia nos Estados Unidos, especializado em direito empresarial internacional e imigração. O público são brasileiros que investem, vivem ou planejam proteger patrimônio no país, pessoas acostumadas a marcas de alto padrão e pouco pacientes com conteúdo jurídico denso."
    ],
    "details": [
      [
        "Ano",
        "2026"
      ],
      [
        "Cliente",
        "Aragao Law"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Área",
        "Direito empresarial internacional e imigração"
      ],
      [
        "Entregas",
        "Carrosséis para Instagram"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Revista, não escritório",
        "p": [
          "A identidade visual foge do clichê de balança e martelo. A assinatura ARAGAO LAW aparece espaçada no topo, como o nome de uma revista, e a linha International Business Law & Immigration fecha cada card no rodapé. Os títulos usam uma serifa clássica que alterna romano e itálico, e a paleta fica entre um verde profundo e o off-white.",
          "As imagens mostram o estilo de vida do público: lagos, lanchas, villas e cidades. Os layouts variam entre foto em tela cheia, foto emoldurada e divisão vertical entre imagem e texto, o que mantém o ritmo sem perder a unidade."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/aragao/",
        "files": [
          "joint-1",
          "joint-2",
          "joint-3",
          "joint-4",
          "joint-5",
          "joint-6",
          "joint-7"
        ],
        "label": "Carrossel Joint tenancy",
        "titles": [
          "Você comprou um imóvel nos EUA em joint tenancy achando que estava protegendo sua família. Pode ter criado uma exposição de 40%.",
          "É comum ouvir que joint tenancy é uma forma simples e eficiente de proteger patrimônio nos EUA.",
          "Joint tenancy não é instrumento de proteção patrimonial. É uma forma de titularidade.",
          "Quarenta por cento. Isso não é proteção. É risco tributário.",
          "A informação errada não vem da lei. Vem da generalização.",
          "Existem instrumentos adequados: trust, LLC, estruturas societárias específicas.",
          "Antes de seguir qualquer orientação, avalie o impacto na sua estrutura. Proteção internacional não é opinião. É técnica."
        ],
        "cap": "Joint tenancy."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/aragao/",
        "files": [
          "imoveis-1",
          "imoveis-2",
          "imoveis-3"
        ],
        "label": "Carrossel Imóveis no Brasil e nos Estados Unidos",
        "titles": [
          "Que tipo de imóvel é possível comprar no Brasil e nos Estados Unidos em faixas de preços semelhantes? Uma comparação entre anúncios públicos.",
          "Comparação: casa em Franco da Rocha, SP, por R$ 360.000 e casa em Chicago por US$ 325.000.",
          "Comparação: casa em Franco da Rocha, SP, por R$ 360.000 e casa em Hobart, Indiana, por US$ 363.000."
        ],
        "cap": "Imóveis no Brasil e nos EUA."
      }
    ]
  },
  {
    "slug": "hospital-piltcher",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Hospital Piltcher",
    "year": "2025–26",
    "brio": true,
    "summary": "Campanhas de saúde para o Instagram de um hospital em Pelotas, do Setembro Amarelo ao Dia da Mulher, cada uma com um tom próprio.",
    "cover": {
      "src": "img/covers/piltcher.jpg",
      "alt": "Três capas de carrossel do Hospital Piltcher em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/piltcher.jpg",
      "ratio": "2000/860",
      "alt": "Quatro cards lado a lado: Setembro é um convite, protetor solar todos os dias, Mas essa missão não se faz sozinha e Neste 8 de março"
    },
    "lede": "Datas do calendário da saúde transformadas em conversas próximas, sem perder a seriedade de um hospital.",
    "intro": [
      "O Hospital Piltcher fica em Pelotas, RS, e também assina a comunicação como Saúde Piltcher. O Instagram acompanha o calendário da saúde, com campanhas de conscientização e datas comemorativas, e fala ao mesmo tempo com pacientes e com a comunidade da cidade. O desafio era informar com responsabilidade e, ainda assim, aproximar o hospital das pessoas."
    ],
    "details": [
      [
        "Período",
        "Ago 2025 — Mar 2026"
      ],
      [
        "Cliente",
        "Hospital Piltcher"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Local",
        "Pelotas, RS"
      ],
      [
        "Entregas",
        "Carrosséis para Instagram"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Direção visual",
        "p": [
          "Os títulos usam uma tipografia condensada em caixa alta, com as palavras-chave em cor, o que dá ao conteúdo a força de um cartaz mesmo na tela do celular. A base é o azul e o verde-água da marca, e cada campanha ganha uma variação própria: verde-limão sobre paisagens ao entardecer no Setembro Amarelo, imagens de praia com textura de filme no verão e uma moldura de revista, com cabeçalho e barra de navegação, no Dia da Mulher.",
          "No Dia da Mulher, a fotografia da própria equipe assume o centro da narrativa. Em vez de imagens genéricas, o carrossel mostra as pessoas que fazem o hospital funcionar, da responsável técnica às colaboradoras do dia a dia."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/piltcher/",
        "files": [
          "setembro-1",
          "setembro-2",
          "setembro-3",
          "setembro-4",
          "setembro-5",
          "setembro-6"
        ],
        "label": "Carrossel Setembro Amarelo",
        "titles": [
          "Setembro é um convite: cuide da sua mente hoje, não só quando dói.",
          "Contexto do Brasil: dados sobre ansiedade e depressão.",
          "Falar sobre o que sente não é fraqueza. É coragem e o primeiro passo para reorganizar a vida.",
          "Fique atento aos sinais. A prevenção está no dia a dia.",
          "Em caso de crise, peça ajuda imediatamente. Ligue CVV 188.",
          "Um caminho seguro começa com avaliação médica."
        ],
        "cap": "Setembro Amarelo · Setembro de 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/piltcher/",
        "files": [
          "verao-1",
          "verao-2",
          "verao-3",
          "verao-4"
        ],
        "label": "Carrossel Verão e cuidado com a pele",
        "titles": [
          "Verão chegando: sua pele precisa mais do que bronze.",
          "Use protetor solar com FPS 30 ou mais, todos os dias.",
          "Hidrate a pele diariamente e observe o seu corpo.",
          "Viva o verão com consciência: proteger é o novo bronze."
        ],
        "cap": "Verão e cuidado com a pele · Outubro de 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/piltcher/",
        "files": [
          "mulher-1",
          "mulher-2",
          "mulher-3",
          "mulher-4",
          "mulher-5"
        ],
        "label": "Carrossel Dia da Mulher",
        "titles": [
          "A força que pulsa no coração do Hospital Piltcher. Uma homenagem às mulheres que transformam medicina em cuidado real.",
          "À frente da responsabilidade técnica, a Dra. Maira Guedes Piltcher.",
          "Mas essa missão não se faz sozinha: médicas, enfermeiras, técnicas e administrativas.",
          "Cuidar exige a sensibilidade de enxergar além do diagnóstico.",
          "Neste 8 de março, a homenagem é para cada colaboradora e para a Dra. Maira."
        ],
        "cap": "Dia da Mulher · Março de 2026."
      }
    ]
  },
  {
    "slug": "otavio-piltcher",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Dr. Otávio Piltcher",
    "year": "2025",
    "brio": true,
    "summary": "Carrosséis de posicionamento sobre escuta e representatividade na associação médica de otorrinolaringologia, com pinturas clássicas como metáfora.",
    "cover": {
      "src": "img/covers/otavio.jpg",
      "alt": "Quatro cards dos carrosséis do Dr. Otávio Piltcher em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/otavio.jpg",
      "ratio": "2000/860",
      "alt": "Quatro cards do carrossel Poucos escutam de verdade, da Torre de Babel ao fechamento sobre escuta ativa"
    },
    "lede": "Pinturas clássicas para falar de um assunto atual: quem é ouvido dentro de uma associação médica.",
    "intro": [
      "O Dr. Otávio Piltcher é otorrinolaringologista e usa o Instagram para discutir o futuro da ABORL, a associação brasileira da especialidade. O público são outros médicos, que precisam ser convencidos com argumentos e não com promessas."
    ],
    "details": [
      [
        "Ano",
        "2025"
      ],
      [
        "Cliente",
        "Dr. Otávio Piltcher"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Especialidade",
        "Otorrinolaringologia"
      ],
      [
        "Ferramentas",
        "Figma e Brands Decoded"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "A pintura como metáfora",
        "p": [
          "Para um assunto abstrato como representatividade, a escolha foi apoiar cada ideia em uma pintura clássica. A Torre de Babel abre o carrossel sobre escuta: todo mundo fala, poucos se entendem. Um filósofo pensativo questiona o que é ser representativo. Um homem com a mão em concha atrás da orelha encerra o tema da escuta ativa, que conversa diretamente com a especialidade do médico.",
          "As obras em tons terrosos dão peso histórico à conversa, e o amarelo-mostarda aparece nas palavras-chave e em cards de fundo inteiro, criando pausas de respiro entre os blocos de texto mais densos."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/otavio/",
        "files": [
          "escuta-1",
          "escuta-2",
          "escuta-3",
          "escuta-4",
          "escuta-5",
          "escuta-6",
          "escuta-7"
        ],
        "label": "Carrossel Poucos escutam de verdade",
        "titles": [
          "Nossa associação virou Torre de Babel? Todo mundo fala, mas poucos escutam de verdade nas decisões coletivas.",
          "Baby boomers, millennials e geração Z têm sotaques, ritmos e contribuições próprias. A paixão é comum. Falta escuta e senso de poder coletivo.",
          "Concordo que a ABORL precise evoluir. Sem escuta estruturada, liderança vira ruído, desgaste, distância e desistência coletiva.",
          "Como associação: teríamos perdido a escuta? A cura exige mais que discursos, exige escuta ativa com método.",
          "Pelo menos metade silencia porque, sem escuta real, não se sente representada nas decisões coletivas.",
          "Todo médico é também educador, na comunidade e na associação.",
          "Representação legítima começa pela escuta ativa de quem vive a medicina."
        ],
        "cap": "Poucos escutam de verdade · Outubro de 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/otavio/",
        "files": [
          "representar-1",
          "representar-2",
          "representar-3",
          "representar-4",
          "representar-5",
          "representar-6",
          "representar-7",
          "representar-8"
        ],
        "label": "Carrossel Ser representativo ou saber representar",
        "titles": [
          "Ser representativo ou saber representar: diferença? Aparência não substitui competência.",
          "Ser representativo é parecer com o grupo. Saber representar é escutar, compreender, dialogar e agir por ele.",
          "Pertencer não basta. Diversidade importa, porém exige diálogo, preparo, responsabilidade e entregas para resultados.",
          "Simbolismo sem proposta não resolve problemas históricos.",
          "Ser parecido não basta. É preciso saber representar com escuta, método e entrega de verdade.",
          "Competência une. Aparência muitas vezes divide.",
          "Quero uma ABORL que escute todas as vozes.",
          "União não se decreta, constrói-se com respeito e entrega. Retrato do médico."
        ],
        "cap": "Ser representativo ou saber representar · Outubro de 2025."
      }
    ]
  },
  {
    "slug": "gabi-castello-branco",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Dra. Gabi Castello Branco",
    "year": "2025",
    "brio": true,
    "summary": "Carrosséis de endocrinologia que desmontam mitos sobre emagrecimento e tirzepatida, com a médica como rosto do conteúdo.",
    "cover": {
      "src": "img/covers/gabi.jpg",
      "alt": "Quatro cards dos carrosséis da Dra. Gabi Castello Branco em grade sobre fundo neutro"
    },
    "hero": {
      "src": "img/heroes/gabi.jpg",
      "ratio": "2000/860",
      "alt": "Carrossel Tirzepatida e o risco, do card de abertura com a médica ao fechamento"
    },
    "lede": "Informação responsável sobre emagrecimento, com o rosto e a voz da médica do primeiro ao último card.",
    "intro": [
      "A Dra. Gabi Castello Branco é endocrinologista e usa o Instagram para falar de emagrecimento, metabolismo e uso de medicamentos como a tirzepatida. É um assunto em alta, em que a desinformação circula mais rápido que a orientação médica, e o conteúdo precisava ser atraente sem cair na mesma linguagem de promessa."
    ],
    "details": [
      [
        "Período",
        "Out — Dez 2025"
      ],
      [
        "Cliente",
        "Dra. Gabi Castello Branco"
      ],
      [
        "Feito no",
        "Grupo Brio"
      ],
      [
        "Especialidade",
        "Endocrinologia"
      ],
      [
        "Entregas",
        "Carrosséis para Instagram"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Direção visual",
        "p": [
          "Todos os carrosséis começam e terminam com uma fotografia da médica, que funciona como promessa de credibilidade e como assinatura. Entre as fotos, os cards alternam um vinho profundo e um creme suave, com linhas finas que ondulam ao fundo.",
          "Os títulos usam uma serifa alta, e a parte da frase que carrega a mensagem aparece em itálico negrito. Detalhes de navegação, como a indicação para arrastar e os pontos de progresso, mantêm a pessoa até o último card."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/gabi/",
        "files": [
          "verao-1",
          "verao-2",
          "verao-3",
          "verao-4",
          "verao-5",
          "verao-6"
        ],
        "label": "Carrossel 3 meses até o verão",
        "titles": [
          "3 meses até o verão, e sim, dá tempo de mudar o jogo. Retrato da médica.",
          "Primeiro ponto: álcool sabota o resultado.",
          "Fome excessiva não é disciplina, é sinal de desequilíbrio. Crie um déficit calórico leve e sustentável.",
          "Aumente a proteína, ela é sua aliada. Não é dieta da moda, é bioquímica a seu favor.",
          "Quer render no treino e manter o metabolismo ativo? Inclua a musculação na rotina.",
          "O plano não é sobre pressa. É sobre constância, equilíbrio e resultado duradouro. Retrato da médica."
        ],
        "cap": "3 meses até o verão · Outubro de 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/gabi/",
        "files": [
          "risco-1",
          "risco-2",
          "risco-3",
          "risco-4",
          "risco-5"
        ],
        "label": "Carrossel Tirzepatida e o risco",
        "titles": [
          "A tirzepatida funciona. Mas sozinha, ela também pode te colocar em risco. Retrato da médica.",
          "A tirzepatida modula hormônios. Parece simples, mas não é.",
          "Sem supervisão, os erros acontecem rápido. Diagrama circular com os principais riscos.",
          "No consultório, o tratamento não começa na caneta, começa no diagnóstico.",
          "A tirzepatida pode ser uma ferramenta poderosa. Sem orientação, pode ser um atalho perigoso. Retrato da médica."
        ],
        "cap": "Tirzepatida e o risco · Dezembro de 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/gabi/",
        "files": [
          "local-1",
          "local-2",
          "local-3",
          "local-4",
          "local-5"
        ],
        "label": "Carrossel O lugar da aplicação da tirzepatida",
        "titles": [
          "Você já ouviu que a tirzepatida aplicada na barriga funciona mais? Vamos direto ao ponto: isso não é verdade. Retrato da médica.",
          "A tirzepatida é absorvida de forma sistêmica. Mudar a região não aumenta, não acelera e não melhora o resultado.",
          "O que determina a eficácia não é onde você aplica.",
          "A única razão real para alternar o local da aplicação é simples: conforto.",
          "A forma como você aplica não muda o efeito. A forma como você é acompanhada, sim. Retrato da médica."
        ],
        "cap": "O lugar da aplicação da tirzepatida · Dezembro de 2025."
      }
    ]
  },
  {
    "slug": "sunset-verano",
    "type": "grafico",
    "discipline": "Identidade visual",
    "title": "Verano Sunset 23: Abertura do Verão",
    "year": "2023",
    "brio": false,
    "summary": "Identidade visual para a festa de abertura do verão em Estrela, RS, aplicada do Instagram ao letreiro que o público assinou.",
    "cover": {
      "src": "img/covers/verano.jpg",
      "alt": "Painel de lambes coloridos do Verano Sunset montado ao ar livre, entre árvores"
    },
    "hero": {
      "src": "img/verano-abertura.jpg",
      "ratio": "1370/771",
      "alt": "Área externa do evento ao entardecer, com o letreiro em forma de V e o logotipo Verano Sunset"
    },
    "lede": "Um universo de cores quentes, sóis em explosão e tipografia de impacto para fazer de uma festa de verão uma experiência com cara própria.",
    "intro": [
      "O Verano Sunset 23 marcou a abertura do verão em Estrela, RS, com música ao vivo em um sítio ao ar livre, do fim da tarde até a noite. A festa precisava de uma identidade que a separasse dos outros eventos da temporada e que acompanhasse o público do primeiro post no Instagram até a última música.",
      "Desenvolvi o projeto em parceria com a designer Vitória Simon. Juntos, criamos a marca e todas as peças que levaram essa marca para o espaço físico."
    ],
    "details": [
      [
        "Ano",
        "2023"
      ],
      [
        "Local",
        "Estrela, RS"
      ],
      [
        "Parceria",
        "Vitória Simon"
      ],
      [
        "Projeto",
        "Identidade visual"
      ],
      [
        "Entregas",
        "Lambes, letreiro, pulseiras, cardápio, redes sociais"
      ]
    ],
    "link": {
      "href": "https://www.behance.net/gallery/187626997/Verano-Sunset-23-Abertura-do-Verao-Identidade-Visual",
      "label": "Ver projeto no Behance"
    },
    "blocks": [
      {
        "type": "list",
        "h": "O que a identidade precisava provocar",
        "items": [
          [
            "Pertencimento",
            "Fazer o público querer fazer parte daquela experiência."
          ],
          [
            "Exclusividade",
            "Mostrar que não se tratava de apenas mais um evento na agenda."
          ],
          [
            "Impacto visual",
            "Ser reconhecida de longe e despertar curiosidade logo no primeiro contato."
          ],
          [
            "Personalidade",
            "Construir um universo visual próprio e fácil de lembrar."
          ],
          [
            "Energia e movimento",
            "Traduzir a intensidade da música e da experiência ao vivo."
          ],
          [
            "Fuga da rotina",
            "Sugerir uma realidade paralela, livre e fora do comum."
          ],
          [
            "Consistência",
            "Ligar toda a comunicação, dos materiais digitais à experiência presencial."
          ]
        ]
      },
      {
        "type": "text",
        "h": "Linguagem visual",
        "p": [
          "A resposta veio em cores quentes e saturadas, com rosa, laranja, amarelo e um lilás pontual que remetem ao pôr do sol. Os títulos usam uma tipografia pesada, de inspiração retrô, com sombra deslocada, e dividem espaço com sóis em explosão, estrelas, raios, coqueiros e ondas que atravessam as composições.",
          "Frases curtas e brincalhonas, como \"Vem pra Verano\" e \"Azar é verano\", dão voz à marca. O conjunto cria uma linguagem em movimento constante, que traduz a energia do som ao vivo e convida o público a sair da rotina."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-lambes.jpg",
            "ratio": "1211/771",
            "alt": "Cinco lambes da identidade Verano Sunset em rosa, laranja, amarelo e lilás"
          },
          {
            "src": "img/verano-painel.jpg",
            "ratio": "1211/771",
            "alt": "Painel formado pelos lambes, decorado com folhagens, montado no evento"
          }
        ],
        "cap": "Os lambes funcionam como módulos e, lado a lado, formam o painel do evento."
      },
      {
        "type": "text",
        "h": "Do papel para o espaço",
        "p": [
          "Os lambes foram pensados como peças modulares. Combinados, formam um grande painel que virou cenário de fotos e pano de fundo do palco. Espalhados por pilares e paredes, eles marcam o caminho do público pelo sítio e mantêm a identidade sempre à vista."
        ]
      },
      {
        "type": "image",
        "src": "img/verano-lambes-uso.jpg",
        "ratio": "1211/771",
        "alt": "Lambes colados em um pilar e público posando em frente ao painel",
        "cap": "O painel de lambes como cenário de fotos."
      },
      {
        "type": "text",
        "h": "Um letreiro para assinar",
        "p": [
          "A peça mais marcante do espaço foi uma grande letra V, projetada em 3D com 1,6 metro de altura antes de ser produzida em marcenaria. Ilustrada com coqueiros, flamingos e abacaxis, ela deixava espaço em branco de propósito.",
          "Ao longo da noite, o público escreveu seus nomes no letreiro e o transformou em um registro coletivo da festa. A peça deixou de ser só decoração e virou parte da experiência, o que respondia diretamente ao desejo de pertencimento."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-estrutura.jpg",
            "ratio": "1211/771",
            "alt": "Projeto 3D do letreiro em V com medidas e a peça em produção na marcenaria"
          },
          {
            "src": "img/verano-letreiro.jpg",
            "ratio": "1211/771",
            "alt": "Letreiro em V assinado pelo público à noite e uma convidada escrevendo nele"
          }
        ],
        "cap": "Do projeto 3D ao letreiro assinado pelo público."
      },
      {
        "type": "text",
        "h": "Os detalhes também comunicam",
        "p": [
          "As pulseiras diferenciam o público maior e menor de idade sem perder o visual da festa. Já o cardápio aplica a marca sobre uma fotografia em tons dourados, com títulos manuscritos que dão ao bar um ar mais sofisticado."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-pulseiras.jpg",
            "ratio": "1211/771",
            "alt": "Arte das pulseiras de identificação para menores e maiores de 18 anos"
          },
          {
            "src": "img/verano-pulseiras-uso.jpg",
            "ratio": "1211/771",
            "alt": "Pulseiras do Verano Sunset nos pulsos de convidados"
          }
        ],
        "cap": "Pulseiras de identificação."
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-cardapio.jpg",
            "ratio": "1211/771",
            "alt": "Arte do cardápio do bar com o logotipo Verano Sunset"
          },
          {
            "src": "img/verano-cardapio-mockup.jpg",
            "ratio": "925/771",
            "alt": "Cardápios impressos fixados em uma parede"
          }
        ],
        "cap": "Cardápio do bar."
      },
      {
        "type": "text",
        "h": "No digital",
        "p": [
          "No Instagram, a identidade conduziu toda a comunicação, do save the date ao anúncio das atrações e à página de venda de ingressos. Os posts usam a mesma paleta e a mesma tipografia das peças físicas. Assim, quem chegava ao evento reconhecia na hora o universo que já tinha visto no celular."
        ]
      },
      {
        "type": "image",
        "src": "img/verano-instagram.jpg",
        "ratio": "1211/771",
        "alt": "Três telas do Instagram do evento: save the date, anúncio das atrações e perfil",
        "cap": "Save the date, anúncio das atrações e perfil do evento."
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-celulares.jpg",
            "ratio": "1158/771",
            "alt": "Vários celulares exibindo os posts do evento sobre fundo laranja"
          },
          {
            "src": "img/verano-ingressos.jpg",
            "ratio": "1027/771",
            "alt": "Notebook exibindo a página de venda de ingressos do evento"
          }
        ],
        "cap": "Posts e página de ingressos com a mesma linguagem."
      }
    ]
  },
  {
    "slug": "psel-code",
    "type": "grafico",
    "discipline": "Campanha · Direção de arte",
    "title": "Processo Seletivo Co.De",
    "year": "2021",
    "brio": false,
    "summary": "Campanha em colagem digital para o processo seletivo da agência de Comunicação e Design da ESPM.",
    "cover": {
      "src": "img/covers/psel.jpg",
      "alt": "Recorte da colagem principal da campanha, com o logotipo Co.De em letras recortadas sobre fundo azul"
    },
    "hero": {
      "src": "img/psel-key-visual.jpg",
      "ratio": "1288/725",
      "alt": "Peça principal da campanha: colagem com o logotipo Co.De, a frase Alcançando o impossível e figuras retrô sobre uma cidade de letreiros"
    },
    "lede": "Fotos antigas, papel rasgado e letras recortadas para convidar estudantes a alcançar o impossível em equipe.",
    "intro": [
      "A Co.De é a agência de Comunicação e Design da ESPM, formada por estudantes. A cada semestre, ela abre um processo seletivo para receber novos membros, e a campanha de divulgação precisa chamar a atenção de colegas de cursos diferentes ao mesmo tempo.",
      "No segundo semestre de 2021, a campanha reuniu peças gráficas e digitais, um site de inscrições e as redes sociais da agência. Atuei na direção de arte com Lauren Pacheco e João Vitor Paiva, dentro de uma equipe que também envolvia planejamento, atendimento, redação e produção audiovisual."
    ],
    "details": [
      [
        "Período",
        "2º semestre de 2021"
      ],
      [
        "Cliente",
        "Co.De · ESPM"
      ],
      [
        "Papel",
        "Direção de arte"
      ],
      [
        "Entregas",
        "Key visual, colagens, site, redes sociais"
      ]
    ],
    "link": {
      "href": "https://www.behance.net/gallery/132750667/PSEL-20212",
      "label": "Ver projeto no Behance"
    },
    "blocks": [
      {
        "type": "text",
        "h": "O conceito",
        "p": [
          "A ideia central partia do trabalho em equipe: pessoas com talentos diferentes somando forças para chegar a resultados que nenhuma alcançaria sozinha. Daí veio a assinatura da campanha, Alcançando o impossível, e o convite para que o estudante se tornasse um coder."
        ]
      },
      {
        "type": "text",
        "h": "Colagem como linguagem",
        "p": [
          "Para traduzir o conceito, escolhemos a colagem digital. Fotografias antigas em preto e branco, letreiros de grandes cidades, papéis rasgados em camadas de azul, rosa e coral e letras recortadas no estilo de bilhete anônimo criam uma estética retrô e bem-humorada.",
          "A técnica também conversa com a própria mensagem da campanha. Assim como a equipe da agência, a colagem junta elementos de origens diferentes para formar uma imagem única."
        ]
      },
      {
        "type": "text",
        "h": "Uma colagem para cada área",
        "p": [
          "Cada área da agência ganhou uma composição construída em torno do objeto que define o dia a dia de quem trabalha nela. No digital, a caneta da mesa digitalizadora. Na agência, o computador onde chegam os briefings e nascem as artes. No audiovisual, uma claquete e um rádio que dançam juntos. Na moda, Coco Chanel caminhando por Paris. Na fotografia, a câmera."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/psel-digital.jpg",
            "ratio": "1288/725",
            "alt": "Colagem da área digital: figura de fraque com um monitor no lugar da cabeça entre prédios de empresas de tecnologia"
          },
          {
            "src": "img/psel-agencia.jpg",
            "ratio": "1288/725",
            "alt": "Colagem da área de agência: mulher com um notebook no lugar da cabeça, sentada sobre prédios, segurando um caderno de briefing"
          }
        ],
        "cap": "Digital e Agência."
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/psel-audiovisual.jpg",
            "ratio": "1288/725",
            "alt": "Colagem da área de áudio e vídeo: figura feminina com coroa entre microfone, refletor, disco e caixa de som"
          },
          {
            "src": "img/psel-moda.jpg",
            "ratio": "1288/725",
            "alt": "Colagem da área de moda: Coco Chanel com bolsa ao lado da Torre Eiffel e manequins de costura"
          }
        ],
        "cap": "Áudio e vídeo, e Moda."
      },
      {
        "type": "image",
        "src": "img/psel-foto.jpg",
        "ratio": "1288/725",
        "alt": "Colagem da área de fotografia: fotógrafa sentada sobre um prédio com câmeras e celulares voando com asas",
        "cap": "Fotografia."
      },
      {
        "type": "text",
        "h": "Site e redes",
        "p": [
          "A mesma linguagem chegou a um site com todas as informações sobre vagas e cargos, onde os estudantes faziam a inscrição. No Instagram da agência, a sequência de posts transformou o feed em um grande mural de colagens."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/psel-site.jpg",
            "ratio": "1288/725",
            "alt": "Notebook exibindo o site de inscrições do processo seletivo"
          },
          {
            "src": "img/psel-instagram.jpg",
            "ratio": "1288/725",
            "alt": "Dois celulares exibindo o feed e um post da campanha no Instagram da Co.De"
          }
        ],
        "cap": "Site de inscrições e Instagram da agência."
      },
      {
        "type": "list",
        "h": "Ficha técnica",
        "items": [
          [
            "Gestão de projeto",
            "Marina Gadea"
          ],
          [
            "Atendimento",
            "Amanda Chagas"
          ],
          [
            "Planejamento",
            "Alice Groh e Laura Fernandes"
          ],
          [
            "Produção audiovisual",
            "Bernardo Appel, Pedro Macedo, Pedro Yamamoto, Savini Reichelt, Carolina Campagna, Pâmela Giotti e Gabriel Vargas"
          ],
          [
            "Direção de arte",
            "Lauren Pacheco, Caio Carneiro (Caio Dreyer) e João Vitor Paiva"
          ],
          [
            "Direção de arte web",
            "Pedro Lima"
          ],
          [
            "Redação",
            "Leticia Forigo"
          ]
        ]
      }
    ]
  }
];
