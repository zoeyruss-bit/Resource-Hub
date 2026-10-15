/* ============================================================
   THIS IS THE ONLY FILE YOU EDIT.

   Add a link:      copy a line, change the three values.
   Add a category:  copy a whole { } block.
   Reorder:         drag blocks or lines around. Order here = order on the page.
   ============================================================ */

const CATEGORIES = [

  {
    name: "Web Inspiration",
    items: [
      { name: "Awwwards",          url: "https://www.awwwards.com",        note: "The benchmark. Good for pushing a concept further" },
      { name: "Land-book",         url: "https://land-book.com",           note: "Landing pages, filterable by industry and style" },
      { name: "SiteInspire",       url: "https://www.siteinspire.com",     note: "Tightly curated, less noise than most galleries" },
      { name: "Godly",             url: "https://godly.website",           note: "High end web design, heavy on motion" },
            { name: "Footer Design",     url: "https://www.footer.design",       note: "Footers only. Weirdly useful" },
    ],
  },

  {
    name: "UI & Patterns",
    items: [
      { name: "Mobbin",            url: "https://mobbin.com",              note: "Real app screens and flows, iOS and web" },
      { name: "UI Patterns",       url: "https://ui-patterns.com",         note: "Named patterns with the reasoning behind them" },
      { name: "The Component Gallery", url: "https://component.gallery",   note: "One component, many real implementations" },
      { name: "GoodUI",            url: "https://goodui.org",              note: "A/B tested patterns that actually convert" },
    ],
  },

  {
    name: "Branding & Identity",
    items: [
      { name: "Logosystem",        url: "https://logosystem.co",           note: "Logos only, thousands of them" },
      { name: "Visual Journal",    url: "https://visualjournal.net",       note: "Branding, editorial and art direction" },
      { name: "Rebrand Gallery",   url: "https://rebrand.gallery",         note: "Before and after rebrands, curated" },
      { name: "Brand Style Guides", url: "https://brandstyleguides.com",   note: "Real guideline documents to study" },
    ],
  },

  {
    name: "Typography",
    items: [
      { name: "Pangram Pangram",   url: "https://pangrampangram.com",      note: "Free to try on everything. Workhorse foundry" },
      { name: "Klim Type Foundry", url: "https://klim.co.nz",              note: "Kris Sowersby. Impeccable, worth the licence" },
      { name: "Displaay",          url: "https://displaay.net",            note: "Sharp contemporary display and text faces" },
      { name: "VJ Type",           url: "https://vj-type.com",             note: "Violaine & Jeremy's Paris foundry. Gestural, distinctive" },
      { name: "Luzi Type",         url: "https://luzi-type.ch",            note: "Swiss. Messina Sans and Faro live here" },
      { name: "Colophon",          url: "https://colophon-foundry.org",    note: "London and LA. Apercu and friends" },
      { name: "Typeverything",     url: "https://typeverything.com",       note: "Andrei Robu. Display faces built for branding" },
      { name: "Directory.design",  url: "https://directory.design/en/type-foundries", note: "Index of foundries when you need options" },
      { name: "Fontshare",         url: "https://fontshare.com",           note: "Free fonts, actually good ones" },
      { name: "Fonts In Use",      url: "https://fontsinuse.com",          note: "See a typeface in the wild before you commit" },
      { name: "Type Scale",        url: "https://typescale.com",           note: "Preview a modular scale fast" },
    ],
  },

  {
    name: "Color",
    items: [
      { name: "Coolors",           url: "https://coolors.co",              note: "Fastest palette generator" },
      { name: "Color Hunt",        url: "https://colorhunt.co",            note: "Curated four-color palettes" },
      { name: "Khroma",            url: "https://khroma.co",               note: "Trains on colors you like, then suggests more" },
      { name: "ColorSpace",        url: "https://mycolor.space",           note: "One color in, full palette and gradients out" },
      { name: "Happy Hues",        url: "https://www.happyhues.co",        note: "Palettes shown on a real layout, not swatches" },
      { name: "Realtime Colors",   url: "https://www.realtimecolors.com",  note: "Test a palette on a live page" },
      { name: "APCA Contrast",     url: "https://www.myndex.com/APCA/",    note: "Contrast math that beats WCAG for real type" },
    ],
  },

  {
    name: "Design Systems",
    items: [
      { name: "Material Design 3", url: "https://m3.material.io",          note: "Google's system. Good on type scale and motion" },
      { name: "Carbon Design System", url: "https://carbondesignsystem.com", note: "IBM. The typography section is the strong part" },
      { name: "AREA 17 Guides",    url: "https://area17.com/guides",       note: "How a real studio documents its standards" },
    ],
  },

  {
    name: "Motion",
    items: [
      { name: "Easings.net",       url: "https://easings.net",             note: "Easing curves with live previews" },
      { name: "Motion Docs",       url: "https://motion.dev/docs",         note: "Timing, springs, and why things feel wrong" },
      { name: "LottieFiles",       url: "https://lottiefiles.com",         note: "Lottie library and player" },
    ],
  },

  {
    name: "Assets",
    items: [
      { name: "Streamline",        url: "https://www.streamlinehq.com",    note: "Huge icon library, consistent across sets" },
      { name: "Lucide",            url: "https://lucide.dev",              note: "Clean open source icons, free" },
      { name: "Unsplash",          url: "https://unsplash.com",            note: "Free photography" },
      { name: "Squoosh",           url: "https://squoosh.app",             note: "Compress images before they hit Webflow" },
    ],
  },

  {
    name: "Build & Webflow",
    items: [
      { name: "Webflow University", url: "https://university.webflow.com", note: "Official lessons" },
      { name: "Finsweet Attributes", url: "https://finsweet.com/attributes", note: "CMS filtering and sliders without code" },
      { name: "Relume",            url: "https://relume.io",               note: "Component library built for Webflow" },
      { name: "Tailwind Colors",   url: "https://tailwindcss.com/docs/colors", note: "Well-built color ramps worth borrowing" },
      { name: "MDN CSS",           url: "https://developer.mozilla.org/en-US/docs/Web/CSS", note: "When Webflow does something you don't expect" },
    ],
  },

  {
    name: "Reading",
    items: [
      { name: "It's Nice That",    url: "https://www.itsnicethat.com",     note: "Daily. Broad creative work, not just digital" },
      { name: "Creative Boom",     url: "https://www.creativeboom.com",    note: "Branding and illustration leaning" },
      { name: "Shillington Blog",  url: "https://www.shillingtoneducation.com/blog", note: "Practical, good for fundamentals" },
      { name: "NN/g Articles",     url: "https://www.nngroup.com/articles/", note: "Research backed UX, no fluff" },
      { name: "Growth Design",     url: "https://growth.design/case-studies", note: "Psychology driven teardowns" },
    ],
  },

  {
    name: "Collect & Archive",
    items: [
      { name: "Cosmos",            url: "https://www.cosmos.so",           note: "Visual collecting. Better feed than Pinterest" },
      { name: "Are.na",            url: "https://www.are.na",              note: "Slower, more intentional research boards" },
      { name: "Wayback Machine",   url: "https://web.archive.org",         note: "Pull up a site's old design for a pitch" },
    ],
  },

  {
    name: "Mockups",
    items: [
      { name: "Mockup Maison",     url: "https://mockup.maison",           note: "Editorial, luxury leaning. Real photography, not CGI" },
    ],
  },

  {
    name: "Campaigns",
    items: [
      { name: "Love The Work More", url: "https://lovetheworkmore.com",    note: "Every Cannes Lions winner back to 1954. Free" },
    ],
  },

  {
    name: "Shop",
    items: [
      { name: "Karst Goods",       url: "https://karstgoods.com",          note: "Stone paper notebooks and action pads" },
    ],
  },

];
