/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_VERSION: require('./package.json').version
  },
  distDir: "dist",
};

module.exports = nextConfig;
