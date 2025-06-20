import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

import type { AppProps } from 'next/app';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};