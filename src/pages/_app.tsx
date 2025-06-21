import React from 'react';

import { appWithTranslation } from 'next-i18next';
import { selectLayout } from '@layouts/index';

import '@styles/normalize.css';
import '@styles/vars.css';
import '@styles/index.scss';
import '@styles/tailwind.css';

import { type AppPropsWithLayout } from '@interfaces/layouts.type';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? selectLayout('default');
  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App);
