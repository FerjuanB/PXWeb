import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This disables ESLint during builds. Re-enable when ready.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
