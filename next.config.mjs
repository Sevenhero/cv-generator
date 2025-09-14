/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: "/profile/",
  // basePath:".",
  output: "export",
  images: {
    // FIXME: image was missing
    unoptimized: true,
  },
};

export default nextConfig;
