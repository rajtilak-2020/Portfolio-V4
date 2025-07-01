/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
