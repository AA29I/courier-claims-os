/** @type {import('next').Config} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    '/api/**/*': ['./prisma/seed.db', './src/generated/prisma/**/*'],
    '/**/*': ['./prisma/seed.db', './src/generated/prisma/**/*'],
  },
};

module.exports = nextConfig;
