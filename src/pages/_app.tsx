import { NextIntlClientProvider } from 'next-intl';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextIntlClientProvider locale="en" timeZone="Europe/Vienna" messages={pageProps.messages}>
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
