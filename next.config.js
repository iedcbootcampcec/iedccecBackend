/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:code",
        destination: "/api/redirect/:code",
      },
    ];
  },
};

module.exports = nextConfig;
