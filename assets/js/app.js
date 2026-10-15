/* ==========================================================================
   Caio Dreyer — Portfólio · lógica da página
   Lê window.SITE (content/site.js) e window.PROJECTS (content/projects.js)
   e monta três tipos de tela: início, projeto e Grupo Brio.
   Rotas por âncora: #trabalhos, #sobre, #contato, #<slug-do-projeto>, #grupo-brio
   Idiomas: português (padrão) e inglês (content/site.en.js e projects.en.js).
   O inglês abre em /en (ou ?lang=en) e pelo botão PT/EN do topo.
   ========================================================================== */
(function () {
  "use strict";
  /* ---------- Idioma ---------- */
  const DATA = { pt: [window.SITE, null], en: [window.SITE_EN, window.PROJECTS_EN] };
  const detect = () => {
    if (!window.SITE_EN) return "pt";
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "pt") return q;
    return /^\/en\/?$/.test(location.pathname) ? "en" : "pt";
  };
  let lang = detect(), S, P, U, TYPE;
  function setData() {
    const [site, tr] = DATA[lang];
    S = site || window.SITE; U = S.ui;
    const map = tr ? new Map(tr.map(p => [p.slug, p])) : null;
    P = window.PROJECTS.map(p => (map && map.get(p.slug)) || p);  // ordem sempre a de projects.js
    TYPE = U.types;
  }
  setData();
  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const view = $("#view");
  let filter = "todos", current = null, lastSlug = null;

  /* ---------- Peças reutilizáveis ---------- */
  const tex = (k, alt = "") => `<picture><source media="(max-width:640px)" srcset="img/textures/${k}-m.jpg"><img src="img/textures/${k}.jpg" alt="${esc(alt)}" loading="lazy" decoding="async"></picture>`;

  const card = p => `
    <a class="card" href="#${p.slug}" data-reveal>
      <div class="card-media"><img src="${esc(p.cover.src)}" alt="${esc(p.cover.alt)}" loading="lazy" decoding="async" width="1600" height="1200"></div>
      <span class="card-disc">${esc(p.discipline)}</span>
      <div class="card-meta"><h3 class="card-title"><span>${esc(p.title)}</span></h3><span class="card-year">${esc(p.year)}</span></div>
      <p class="card-sum">${esc(p.summary)}</p>
    </a>`;

  const count = t => P.filter(p => t === "todos" || p.type === t).length;

  /* Trabalhos agrupados por seção (UX/UI primeiro, depois Design gráfico) */
  const groups = f => (f === "todos" ? Object.keys(TYPE) : [f]).map(k => `
    <div class="work-group" aria-labelledby="g-${k}">
      <h3 class="group-title" id="g-${k}">${esc(TYPE[k])}<sup>${count(k)}</sup></h3>
      <div class="grid">${P.filter(p => p.type === k).map(card).join("")}</div>
    </div>`).join("");

  /* ---------- Início ---------- */
  function home() {
    const ab = S.about;
    return `
    <section class="hero" aria-label="${esc(U.heroLabel)}">
      <picture><source media="(max-width:640px)" srcset="img/textures/g1-m.jpg"><img src="img/textures/g1.jpg" alt="" fetchpriority="high"></picture>
      <div class="hero-inner">
        <h1 class="hero-name"><span class="word">Caio</span> <span class="word">Dreyer</span></h1>
        <div class="hero-row"><p>${esc(S.role)} · ${esc(S.tagline)}</p><a class="u" href="#trabalhos">${esc(U.seeWork)} <span class="arrow" aria-hidden="true">↓</span></a></div>
      </div>
    </section>

    <section class="intro"><div class="wrap">
      <div class="intro-lead" data-reveal><span class="eyebrow">${esc(S.intro.eyebrow)}</span><p class="statement">${esc(S.intro.statement)}</p></div>
      <div class="intro-body" data-reveal>${S.intro.paragraphs.map(t => `<p>${esc(t)}</p>`).join("")}<a class="u" href="#sobre">${esc(U.moreAbout)} <span class="arrow" aria-hidden="true">→</span></a></div>
    </div></section>

    <section class="work" id="trabalhos" aria-labelledby="work-title"><div class="wrap">
      <div class="work-head">
        <h2 id="work-title">${esc(U.selectedWork)}<sup>${P.length}</sup></h2>
        <div class="chips" role="group" aria-label="${esc(U.filterLabel)}">
          ${["todos", "web", "grafico"].map(t => `<button type="button" class="chip" data-filter="${t}" aria-pressed="${t === filter}">${esc(t === "todos" ? U.all : TYPE[t])}<span>${count(t)}</span></button>`).join("")}
        </div>
      </div>
      <div class="work-groups" id="grid">${groups(filter)}</div>
    </div></section>

    <div class="band" data-reveal>${tex("g3")}<p>${esc(S.divider)}</p></div>

    <section class="about" id="sobre"><div class="wrap">
      <div class="about-top">
        <div class="about-photo" data-reveal><img src="${esc(ab.photo.src)}" alt="${esc(ab.photo.alt)}" loading="lazy" width="960" height="1200"></div>
        <div class="about-text" data-reveal>
          <span class="eyebrow">${esc(ab.title)}</span>
          <p class="statement">${esc(ab.statement)}</p>
          ${ab.paragraphs.map(t => `<p class="body">${esc(t)}</p>`).join("")}
        </div>
      </div>
      <div class="path" data-reveal>
        <div class="path-exp"><h3>${esc(U.experience)}</h3><ol class="rows">
          ${S.experience.map(e => `<li><span class="yr">${esc(e.years)}</span><span class="what">${esc(e.role)}<small>${esc(e.place)}</small></span><span class="desc">${esc(e.text)}</span>${e.link ? `<a class="u more" href="${esc(e.link.href)}">${esc(e.link.label)} <span class="arrow" aria-hidden="true">→</span></a>` : ""}</li>`).join("")}
        </ol></div>
        <div class="path-side"><h3>${esc(U.education)}</h3><ol class="rows">
          ${S.education.map(e => `<li><span class="yr">${esc(e.years)}</span><span class="what">${esc(e.course)}<small>${esc(e.place)}</small></span></li>`).join("")}
        </ol>
          <div class="side-block"><h3>${esc(U.tools)}</h3><p>${esc(S.tools)}</p></div>
          <div class="side-block"><h3>${esc(U.languages)}</h3><p>${esc(S.languages)}</p></div>
        </div>
      </div>
    </div></section>

    ${contact()}`;
  }

  function contact() {
    const c = S.contact;
    return `
    <section class="contact" id="contato" aria-labelledby="contact-title" data-reveal>${tex("g4")}
      <div class="contact-inner">
        <div class="contact-lead"><h2 id="contact-title">${esc(c.title)}</h2><p>${esc(c.text)}</p></div>
        <div class="c-rows">
          <div class="c-row"><span class="k">${esc(U.email)}</span><span class="v"><span id="mail">${esc(c.email)}</span><button type="button" class="copy" id="copy">${esc(U.copy)}</button></span></div>
          ${c.links.map(l => `<div class="c-row"><span class="k">${esc(l.label)}</span><span class="v"><a class="u" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.value)} ↗</a></span></div>`).join("")}
          <div class="c-row"><span class="k">${esc(U.base)}</span><span class="v"><span>${esc(S.location)}</span></span></div>
        </div>
      </div>
    </section>`;
  }

  /* ---------- Blocos de conteúdo dos projetos ---------- */
  const img = (o, cls = "") => `<img class="${cls}" src="${esc(o.src)}" alt="${esc(o.alt || "")}" loading="lazy" decoding="async"${o.ratio ? ` style="aspect-ratio:${esc(o.ratio)}"` : ""}>`;
  const cap = c => c ? `<figcaption>${esc(c)}</figcaption>` : "";

  function block(b) {
    switch (b.type) {
      case "text": return `<div class="b-text" data-reveal><h2>${esc(b.h)}</h2><div class="body">${b.p.map(t => `<p>${esc(t)}</p>`).join("")}</div></div>`;
      case "list": return `<div class="b-text" data-reveal><h2>${esc(b.h)}</h2><div class="body"><ul class="pairs">${b.items.map(([k, v]) => `<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join("")}</ul></div></div>`;
      case "image": return `<figure class="media" data-reveal>${img(b)}${cap(b.cap)}</figure>`;
      case "pair": return `<figure class="media" data-reveal><div class="pair">${b.items.map(i => img(i)).join("")}</div>${cap(b.cap)}</figure>`;
      case "stat": return `<aside class="stat" data-reveal><p class="stat-value">${esc(b.value)}</p><p class="stat-label">${esc(b.label)}</p><p class="stat-note">${esc(b.note)}</p>${b.link ? `<a class="u" href="${esc(b.link.href)}">${esc(b.link.label)} →</a>` : ""}</aside>`;
      case "scroll": return `<figure class="media" data-reveal>
          <div class="browser">
            <div class="browser-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="addr">${esc(b.label)}</span><span class="pct" aria-hidden="true">0%</span></div>
            <div class="progress" aria-hidden="true"><span></span></div>
            <div class="vp-wrap"><div class="viewport" tabindex="0" role="region" aria-label="${esc(U.scrollRegion)}: ${esc(b.label)}"><img src="${esc(b.src)}" alt="${esc(b.alt || "")}" loading="lazy"></div>
            <span class="hint" aria-hidden="true">${esc(U.scrollHint)}</span></div>
          </div>${cap(b.cap)}</figure>`;
      case "deck": {
        const n = b.titles.length, pad = x => String(x).padStart(2, "0"), word = b.multi ? U.card : U.page, words = b.multi ? U.cards : U.pages;
        const file = i => b.dir + (b.files ? b.files[i] : pad(i + 1)) + ".jpg";
        return `<figure class="deck${b.multi ? " multi" : ""}" style="--ratio:${esc(b.ratio || "16/9")}" data-reveal>
          <div class="deck-track" tabindex="0" role="region" aria-roledescription="${esc(U.carousel)}" aria-label="${esc(b.label)}, ${n} ${esc(words)}. ${esc(U.keys)}">
            ${b.titles.map((t, i) => `<div class="deck-slide" role="group" aria-roledescription="${esc(word)}" aria-label="${i + 1} ${esc(U.of)} ${n}"><img src="${esc(file(i))}" alt="${b.multi ? "" : `${esc(U.pageN)} ${i + 1}: `}${esc(t)}" loading="${i < 2 ? "eager" : "lazy"}"></div>`).join("")}
          </div>
          <div class="deck-bar">
            <button type="button" class="deck-btn" data-dir="-1" aria-label="${esc(b.multi ? U.prevCard : U.prevPage)}">←</button>
            <span class="deck-count" aria-live="polite"><span class="cur">01</span> / ${pad(n)}</span>
            <span class="deck-progress" aria-hidden="true"><span></span></span>
            <button type="button" class="deck-btn" data-dir="1" aria-label="${esc(b.multi ? U.nextCard : U.nextPage)}">→</button>
          </div>${b.cap ? `<p class="deck-cap">${esc(b.cap)}</p>` : ""}</figure>`;
      }
    }
    return "";
  }

  /* ---------- Página de projeto ---------- */
  function project(p) {
    const list = P.filter(x => x.type === p.type), i = list.indexOf(p);
    const nx = list.length > 1 ? list[(i + 1) % list.length] : P[(P.indexOf(p) + 1) % P.length];
    const links = [p.link ? `<a class="u" href="${esc(p.link.href)}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>` : "",
      p.brio ? `<a class="u" href="#grupo-brio">${esc(U.brioLink)} →</a>` : ""].join("");
    return `
    <article class="case"><div class="wrap">
      <a class="back" href="#trabalhos"><span aria-hidden="true">←</span> ${esc(U.back)}</a>
      <header class="case-head">
        <div class="case-meta"><span class="eyebrow">${esc(p.discipline)} · ${esc(p.year)}</span></div>
        <h1>${esc(p.title)}</h1>
        <p class="lede">${esc(p.lede)}</p>
      </header>
      <section class="case-about">
        <div class="about-col"><span class="eyebrow">${esc(U.aboutProject)}</span>${p.intro.map(t => `<p>${esc(t)}</p>`).join("")}</div>
        <div class="facts"><dl style="margin:0">${p.details.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>${links ? `<div class="facts-links">${links}</div>` : ""}</div>
      </section>
      ${p.tldr ? `<div class="tldr" aria-label="${esc(U.summary)}">${p.tldr.map(([k, v]) => `<div><span class="eyebrow">${esc(k)}</span><p>${esc(v)}</p></div>`).join("")}</div>` : ""}
      <div class="blocks">
        ${p.hero ? `<figure class="media">${img(p.hero)}</figure>` : ""}
        ${p.blocks.map(block).join("")}
      </div>
      <nav class="next" aria-label="${esc(U.nextProject)}">
        <span class="eyebrow">${esc(U.nextProject)}</span>
        <a href="#${nx.slug}"><span class="next-title"><span>${esc(nx.title)}</span> <span class="arrow" aria-hidden="true">→</span></span><img src="${esc(nx.cover.src)}" alt="" loading="lazy"></a>
      </nav>
    </div></article>`;
  }

  /* ---------- Grupo Brio ---------- */
  function brio() {
    const b = S.brio;
    const feat = P.filter(p => p.brio);
    return `
    <article class="case"><div class="wrap">
      <a class="back" href="#trabalhos"><span aria-hidden="true">←</span> ${esc(U.back)}</a>
      <header class="case-head">
        <div class="case-meta"><span class="eyebrow">${esc(U.brioEyebrow)} · ${esc(b.period)}</span></div>
        <h1>Grupo Brio</h1>
        <p class="lede">${esc(b.lede)}</p>
      </header>
      <section class="case-about">
        <div class="about-col"><span class="eyebrow">${esc(U.brioWork)}</span>${b.about.map(t => `<p>${esc(t)}</p>`).join("")}</div>
        <div class="facts"><dl style="margin:0">${b.details.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></div>
      </section>
      <section class="clients">
        <h2>${esc(U.clients)}</h2>
        <ol class="client-list">${b.clients.map(c => `<li><a class="client" href="#${esc(c.case)}"><span class="n">${esc(c.name)}<small>${esc(c.sector)}</small></span><span class="k">${esc(c.kind)} · ${esc(c.year)}</span><span class="go arrow" aria-hidden="true">→</span></a></li>`).join("")}</ol>
      </section>
      <section class="work"><div class="work-head"><h2>${esc(U.brioCases)}<sup>${feat.length}</sup></h2></div>
        <div class="grid">${feat.map(card).join("")}</div></section>
    </div></article>`;
  }

  /* ---------- Comportamentos ---------- */
  function wire() {
    // Filtros
    view.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => {
      filter = btn.dataset.filter;
      const run = () => {
        view.querySelectorAll("[data-filter]").forEach(b => b.setAttribute("aria-pressed", b === btn));
        $("#grid").innerHTML = groups(filter);
      };
      document.startViewTransition && !reduce() ? document.startViewTransition(run) : run();
    }));
    // Copiar e-mail
    const copy = $("#copy");
    if (copy) copy.addEventListener("click", () => {
      const t = $("#mail").textContent, done = m => { copy.textContent = m; setTimeout(() => copy.textContent = U.copy, 2200); };
      const sel = () => { getSelection().selectAllChildren($("#mail")); done(U.selected); };
      try { navigator.clipboard.writeText(t).then(() => done(U.copied), sel); } catch (e) { sel(); }
    });
    // Janela rolável
    view.querySelectorAll(".browser").forEach(br => {
      const vp = $(".viewport", br), bar = $(".progress span", br), pct = $(".pct", br), hint = $(".hint", br);
      vp.addEventListener("scroll", () => {
        const max = vp.scrollHeight - vp.clientHeight, r = max > 0 ? vp.scrollTop / max : 0;
        bar.style.transform = `scaleX(${r})`; pct.textContent = Math.round(r * 100) + "%";
        if (vp.scrollTop > 30) hint.classList.add("gone");
      }, { passive: true });
    });
    // Carrosséis
    view.querySelectorAll(".deck").forEach(dk => {
      const tr = $(".deck-track", dk), n = tr.children.length, cur = $(".cur", dk), bar = $(".deck-progress span", dk), [prev, next] = dk.querySelectorAll(".deck-btn");
      const step = () => tr.children.length > 1 ? tr.children[1].offsetLeft - tr.children[0].offsetLeft : tr.clientWidth;
      const atEnd = () => tr.scrollLeft >= tr.scrollWidth - tr.clientWidth - 2;
      const idx = () => Math.round(tr.scrollLeft / step());
      const update = () => { const i = atEnd() ? n - 1 : idx(); cur.textContent = String(i + 1).padStart(2, "0"); bar.style.transform = `scaleX(${(i + 1) / n})`; prev.disabled = tr.scrollLeft <= 2; next.disabled = atEnd(); };
      const go = d => tr.scrollTo({ left: Math.max(0, Math.min(n - 1, idx() + d)) * step() });
      prev.addEventListener("click", () => go(-1)); next.addEventListener("click", () => go(1));
      tr.addEventListener("keydown", e => { if (e.key === "ArrowRight") { e.preventDefault(); go(1); } if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); } });
      let t; tr.addEventListener("scroll", () => { clearTimeout(t); t = setTimeout(update, 60); }, { passive: true });
      update();
    });
    // Entrada suave só para o que está fora da tela no carregamento
    if (!reduce() && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); e.target.classList.remove("pre"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
      view.querySelectorAll("[data-reveal]").forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pre"); io.observe(el); } });
    }
  }

  /* ---------- Rotas ---------- */
  const SECTIONS = ["trabalhos", "sobre", "contato"];
  function route(keepScroll) {
    const h = decodeURIComponent(location.hash.slice(1));
    const p = P.find(x => x.slug === h);
    const key = p ? "p:" + h : h === "grupo-brio" ? "brio" : "home";
    const render = () => {
      if (key !== current) {
        view.innerHTML = p ? project(p) : key === "brio" ? brio() : home();
        document.title = p ? `${p.title} · ${S.name}` : key === "brio" ? `Grupo Brio · ${S.name}` : U.pageTitle;
        current = key; wire();
      }
      document.querySelectorAll(".nav a").forEach(a => a.setAttribute("aria-current", String(key === "home" && a.hash === "#" + h)));
      if (keepScroll === true) return;
      if (key === "home" && SECTIONS.includes(h)) { const t = document.getElementById(h); t && t.scrollIntoView({ behavior: "auto" }); }
      else if (key === "home" && lastSlug && !h) { window.scrollTo(0, 0); }
      else if (key !== "home") window.scrollTo(0, 0);
      else if (!h) window.scrollTo(0, 0);
      if (p) lastSlug = p.slug;
    };
    const changing = key !== current && current !== null;
    changing && keepScroll !== true && document.startViewTransition && !reduce() ? document.startViewTransition(render) : render();
  }
  /* ---------- Textos fixos e botão PT/EN ---------- */
  function chrome() {
    const html = document.documentElement;
    html.lang = U.lang;
    const md = $('meta[name="description"]'); if (md) md.content = U.metaDescription;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = el.dataset.i18n.split(".").reduce((o, k) => o && o[k], U);
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-label]").forEach(el => {
      const v = el.dataset.i18nLabel.split(".").reduce((o, k) => o && o[k], U);
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }
  function switchLang(next) {
    if (next === lang || !DATA[next][0]) return;
    lang = next; setData(); chrome();
    // Atualiza o endereço: /en no site publicado, ?lang=en nos demais casos (pré-visualização local)
    try {
      const url = new URL(location.href); url.searchParams.delete("lang");
      if (/^\/(en\/?|index\.html)?$/.test(url.pathname) && !/^(localhost|127\.)/.test(url.hostname)) url.pathname = lang === "en" ? "/en" : "/";
      else if (lang === "en") url.searchParams.set("lang", "en");
      history.replaceState(null, "", url);
    } catch (e) { /* endereço não pôde ser alterado; o idioma muda mesmo assim */ }
    const y = scrollY; current = null; route(true); scrollTo(0, y);
  }
  document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => switchLang(b.dataset.lang)));
  chrome();

  window.addEventListener("hashchange", route);
  route();
})();
