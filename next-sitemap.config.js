/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shubhamsurveyors.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: false,
  exclude: [
    "/portal",
    "/api/*",
    "/opengraph-image",
    "/icon.png",
    "/apple-icon.png",
  ],
  transform: async (_config, path) => {
    if (path.startsWith("/locations/") && path !== "/locations/maharashtra")
      return null;
    return { loc: path };
  },
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },
};
