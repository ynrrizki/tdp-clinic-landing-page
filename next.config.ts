import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DOMAIN: process.env.DOMAIN,
  }
};

export default nextConfig;
