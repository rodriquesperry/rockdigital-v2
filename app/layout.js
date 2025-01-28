import { Lato, Playfair_Display } from 'next/font/google';
import BootstrapClient from '@/components/bootstrap_client/BootstrapClient';

import Navigation from '@/components/navigation/navigation.component';
import Powered from '@/components/powered_foooter/powered.component';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

const latoFont = Lato({
	subsets: ['latin'],
	weight: ['100', '300', '400'],
	variable: '--font-lato',
});

const pfDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-playfair_display',
});

export const metadata = {
	title: {
		default: 'Rock Digital',
		template: '%s | Rock Digital',
	},
	description: 'Generated by Rock Digital',
  verification: {
    google: "2ULkPhhcwPOfnN7-fHJTH5gUVStrrWUa3OSmVRvXR8s",
  }
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${latoFont.variable} ${pfDisplay.variable}`}>
				<Navigation />
				{children}
				<SpeedInsights />
				<Analytics />
				<Powered />
				<BootstrapClient />
			</body>
		</html>
	);
}
