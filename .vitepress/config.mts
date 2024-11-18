import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "varet",
  description: "Varet CLI Homepage",
  head: [["link", { rel: "icon", href: "varet.png" }]],
  themeConfig: {
    logo: "varet.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/docs/varet" },
    ],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "What is Varet?", link: "/docs/varet" },
          { text: "Installation", link: "/docs/installation" },
          { text: "Usage", link: "/docs/usage" },
          { text: "Custom Plugins", link: "/docs/custom_plugins" },
          { text: "@varet/core", link: "/docs/core" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/varetcli/varet" },
    ],
  },
  sitemap: {
    hostname: "https://varet.dev",
  },
  cleanUrls: true,
});
