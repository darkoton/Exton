import { useTranslation } from 'next-i18next';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import classNames from 'classnames';
import { Geologica } from 'next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

const geologica = Geologica({
	subsets: ['latin'],
});

export default function Home() {
	const { t, i18n } = useTranslation('common');

	return (
		<div className={classNames('flex flex-col w-full min-h-screen', geologica.className)}>
			<Header />
			<div className="container flex-auto bg-sky-blue">{t('hello')}</div>
			<Footer />
		</div>
	);
}

type Props = {
	// Add custom props here
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en')),
	},
});
