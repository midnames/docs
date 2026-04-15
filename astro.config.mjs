// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import starlightContextualMenu from "starlight-contextual-menu";
import starlightLinksValidator from "starlight-links-validator";
import starlightHeadingBadges from "starlight-heading-badges";

export default defineConfig({
  site: "https://docs.midnight.domains",
  integrations: [
    starlight({
      title: "Midnight Domains",
      customCss: ["./src/styles/custom.css"],
      components: {
        Pagination: "./src/components/CustomPagination.astro",
      },
      routeMiddleware: "./src/routeData.ts",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/midnames/docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "SDK Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Preprod",
          autogenerate: { directory: "preprod" },
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "teal" },
          light: { flavor: "latte", accent: "teal" },
        }),
        starlightLinksValidator(),
        starlightHeadingBadges(),
        starlightContextualMenu({
          actions: ["copy", "view", "chatgpt", "claude"],
        }),
      ],
    }),
  ],
});
