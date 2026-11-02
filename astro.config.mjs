import { defineConfig } from "astro/config";

// Static HTML only. Cloudflare Pages runs `npm run build` and publishes `dist`.
// Set `site` to the pages.dev or custom hostname once it exists if you want
// absolute canonical and Open Graph URLs.
export default defineConfig({
  output: "static",
  compressHTML: true,
});
