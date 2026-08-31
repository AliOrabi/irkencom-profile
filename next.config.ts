import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /sandbox was the staging URL — now the canonical homepage is /
      // 301 = permanent redirect (search engines transfer page rank to /)
      {
        source: '/sandbox',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/sandbox',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/ar/sandbox',
        destination: '/ar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
