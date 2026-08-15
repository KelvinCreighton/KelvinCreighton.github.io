import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);

