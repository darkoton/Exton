import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Button } from '@components/UI';

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
			<span>Header</span>
			<Button onClick={() => onToggleLanguageClick(changeTo)}>{changeTo}</Button>
		</header>
	);
};

export default Header;
