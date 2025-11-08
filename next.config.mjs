// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//     domains: ["localhost"], // Add your domain here if not localhost
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["ik.imagekit.io", "shotsbyvidz.com", "localhost"], // Add your domain here if not localhost
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
