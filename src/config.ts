// Dotfiles Theme Config
// Edit this file to make it yours

export type ProjectStatus = "active" | "shipped" | "maintenance" | "archived";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  url?: string;
  github?: string;
}

export const siteConfig = {
  // The basics
  title: "ozzyozzo",
  description: "Peter Castro - Full Stack Dev.",
  author: "Peter Castro",
  siteUrl: "https://www.ozzyozzo.dev",

  // Header navigation
  header: {
    // Core nav items (pages from content/pages are added automatically after these)
    coreNav: [
      { text: "Blog", href: "/blog" },
      { text: "Proyectos", href: "/proyectos" },
    ],
  },

  // Terminal window chrome (tiling-WM style titlebar)
  terminal: {
    user: "ozzy",
    host: "omarchy",
  },

  // Homepage hero
  hero: {
    title: "ozzyozzo",

    // These rotate with a typewriter effect
    typewriterLines: [
      "Volví al código ahora con canas y una IA de copiloto.",
      "Notas de lo que probé, lo que falló y lo que quedó funcionando.",
    ],

    // Wrap words in **asterisks** to highlight them
    description: "Un blog para **devs**, **curiosos** y **familiares**.",

    terminalTitle: "bienvenido",

    // primary: true = filled button
    ctaButtons: [
      { text: "[blog]", href: "/blog", primary: true },
      { text: "[proyectos]", href: "/proyectos", primary: false },
      { text: "[sobre mí]", href: "/sobre-mi", primary: false },
    ],
  },

  // Color theme (la lista completa esta en src/styles/globals.css)
  theme: {
    // clean-white, catppuccin-mocha, catppuccin-latte, rose-pine, rose-pine-dawn,
    // nord, nord-light, dracula, solarized-dark, solarized-light,
    // gruvbox-dark, gruvbox-light, tokyo-night, tokyo-night-light
    defaultTheme: "tokyo-night",
  },

  // Your links (leave empty to hide)
  social: {
    github: "https://github.com/ozzyozzo",
    twitter: "https://x.com/_ozzy_ozzo",
    linkedin: "",
    bluesky: "",
    mastodon: "",
    email: "",
    rss: "/rss.xml",
  },

  // Blog settings
  blog: {
    postsOnHomepage: 5,
    postsPerPage: 10,
    showReadingTime: true,
    showTableOfContents: true,
    showPostNavigation: true,
    showTags: true,
    showFeaturedPost: true,
    dateFormat: "d 'de' MMMM 'de' yyyy",
  },

  // Your projects (shown on /proyectos)
  projects: {
    gridColumns: 3,
    showStatus: true,
    // Agrega aqui tus proyectos. Mientras la lista este vacia, /proyectos
    // muestra un mensaje de "todavia no hay nada publicado".
    items: [] as Project[],
  },

  // Footer
  footer: {
    statusMessage: "Sistemas en línea",
    copyright: "© %YEAR% Peter Castro",
    showSocialLinks: true,
  },

  // SEO
  seo: {
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
    twitterHandle: "",
    googleSiteVerification: "",
  },

  // Toggle pages on/off
  pages: {
    blog: true,
    projects: true,
    search: true,
    archives: true,
    rss: true,
  },

  // Power user settings
  advanced: {
    commandPalette: true,
    showCopyCode: true,
    showLineNumbers: false,
    showBreadcrumbs: true,
    pageTransitions: true,
  },
};

export type SiteConfig = typeof siteConfig;
