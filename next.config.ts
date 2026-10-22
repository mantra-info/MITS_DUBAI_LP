import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/', destination: '/google-ads-agency-dubai', permanent: false }];
  },
};

export default nextConfig;
