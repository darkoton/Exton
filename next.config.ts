import type { NextConfig } from "next";
import i18n from './next-i18next.config'

export { i18n }

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
