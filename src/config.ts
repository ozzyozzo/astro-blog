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
      { text: "Projects", href: "/projects" },
    ],

    // Let visitors change the color theme?
    showThemeSwitcher: false,
  },

  // Terminal window chrome (tiling-WM style titlebar)
  terminal: {
    user: "ozzy",
    host: "archlinux",
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
      { text: "[proyectos]", href: "/projects", primary: false },
      { text: "[sobre mí]", href: "/about", primary: false },
    ],
  },

  // Color theme (see /themes for all options)
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
    dateFormat: "MMMM d, yyyy",
  },

  // Your projects (shown on /projects)
  projects: {
    gridColumns: 3,
    showStatus: true,
    items: [
      {
        name: "my-awesome-project",
        description:
          "A brief description of what this project does and why it's cool.",
        tech: ["Astro", "Tailwind", "TypeScript"],
        status: "active",
        url: "https://example.com",
        github: "https://github.com/you/repo",
      },
      {
        name: "another-project",
        description: "Another great project you've worked on.",
        tech: ["React", "Node.js"],
        status: "shipped",
        github: "https://github.com/you/repo",
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

  // Set to true to show theme switcher for demo purposes
  // Automatically enabled on Netlify via PUBLIC_ENABLE_DEMO env var
  demo: {
    enabled: import.meta.env.PUBLIC_ENABLE_DEMO === "true" || false,
  },
};

export type SiteConfig = typeof siteConfig;
