# Resource Hub

A personal hub for design, motion and build resources. Plain HTML, CSS and a bit of JavaScript. No build step, no dependencies.

**Live:** https://zoeyruss-bit.github.io/Resource-Hub

## How to add a resource

Open `resources.js`. Find the category, copy a line, change the three values:

```js
{ name: "Fontshare", url: "https://fontshare.com", note: "Free fonts, actually good ones" },
```

`note` is optional. Save, commit, push. The site updates in about a minute.

## How to add a category

Copy a whole block and drop it where you want it. Order in the file is order on the page.

```js
{
  name: "Illustration",
  items: [
    { name: "Blush", url: "https://blush.design", note: "Customizable illustrations" },
  ],
},
```

## Files

| File | What it does |
|---|---|
| `resources.js` | Your links. **The only file you normally edit.** |
| `style.css` | All styling. Change the tokens at the top to restyle everything. |
| `index.html` | Page shell. Rarely needs touching. |
| `app.js` | Renders cards, search and category filtering. Leave it alone. |

## Restyling

Every color, radius, spacing value and font lives in `:root` at the top of `style.css`. Change them there and the whole site follows. Dark mode is a second set of the same tokens below it.

## Preview locally

Open `index.html` in a browser. That's it.
