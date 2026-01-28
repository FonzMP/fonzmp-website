import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fonzmp-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
