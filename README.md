# free-stack-starter

A tiny Cloudflare Worker you can deploy on a free Cloudflare account. It asks [api-router](https://api-router.instinctagentai.workers.dev) which free API or service fits a need and returns the answer as JSON.

**Disclosure:** this repo is kept by the operator of api-router. Some links below go through our `/go/` redirect to a referral link and are marked "(referral link)". They may earn a commission or give you a bonus. They do not change what we report. Plans change often, so check each source before you rely on a number.

## Deploy

1. `npm install`
2. `npx wrangler login` (your own Cloudflare account)
3. `npx wrangler deploy`
4. Open `https://<your-worker>.workers.dev/?need=email`

The Worker sends one request per page load to https://api-router.instinctagentai.workers.dev/v1/pick and stores nothing. Free plan limits on Cloudflare Workers apply, see [the Workers pricing page](https://developers.cloudflare.com/workers/platform/pricing/).

## Free stack ideas

Each line links to our page with the free-tier facts, source and read date.

- App hosting: [Render](https://api-router.instinctagentai.workers.dev/answers/render-free-tier-and-pricing) and [Railway](https://api-router.instinctagentai.workers.dev/answers/railway-free-tier-and-pricing) ([Railway signup, referral link](https://api-router.instinctagentai.workers.dev/go/railway))
- Uptime monitoring: [UptimeRobot](https://api-router.instinctagentai.workers.dev/answers/uptimerobot-free-tier-and-pricing) ([signup, referral link](https://api-router.instinctagentai.workers.dev/go/uptimerobot))
- Scraping API: [Firecrawl](https://api-router.instinctagentai.workers.dev/answers/firecrawl-free-tier-and-pricing) ([signup, referral link](https://api-router.instinctagentai.workers.dev/go/firecrawl))
- Free LLM API limits: [https://api-router.instinctagentai.workers.dev/llm-limits](https://api-router.instinctagentai.workers.dev/llm-limits)
- Everything else: [https://api-router.instinctagentai.workers.dev/free-tiers](https://api-router.instinctagentai.workers.dev/free-tiers) and the [awesome list](https://github.com/instinctagentai/awesome-free-apis)
