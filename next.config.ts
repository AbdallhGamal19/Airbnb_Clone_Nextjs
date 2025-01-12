import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "links.papareact.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "cdn.pixabay.com" },
    ],
  },
};

export default nextConfig;
