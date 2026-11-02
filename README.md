# Jason Dorey

A one-page static site for Jason Dorey. Astro compiles it to HTML in `dist`. There is no client-side app and no Cloudflare adapter.

The copy comes from his CV. The photographs are compressed copies of the supplied portraits and the Ho Chi Minh City talk.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Cloudflare Pages should use that command and publish `dist`.

## Cloudflare Pages

Create a Pages project and import the GitHub repository `jasondorey/site`.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | repository root |

Leave the root directory empty if the dashboard already means the repository root. Do not set the output directory to `public`.

No environment variables or build secrets are required. Node.js 22 is pinned in `.node-version`. The current Pages v3 build image already defaults to Node.js 22, so `NODE_VERSION` does not need to be set.

Merge the pull request into `main` before the production deployment. After the project is connected, Pages can also build a preview from the pull request.

The project name becomes the `*.pages.dev` subdomain. If `site` is already taken, choose another name when the dashboard asks.

When that hostname exists, set `site` in `astro.config.mjs` if you want absolute canonical URLs.
