import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // produce .next/standalone for slim Docker runtime
  output: "standalone",

  // unblock Docker/CI builds even if ESLint finds errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (optional) keep type-checking on; switch to true only if you also run tsc elsewhere
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
