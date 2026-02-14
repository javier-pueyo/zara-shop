import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['lucide-react'],
  experimental: {
    // @ts-expect-error - Turbo option is valid but types are missing in this version
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['./inline-svg-loader.js'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v-pueyomir-web.pueyomir.com',
      },
      {
        protocol: 'http',
        hostname: 'prueba-tecnica-api-tienda-moviles.onrender.com',
      },
    ],
  },
};

export default nextConfig;
