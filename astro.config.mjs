import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

const site = "https://handbook.shorebird.dev/";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "Shorebird Handbook",
      tagline: "How we run our company and build our products",
      logo: {
        light: "./src/assets/shorebird-light.svg",
        dark: "./src/assets/shorebird-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/shorebirdtech/handbook",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/shorebird",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/shorebirdtech/handbook/edit/main/",
      },
      favicon: "favicon.svg",
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: site + "open-graph.png?v=1" },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: site + "open-graph.png?v=1",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
      expressiveCode: {
        themes: ["dark-plus", "github-light"],
      },
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: true,
        }),
      ],
    }),
  ],
  redirects: {
    // Redirects to preserve legacy URLs.
  },
});
