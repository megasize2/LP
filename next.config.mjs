/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Vercel Toolbarを無効化するための環境変数
  env: {
    NEXT_PUBLIC_VERCEL_TOOLBAR_DISABLED: "true",
    VERCEL_TOOLBAR_DISABLED: "true",
    NEXT_PUBLIC_VERCEL_ANALYTICS_DISABLED: "true",
    VERCEL_ANALYTICS_DISABLED: "true",
  },
}

export default nextConfig
