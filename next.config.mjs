/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dogum-gunun-kutlu-olsun-sevgilim' : '',
  assetPrefix: isProd ? 'https://hcaglar32.github.io/dogum-gunun-kutlu-olsun-sevgilim/' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  trailingSlash: true,
};

export default nextConfig;
