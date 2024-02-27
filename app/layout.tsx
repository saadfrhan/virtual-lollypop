import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Press_Start_2P({
	weight: ['400'],
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: "Lollypop",
	description: "A virtual lollypop machine",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-lolly-bg bg-no-repeat bg-cover`}>{children}</body>
		</html>
	);
}
