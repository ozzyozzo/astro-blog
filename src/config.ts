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
    items: [
      {
        name: "Foco Web",
        description:
          "Sitios de una página para oficios y profesionales independientes. El contenido de cada sitio vive en un solo archivo YAML y el código no tiene texto escrito a mano, así que un cambio toma un minuto.",
        tech: ["Astro", "TypeScript", "Tailwind", "Zod"],
        status: "active",
        url: "https://focoweb.cl",
      },
      {
        name: "Foco Web Leads",
        description:
          "Busca en Google negocios de oficio que tienen ficha pero no tienen sitio web, los ordena por prioridad y arma una landing de muestra para cada uno antes de escribirles.",
        tech: ["Python", "SQLite", "Google Places API"],
        status: "active",
      },
      {
        name: "Foco Web Motion",
        description:
          "Plantillas de video para las redes de Foco Web. El isotipo es un componente de React con actitudes y gestos, así que las animaciones se ajustan cambiando números y se renderizan a MP4 desde la terminal.",
        tech: ["Remotion", "React", "TypeScript"],
        status: "active",
        github: "https://github.com/ozzyozzo/focoweb-motion",
      },
      {
        name: "Dash Usados",
        description:
          "Un panel para organizar lo que publico de a poco en grupos de Facebook. Tengo muchos artículos y estoy en muchos grupos, y publicar a mano era insoportable.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
        status: "active",
      },
      {
        name: "Petermarket",
        description:
          "Mi catálogo de productos usados. HTML, CSS y JavaScript sueltos, sin build ni dependencias. Con lo que vendo aquí estoy juntando para un monitor.",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "shipped",
        url: "https://petermarket.vercel.app",
      },
      {
        name: "ozzyozzo",
        description:
          "Este blog. Donde anoto cómo es volver a programar con una IA al lado, lo que funciona y lo que se cae.",
        tech: ["Astro", "TypeScript", "Tailwind", "MDX"],
        status: "active",
        github: "https://github.com/ozzyozzo/astro-blog",
      },
    ] as Project[],
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
