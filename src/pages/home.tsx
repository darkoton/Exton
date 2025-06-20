import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import { selectLayout } from '@layouts';

export default function Home() {
  const { t } = useTranslation('common');

  return <>{t('hello')}</>;
}

Home.getLayout = selectLayout('test');

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});
