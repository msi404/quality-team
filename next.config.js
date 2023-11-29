/** @type {import('next').NextConfig} */
const { i18n } = require( './next-i18next.config' );
const nextConfig = {
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-wn-g.gr-cdn.com',
      },
    ],
  },
  reactStrictMode: true,
  i18n,
}

module.exports = nextConfig;
