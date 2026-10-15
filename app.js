/* Renders the page from CATEGORIES. You should not need to touch this. */

const grid   = document.getElementById("grid");
const nav    = document.getElementById("nav");
const search = document.getElementById("search");
const empty  = document.getElementById("empty");

let activeCategory = "All";
let query = "";

function host(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function buildNav() {
  const names = ["All", ...CATEGORIES.map(c => c.name)];
  nav.innerHTML = names.map(n =>
    `<button class="chip${n === activeCategory ? " is-active" : ""}" data-cat="${n}">${n}</button>`
  ).join("");
}

function matches(item, cat) {
  if (!query) return true;
  return (item.name + " " + (item.note || "") + " " + item.url + " " + cat)
    .toLowerCase().includes(query);
}

function render() {
  let shown = 0;

  grid.innerHTML = CATEGORIES
    .filter(cat => activeCategory === "All" || cat.name === activeCategory)
    .map(cat => {
      const items = cat.items.filter(i => matches(i, cat.name));
      if (!items.length) return "";
      shown += items.length;

      const links = items.map(i => `
        <li>
          <a class="card" href="${i.url}" target="_blank" rel="noopener">
            <span class="card-name">${i.name}</span>
            ${i.note ? `<span class="card-note">${i.note}</span>` : ""}
            <span class="card-host">${host(i.url)}</span>
          </a>
        </li>`).join("");

      return `
        <section class="group">
          <h2 class="group-title">${cat.name}<span class="count">${items.length}</span></h2>
          <ul class="cards">${links}</ul>
        </section>`;
    }).join("");

  empty.hidden = shown > 0;
}

nav.addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  buildNav();
  render();
});

search.addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  render();
});

buildNav();
render();
