import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default withContentlayer(nextConfig);
