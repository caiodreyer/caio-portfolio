/*
  Gera content/projects.en.js a partir de content/projects.js e de um
  dicionário PT -> EN (JSON). Uso único na criação da versão em inglês;
  depois disso, edite content/projects.en.js diretamente.
  Uso: node tools/build_en_projects.js caminho/pt2en.json
*/
const fs = require("fs"), path = require("path");
global.window = {};
require(path.join(__dirname, "../content/projects.js"));
const dict = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const SKIP = new Set(["slug", "type", "src", "dir", "files", "ratio", "href", "multi", "year"]);
const tr = (v, k) => typeof v === "string" ? (SKIP.has(k) ? v : (dict[v] ?? v))
  : Array.isArray(v) ? v.map(x => tr(x, k))
  : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([kk, vv]) => [kk, tr(vv, SKIP.has(kk) ? kk : (SKIP.has(k) ? k : kk))]))
  : v;
const out = window.PROJECTS.map(p => tr(p, ""));
const head = `/*
  PROJECTS · ENGLISH VERSION
  ---------------------------------------------------------------
  Same structure as content/projects.js. The order shown on the site comes
  from content/projects.js; a project missing here falls back to Portuguese.
  To add a project in English, copy its block from projects.js and translate
  the text fields (keep slug, type, images and file names unchanged).
*/
window.PROJECTS_EN = `;
fs.writeFileSync(path.join(__dirname, "../content/projects.en.js"), head + JSON.stringify(out, null, 2) + ";\n");
console.log("ok", out.length);
