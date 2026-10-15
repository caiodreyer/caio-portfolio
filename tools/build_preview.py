"""Gera uma versão de arquivo único (CSS e JS embutidos) do site para pré-visualização.

Não é necessária para publicar na Vercel: o site em si é o index.html com as
pastas assets/, content/ e img/. Uso: python3 tools/build_preview.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "preview" / "portfolio.html"

html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "assets/css/styles.css").read_text(encoding="utf-8")
js = "\n".join((ROOT / f).read_text(encoding="utf-8") for f in ("content/site.js", "content/projects.js", "assets/js/app.js"))

title = re.search(r"<title>.*?</title>", html, re.S).group(0)
desc = re.search(r'<meta name="description"[^>]*>', html).group(0)
fonts = "\n".join(re.findall(r'<link rel="(?:preconnect|stylesheet)" href="https://fonts[^>]*>', html))
body = re.search(r"<body>(.*?)<script", html, re.S).group(1)

page = f"""{title}
<meta name="claude:viewport-fit-sides" content="cover">
{desc}
{fonts}
<style>
{css}
</style>
{body}
<script>
{js.replace('</script', '<\\/script')}
</script>
"""
OUT.parent.mkdir(exist_ok=True)
OUT.write_text(page, encoding="utf-8")
print(OUT, len(page))
