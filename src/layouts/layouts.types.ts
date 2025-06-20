import type { ComponentType, ReactNode } from 'react';

export type LayoutItem = {
  name: string,
  component: ComponentType<{ children: ReactNode }>;
}