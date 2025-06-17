import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Header = () => {
	const { i18n } = useTranslation();
	const router = useRouter();

	const changeTo = router.locale === 'en' ? 'ru' : 'en';

	const onToggleLanguageClick = (newLocale: string) => {
		console.log(newLocale);

		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: newLocale });
	};

	return (
		<header className="container bg-green text-purple flex justify-between">
			Header
			<button onClick={() => onToggleLanguageClick(changeTo)}>{changeTo}</button>
		</header>
	);
};

export default Header;
