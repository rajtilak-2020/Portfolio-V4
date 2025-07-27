/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://krajtilak.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false, // disables index, only one sitemap
  outDir: './public',
};
