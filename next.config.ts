import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/recongress2025",
  assetPrefix: "/recongress2025/",
  trailingSlash: true,
};

export default nextConfig;
