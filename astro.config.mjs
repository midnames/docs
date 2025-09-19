// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import starlightContextualMenu from "starlight-contextual-menu";
import starlightLinksValidator from "starlight-links-validator";
import starlightHeadingBadges from "starlight-heading-badges";

export default defineConfig({
  site: "https://docs.midnames.com",
  integrations: [
    starlight({
      title: "Midnames",
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
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "green" },
          light: { flavor: "latte", accent: "green" },
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
