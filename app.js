/* Renders the page from CATEGORIES. You should not need to touch this. */

const grid   = document.getElementById("grid");
const nav    = document.getElementById("nav");
const tagbar = document.getElementById("tagbar");
const favs   = document.getElementById("favs");
const search = document.getElementById("search");
const reset  = document.getElementById("reset");
const empty  = document.getElementById("empty");
const meta   = document.getElementById("meta");

let activeCategory = "All";
let activeTag = null;
let query = "";
let cursor = -1;          // keyboard selection into the visible list
let visible = [];         // the <a> elements currently rendered, in order

window.iconFallback = function (img) {
  if (!img.dataset.step) {
    img.dataset.step = "1";
    img.src = "https://icons.duckduckgo.com/ip3/" + img.dataset.host + ".ico";
  } else {
    img.remove();
  }
};

const esc = s => String(s).replace(/[&<>"]/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const host = url => {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
};

const ALL = CATEGORIES.flatMap(c => c.items.map(i => ({ ...i, cat: c.name })));
const TAGS = [...new Set(ALL.flatMap(i => i.tags || []))].sort();

const filtered = () => !activeTag && !query && activeCategory === "All";

function matches(item) {
  if (activeTag && !(item.tags || []).includes(activeTag)) return false;
  if (!query) return true;
  return [item.name, item.note, item.url, item.cat, ...(item.tags || [])]
    .join(" ").toLowerCase().includes(query);
}

/* ---- Templates ---- */

function markup(item, extraClass = "") {
  const h = host(item.url);
  return `
    <a class="card ${extraClass}" href="${esc(item.url)}" target="_blank" rel="noopener">
      <span class="mark" data-letter="${esc(item.name[0])}">
        <img alt="" loading="lazy" decoding="async"
             data-host="${esc(h)}"
             src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(h)}&sz=128"
             onerror="iconFallback(this)">
      </span>
      <span class="card-body">
        <span class="card-name">${esc(item.name)}</span>
        ${item.note ? `<span class="card-note">${esc(item.note)}</span>` : ""}
        <span class="card-host">${esc(h)}</span>
      </span>
    </a>`;
}

function buildTagbar() {
  tagbar.innerHTML = TAGS.map(t =>
    `<button class="pill${t === activeTag ? " is-on" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`
  ).join("");
}

function buildNav() {
  const names = ["All", ...CATEGORIES.map(c => c.name)];
  nav.innerHTML = names.map(n =>
    `<button class="chip${n === activeCategory ? " is-on" : ""}" data-cat="${esc(n)}">${esc(n)}</button>`
  ).join("");
}

function buildFavs() {
  const starred = ALL.filter(i => i.star);
  if (!filtered() || !starred.length) { favs.hidden = true; favs.innerHTML = ""; return; }

  favs.hidden = false;
  favs.innerHTML =
    `<h2 class="eyebrow">Favorites</h2>
     <div class="fav-row">${starred.map(i => markup(i, "card--mini")).join("")}</div>`;
}

/* ---- Render ---- */

function render() {
  let count = 0;

  grid.innerHTML = CATEGORIES
    .filter(c => activeCategory === "All" || c.name === activeCategory)
    .map(c => {
      const items = c.items.map(i => ({ ...i, cat: c.name })).filter(matches);
      if (!items.length) return "";
      count += items.length;
      return `
        <section class="group">
          <h2 class="group-title">${esc(c.name)}</h2>
          <div class="cards">${items.map(i => markup(i)).join("")}</div>
        </section>`;
    }).join("");

  empty.hidden = count > 0;
  reset.hidden = filtered();

  meta.textContent = filtered()
    ? `${ALL.length} links · ${CATEGORIES.length} categories`
    : `${count} of ${ALL.length}`;

  buildFavs();
  buildTagbar();
  buildNav();

  visible = [...favs.querySelectorAll(".card"), ...grid.querySelectorAll(".card")];
  cursor = -1;
}

/* ---- Keyboard ---- */

function move(step) {
  if (!visible.length) return;
  visible[cursor]?.classList.remove("is-cursor");
  cursor = (cursor + step + visible.length) % visible.length;
  const el = visible[cursor];
  el.classList.add("is-cursor");
  el.scrollIntoView({ block: "nearest" });
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); move(1); return; }
  if (e.key === "ArrowUp")   { e.preventDefault(); move(-1); return; }

  if (e.key === "Enter" && cursor > -1) {
    e.preventDefault();
    window.open(visible[cursor].href, "_blank", "noopener");
    return;
  }

  if (e.key === "Escape") {
    query = ""; activeTag = null; activeCategory = "All";
    search.value = "";
    render();
    search.blur();
    return;
  }

  // "/" or any plain typing jumps into search
  if (document.activeElement !== search) {
    if (e.key === "/" || (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey)) {
      e.preventDefault();
      search.focus();
      if (e.key !== "/") { search.value += e.key; search.dispatchEvent(new Event("input")); }
    }
  }
});

/* ---- Events ---- */

search.addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  render();
});

tagbar.addEventListener("click", e => {
  const btn = e.target.closest(".pill");
  if (!btn) return;
  activeTag = activeTag === btn.dataset.tag ? null : btn.dataset.tag;
  render();
});

nav.addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  render();
});

reset.addEventListener("click", () => {
  query = ""; activeTag = null; activeCategory = "All";
  search.value = "";
  render();
  search.focus();
});

render();
search.focus({ preventScroll: true });
