import { useRouter } from 'next/router';
import { Button } from '@components/UI';

const Header = () => {
  const router = useRouter();

  const changeTo = router.locale === 'en' ? 'ru' : 'en';

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header className="container bg-green-300 text-purple-600 flex justify-between">
      <span>Header</span>
      <Button onClick={() => onToggleLanguageClick(changeTo)}>{changeTo}</Button>
    </header>
  );
};

export default Header;
