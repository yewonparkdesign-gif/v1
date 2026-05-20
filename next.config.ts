import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.figma.com" },
      { protocol: "https", hostname: "**.figmausercontent.com" },
    ],
  },
};

export default nextConfig;
