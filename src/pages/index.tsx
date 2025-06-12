import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Hello');

	return <>{t('message')}</>;
}

export async function getStaticProps(context: { locale: any }) {
	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by locale and read
			// the desired one based on the `locale` received from Next.js.
			messages: (await import(`../locale/${context.locale}.json`)).default,
		},
	};
}
