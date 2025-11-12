# Current Market — The Brand Intelligence Lab

A premium, research-driven marketing site for Current Market, built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Quickstart

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the experience.

## Build & Run in Production Mode

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this repository to GitHub or your preferred Git provider.
2. Create a new Vercel project and import the repo.
3. Use the default settings — Next.js and TypeScript are detected automatically.
4. Set any required environment variables (none needed yet). Deploy.

## Editing Content

Copy for each page lives in the `app/*/page.tsx` files. Update the text in those components and redeploy to publish changes. Insights posts are currently sourced from an inline array in `app/insights/page.tsx` — you can extend this pattern or migrate to MDX later.

## Contact Form & Email Integration

The contact form posts to `/api/contact`. To wire up SendGrid or another provider, update `app/api/contact/route.ts` where the TODO comment is located.

Example environment variables:

```
SENDGRID_API_KEY="..."
CONTACT_TO_EMAIL="hello@currentmarketlab.com"
CONTACT_FROM_EMAIL="noreply@currentmarketlab.com"
```

Use `fetch` or an official SDK inside the API route to deliver notifications.

## Design Tokens

- Background: `#0B0A12`
- Ink (primary text): `#F6F6F9`
- Ink muted: `rgba(246,246,249,0.7)`
- Accent violet: `#7B4AE2`
- Accent red: `#EF4D5B`
- Card background: `rgba(255,255,255,0.04)`
- Card border: `rgba(255,255,255,0.12)`
- Radius 2xl: `1.25rem`
- Shadow soft: `0 8px 24px rgba(0,0,0,0.25)`
- Typography: Inter / system UI, headings bold with tight leading, body copy 1.6 line-height
- Spacing scale: 8px baseline (8, 12, 16, 24, 32, 48, 64)

## Project Structure

```
app/
  layout.tsx      # Global layout, metadata, header/footer
  page.tsx        # Home
  about/page.tsx  # Brand story
  capabilities/...# Service pillars
  projects/...    # Case studies
  insights/...    # Insights cards
  contact/...     # Contact form + API route
components/       # Shared UI building blocks
public/           # Static assets (logo, OG image)
```

The site ships with robots.txt, a sitemap generator, and OG/Twitter metadata — ready for search engines and social sharing out of the box.
