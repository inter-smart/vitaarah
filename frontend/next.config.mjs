/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitaarah.ae",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "beta.vitaarah.intersmart.in",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
