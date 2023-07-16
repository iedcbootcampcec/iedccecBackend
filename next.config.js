/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  // Other Next.js configuration options...
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
}
