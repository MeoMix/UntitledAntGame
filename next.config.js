/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // https://github.com/vercel/next.js/issues/36774
  // https://github.com/microsoft/WSL/issues/4739
  webpack: (config) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 1000,
      aggregateTimeout: 200,
    }
  })
}

module.exports = nextConfig
