import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
    // CORS for dev-mode
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.79.183', '192.168.0.103'],

};

export default nextConfig;
