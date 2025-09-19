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
          items: [
            { label: "Buy a .night domain", slug: "guides/buy_domain" },
            {
              label: "Transfer a .night domain",
              slug: "guides/transfer_domain",
            },
            {
              label: "Update fields in a domain",
              slug: "guides/update_fields",
            },
            { label: "MNS Specification", slug: "guides/valid_domains" },
          ],
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
