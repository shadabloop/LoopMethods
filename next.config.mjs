/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['frequencyimage.s3.ap-south-1.amazonaws.com'],
  },
};

export default nextConfig;
