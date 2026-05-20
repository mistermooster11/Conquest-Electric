import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "conquestelectric.com",
      },
    ],
  },
};

export default nextConfig;
