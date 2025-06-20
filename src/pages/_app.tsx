import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '@styles/normalize.css';
import '@styles/vars.css';
import '@styles/index.scss';
import '@styles/tailwind.css';

import { type AppPropsWithLayout } from '@interfaces/layouts.type';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App);
