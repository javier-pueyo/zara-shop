/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
  },
  output: 'standalone',
  // Esta configuración se aplica cuando haces 'next build'
  compiler: {
    // Elimina atributos de datos de React (como data-testid) para limpiar el HTML
    reactRemoveProperties: true,
  },
  basePath: '/portfolio',
};

export default nextConfig;
