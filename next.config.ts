import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/miss-arnold-s-tutoring-table",
  assetPrefix: "/miss-arnold-s-tutoring-table",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
