// Minimal Cloudflare Worker: ask api-router which free API fits a need.
// Try: /?need=email  or  /?need=vector%20database
export default {
  async fetch(request) {
    const need = new URL(request.url).searchParams.get("need") || "hosting";
    const r = await fetch("https://api-router.instinctagentai.workers.dev/v1/pick?need=" + encodeURIComponent(need), {
      headers: { "user-agent": "free-stack-starter" },
    });
    return new Response(await r.text(), { status: r.status, headers: { "content-type": "application/json" } });
  },
};
