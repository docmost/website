/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.infrastructureLogging = {
        level: "error",
      };
    }
    return config;
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;
