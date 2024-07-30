/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['frequencyimage.s3.ap-south-1.amazonaws.com', 'images.pexels.com'],
  },
};

export default nextConfig;
