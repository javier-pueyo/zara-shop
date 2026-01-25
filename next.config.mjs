/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
  },
  // Esta configuración se aplica cuando haces 'next build'
  compiler: {
    // Elimina atributos de datos de React (como data-testid) para limpiar el HTML
    reactRemoveProperties: true,
  },
};

export default nextConfig;
