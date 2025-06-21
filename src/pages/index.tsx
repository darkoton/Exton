import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: true, // 301 если true, 307 если false
    },
  };
};

export default function Empty() {
  return <></>;
}
