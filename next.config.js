/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Optimize for Docker builds
  experimental: {
    // Reduce bundle size by excluding unused dependencies
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
      ],
    },
  },
};

module.exports = nextConfig;
