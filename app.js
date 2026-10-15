/* Renders the page from CATEGORIES. You should not need to touch this. */

const grid   = document.getElementById("grid");
const nav    = document.getElementById("nav");
const favs   = document.getElementById("favs");
const search = document.getElementById("search");
const clear  = document.getElementById("clear");
const empty  = document.getElementById("empty");
const meta   = document.getElementById("meta");

let activeCategory = "All";
let activeTag = null;
let query = "";

const esc = s => String(s).replace(/[&<>"]/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function host(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function matches(item, cat) {
  if (activeTag && !(item.tags || []).includes(activeTag)) return false;
  if (!query) return true;
  const hay = [item.name, item.note, item.url, cat, ...(item.tags || [])].join(" ");
  return hay.toLowerCase().includes(query);
}

function card(item) {
  const h = host(item.url);
  const tags = (item.tags || [])
    .map(t => `<button class="tag" data-tag="${esc(t)}">${esc(t)}</button>`).join("");

  return `
    <li class="cell">
      <article class="card">
        <a class="card-link" href="${esc(item.url)}" target="_blank" rel="noopener">
          <span class="card-head">
            <span class="mark" data-letter="${esc(item.name[0])}">
              <img class="favicon" alt="" loading="lazy" decoding="async"
                   src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(h)}&sz=64"
                   onerror="this.remove()">
            </span>
            <span class="card-name">${esc(item.name)}</span>
          </span>
          ${item.note ? `<span class="card-note">${esc(item.note)}</span>` : ""}
        </a>
        <div class="card-foot">
          <span class="card-host">${esc(h)}</span>
          ${tags ? `<span class="tags">${tags}</span>` : ""}
        </div>
      </article>
    </li>`;
}

function buildNav() {
  const names = ["All", ...CATEGORIES.map(c => c.name)];
  nav.innerHTML = names.map(n =>
    `<button class="chip${n === activeCategory ? " is-active" : ""}" data-cat="${esc(n)}">${esc(n)}</button>`
  ).join("");
}

function buildFavs() {
  const idle = activeCategory === "All" && !activeTag && !query;
  const starred = CATEGORIES.flatMap(c => c.items).filter(i => i.star);

  if (!idle || !starred.length) { favs.hidden = true; favs.innerHTML = ""; return; }

  favs.hidden = false;
  favs.innerHTML = `
    <h2 class="eyebrow">Favorites</h2>
    <ul class="fav-list">${starred.map(i =>
      `<li><a class="fav" href="${esc(i.url)}" target="_blank" rel="noopener">${esc(i.name)}</a></li>`
    ).join("")}</ul>`;
}

function buildClear() {
  if (activeTag) {
    clear.hidden = false;
    clear.innerHTML = `${esc(activeTag)} <span aria-hidden="true">×</span>`;
    clear.setAttribute("aria-label", `Clear ${activeTag} filter`);
  } else {
    clear.hidden = true;
  }
}

function render() {
  let shown = 0;

  grid.innerHTML = CATEGORIES
    .filter(cat => activeCategory === "All" || cat.name === activeCategory)
    .map(cat => {
      const items = cat.items.filter(i => matches(i, cat.name));
      if (!items.length) return "";
      shown += items.length;

      return `
        <section class="group">
          <h2 class="group-title">${esc(cat.name)}<span class="count">${items.length}</span></h2>
          <ul class="cards">${items.map(card).join("")}</ul>
        </section>`;
    }).join("");

  empty.hidden = shown > 0;
  const total = CATEGORIES.reduce((n, c) => n + c.items.length, 0);
  meta.textContent = `${total} links · ${CATEGORIES.length} categories`;
  buildFavs();
  buildClear();
}

nav.addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  buildNav();
  render();
});

grid.addEventListener("click", e => {
  const tag = e.target.closest(".tag");
  if (!tag) return;
  activeTag = activeTag === tag.dataset.tag ? null : tag.dataset.tag;
  render();
});

clear.addEventListener("click", () => { activeTag = null; render(); });

search.addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  render();
});

buildNav();
render();
