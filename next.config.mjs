/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений
  },
  trailingSlash: true,
};

export default nextConfig;
