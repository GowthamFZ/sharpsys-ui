/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    domains: ["ssswordpress-hfhsa8cafagzhsbq.westus-01.azurewebsites.net", "smtp.gmail.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
