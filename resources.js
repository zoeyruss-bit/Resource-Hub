/* ============================================================
   THIS IS THE ONLY FILE YOU EDIT.

   A link looks like this:
     { name: "Awwwards", url: "https://...", note: "Why you'd open it",
       tags: ["gallery", "paid"], star: true }

   name   required
   url    required
   note   optional, one short line
   tags   optional, filters ACROSS categories. Click one on the page.
   star   optional, true pins it to the Favorites strip at the top

   Add a link:      copy a line, change the values.
   Add a category:  copy a whole { } block.
   Reorder:         move blocks or lines. Order here = order on the page.

   Tags in use: free · paid · gallery · tool · reference · article · foundry
   ============================================================ */

const CATEGORIES = [

  {
    name: "Web Inspiration",
    items: [
      { name: "Awwwards",            url: "https://www.awwwards.com",       note: "The benchmark. Good for pushing a concept further", tags: ["gallery"], star: true },
      { name: "Land-book",           url: "https://land-book.com",          note: "Landing pages, filterable by industry and style", tags: ["gallery"], star: true },
      { name: "SiteInspire",         url: "https://www.siteinspire.com",    note: "Tightly curated, less noise than most galleries", tags: ["gallery"] },
      { name: "Godly",               url: "https://godly.website",          note: "High end web design, heavy on motion", tags: ["gallery", "free"] },
      { name: "Footer Design",       url: "https://www.footer.design",      note: "Footers only. Weirdly useful", tags: ["gallery", "free"] },
    ],
  },

  {
    name: "UI & Patterns",
    items: [
      { name: "Mobbin",              url: "https://mobbin.com",             note: "Real app screens and flows, iOS and web", tags: ["gallery", "reference"], star: true },
      { name: "UI Patterns",         url: "https://ui-patterns.com",        note: "Named patterns with the reasoning behind them", tags: ["reference", "free"] },
      { name: "The Component Gallery", url: "https://component.gallery",    note: "One component, many real implementations", tags: ["reference", "free"] },
      { name: "GoodUI",              url: "https://goodui.org",             note: "A/B tested patterns that actually convert", tags: ["reference"] },
    ],
  },

  {
    name: "Branding & Identity",
    items: [
      { name: "Logosystem",          url: "https://logosystem.co",          note: "Logos only, thousands of them", tags: ["gallery"] },
      { name: "Visual Journal",      url: "https://visualjournal.net",      note: "Branding, editorial and art direction", tags: ["gallery", "free"] },
      { name: "Rebrand Gallery",     url: "https://rebrand.gallery",        note: "Before and after rebrands, curated", tags: ["gallery"] },
      { name: "Brand Style Guides",  url: "https://brandingstyleguides.com", note: "Real guideline documents to study", tags: ["reference", "free"] },
      { name: "Snøhetta × Recreate", url: "https://the-brandidentity.com/project/globular-and-modular-snøhettas-generative-identity-for-recreate-explores-its-innovative-character", note: "Generative identity built from the logomark", tags: ["article"] },
    ],
  },

  {
    name: "Typography",
    items: [
      { name: "Pangram Pangram",     url: "https://pangrampangram.com",     note: "Free to try on everything. Workhorse foundry", tags: ["foundry", "paid"] },
      { name: "Klim Type Foundry",   url: "https://klim.co.nz",             note: "Kris Sowersby. Impeccable, worth the licence", tags: ["foundry", "paid"] },
      { name: "Displaay",            url: "https://displaay.net",           note: "Prague. Sharp contemporary display and text", tags: ["foundry", "paid"] },
      { name: "VJ Type",             url: "https://vj-type.com",            note: "Violaine & Jérémy's Paris foundry. Gestural", tags: ["foundry", "paid"] },
      { name: "Luzi Type",           url: "https://luzi-type.ch",           note: "Swiss. Messina Sans and Faro live here", tags: ["foundry", "paid"] },
      { name: "Colophon",            url: "https://colophon-foundry.org",   note: "London and LA. Apercu and friends", tags: ["foundry", "paid"] },
      { name: "Typeverything",       url: "https://typeverything.com",      note: "Andrei Robu. Display faces built for branding", tags: ["foundry", "paid"] },
      { name: "Directory.design",    url: "https://directory.design/en/type-foundries", note: "Index of foundries when you need options", tags: ["reference", "free"] },
      { name: "Fontshare",           url: "https://fontshare.com",          note: "Free fonts, actually good ones", tags: ["foundry", "free"], star: true },
      { name: "Fonts In Use",        url: "https://fontsinuse.com",         note: "See a typeface in the wild before you commit", tags: ["reference", "free"] },
      { name: "Type Scale",          url: "https://typescale.com",          note: "Preview a modular scale fast", tags: ["tool", "free"] },
    ],
  },

  {
    name: "Color",
    items: [
      { name: "Coolors",             url: "https://coolors.co",             note: "Fastest palette generator", tags: ["tool", "free"] },
      { name: "Color Hunt",          url: "https://colorhunt.co",           note: "Curated four-color palettes", tags: ["tool", "free"] },
      { name: "Khroma",              url: "https://khroma.co",              note: "Learns colors you like, then suggests more", tags: ["tool", "free"] },
      { name: "ColorSpace",          url: "https://mycolor.space",          note: "One color in, full palette and gradients out", tags: ["tool", "free"] },
      { name: "Happy Hues",          url: "https://www.happyhues.co",       note: "Palettes shown on a real layout, not swatches", tags: ["tool", "free"] },
      { name: "Realtime Colors",     url: "https://www.realtimecolors.com", note: "Test a palette on a live page", tags: ["tool", "free"] },
      { name: "APCA Contrast",       url: "https://www.myndex.com/APCA/",   note: "Contrast math that beats WCAG for real type", tags: ["tool", "free"] },
    ],
  },

  {
    name: "Design Systems",
    items: [
      { name: "Material Design 3",   url: "https://m3.material.io",         note: "Strong on type scale and motion specs", tags: ["reference", "free"] },
      { name: "Carbon Typography",   url: "https://carbondesignsystem.com/elements/typography/overview/", note: "IBM. Productive vs expressive type sets", tags: ["reference", "free"] },
      { name: "AREA 17 Guides",      url: "https://area17.com/guides",      note: "How a real studio documents its standards", tags: ["reference", "free"] },
      { name: "Naming Tokens",       url: "https://eightshapes.com",        note: "Nathan Curtis on token naming. Find it under writing", tags: ["article"] },
    ],
  },

  {
    name: "Motion",
    items: [
      { name: "Easings.net",         url: "https://easings.net",            note: "Easing curves with live previews", tags: ["reference", "free"] },
      { name: "Motion Docs",         url: "https://motion.dev/docs",        note: "Timing, springs, and why things feel wrong", tags: ["reference", "free"] },
      { name: "Made with GSAP",      url: "https://madewithgsap.com/effects/", note: "Scroll and reveal effects with the code to match", tags: ["reference", "free"] },
      { name: "LottieFiles",         url: "https://lottiefiles.com",        note: "Lottie library and player", tags: ["tool"] },
    ],
  },

  {
    name: "Mockups & Assets",
    items: [
      { name: "Mockup Maison",       url: "https://mockup.maison",          note: "Editorial and luxury leaning. Real photography", tags: ["paid"] },
      { name: "Streamline",          url: "https://www.streamlinehq.com",   note: "Huge icon library, consistent across sets", tags: ["paid"] },
      { name: "Lucide",              url: "https://lucide.dev",             note: "Clean open source icons, free", tags: ["free"] },
      { name: "Unsplash",            url: "https://unsplash.com",           note: "Free photography", tags: ["free"] },
      { name: "Squoosh",             url: "https://squoosh.app",            note: "Compress images before they hit Webflow", tags: ["tool", "free"] },
    ],
  },

  {
    name: "Build & Webflow",
    items: [
      { name: "Webflow University",  url: "https://university.webflow.com", note: "Official lessons", tags: ["reference", "free"], star: true },
      { name: "Finsweet Attributes", url: "https://finsweet.com/attributes", note: "CMS filtering and sliders without code", tags: ["tool", "free"] },
      { name: "Relume",              url: "https://relume.io",              note: "Component library built for Webflow", tags: ["paid"] },
      { name: "Tailwind Colors",     url: "https://tailwindcss.com/docs/colors", note: "Well-built color ramps worth borrowing", tags: ["reference", "free"] },
      { name: "Margin Collapsing",   url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing", note: "Why your spacing is off by one margin", tags: ["article"] },
      { name: "MDN CSS",             url: "https://developer.mozilla.org/en-US/docs/Web/CSS", note: "When Webflow does something you don't expect", tags: ["reference", "free"] },
    ],
  },

  {
    name: "Reading",
    items: [
      { name: "It's Nice That",      url: "https://www.itsnicethat.com",    note: "Daily. Broad creative work, not just digital", tags: ["free"] },
      { name: "The Brand Identity",  url: "https://the-brandidentity.com",  note: "Identity work with the thinking shown", tags: ["free"] },
      { name: "Creative Boom",       url: "https://www.creativeboom.com",   note: "Branding and illustration leaning", tags: ["free"] },
      { name: "Shillington Blog",    url: "https://www.shillingtoneducation.com/blog", note: "Practical, good for fundamentals", tags: ["free"] },
      { name: "EightShapes",         url: "https://eightshapes.com",        note: "Nathan Curtis. The source on design system structure", tags: ["free"] },
      { name: "NN/g Articles",       url: "https://www.nngroup.com/articles/", note: "Research backed UX, no fluff", tags: ["free"] },
      { name: "Growth Design",       url: "https://growth.design/case-studies", note: "Psychology driven teardowns", tags: ["free"] },
    ],
  },

  {
    name: "Campaigns",
    items: [
      { name: "Love The Work More",  url: "https://lovetheworkmore.com",    note: "Every Cannes Lions winner back to 1954. Free", tags: ["gallery", "free"] },
    ],
  },

  {
    name: "Collect & Archive",
    items: [
      { name: "Cosmos",              url: "https://www.cosmos.so",          note: "Visual collecting. Better feed than Pinterest", tags: ["tool"], star: true },
      { name: "Are.na",              url: "https://www.are.na",             note: "Slower, more intentional research boards", tags: ["tool"] },
      { name: "Wayback Machine",     url: "https://web.archive.org",        note: "Pull up a site's old design for a pitch", tags: ["tool", "free"] },
    ],
  },

  {
    name: "Shop",
    items: [
      { name: "Karst Goods",         url: "https://karstgoods.com",         note: "Stone paper notebooks and action pads", tags: ["paid"] },
    ],
  },

];
