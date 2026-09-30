/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['echarts', 'zrender'],
  // Allow time format and Asia/Bangkok locale handling
  env: {
    NEXT_PUBLIC_TIMEZONE: 'Asia/Bangkok',
  },
};

export default nextConfig;
