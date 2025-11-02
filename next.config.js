/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { //"firebasestorage.googleapis.com"
    remotePatterns: [{
      protocol: "https",
      hostname: "firebasestorage.googleapis.com",
      port: "",
      pathname: "/**",
    }],
  },
  async rewrites() {
    return [
      {
        source: "/:code",
        destination: "/api/redirect/:code/nope",
      },
      {
        source: "/:code/:sub",
        destination: "/api/redirect/:code/:sub",
      },
    ];
  },
};

module.exports = nextConfig;
