const { withNextVideo } = require( 'next-video/process' )

/** @type {import('next').NextConfig} */
const { i18n } = require( './next-i18next.config' );
const nextConfig = {
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

module.exports = withNextVideo( nextConfig );
