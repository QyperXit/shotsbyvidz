/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["localhost"], // Add your domain here if not localhost
  },
};

export default nextConfig;
