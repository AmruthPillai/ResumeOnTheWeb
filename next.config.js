// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dev.to", "res.cloudinary.com", "cdn.dribbble.com", "scontent.cdninstagram.com"],
  },
};

module.exports = nextConfig;
