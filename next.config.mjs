/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  output: 'standalone',
  experimental: {
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      // use: ['./inline-svg-loader.js'], // Using relative path for loader might be tricky in webpack config without resolve alias, but let's try direct path first.
      // Better to use path.resolve for loaders usually, but let's stick to what worked or relative.
      // Actually './inline-svg-loader.js' works if it's in root.
      use: [
        {
          loader: './inline-svg-loader.js',
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
