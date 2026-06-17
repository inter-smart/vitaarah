/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitaarah.onrender.com", // your deployed backend domain
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        // pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
