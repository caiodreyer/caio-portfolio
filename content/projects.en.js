/*
  PROJECTS · ENGLISH VERSION
  ---------------------------------------------------------------
  Same structure as content/projects.js. The order shown on the site comes
  from content/projects.js; a project missing here falls back to Portuguese.
  To add a project in English, copy its block from projects.js and translate
  the text fields (keep slug, type, images and file names unchanged).
*/
window.PROJECTS_EN = [
  {
    "slug": "marcelo-marins",
    "type": "web",
    "discipline": "Landing page",
    "title": "Dr. Marcelo Marins",
    "year": "2026",
    "brio": true,
    "summary": "A landing page for a clinical weight-loss doctor that starts by debunking myths and ends by filtering for the right patient.",
    "cover": {
      "src": "img/covers/marins.jpg",
      "alt": "Top of Dr. Marcelo Marins's landing page on a neutral background"
    },
    "hero": {
      "src": "img/marins-hero.jpg",
      "ratio": "1800/752",
      "alt": "Landing page opening: If fad diets regulated biology, you wouldn't be stuck on a plateau, next to the doctor's portrait"
    },
    "lede": "A page that first takes the blame off the patient, and only then introduces the treatment.",
    "intro": [
      "Dr. Marcelo Marins works with clinical weight loss and metabolic health, grounded in integrative and longevity medicine. His typical patient has tried everything, from low carb to fasting and fat burners, and arrives frustrated by yo-yo dieting. The page was built from scratch to turn that frustration into a booked appointment."
    ],
    "details": [
      [
        "Year",
        "2026"
      ],
      [
        "Client",
        "Dr. Marcelo Marins"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Role",
        "Digital and UX/UI designer"
      ],
      [
        "Deliverable",
        "Landing page"
      ],
      [
        "Field",
        "Clinical weight loss and integrative medicine"
      ]
    ],
    "tldr": [
      [
        "Challenge",
        "Speak to people tired of diets that didn't work, in a niche full of quick promises, and attract patients ready for serious, ongoing care."
      ],
      [
        "Solution",
        "A landing page that debunks weight-loss myths, explains the method in four steps and makes clear, before booking, who the treatment is for."
      ],
      [
        "My role",
        "Content architecture, interface design and adapting the doctor's identity for the web."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Start with what the patient has already tried",
        "p": [
          "The opening headline provokes: if fad diets regulated biology, you wouldn't be stuck on a plateau. The line acknowledges the visitor's effort and shifts the blame. The problem is no longer a lack of willpower but insulin resistance, inflammation and a disorganized routine.",
          "Right below, the Metabolic stagnation cycle block puts three common beliefs in quotes, as things the patient has said themselves, and answers each one with what actually happens in the body. It is the moment people recognize themselves and start to trust the page."
        ]
      },
      {
        "type": "image",
        "src": "img/marins-mitos.jpg",
        "ratio": "1318/337",
        "alt": "Three myth cards: Just eat less and exercise more, Fasting fixes everything and This supplement burns it all, each with an explanation below",
        "cap": "Three myths written in the patient's voice, each answered by the doctor."
      },
      {
        "type": "text",
        "h": "Making the appointment concrete",
        "p": [
          "For someone who has never had this kind of care, a medical appointment can feel vague. The page solves this in two ways. A Precision Diagnosis card, with bars for inflammatory profile and hormonal efficiency, shows visually that treatment starts from data. Then the care process is explained in four numbered steps, from the individual assessment to periodic adjustments."
        ]
      },
      {
        "type": "image",
        "src": "img/marins-diagnostico.jpg",
        "ratio": "1332/443",
        "alt": "Metabolism vs. Calories and Body Signals section next to the dark Precision Diagnosis card with progress bars",
        "cap": "The diagnosis card turns the idea of data-driven medicine into a visual element."
      },
      {
        "type": "text",
        "h": "Filter before converting",
        "p": [
          "Before the booking button, the Is this treatment for you? section splits the audience into two columns. The green one describes who should book. The red one says frankly who won't find what they're looking for, such as people after seven-day magic formulas.",
          "Turning visitors away on a conversion page may seem counterintuitive, but the filter improves the quality of bookings and reinforces the doctor's serious positioning. Whoever keeps reading arrives at the appointment with the right expectations."
        ]
      },
      {
        "type": "image",
        "src": "img/marins-para-voce.jpg",
        "ratio": "1038/477",
        "alt": "Is this treatment for you section, with a green column for who it suits and a red column for who it doesn't",
        "cap": "Two columns that qualify the patient before booking."
      },
      {
        "type": "scroll",
        "src": "img/marins-completa.jpg",
        "label": "Landing page · Dr. Marcelo Marins",
        "alt": "Dr. Marcelo Marins's full landing page: opening, myths, quote, precision diagnosis, four-step care process, who the treatment is for, Google reviews, about the doctor and contact",
        "cap": "The full page. Scroll inside the window to go from the first myth to booking."
      },
      {
        "type": "system",
        "id": "marins",
        "h": "A blue system that leads to the appointment",
        "p": "The brand's midnight blue and petrol blue lead the page, and red appears only to flag myths and restrictions. A single typeface, in strongly contrasting weights, organizes the whole hierarchy.",
        "colors": [
          {
            "name": "Deep Cove",
            "hex": "#050B2F",
            "use": "Headings, highlight bands and footer"
          },
          {
            "name": "Bondi Blue",
            "hex": "#0097B2",
            "use": "Buttons, text highlights and underlines"
          },
          {
            "name": "Iceberg",
            "hex": "#DAEFF4",
            "use": "Section backgrounds"
          },
          {
            "name": "Cutty Sark",
            "hex": "#4B7166",
            "use": "Diagnosis card"
          },
          {
            "name": "Athens Gray",
            "hex": "#F6F7F9",
            "use": "Information boxes"
          },
          {
            "name": "Mojo",
            "hex": "#BD3B47",
            "use": "Myths and restrictions"
          },
          {
            "name": "Slate Gray",
            "hex": "#6B7F86",
            "use": "Supporting text"
          }
        ],
        "fonts": [
          {
            "family": "Manrope",
            "gf": "Manrope:wght@400;600;800",
            "weights": "Regular, Semibold and Extrabold",
            "use": "Headings, body text and buttons",
            "sample": "If fad diets regulated biology, you wouldn't be stuck on a plateau.",
            "aa": 800,
            "sw": 800
          }
        ],
        "components": [
          {
            "src": "img/ds/marins-botao.jpg",
            "label": "Primary button"
          },
          {
            "src": "img/ds/marins-titulo.jpg",
            "label": "Section heading with underline"
          },
          {
            "src": "img/ds/marins-card-mito.jpg",
            "label": "Myth card"
          },
          {
            "src": "img/ds/marins-caixa-info.jpg",
            "label": "Information box"
          },
          {
            "src": "img/ds/marins-card-diagnostico.jpg",
            "label": "Diagnosis card"
          },
          {
            "src": "img/ds/marins-etapa.jpg",
            "label": "Care step"
          },
          {
            "src": "img/ds/marins-qualificacao.jpg",
            "label": "Qualification columns",
            "wide": true
          },
          {
            "src": "img/ds/marins-selo.jpg",
            "label": "Professional registration badge"
          }
        ]
      },
      {
        "type": "text",
        "h": "Identity and social proof",
        "p": [
          "The palette starts from the brand's navy and cyan, with very light blue backgrounds that keep the page airy despite the amount of information. A dark band with the doctor's quote, cut by an arc, marks the turn from problem to solution. Further down, Google reviews and the medical license badge close the argument with credibility before the final call to action."
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
    "summary": "A landing page built from scratch, based on the client's identity, to bring in new nutrology and hormonal health patients.",
    "cover": {
      "src": "img/covers/fabio.jpg",
      "alt": "Top of Dr. Fábio Pantaleão's landing page on a neutral background"
    },
    "hero": {
      "src": "img/fabio-hero.jpg",
      "ratio": "1921/800",
      "alt": "Landing page opening, with the question about low energy and the button to book a hormonal assessment"
    },
    "lede": "A page that starts from symptoms the patient recognizes and guides them, block by block, to booking.",
    "intro": [
      "Dr. Fábio Pantaleão practices in São José do Rio Preto, SP, Brazil, focusing on nutrology and hormonal support. He needed a digital channel to bring new patients to his practice, and the landing page was created to do exactly that.",
      "I developed the project in February 2026, while working at Grupo Brio. The page was built from scratch with one central goal: turning a visit from someone who suspects a hormonal imbalance into a booked assessment."
    ],
    "details": [
      [
        "Date",
        "February 2026"
      ],
      [
        "Client",
        "Dr. Fábio Pantaleão"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Role",
        "Digital and UX/UI designer"
      ],
      [
        "Deliverable",
        "Landing page"
      ]
    ],
    "tldr": [
      [
        "Challenge",
        "Bring new patients through digital channels to a nutrology and hormonal health practice."
      ],
      [
        "Solution",
        "A landing page built from scratch that guides visitors from their symptoms to booking an assessment."
      ],
      [
        "My role",
        "Content structure, interface design and adapting the client's visual identity for the web."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Why a landing page",
        "p": [
          "A landing page for a doctor is a page created with one specific marketing goal: turning people interested in a treatment into potential patients and encouraging them to book an appointment.",
          "Unlike an institutional website, which gathers a lot of information about the professional, a landing page is more strategic and focused on conversion. Every section exists to bring the visitor closer to a single action."
        ]
      },
      {
        "type": "text",
        "h": "Starting point",
        "p": [
          "The client already had a defined visual identity, with a logo, palette and typography. Instead of reinventing the brand, I used that material as the foundation and translated the identity into a digital environment.",
          "That meant deciding how colors behave on large areas and on buttons, how typography handles long headlines and what the rhythm between light and dark sections should be. The result is a page that feels like a natural extension of the practice, not a separate piece."
        ]
      },
      {
        "type": "image",
        "src": "img/fabio-servicos.jpg",
        "ratio": "1120/600",
        "alt": "Care area cards: hormonal support, sports nutrology, weight loss, injectable therapy and mood disorders",
        "cap": "Care areas presented as short cards, each with an icon and one sentence."
      },
      {
        "type": "text",
        "h": "Structure",
        "p": [
          "Before designing, I organized the content around the path a patient takes before deciding to book. The page opens by talking about symptoms in the words of those who feel them, such as fatigue, low libido and lack of energy, so visitors recognize themselves right above the fold.",
          "Next come the care areas, which show there is a treatment for that problem, and patient stories, which bring social proof. The doctor's background supports his authority with credentials and professional registration. Finally, the differentiators and FAQ answer the last objections, especially about the safety of hormone implants and who can undergo hormone replacement.",
          "Almost every block ends with a call to book. That way, the decision is always one click away, at the exact moment the visitor is convinced."
        ]
      },
      {
        "type": "scroll",
        "src": "img/fabio-completa.jpg",
        "label": "Landing page · Dr. Fábio Pantaleão",
        "alt": "Dr. Fábio Pantaleão's full landing page: opening, care areas, testimonials, about the doctor, differentiators, FAQ and contact",
        "cap": "The full page. Scroll inside the window to go from the top to the contact section."
      },
      {
        "type": "system",
        "id": "fabio",
        "h": "Green to trust, orange to act",
        "p": "Forest green carries the page, while coral orange is reserved for actions and the highlighted card. Three typefaces split clearly defined roles: the slab serif for headlines and cards, the geometric sans for section titles and another sans for body text and buttons.",
        "colors": [
          {
            "name": "Stromboli",
            "hex": "#3B655B",
            "use": "Section backgrounds and cards"
          },
          {
            "name": "Flamingo",
            "hex": "#EC5127",
            "use": "Buttons, highlighted card and card titles"
          },
          {
            "name": "Cutty Sark",
            "hex": "#5A7971",
            "use": "About the doctor section"
          },
          {
            "name": "Snow Drift",
            "hex": "#F6F8F5",
            "use": "Light backgrounds and menu"
          },
          {
            "name": "White",
            "hex": "#FFFFFF",
            "use": "Cards on green"
          },
          {
            "name": "Cape Cod",
            "hex": "#3F504C",
            "use": "Headings on light backgrounds"
          },
          {
            "name": "Blue Smoke",
            "hex": "#707D78",
            "use": "Supporting text"
          }
        ],
        "fonts": [
          {
            "family": "Roboto Slab",
            "gf": "Roboto+Slab:wght@300;400;700",
            "fallback": "serif",
            "weights": "Light, Regular and Bold",
            "use": "Opening headline, card titles and text",
            "sample": "Do you feel your energy, stamina and libido dropping?",
            "aa": 400,
            "sw": 300
          },
          {
            "family": "Montserrat",
            "gf": "Montserrat:wght@400",
            "weights": "Regular",
            "use": "Section titles",
            "sample": "How can I help you?",
            "aa": 400,
            "sw": 400
          },
          {
            "family": "Poppins",
            "gf": "Poppins:wght@400;600;700",
            "weights": "Regular, Semibold and Bold",
            "use": "Body text and buttons",
            "sample": "I invite you to look deeply into your hormonal health.",
            "aa": 600,
            "sw": 400
          }
        ],
        "components": [
          {
            "src": "img/ds/fabio-botao.jpg",
            "label": "Call-to-action button"
          },
          {
            "src": "img/ds/fabio-titulo.jpg",
            "label": "Section title"
          },
          {
            "src": "img/ds/fabio-card-destaque.jpg",
            "label": "Highlighted card"
          },
          {
            "src": "img/ds/fabio-card-area.jpg",
            "label": "Care area card"
          },
          {
            "src": "img/ds/fabio-depoimento.jpg",
            "label": "Testimonial card"
          },
          {
            "src": "img/ds/fabio-diferencial.jpg",
            "label": "Differentiator card"
          },
          {
            "src": "img/ds/fabio-faq.jpg",
            "label": "FAQ card"
          }
        ]
      },
      {
        "type": "text",
        "h": "Visual language",
        "p": [
          "The brand's deep green carries a tone of health and trust. Orange appears only on calls to action and the main card, so the next step is always the most visible element on screen.",
          "White cards on the green background organize short pieces of information into easy-to-scan blocks, a choice also made with mobile reading in mind. Alternating light and dark sections marks the move from one topic to the next and gives rhythm to a long page."
        ]
      },
      {
        "type": "image",
        "src": "img/fabio-faq.jpg",
        "ratio": "800/475",
        "alt": "FAQ about hormone implants and hormone replacement",
        "cap": "The FAQ answers the most common objections before the visitor gets in touch."
      }
    ]
  },
  {
    "slug": "alexandra-galhardo",
    "type": "web",
    "discipline": "Landing page",
    "title": "Dr. Alexandra Galhardo",
    "year": "2025",
    "brio": true,
    "summary": "A landing page built from scratch, based on the doctor's identity, to attract patients looking for weight loss, hormonal health and longevity.",
    "cover": {
      "src": "img/covers/alexandra.jpg",
      "alt": "Top of Dr. Alexandra Galhardo's landing page on a neutral background"
    },
    "hero": {
      "src": "img/alexandra-hero.jpg",
      "ratio": "1920/788",
      "alt": "Landing page opening, with the doctor's portrait next to the question about energy"
    },
    "lede": "A warm, sophisticated page that introduces the doctor before the treatment and guides the patient to an assessment.",
    "intro": [
      "Dr. Alexandra Galhardo practices in Ribeirão Preto, SP, Brazil, focusing on weight loss, hormonal modulation, performance and longevity, with a mostly female audience. She wanted to attract more patients online, with a page that matched the level of care she offers in her practice.",
      "I developed the landing page in 2025, while working at Grupo Brio. The project started from scratch with a clear goal: leading the visitor to book a personalized assessment."
    ],
    "details": [
      [
        "Date",
        "2025"
      ],
      [
        "Client",
        "Dr. Alexandra Galhardo"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Role",
        "Digital and UX/UI designer"
      ],
      [
        "Deliverable",
        "Landing page"
      ]
    ],
    "tldr": [
      [
        "Challenge",
        "Attract more patients, mostly women, without losing the brand's sophistication."
      ],
      [
        "Solution",
        "An editorial landing page, with the doctor front and center and her specialties translated into benefits."
      ],
      [
        "My role",
        "Content structure, interface design and adapting the client's visual identity for the web."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Why a landing page",
        "p": [
          "A medical landing page serves a different purpose than an institutional website. Instead of gathering everything about the professional, it focuses attention on a single action: booking an appointment.",
          "That's why every block was written and designed to turn the visitor's interest into a decision, with no distractions or side paths."
        ]
      },
      {
        "type": "text",
        "h": "Starting point",
        "p": [
          "The doctor's visual identity already existed and was the basis for every decision. Warm coffee and sand tones, an elegant serif and portrait photography called for a more editorial, intimate atmosphere, very different from the clinical look common in healthcare.",
          "My job was to bring that identity to the web: turning the palette into surfaces, buttons and states, organizing the typography into a clear hierarchy and giving photography the prominence it deserves."
        ]
      },
      {
        "type": "image",
        "src": "img/alexandra-servicos.jpg",
        "ratio": "980/715",
        "alt": "Specialty cards: weight loss, hormonal modulation, performance and vitality, longevity",
        "cap": "Each specialty on two levels: what the treatment is and what the patient gains from it."
      },
      {
        "type": "text",
        "h": "Structure",
        "p": [
          "The opening puts the doctor and the question side by side. The photo creates closeness from the very first contact, and the headline speaks to a feeling the visitor recognizes: less energy and a body that no longer responds the way it used to.",
          "In the specialties section, each card separates what the treatment is from the benefit it brings. This split translates medical terms into concrete benefits and helps the patient identify with one of the areas of care.",
          "Next come patient stories, alongside the Google rating, the doctor's introduction with her medical license highlighted and the differentiators of her care. The footer brings together every contact channel, with WhatsApp as the main shortcut and a map of the practice."
        ]
      },
      {
        "type": "scroll",
        "src": "img/alexandra-completa.jpg",
        "label": "Landing page · Dr. Alexandra Galhardo",
        "alt": "Dr. Alexandra Galhardo's full landing page: opening, specialties, testimonials, about the doctor, differentiators and contact",
        "cap": "The full page. Scroll inside the window to go from the top to the contact section."
      },
      {
        "type": "system",
        "id": "alexandra",
        "h": "Coffee, sand and an editorial serif",
        "p": "A warm palette of coffee and sand gives the page the feel of a magazine. The serif is used for key headlines, while the sans handles the interface, section titles and body text.",
        "colors": [
          {
            "name": "English Walnut",
            "hex": "#382922",
            "use": "Buttons, badge and footer"
          },
          {
            "name": "Zeus",
            "hex": "#241B16",
            "use": "Headings"
          },
          {
            "name": "Cement",
            "hex": "#8C6A61",
            "use": "Underlines and details"
          },
          {
            "name": "Americano",
            "hex": "#82746D",
            "use": "Labels and supporting text"
          },
          {
            "name": "Desert Storm",
            "hex": "#F7F7F5",
            "use": "Page background"
          },
          {
            "name": "Pampas",
            "hex": "#F3F0EE",
            "use": "Icon backgrounds"
          },
          {
            "name": "Galliano",
            "hex": "#EAB40A",
            "use": "Ratings"
          }
        ],
        "fonts": [
          {
            "family": "PT Serif",
            "gf": "PT+Serif:wght@400;700",
            "fallback": "serif",
            "weights": "Regular and Bold",
            "use": "Key headlines",
            "sample": "Do you feel your energy has dropped?",
            "aa": 700,
            "sw": 700
          },
          {
            "family": "Manrope",
            "gf": "Manrope:wght@400;600;700",
            "weights": "Regular, Semibold and Bold",
            "use": "Section titles, body text, labels and buttons",
            "sample": "Science and care at every step of your transformation",
            "aa": 600,
            "sw": 700
          }
        ],
        "components": [
          {
            "src": "img/ds/alexandra-botao.jpg",
            "label": "Primary button"
          },
          {
            "src": "img/ds/alexandra-titulo.jpg",
            "label": "Label, section title and underline",
            "wide": true
          },
          {
            "src": "img/ds/alexandra-card-especialidade.jpg",
            "label": "Specialty card"
          },
          {
            "src": "img/ds/alexandra-depoimento.jpg",
            "label": "Testimonial card"
          },
          {
            "src": "img/ds/alexandra-selo.jpg",
            "label": "Professional registration badge"
          },
          {
            "src": "img/ds/alexandra-diferencial.jpg",
            "label": "Differentiator card"
          },
          {
            "src": "img/ds/alexandra-nota.jpg",
            "label": "Google rating"
          }
        ]
      },
      {
        "type": "text",
        "h": "Visual language",
        "p": [
          "Deep brown works as the action color. It appears on buttons and in the footer and guides the eye to booking without breaking the page's calm atmosphere. The light background and white cards leave plenty of breathing room between blocks, reinforcing the idea of attentive, unhurried care.",
          "A serif for headlines and a sans-serif for body text balance elegance and legibility. The medical license badge, overlaid on the photograph, combines closeness and authority in a single element."
        ]
      },
      {
        "type": "image",
        "src": "img/alexandra-sobre.jpg",
        "ratio": "1320/820",
        "alt": "About the doctor section, with portrait and professional registration badge",
        "cap": "Portrait and professional registration in the same element."
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
    "summary": "A landing page for a nutrologist with a background in orthopedics, built to turn a technical differentiator into new patients.",
    "cover": {
      "src": "img/covers/cristiano.jpg",
      "alt": "Top of Dr. Cristiano Cruz's landing page on a neutral background"
    },
    "hero": {
      "src": "img/cristiano-hero.jpg",
      "ratio": "1920/570",
      "alt": "Landing page opening, with the question about fatigue and pain next to the doctor's portrait"
    },
    "lede": "A page that speaks to the patient in the first person and makes the combination of nutrology and orthopedics its central argument.",
    "intro": [
      "Dr. Cristiano Cruz is a nutrologist working with weight loss and hormone replacement in Uberlândia, MG, Brazil. What sets him apart from others in the field is his training in orthopedics, which allows him to treat metabolism, pain and mobility at the same time.",
      "In 2025, he needed a page that could explain this combination to people who had never heard of it and, from there, generate new bookings. I designed the landing page from scratch with that dual role: to inform and to convert."
    ],
    "details": [
      [
        "Date",
        "2025"
      ],
      [
        "Client",
        "Dr. Cristiano Cruz"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Role",
        "Digital and UX/UI designer"
      ],
      [
        "Deliverable",
        "Landing page"
      ],
      [
        "Field",
        "Nutrology and orthopedics"
      ]
    ],
    "tldr": [
      [
        "Challenge",
        "Communicate an unusual offer that combines nutrology and orthopedics, and turn that differentiator into booked appointments."
      ],
      [
        "Solution",
        "A landing page written in the doctor's own voice, which starts from the patient's pain and fatigue and presents the integrated approach as the answer."
      ],
      [
        "My role",
        "Content architecture, interface design and translating the Núcleo Dr. Cristiano Cruz identity into digital."
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "From logo to screen",
        "p": [
          "The starting point was the Núcleo Dr. Cristiano Cruz brand, with its continuous-line monogram and a palette of soft greens. From that material, I built the page's visual system: mint green became the section background and button color, light gray started separating the blocks, and the geometric sans-serif typography got a clear scale between headlines and body text.",
          "The logo reappears in the differentiators section, next to a photo of the doctor, like a signature that closes the introduction before the contact section."
        ]
      },
      {
        "type": "image",
        "src": "img/cristiano-servicos.jpg",
        "ratio": "1260/680",
        "alt": "How can I help you section, with five service cards on a mint green background",
        "cap": "The five areas of care, each with a thin-line icon and a short description."
      },
      {
        "type": "text",
        "h": "A first-person conversation",
        "p": [
          "Many medical pages talk about the professional. This one talks as the professional. The opening asks whether the visitor feels tired, low on energy and in pain, and then answers in a personal tone, with the doctor introducing himself and saying he knows how to help.",
          "This choice of voice brings the patient closer and reduces the distance medical language usually creates. It also supports one of the page's differentiators: the doctor has been through his own health journey and brings that experience to his practice."
        ]
      },
      {
        "type": "scroll",
        "src": "img/cristiano-completa.jpg",
        "label": "Landing page · Dr. Cristiano Cruz",
        "alt": "Dr. Cristiano Cruz's full landing page: opening, services, testimonials, authority and experience, differentiators and contact",
        "cap": "The full page. Scroll inside the window to follow the path to the contact section."
      },
      {
        "type": "system",
        "id": "cristiano",
        "h": "A lean system in mint green",
        "p": "A few elements, well repeated: the brand's mint green in highlight sections, a single typeface and white cards with rounded corners.",
        "colors": [
          {
            "name": "Jet Stream",
            "hex": "#BBD9D1",
            "use": "Highlight and contact sections"
          },
          {
            "name": "Gulf Stream",
            "hex": "#82B8AB",
            "use": "Buttons"
          },
          {
            "name": "Bunker",
            "hex": "#0B0E11",
            "use": "Headings"
          },
          {
            "name": "Abbey",
            "hex": "#4D5256",
            "use": "Body text"
          },
          {
            "name": "Athens Gray",
            "hex": "#F6F7F9",
            "use": "Page background"
          },
          {
            "name": "White",
            "hex": "#FFFFFF",
            "use": "Cards"
          }
        ],
        "fonts": [
          {
            "family": "Manrope",
            "gf": "Manrope:wght@400;600;700",
            "weights": "Regular, Semibold and Bold",
            "use": "Headings, body text and buttons",
            "sample": "Do you feel tired, low on energy, with pain that never seems to end?",
            "aa": 700,
            "sw": 700
          }
        ],
        "components": [
          {
            "src": "img/ds/cristiano-botao.jpg",
            "label": "Primary button"
          },
          {
            "src": "img/ds/cristiano-botao-secundario.jpg",
            "label": "Button on mint green"
          },
          {
            "src": "img/ds/cristiano-titulo.jpg",
            "label": "Section title"
          },
          {
            "src": "img/ds/cristiano-card-servico.jpg",
            "label": "Service card"
          },
          {
            "src": "img/ds/cristiano-depoimento.jpg",
            "label": "Testimonial card"
          },
          {
            "src": "img/ds/cristiano-diferencial.jpg",
            "label": "Differentiator item"
          }
        ]
      },
      {
        "type": "text",
        "h": "The page's path",
        "p": [
          "After the opening, the How can I help you section presents five areas of care, from hormone replacement to chronic pain management, in cards that can be read at a glance. Testimonials, gathered under Success Journeys, include name, age and profession, which makes the stories more concrete.",
          "The authority section brings together the doctor's background and specialist registrations. Next, the differentiators explain why the integrated approach is unique, and the final block concentrates WhatsApp, phone, social media, address and map. Calls to book always appear right after a strong argument, when the visitor is closest to deciding."
        ]
      },
      {
        "type": "image",
        "src": "img/cristiano-diferenciais.jpg",
        "ratio": "1175/473",
        "alt": "Our Differentiators section next to the Núcleo Dr. Cristiano Cruz logo and a portrait of the doctor",
        "cap": "The differentiators next to the brand, a signature before the contact section."
      },
      {
        "type": "text",
        "h": "Color and breathing room",
        "p": [
          "Mint green fills large areas, such as the services block, the authority section and the contact section, keeping the page light and associated with well-being. White cards with rounded corners make the content stand out on that background and keep reading comfortable.",
          "The doctor's portraits, with a neutral background and dark clothing, appear at chosen moments: in the opening, to build immediate trust, and in the authority and differentiators sections, as a reminder of who is behind the care."
        ]
      }
    ]
  },
  {
    "slug": "grupo-brio-institucional",
    "type": "grafico",
    "discipline": "Social media · Institutional",
    "title": "Grupo Brio",
    "year": "2025",
    "brio": true,
    "summary": "Carousels and manifestos for the agency's Instagram, selling branding and positioning with ideas, references and real numbers.",
    "cover": {
      "src": "img/covers/brio.jpg",
      "alt": "Four Grupo Brio and BRIO Lab pieces in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/brio.jpg",
      "ratio": "2000/860",
      "alt": "Four pieces side by side: brand recognition cover, cognitive engineering card, case card showing R$ 626,000 in revenue and a BRIO Lab manifesto"
    },
    "lede": "When the client is the agency itself, the content has to prove in practice what it sells.",
    "intro": [
      "Besides serving clients, I created content for Grupo Brio's own Instagram. The task was different: instead of selling a product, it had to sell a way of thinking about brands. Every piece had to show, through its own execution, the quality standard the agency promises."
    ],
    "details": [
      [
        "Year",
        "2025"
      ],
      [
        "Client",
        "Grupo Brio and BRIO Lab"
      ],
      [
        "Type",
        "Institutional communication"
      ],
      [
        "Deliverables",
        "Instagram carousels and manifestos"
      ],
      [
        "Format",
        "4:5"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Visual direction",
        "p": [
          "The authority carousels combine cinematic photography, classical painting and icons the audience recognizes instantly. Purple and lime green mark the keywords, and an italic serif appears at the turning points of the argument.",
          "One of the carousels tells, as a case study, the campaign I designed for Fazenda do Rosa, which reached R$ 626,000 in revenue with R$ 1,424 spent on ads."
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
        "label": "Brand recognition carousel",
        "titles": [
          "Brand recognition doesn't happen by chance, and it never has.",
          "Consistent narratives, strategic repetition and symbolic differentiation.",
          "Behind every memorable brand there is a precise architecture, built with method and intention.",
          "It doesn't happen by chance or organically.",
          "Cognitive engineering: brands become familiar because they occupy the mind frequently.",
          "Brands with a strong visual identity are seen as trustworthy, unique and legitimate.",
          "This symbol doesn't need to be complex, but it needs to be easily noticed.",
          "In the end, what the market calls recognition is a collision of familiarity, coherence and symbolism.",
          "Recognition is an invisible construction. It's not about going viral, it's about positioning."
        ],
        "cap": "Brand recognition · September 2025."
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
        "label": "Fazenda do Rosa case carousel",
        "titles": [
          "From R$ 1,500 to R$ 626,000: the real case of a guesthouse in Santa Catarina.",
          "We knew that if we went straight to the discount, we'd become just another post lost in the feed.",
          "On paper, it looked like just another 50% off lodging promotion.",
          "We were selling an experience, not a night's stay.",
          "The urgency became real.",
          "Paid traffic was only support. The value came from organic reach.",
          "It was a brand case: R$ 626,000 in revenue with R$ 1,424 spent on ads.",
          "Your brand has value, but doesn't communicate it with soul yet? Maybe the next case will be yours."
        ],
        "cap": "Fazenda do Rosa case · September 2025."
      },
      {
        "type": "text",
        "h": "Three covers for the same case",
        "p": [
          "The case was published with three different covers, all with the same headline over different photographs of the sea. Each image gives the same message a different tone: the forming wave suggests strength, the breaking wave suggests impact and the calm horizon suggests rest. This way, the content returned to the feed more than once without feeling repetitive."
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
        "label": "Three cover versions of the case",
        "titles": [
          "Cover version with a forming wave.",
          "Cover version with a breaking wave.",
          "Cover version with a calm sea and an island on the horizon."
        ],
        "cap": "The three covers published for the same case."
      },
      {
        "type": "text",
        "h": "BRIO Lab",
        "p": [
          "For BRIO Lab, the agency's creative arm, I created single pieces with the tone of a manifesto. A classic serif carries the sentence, and one keyword stands out, either in calligraphy, as in Brio and excellence, or in heavy lime-green italics, as in disinformation. Surreal images, from a crystal suit of armor to two kings on a chessboard, give the brand the feel of an art gallery."
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
        "label": "BRIO Lab manifestos",
        "titles": [
          "We will have everything if we have Brio.",
          "Our mission is to make excellence take its rightful place.",
          "Where good professionals stay silent, disinformation gains a voice."
        ],
        "cap": "BRIO Lab manifestos."
      }
    ]
  },
  {
    "slug": "rosa-campanhas",
    "type": "grafico",
    "discipline": "Digital campaign",
    "title": "Fazenda do Rosa",
    "year": "2025–26",
    "brio": true,
    "summary": "Instagram content for a beachfront guesthouse that sells the feeling of rest first and the offer second.",
    "cover": {
      "src": "img/covers/rosa-campanhas.jpg",
      "alt": "Four Fazenda do Rosa posts in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/rosa-campanhas.jpg",
      "ratio": "2000/860",
      "alt": "One post from each campaign side by side: You don't need a vacation, Where the pulse meets the pause and Trade exhaustion for renewal"
    },
    "lede": "Carousels that sell rest by starting with the feeling, and only then the offer.",
    "intro": [
      "Fazenda do Rosa is a beachfront guesthouse at Praia do Rosa, in Imbituba, Santa Catarina, Brazil, the same one behind the wedding proposal. People who look for it want a real break, and the communication had to sell the experience of being there before talking about price, both in brand positioning and on dates such as Carnival.",
      "The content follows one shared language: full-screen photography of the region, the Fazenda do Rosa signature spaced out at the top like a magazine masthead, and text where font weight highlights the words that tell the story. For Carnival, the brand's calligraphy enters the headline."
    ],
    "details": [
      [
        "Period",
        "Dec 2025 — Feb 2026"
      ],
      [
        "Client",
        "Fazenda do Rosa"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Deliverables",
        "Instagram carousels"
      ],
      [
        "Formats",
        "4:5 and 1:1"
      ]
    ],
    "blocks": [
      {
        "type": "stat",
        "value": "R$ 626K",
        "label": "in revenue with R$ 1,424 spent on ads",
        "note": "Result of the May 50% off campaign for Fazenda do Rosa, whose visuals I created at Grupo Brio, in the same language as the carousels below. The agency turned the result into a case study on its own Instagram.",
        "link": {
          "href": "#grupo-brio-institucional",
          "label": "See the case as told by the agency"
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
        "label": "You don't need a vacation carousel",
        "titles": [
          "You don't need a vacation. You need to remember who you are.",
          "Has autopilot taken over? When life becomes a checklist, it's time to pause.",
          "Why travel unlocks the soul: a change of scenery takes the brain out of alert mode.",
          "The reunion: at the Fazenda, away from the city noise, you start listening to your intuition again.",
          "Come home different. Is it time for this reunion? Link in bio."
        ],
        "cap": "You don't need a vacation · December 2025."
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
        "label": "Carnival 2026 carousel, Where the pulse meets the pause",
        "titles": [
          "Where the pulse meets the pause. Carnival 2026, Fazenda do Rosa.",
          "By day, the energy of Maram. By night, the refuge of the EcoSuite.",
          "Your strategic base for the holiday: 30% off EcoSuites, 3-night minimum.",
          "Last spots. Secure your place in paradise, book now."
        ],
        "cap": "Carnival 2026 · Where the pulse meets the pause."
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
        "label": "Carnival 2026 carousel, Start the year fully recharged",
        "titles": [
          "Start the year fully recharged. Carnival 2026, Fazenda do Rosa.",
          "Trade exhaustion for renewal. Celebrate at Maram and recharge at the EcoSuite.",
          "Exclusive offer: 30% off EcoSuites, 3-night minimum. The luxury of absolute privacy.",
          "Few units available for February. Secure your reset at the link."
        ],
        "cap": "Carnival 2026 · Start the year fully recharged."
      }
    ]
  },
  {
    "slug": "atria",
    "type": "grafico",
    "discipline": "Social media · AI illustration",
    "title": "Atria Intervenção",
    "year": "2026",
    "brio": true,
    "summary": "Editorial carousels that explain interventional radiology procedures to patients.",
    "cover": {
      "src": "img/covers/atria.jpg",
      "alt": "Four pages from the Atria Intervenção carousels in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/atria.jpg",
      "ratio": "2000/860",
      "alt": "Four pages side by side: uterine fibroid, uterine embolization, cryoablation and a closing page with the Atria brand"
    },
    "lede": "Sensitive medical topics told with the calm and clarity of a magazine.",
    "intro": [
      "Atria Intervenção practices interventional radiology in Passo Fundo, RS, Brazil: minimally invasive, image-guided treatments that often replace conventional surgery. Much of the audience has never heard of these procedures and comes to them after an already frightening diagnosis."
    ],
    "details": [
      [
        "Year",
        "2026"
      ],
      [
        "Client",
        "Atria Intervenção"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Specialty",
        "Interventional radiology"
      ],
      [
        "Deliverables",
        "Carousels and AI illustrations"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "A carousel that reads like a magazine",
        "p": [
          "Instead of standalone posts, the content follows a page system. Every card has the same header, with the clinic's name on one side and the motto Innovation and precision on the other, and page numbers in the footer. Reading alternates between full-screen photography and text pages in blue, white or coffee, which creates rhythm without breaking unity.",
          "Headlines use a high-contrast serif, mixing light and heavy weights so the key word jumps out of the sentence. Body text is set in a geometric sans, and information the patient can't miss gets a color background, like a highlighter."
        ]
      },
      {
        "type": "text",
        "h": "AI illustrations",
        "p": [
          "To explain the procedure without resorting to clinical images that could be frightening, I created the illustrations with artificial intelligence, in the style of an old black-and-white engraving. The technical line recalls anatomy books and conveys seriousness, while labels in the brand's blue point exactly to what the patient needs to see: the fibroid, the catheter and the result after treatment."
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
        "label": "Uterine embolization carousel",
        "titles": [
          "Were you told surgery is the only solution for your fibroid? There's something no one may have told you.",
          "A uterine fibroid is a benign tumor and one of the most common gynecological conditions. There is a minimally invasive alternative: uterine embolization.",
          "Uterine embolization is performed by interventional radiology, with no incisions, no general anesthesia and no removal of the uterus. Illustration of the procedure.",
          "Recovery is faster than with conventional surgery. Illustration of the fibroid before and after treatment.",
          "Knowing every available option is what makes it possible to choose what's best for your case."
        ],
        "cap": "Uterine embolization."
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
        "label": "Renal cryoablation carousel",
        "titles": [
          "A new resource for treating kidney cancer in the region. Photo of the team during the procedure.",
          "Not every kidney tumor needs to be treated the same way. Cases in which cryoablation may be considered.",
          "The procedure brought together the expertise of urology and interventional radiology. Photo with the team identified.",
          "Argon gas cryoablation expands treatment options. Atria Intervenção: preserving life with innovation and precision."
        ],
        "cap": "Renal cryoablation."
      }
    ]
  },
  {
    "slug": "rosa-casamento",
    "type": "grafico",
    "discipline": "Editorial design",
    "title": "Fazenda do Rosa: wedding proposal",
    "year": "2026",
    "brio": true,
    "summary": "A 30-page sales presentation to sell beachfront weddings at Praia do Rosa, Brazil.",
    "cover": {
      "src": "img/covers/rosa-casamento.jpg",
      "alt": "Pages from the Fazenda do Rosa wedding proposal laid out on a neutral background"
    },
    "hero": {
      "src": "img/rosa-casamento/05.jpg",
      "ratio": "16/9",
      "alt": "Proposal page with a photo of an outdoor ceremony, with guests and a sea view"
    },
    "lede": "A presentation that makes couples picture their own beachfront wedding before their first visit.",
    "intro": [
      "Wedding sales proposal for Fazenda do Rosa, a beachfront guesthouse at Praia do Rosa, in Imbituba, Santa Catarina, Brazil. The presentation brings together venues, food, experiences, lodging options, services and client testimonials.",
      "The layout is editorial: full-page photographs, calligraphic headlines and an olive green that echoes the guesthouse's landscape. I developed the material while working at Grupo Brio."
    ],
    "details": [
      [
        "Date",
        "2026"
      ],
      [
        "Client",
        "Fazenda do Rosa"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Deliverable",
        "Sales presentation, 30 pages"
      ],
      [
        "Location",
        "Praia do Rosa, Brazil"
      ]
    ],
    "blocks": [
      {
        "type": "deck",
        "dir": "img/rosa-casamento/",
        "label": "Wedding proposal",
        "cap": "The full presentation. Use the arrows or swipe to turn the pages.",
        "titles": [
          "Cover",
          "Proposal introduction",
          "Couple at the ceremony",
          "Wedding formats",
          "Outdoor ceremony",
          "Maram Wedding details",
          "Decorated hall",
          "Maram cuisine",
          "Exclusive experiences",
          "Experiences with add-on packages",
          "Groom's day",
          "Bride's brunch",
          "Beachfront luau",
          "Luau at night",
          "Lodging formats",
          "Exclusive-use format",
          "Restaurant",
          "Non-exclusive format",
          "Hot tub with a sea view",
          "Other accommodations",
          "Decorated suite",
          "Beach and Sea Cabins",
          "Wellness Cabins",
          "Garden Cabins",
          "Eco Suites",
          "Included services",
          "Bride and guest",
          "Suggestions",
          "Party",
          "Client testimonials"
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
    "summary": "Legal content for Brazilians with assets in the United States, with the look of a lifestyle magazine.",
    "cover": {
      "src": "img/covers/aragao.jpg",
      "alt": "Four cards from the Aragao Law carousels in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/aragao.jpg",
      "ratio": "2000/860",
      "alt": "Four cards from the joint tenancy carousel, with a speedboat, a villa, the headline Forty percent and the closing card"
    },
    "lede": "International law explained with the elegance its audience expects.",
    "intro": [
      "Aragao Law is a law firm in the United States specializing in international business law and immigration. Its audience is Brazilians who invest, live or plan to protect assets in the country, people used to high-end brands and impatient with dense legal content."
    ],
    "details": [
      [
        "Year",
        "2026"
      ],
      [
        "Client",
        "Aragao Law"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Field",
        "International business law and immigration"
      ],
      [
        "Deliverables",
        "Instagram carousels"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "A magazine, not a law office",
        "p": [
          "The visual identity avoids the cliché of scales and gavels. The ARAGAO LAW signature appears spaced out at the top, like a magazine name, and the line International Business Law & Immigration closes every card in the footer. Headlines use a classic serif that alternates roman and italic, and the palette moves between a deep green and off-white.",
          "The images show the audience's lifestyle: lakes, speedboats, villas and cities. Layouts vary between full-screen photos, framed photos and a vertical split between image and text, which keeps the rhythm without losing unity."
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
        "label": "Joint tenancy carousel",
        "titles": [
          "You bought property in the US in joint tenancy thinking you were protecting your family. You may have created a 40% exposure.",
          "It's common to hear that joint tenancy is a simple, efficient way to protect assets in the US.",
          "Joint tenancy is not an asset protection tool. It's a form of ownership.",
          "Forty percent. That's not protection. It's tax risk.",
          "Misinformation doesn't come from the law. It comes from generalization.",
          "There are proper instruments: trusts, LLCs, specific corporate structures.",
          "Before following any advice, assess the impact on your structure. International protection isn't opinion. It's technique."
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
        "label": "Real estate in Brazil and the United States carousel",
        "titles": [
          "What kind of property can you buy in Brazil and the United States in similar price ranges? A comparison of public listings.",
          "Comparison: a house in Franco da Rocha, SP, for R$ 360,000 and a house in Chicago for US$ 325,000.",
          "Comparison: a house in Franco da Rocha, SP, for R$ 360,000 and a house in Hobart, Indiana, for US$ 363,000."
        ],
        "cap": "Real estate in Brazil and the US."
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
    "summary": "Health campaigns for a hospital's Instagram in Pelotas, Brazil, from Yellow September to Women's Day, each with its own tone.",
    "cover": {
      "src": "img/covers/piltcher.jpg",
      "alt": "Three Hospital Piltcher carousel covers in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/piltcher.jpg",
      "ratio": "2000/860",
      "alt": "Four cards side by side: September is an invitation, sunscreen every day, But this mission isn't accomplished alone and This March 8"
    },
    "lede": "Dates on the health calendar turned into warm conversations, without losing a hospital's seriousness.",
    "intro": [
      "Hospital Piltcher is in Pelotas, RS, Brazil, and also signs its communication as Saúde Piltcher. Its Instagram follows the health calendar, with awareness campaigns and commemorative dates, speaking to patients and to the city's community at the same time. The challenge was to inform responsibly while still bringing the hospital closer to people."
    ],
    "details": [
      [
        "Period",
        "Aug 2025 — Mar 2026"
      ],
      [
        "Client",
        "Hospital Piltcher"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Location",
        "Pelotas, Brazil"
      ],
      [
        "Deliverables",
        "Instagram carousels"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Visual direction",
        "p": [
          "Headlines use condensed all-caps typography with keywords in color, giving the content the strength of a poster even on a phone screen. The base is the brand's blue and aqua, and each campaign gets its own variation: lime green over sunset landscapes for Yellow September, beach images with a film texture for summer and a magazine frame, with a header and navigation bar, for Women's Day.",
          "For Women's Day, photographs of the hospital's own team take center stage. Instead of generic images, the carousel shows the people who keep the hospital running, from the technical director to everyday staff."
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
        "label": "Yellow September carousel",
        "titles": [
          "September is an invitation: take care of your mind today, not only when it hurts.",
          "Brazil in context: data on anxiety and depression.",
          "Talking about how you feel isn't weakness. It's courage and the first step to reorganizing your life.",
          "Watch for the signs. Prevention happens day to day.",
          "In a crisis, ask for help immediately. Call CVV 188.",
          "A safe path starts with a medical assessment."
        ],
        "cap": "Yellow September · September 2025."
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
        "label": "Summer and skin care carousel",
        "titles": [
          "Summer is coming: your skin needs more than a tan.",
          "Use SPF 30 or higher sunscreen every day.",
          "Moisturize your skin daily and pay attention to your body.",
          "Enjoy summer consciously: protection is the new tan."
        ],
        "cap": "Summer and skin care · October 2025."
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
        "label": "Women's Day carousel",
        "titles": [
          "The strength that beats at the heart of Hospital Piltcher. A tribute to the women who turn medicine into real care.",
          "Leading technical responsibility, Dr. Maira Guedes Piltcher.",
          "But this mission isn't accomplished alone: doctors, nurses, technicians and administrative staff.",
          "Caring takes the sensitivity to see beyond the diagnosis.",
          "This March 8, the tribute goes to every staff member and to Dr. Maira."
        ],
        "cap": "Women's Day · March 2026."
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
    "summary": "Positioning carousels about listening and representation in the ear, nose and throat medical association, with classical paintings as a metaphor.",
    "cover": {
      "src": "img/covers/otavio.jpg",
      "alt": "Four cards from Dr. Otávio Piltcher's carousels in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/otavio.jpg",
      "ratio": "2000/860",
      "alt": "Four cards from the Few truly listen carousel, from the Tower of Babel to the closing card on active listening"
    },
    "lede": "Classical paintings to discuss a current issue: who gets heard inside a medical association.",
    "intro": [
      "Dr. Otávio Piltcher is an ear, nose and throat specialist who uses Instagram to discuss the future of ABORL, the Brazilian association for the specialty. The audience is other doctors, who need to be persuaded with arguments, not promises."
    ],
    "details": [
      [
        "Year",
        "2025"
      ],
      [
        "Client",
        "Dr. Otávio Piltcher"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Specialty",
        "Otolaryngology"
      ],
      [
        "Tools",
        "Figma and Brands Decoded"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Painting as metaphor",
        "p": [
          "For an abstract subject like representation, the choice was to anchor each idea in a classical painting. The Tower of Babel opens the carousel on listening: everyone talks, few understand each other. A pensive philosopher asks what it means to be representative. A man cupping his hand behind his ear closes the topic of active listening, which speaks directly to the doctor's specialty.",
          "The earthy tones of the artworks give the conversation historical weight, and mustard yellow appears in the keywords and in full-color cards, creating breathing room between denser blocks of text."
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
        "label": "Few truly listen carousel",
        "titles": [
          "Has our association become a Tower of Babel? Everyone talks, but few truly listen in collective decisions.",
          "Baby boomers, millennials and Gen Z have their own accents, rhythms and contributions. The passion is shared. What's missing is listening and a sense of collective power.",
          "I agree that ABORL needs to evolve. Without structured listening, leadership turns into noise, wear, distance and collective withdrawal.",
          "As an association, have we lost the ability to listen? The cure takes more than speeches, it takes active listening with method.",
          "At least half stay silent because, without real listening, they don't feel represented in collective decisions.",
          "Every doctor is also an educator, in the community and in the association.",
          "Legitimate representation starts with actively listening to those who live medicine."
        ],
        "cap": "Few truly listen · October 2025."
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
        "label": "Being representative or knowing how to represent carousel",
        "titles": [
          "Being representative or knowing how to represent: what's the difference? Appearance doesn't replace competence.",
          "Being representative is looking like the group. Knowing how to represent is listening, understanding, engaging and acting on its behalf.",
          "Belonging isn't enough. Diversity matters, but it requires dialogue, preparation, responsibility and delivering results.",
          "Symbolism without a proposal doesn't solve historical problems.",
          "Being similar isn't enough. You need to know how to represent, with listening, method and real delivery.",
          "Competence unites. Appearance often divides.",
          "I want an ABORL that listens to every voice.",
          "Unity can't be decreed, it's built with respect and delivery. Portrait of the doctor."
        ],
        "cap": "Being representative or knowing how to represent · October 2025."
      }
    ]
  },
  {
    "slug": "gabi-castello-branco",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Dr. Gabi Castello Branco",
    "year": "2025",
    "brio": true,
    "summary": "Endocrinology carousels that debunk myths about weight loss and tirzepatide, with the doctor as the face of the content.",
    "cover": {
      "src": "img/covers/gabi.jpg",
      "alt": "Four cards from Dr. Gabi Castello Branco's carousels in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/gabi.jpg",
      "ratio": "2000/860",
      "alt": "Tirzepatide and the risk carousel, from the opening card with the doctor to the closing one"
    },
    "lede": "Responsible information about weight loss, with the doctor's face and voice from the first card to the last.",
    "intro": [
      "Dr. Gabi Castello Branco is an endocrinologist who uses Instagram to talk about weight loss, metabolism and medications such as tirzepatide. It's a trending topic where misinformation spreads faster than medical guidance, and the content had to be engaging without falling into the same language of promises."
    ],
    "details": [
      [
        "Period",
        "Oct — Dec 2025"
      ],
      [
        "Client",
        "Dr. Gabi Castello Branco"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Specialty",
        "Endocrinology"
      ],
      [
        "Deliverables",
        "Instagram carousels"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Visual direction",
        "p": [
          "Every carousel starts and ends with a photograph of the doctor, which works both as a promise of credibility and as a signature. Between the photos, the cards alternate a deep burgundy and a soft cream, with fine lines undulating in the background.",
          "Headlines use a tall serif, and the part of the sentence that carries the message appears in bold italics. Navigation details, such as the swipe prompt and progress dots, keep people reading until the last card."
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
        "label": "3 months until summer carousel",
        "titles": [
          "3 months until summer, and yes, there's time to change the game. Portrait of the doctor.",
          "First point: alcohol sabotages results.",
          "Excessive hunger isn't discipline, it's a sign of imbalance. Create a mild, sustainable calorie deficit.",
          "Increase your protein, it's your ally. It's not a fad diet, it's biochemistry working for you.",
          "Want to perform better in training and keep your metabolism active? Add strength training to your routine.",
          "The plan isn't about rushing. It's about consistency, balance and lasting results. Portrait of the doctor."
        ],
        "cap": "3 months until summer · October 2025."
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
        "label": "Tirzepatide and the risk carousel",
        "titles": [
          "Tirzepatide works. But on its own, it can also put you at risk. Portrait of the doctor.",
          "Tirzepatide modulates hormones. It seems simple, but it isn't.",
          "Without supervision, mistakes happen fast. Circular diagram with the main risks.",
          "In the practice, treatment doesn't start with the pen, it starts with the diagnosis.",
          "Tirzepatide can be a powerful tool. Without guidance, it can be a dangerous shortcut. Portrait of the doctor."
        ],
        "cap": "Tirzepatide and the risk · December 2025."
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
        "label": "Where to inject tirzepatide carousel",
        "titles": [
          "Have you heard that tirzepatide injected in the belly works better? Let's get straight to the point: that's not true. Portrait of the doctor.",
          "Tirzepatide is absorbed systemically. Changing the area doesn't increase, speed up or improve the result.",
          "What determines effectiveness isn't where you inject it.",
          "The only real reason to rotate injection sites is simple: comfort.",
          "How you inject doesn't change the effect. How you're followed up does. Portrait of the doctor."
        ],
        "cap": "Where to inject tirzepatide · December 2025."
      }
    ]
  },
  {
    "slug": "nucleo-ga",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Núcleo GA",
    "year": "2025",
    "brio": true,
    "summary": "Editorial carousels for a preventive medicine and metabolic health clinic, with cinematic photography and a magazine serif.",
    "cover": {
      "src": "img/covers/nucleo-ga.jpg",
      "alt": "Three Núcleo GA carousel covers in a grid on a neutral background"
    },
    "hero": {
      "src": "img/heroes/nucleo-ga.jpg",
      "ratio": "2000/860",
      "alt": "Four cards side by side: Detect imbalances early, Semaglutide and vision loss, Caring for the ones you love and At Núcleo GA we believe in continuous care"
    },
    "lede": "Preventive health told with the delicacy of a lifestyle magazine.",
    "intro": [
      "Núcleo GA is a medical clinic focused on preventive medicine, metabolic health and weight loss. Its Instagram speaks to people who tend to put off taking care of their own health, and the content had to persuade without scaring, with responsible information on topics such as check-ups and weight-loss medications."
    ],
    "details": [
      [
        "Period",
        "Sep — Oct 2025"
      ],
      [
        "Client",
        "Núcleo GA"
      ],
      [
        "Made at",
        "Grupo Brio"
      ],
      [
        "Field",
        "Preventive medicine and metabolic health"
      ],
      [
        "Deliverables",
        "Instagram carousels"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Visual direction",
        "p": [
          "The identity relies on film-like photography, grainy and warm, that takes medicine out of the cold atmosphere of the doctor's office. Headlines use a high-contrast serif, with italics on the words that carry the idea, and supporting text is set in a clean sans, in white over the image.",
          "Each topic gets its own variation. For check-ups, the light serif and late-afternoon light reinforce the idea of unhurried prevention. In the semaglutide content, heavy italics mark the turns between the myth and the answer. For Children's Day, gold comes in as the highlight color and one card mimics a phone notes app to deliver the invitation.",
          "On every piece, the header identifies the medical director, as medical advertising rules require, and the Núcleo GA signature closes each card in the footer."
        ]
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/nucleo-ga/",
        "files": [
          "checkup-1",
          "checkup-2",
          "checkup-3",
          "checkup-4",
          "checkup-5",
          "checkup-6",
          "checkup-7"
        ],
        "label": "Check-up carousel",
        "titles": [
          "Check-ups aren't only for when something is wrong. (Yes, that's still a myth.)",
          "Waiting to feel pain or symptoms before seeing a doctor can cost your health dearly.",
          "Many important conditions progress silently, with no visible signs in the early stages.",
          "Detect imbalances early and treat them more effectively.",
          "If you're feeling well, great. That's exactly when the body can be assessed more precisely.",
          "Preventive medicine takes care today to avoid more complex treatments tomorrow.",
          "At Núcleo GA, we believe in continuous care, even when everything seems fine."
        ],
        "cap": "Check-up · September 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/nucleo-ga/",
        "files": [
          "sema-1",
          "sema-2",
          "sema-3",
          "sema-4",
          "sema-5",
          "sema-6",
          "sema-7",
          "sema-8",
          "sema-9"
        ],
        "label": "Semaglutide and vision loss: myth or truth? carousel",
        "titles": [
          "Semaglutide and vision loss: myth or truth?",
          "Have you heard that semaglutide can worsen vision in people with diabetes? This doubt came from a scientific study.",
          "In the Sustain 6 study, diabetic retinopathy worsened in some patients, and that's where the suspicion came from.",
          "The patients' blood sugar was very poorly controlled.",
          "Semaglutide on its own doesn't cause hypoglycemia. The risk appears with abrupt changes without supervision.",
          "So is it contraindicated? No. The worsening wasn't caused by the medication, but by the lack of prior diabetes control.",
          "What to do in practice? Adjust blood sugar before starting, begin with lower doses and increase gradually.",
          "Benefits of semaglutide when properly prescribed.",
          "The secret is avoiding sudden drops in glucose. Did you know this myth?"
        ],
        "cap": "Semaglutide: myth or truth · September 2025."
      },
      {
        "type": "deck",
        "ratio": "4/5",
        "multi": true,
        "dir": "img/nucleo-ga/",
        "files": [
          "criancas-1",
          "criancas-2",
          "criancas-3",
          "criancas-4",
          "criancas-5",
          "criancas-6"
        ],
        "label": "Children's Day carousel",
        "titles": [
          "This Children's Day, a different kind of invitation.",
          "Celebrating childhood is remembering what inspires us: curiosity, energy, lightness and imagination.",
          "But it's also remembering that behind every child there's an adult who cares, who teaches and who often forgets about themselves.",
          "Caring for the ones you love starts with caring for yourself.",
          "This Children's Day, our invitation is simple: look at yourself with the same care you give your loved ones.",
          "At Núcleo GA, we believe self-care is also a legacy."
        ],
        "cap": "Children's Day · October 2025."
      }
    ]
  },
  {
    "slug": "riki-imunizadora",
    "type": "grafico",
    "discipline": "Social media",
    "title": "Riki Imunizadora",
    "year": "2024–26",
    "brio": false,
    "summary": "Educational and seasonal posts for a pest control company, with a brand frame repeated on every piece.",
    "cover": {
      "src": "img/covers/riki.jpg",
      "alt": "Three Riki Imunizadora posts on a neutral background, featuring the rat holding a stick"
    },
    "hero": {
      "src": "img/heroes/riki.jpg",
      "ratio": "2000/860",
      "alt": "Posts about pigeons, ants, rats and pests in the heat, side by side"
    },
    "lede": "Useful information about pests, in plain language and with the brand always in view.",
    "intro": [
      "Riki Imunizadora is a pest control company based in Teutônia, RS, Brazil. It's a service people tend to remember only when there's a problem, so its Instagram had to keep the brand present all year round, with educational content about termites, ants, rats, pigeons and fleas, plus key dates for the industry."
    ],
    "details": [
      [
        "Period",
        "2024 — 2026"
      ],
      [
        "Client",
        "Riki Imunizadora"
      ],
      [
        "Format",
        "Freelance"
      ],
      [
        "Location",
        "Teutônia, Brazil"
      ],
      [
        "Deliverables",
        "Instagram posts and stories"
      ]
    ],
    "blocks": [
      {
        "type": "text",
        "h": "Visual direction",
        "p": [
          "Every piece shares the same frame: a burgundy wave at the top with the logo and a footer that splits the cream contact area from the red address block. With this fixed structure, the feed is recognizable from afar and every post also works as an ad, with phone and address always in view.",
          "In the middle, photography gets a reddish veil that unifies images from very different sources. Headlines alternate between a condensed all-caps face and a high-contrast grotesque, and supporting text uses different weights to highlight keywords."
        ]
      },
      {
        "type": "deck",
        "ratio": "1/1",
        "multi": true,
        "dir": "img/riki/",
        "files": [
          "revoada",
          "pombos",
          "controlador",
          "calor",
          "ratos",
          "pulgas"
        ],
        "label": "Feed posts",
        "titles": [
          "Swarming happens on hot, humid days, typical of September. Post about termite swarms.",
          "Pigeons: they look harmless, but they're urban pests.",
          "Happy Pest Controller Day, September 26.",
          "The heat is here… and so are the pests! Preventive pest control is the best way.",
          "Can rats climb walls? The answer is: yes!",
          "Getting rid of fleas isn't immediate."
        ],
        "cap": "Feed posts · 2024 — 2026."
      },
      {
        "type": "image",
        "src": "img/riki/story-vitrine.jpg",
        "ratio": "2000/1200",
        "alt": "Two stories side by side: Ants in the kitchen? A warning sign, and Even a small gap is enough for them!, about rats",
        "cap": "Stories with the same frame, adapted to the vertical format."
      }
    ]
  },
  {
    "slug": "sunset-verano",
    "type": "grafico",
    "discipline": "Visual identity",
    "title": "Verano Sunset 23: Summer Opening",
    "year": "2023",
    "brio": false,
    "summary": "Visual identity for a summer opening party in Estrela, Brazil, applied from Instagram to a sign the audience signed.",
    "cover": {
      "src": "img/covers/verano.jpg",
      "alt": "Panel of colorful Verano Sunset street posters set up outdoors among trees"
    },
    "hero": {
      "src": "img/verano-abertura.jpg",
      "ratio": "1370/771",
      "alt": "Outdoor area of the event at sunset, with the V-shaped sign and the Verano Sunset logo"
    },
    "lede": "A world of warm colors, bursting suns and bold typography to give a summer party an identity of its own.",
    "intro": [
      "Verano Sunset 23 kicked off summer in Estrela, RS, Brazil, with live music at an outdoor venue from late afternoon into the night. The party needed an identity that set it apart from the season's other events and followed the audience from the first Instagram post to the last song.",
      "I developed the project in partnership with designer Vitória Simon. Together, we created the brand and every piece that brought it into the physical space."
    ],
    "details": [
      [
        "Year",
        "2023"
      ],
      [
        "Location",
        "Estrela, Brazil"
      ],
      [
        "Partnership",
        "Vitória Simon"
      ],
      [
        "Project",
        "Visual identity"
      ],
      [
        "Deliverables",
        "Street posters, sign, wristbands, menu, social media"
      ]
    ],
    "link": {
      "href": "https://www.behance.net/gallery/187626997/Verano-Sunset-23-Abertura-do-Verao-Identidade-Visual",
      "label": "View project on Behance"
    },
    "blocks": [
      {
        "type": "list",
        "h": "What the identity needed to evoke",
        "items": [
          [
            "Belonging",
            "Make the audience want to be part of the experience."
          ],
          [
            "Exclusivity",
            "Show this wasn't just another event on the calendar."
          ],
          [
            "Visual impact",
            "Be recognizable from afar and spark curiosity at first sight."
          ],
          [
            "Personality",
            "Build a visual world of its own that's easy to remember."
          ],
          [
            "Energy and movement",
            "Translate the intensity of the music and the live experience."
          ],
          [
            "Escape from routine",
            "Suggest a parallel reality, free and out of the ordinary."
          ],
          [
            "Consistency",
            "Connect all communication, from digital materials to the in-person experience."
          ]
        ]
      },
      {
        "type": "text",
        "h": "Visual language",
        "p": [
          "The answer came in warm, saturated colors, with pink, orange, yellow and touches of lilac that evoke the sunset. Headlines use a heavy, retro-inspired typeface with an offset shadow, sharing space with bursting suns, stars, lightning bolts, palm trees and waves that run through the compositions.",
          "Short, playful phrases, such as \"Vem pra Verano\" (Come to Verano) and \"Azar é verano\", give the brand its voice. Together they create a language in constant motion that translates the energy of live music and invites the audience to break from routine."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-lambes.jpg",
            "ratio": "1211/771",
            "alt": "Five Verano Sunset street posters in pink, orange, yellow and lilac"
          },
          {
            "src": "img/verano-painel.jpg",
            "ratio": "1211/771",
            "alt": "Panel made of street posters, decorated with foliage, set up at the event"
          }
        ],
        "cap": "The posters work as modules and, side by side, form the event panel."
      },
      {
        "type": "text",
        "h": "From paper to space",
        "p": [
          "The street posters were designed as modular pieces. Combined, they form a large panel that became a photo backdrop and the stage background. Spread across pillars and walls, they mark the audience's path through the venue and keep the identity always in sight."
        ]
      },
      {
        "type": "image",
        "src": "img/verano-lambes-uso.jpg",
        "ratio": "1211/771",
        "alt": "Posters pasted on a pillar and people posing in front of the panel",
        "cap": "The poster panel as a photo backdrop."
      },
      {
        "type": "text",
        "h": "A sign to be signed",
        "p": [
          "The most striking piece in the space was a large letter V, designed in 3D at 1.6 meters tall before being built by a carpenter. Illustrated with palm trees, flamingos and pineapples, it intentionally left blank space.",
          "Throughout the night, people wrote their names on the sign and turned it into a collective record of the party. The piece stopped being just decoration and became part of the experience, directly answering the desire for belonging."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-estrutura.jpg",
            "ratio": "1211/771",
            "alt": "3D design of the V sign with measurements and the piece being built in the carpentry shop"
          },
          {
            "src": "img/verano-letreiro.jpg",
            "ratio": "1211/771",
            "alt": "V sign signed by the audience at night and a guest writing on it"
          }
        ],
        "cap": "From the 3D design to the sign signed by the audience."
      },
      {
        "type": "text",
        "h": "The details communicate too",
        "p": [
          "The wristbands distinguish guests over and under 18 without losing the party's look. The menu applies the brand over a golden-toned photograph, with handwritten headlines that give the bar a more sophisticated feel."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-pulseiras.jpg",
            "ratio": "1211/771",
            "alt": "Artwork for the ID wristbands for under and over 18"
          },
          {
            "src": "img/verano-pulseiras-uso.jpg",
            "ratio": "1211/771",
            "alt": "Verano Sunset wristbands on guests' wrists"
          }
        ],
        "cap": "ID wristbands."
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-cardapio.jpg",
            "ratio": "1211/771",
            "alt": "Bar menu artwork with the Verano Sunset logo"
          },
          {
            "src": "img/verano-cardapio-mockup.jpg",
            "ratio": "925/771",
            "alt": "Printed menus fixed to a wall"
          }
        ],
        "cap": "Bar menu."
      },
      {
        "type": "text",
        "h": "Digital",
        "p": [
          "On Instagram, the identity guided all communication, from the save the date to the lineup announcement and the ticket sales page. The posts use the same palette and typography as the physical pieces. That way, people arriving at the event instantly recognized the world they had already seen on their phones."
        ]
      },
      {
        "type": "image",
        "src": "img/verano-instagram.jpg",
        "ratio": "1211/771",
        "alt": "Three screens from the event's Instagram: save the date, lineup announcement and profile",
        "cap": "Save the date, lineup announcement and event profile."
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/verano-celulares.jpg",
            "ratio": "1158/771",
            "alt": "Several phones showing the event's posts on an orange background"
          },
          {
            "src": "img/verano-ingressos.jpg",
            "ratio": "1027/771",
            "alt": "Laptop showing the event's ticket sales page"
          }
        ],
        "cap": "Posts and ticket page in the same language."
      }
    ]
  },
  {
    "slug": "psel-code",
    "type": "grafico",
    "discipline": "Campaign · Art direction",
    "title": "Co.De",
    "year": "2021",
    "brio": false,
    "summary": "Digital collage campaign for the recruitment process of ESPM's student communication and design agency.",
    "cover": {
      "src": "img/covers/psel.jpg",
      "alt": "Detail of the campaign's main collage, with the Co.De logo in cut-out letters on a blue background"
    },
    "hero": {
      "src": "img/psel-key-visual.jpg",
      "ratio": "1288/725",
      "alt": "The campaign's main piece: a collage with the Co.De logo, the line Reaching the impossible and retro figures over a city of signs"
    },
    "lede": "Old photos, torn paper and cut-out letters inviting students to reach the impossible as a team.",
    "intro": [
      "Co.De is ESPM's communication and design agency, run by students. Every semester it opens a recruitment process for new members, and the campaign has to catch the attention of students from different courses at the same time.",
      "In the second semester of 2021, the campaign brought together print and digital pieces, a sign-up website and the agency's social media. I worked on art direction with Lauren Pacheco and João Vitor Paiva, in a team that also included planning, account management, copywriting and video production."
    ],
    "details": [
      [
        "Period",
        "Second semester of 2021"
      ],
      [
        "Client",
        "Co.De · ESPM"
      ],
      [
        "Role",
        "Art direction"
      ],
      [
        "Deliverables",
        "Key visual, collages, website, social media"
      ]
    ],
    "link": {
      "href": "https://www.behance.net/gallery/132750667/PSEL-20212",
      "label": "View project on Behance"
    },
    "blocks": [
      {
        "type": "text",
        "h": "The concept",
        "p": [
          "The central idea came from teamwork: people with different talents joining forces to achieve results none of them could reach alone. That led to the campaign's tagline, Reaching the impossible, and the invitation for students to become coders."
        ]
      },
      {
        "type": "text",
        "h": "Collage as a language",
        "p": [
          "To translate the concept, we chose digital collage. Old black-and-white photographs, big-city signs, torn paper in layers of blue, pink and coral, and cut-out letters in the style of an anonymous note create a retro, playful aesthetic.",
          "The technique also echoes the campaign's own message. Just like the agency's team, the collage brings together elements from different origins to form a single image."
        ]
      },
      {
        "type": "text",
        "h": "A collage for each area",
        "p": [
          "Each area of the agency got a composition built around the object that defines the daily work of the people in it. For digital, the drawing tablet pen. For the agency, the computer where briefs arrive and artwork is born. For audiovisual, a clapperboard and a radio dancing together. For fashion, Coco Chanel walking through Paris. For photography, the camera."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/psel-digital.jpg",
            "ratio": "1288/725",
            "alt": "Digital area collage: a figure in a tailcoat with a monitor for a head among tech company buildings"
          },
          {
            "src": "img/psel-agencia.jpg",
            "ratio": "1288/725",
            "alt": "Agency area collage: a woman with a laptop for a head, sitting on buildings, holding a briefing notebook"
          }
        ],
        "cap": "Digital and Agency."
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/psel-audiovisual.jpg",
            "ratio": "1288/725",
            "alt": "Audio and video area collage: a female figure with a crown among a microphone, a spotlight, a record and a speaker"
          },
          {
            "src": "img/psel-moda.jpg",
            "ratio": "1288/725",
            "alt": "Fashion area collage: Coco Chanel with a handbag next to the Eiffel Tower and sewing mannequins"
          }
        ],
        "cap": "Audio and video, and Fashion."
      },
      {
        "type": "image",
        "src": "img/psel-foto.jpg",
        "ratio": "1288/725",
        "alt": "Photography area collage: a photographer sitting on a building with cameras and phones flying on wings",
        "cap": "Photography."
      },
      {
        "type": "text",
        "h": "Website and social media",
        "p": [
          "The same language reached a website with all the information about openings and roles, where students signed up. On the agency's Instagram, the sequence of posts turned the feed into a large collage mural."
        ]
      },
      {
        "type": "pair",
        "items": [
          {
            "src": "img/psel-site.jpg",
            "ratio": "1288/725",
            "alt": "Laptop showing the recruitment sign-up website"
          },
          {
            "src": "img/psel-instagram.jpg",
            "ratio": "1288/725",
            "alt": "Two phones showing the feed and a campaign post on Co.De's Instagram"
          }
        ],
        "cap": "Sign-up website and the agency's Instagram."
      },
      {
        "type": "list",
        "h": "Credits",
        "items": [
          [
            "Project management",
            "Marina Gadea"
          ],
          [
            "Account management",
            "Amanda Chagas"
          ],
          [
            "Planning",
            "Alice Groh and Laura Fernandes"
          ],
          [
            "Video production",
            "Bernardo Appel, Pedro Macedo, Pedro Yamamoto, Savini Reichelt, Carolina Campagna, Pâmela Giotti and Gabriel Vargas"
          ],
          [
            "Art direction",
            "Lauren Pacheco, Caio Carneiro (Caio Dreyer) and João Vitor Paiva"
          ],
          [
            "Web art direction",
            "Pedro Lima"
          ],
          [
            "Copywriting",
            "Leticia Forigo"
          ]
        ]
      }
    ]
  }
];
