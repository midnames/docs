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
        }, {
          icon: "twitter",
          label: "Twitter",
          href: "https://x.com/midnames"
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/midnames/"
        }

      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            {label: "Quickstart", slug: "guides/quickstart"},
            {label: "Buy Domains", slug: "guides/buy_domain"},
            {label: "Transfer .night domains", slug: "guides/transfer_domain"},
            {label: "Update domain fields", slug: "guides/update_fields"},
            {label: "MNS domain specification", slug: "guides/valid_domains"}
          ]
        },
        {
          label: "SDK Reference",
          items: [
            {label: "Domain Operations", slug: "reference/operations"},
            {label: "Domain Resolution", slug: "reference/resolve"},
            {label: "TypeScript Types", slug: "reference/types"},
            {label: "Utility Functions", slug: "reference/utils"},
            {label: "Profile Widget", slug: "reference/widget"}
          ]
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
