import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
   * Note: We use the webpack bundler (not Turbopack) for production builds
   * because Tailwind CSS v4 PostCSS integration is stable with webpack.
   * Turbopack support for Tailwind CSS v4 is still maturing.
   */
  experimental: {},
};

export default nextConfig;
