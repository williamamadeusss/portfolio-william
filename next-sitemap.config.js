/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://portfolio-william-jet.vercel.app/", // <-- replace with your real domain
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
