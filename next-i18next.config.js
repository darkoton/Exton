// @ts-check
/**
 * @type {import('next-i18next').UserConfig['i18n']}
 */
const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru'],
  localeDetection: false,
}

module.exports = { i18n }

/**
 * @type {import('next-i18next').UserConfig}
 */
const config = {
  // https://www.i18next.com/overview/configuration-options#logging
  // debug: process.env.NODE_ENV === 'development',
  i18n,

  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}

module.exports = config