import { ReactElement, ComponentType, ReactNode } from 'react';
import type { LayoutItem } from './layouts.types';

import MainLayout from './MainLayout';
import TestLayout from './TestLayout';

export { MainLayout, TestLayout };

const layouts: Record<string, LayoutItem> = {
  main: {
    name: 'main',
    component: MainLayout,
  },
  test: {
    name: 'test',
    component: TestLayout,
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
    return <>Layout not found</>;
  }
}
