/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_VERSION: require("./package.json").version,
  },
  distDir: "dist",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = nextConfig;
