// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.tiktok.com https://*.tiktokcdn.com https://maps.googleapis.com;
              style-src 'self' 'unsafe-inline' https://*.tiktok.com https://*.tiktokcdn.com https://fonts.googleapis.com;
              frame-src 'self' https://*.tiktok.com https://www.tiktok.com https://www.google.com;
              connect-src 'self' https://*.tiktok.com https://*.tiktokcdn.com https://maps.googleapis.com https://script.google.com;
              img-src 'self' data: https://*.tiktok.com https://*.tiktokcdn.com https://maps.gstatic.com https://maps.googleapis.com;
              font-src 'self' data: https://*.tiktok.com https://*.tiktokcdn.com https://fonts.gstatic.com;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;