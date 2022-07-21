// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dev.to", "res.cloudinary.com", "scontent-iad3-1.cdninstagram.com"],
  },
};

module.exports = nextConfig;
