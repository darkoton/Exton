// import { useRouter } from 'next/router';
// import { Button } from '@components/UI';

import Logo from '@components/UI/Logo';

const Header = () => {
  // const router = useRouter();

  // const changeTo = router.locale === 'en' ? 'ru' : 'en';

  // const onToggleLanguageClick = (newLocale: string) => {
  //   const { pathname, asPath, query } = router;
  //   router.push({ pathname, query }, asPath, { locale: newLocale });
  // };

  return (
    <header className="flex justify-between">
      <Logo />
      {/* <Button onClick={() => onToggleLanguageClick(changeTo)}>{changeTo}</Button> */}
    </header>
  );
};

export default Header;
