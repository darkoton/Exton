import { ReactElement, ComponentType, ReactNode } from 'react';
import type { LayoutItem } from './layouts.types';

import MainLayout from './MainLayout';

export { MainLayout };

const layouts: Record<string, LayoutItem> = {
  default: {
    name: 'default',
    component: MainLayout,
  },
};

export function selectLayout(name: string) {
  const Layout = layouts[name];

  function getLayout(page: ReactElement) {
    return <Layout.component>{page}</Layout.component>;
  }

  if (Layout) {
    return getLayout;
  } else {
    return () => <>Layout not found</>;
  }
}
