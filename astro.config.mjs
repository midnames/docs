// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

export default defineConfig({
  site: "https://docs.midnames.com",
  integrations: [
    starlight({
      title: "Midnames",
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
      ],
    }),
  ],
});
