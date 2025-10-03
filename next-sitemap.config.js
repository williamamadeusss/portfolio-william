/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://williamamadeus.site/", // <-- replace with your real domain
  generateRobotsTxt: true, // also generate robots.txt
  sitemapSize: 7000,
  pagesDirectory: `${__dirname}/src/app`,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
