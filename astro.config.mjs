import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { siteData } from "./src/site.config";
import partytown from "@astrojs/partytown";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: siteData.url,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    prefetch(),
  ],
});
