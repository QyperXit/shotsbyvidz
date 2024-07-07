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
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
          {
            key: "Link",
            value:
              '</fonts/roboto-latin-400.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
