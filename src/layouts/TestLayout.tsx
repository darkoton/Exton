import React from 'react';

import classNames from 'classnames';

import { Geologica } from 'next/font/google';

const geologica = Geologica({
  subsets: ['latin'],
});

import Head from '@components/layouts/Head';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import Container from '@components/layouts/Container';

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <Head />
      <div className={classNames('flex flex-col w-full min-h-screen relative overflow-hidden', geologica.className)}>
        <Container>
          test
          <Header />
          {children}
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default MainLayout;
