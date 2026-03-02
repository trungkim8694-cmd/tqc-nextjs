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
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.tiktok.com https://*.tiktokcdn.com https://*.ttwstatic.com https://maps.googleapis.com https://apis.google.com;
              style-src 'self' 'unsafe-inline' https://*.tiktok.com https://*.tiktokcdn.com https://*.ttwstatic.com https://fonts.googleapis.com;
              frame-src 'self' https://*.tiktok.com https://www.tiktok.com https://www.google.com;
              connect-src 'self' https://*.tiktok.com https://*.tiktokcdn.com https://*.ttwstatic.com https://maps.googleapis.com https://script.google.com https://script.googleusercontent.com;
              img-src 'self' blob: data: https://*.tiktok.com https://*.tiktokcdn.com https://*.ttwstatic.com https://maps.gstatic.com https://maps.googleapis.com https://*.byteoversea.com;
              font-src 'self' data: https://fonts.gstatic.com https://*.tiktokcdn.com https://*.ttwstatic.com;
              worker-src 'self' blob:;
            `.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;