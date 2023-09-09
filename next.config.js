const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
});

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pick',
        permanent: true,
      },
    ];
  },
};
