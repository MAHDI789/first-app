/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["https://image.tmdb.org"],
  },
};

module.exports = nextConfig;
