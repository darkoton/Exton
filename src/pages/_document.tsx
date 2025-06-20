import { Html, Main, NextScript, Head } from 'next/document';
import i18nextConfig from '../../next-i18next.config';
import Body from '@components/layouts/Body';

export default function Document() {
  const currentLocale = i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale} className="min-h-screen">
      <Head />
      <Body className="min-h-screen">
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
