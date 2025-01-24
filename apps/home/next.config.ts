import type { NextConfig } from "next";
const { INSIGHTER_URL } = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/insighter",
        destination: `${INSIGHTER_URL}/`,
      },
      {
        source: "/insighter/:path+",
        destination: `${INSIGHTER_URL}/:path+`,
      },
      {
        source: "/insighter-static/_next/:path+",
        //destination: `${INSIGHTER_URL}/insighter-static/_next/:path+`,
        destination: `${INSIGHTER_URL}/_next/:path+`,
      },
    ];
  }
};

export default nextConfig;
