import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart-provider";
import Analytics from "@/components/analytics";
import ErrorBoundary from "@/components/error-boundary";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		default: "Olivet Storehouse - Church Merchandise",
		template: "%s | Olivet Storehouse",
	},
	description:
		"Shop for church merchandise including shirts, caps, posters, CDs, and more.",
	keywords:
		"church merchandise, christian apparel, religious gifts, Olivet Storehouse, Ablaze youth program",
	authors: [{ name: "Basil Ugo", url: "https://github.com/thebasilugo" }],
	creator: "Basil Ugo",
	publisher: "Olivet Storehouse",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://olivet-storehouse.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://olivet-storehouse.vercel.app",
		title: "Olivet Storehouse - Church Merchandise",
		description:
			"Shop for church merchandise including shirts, caps, posters, CDs, and more.",
		siteName: "Olivet Storehouse",
	},
	twitter: {
		card: "summary_large_image",
		title: "Olivet Storehouse - Church Merchandise",
		description:
			"Shop for church merchandise including shirts, caps, posters, CDs, and more.",
		creator: "@thebasilugo",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 5,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	generator: "thebasilugo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<CartProvider>
						<ErrorBoundary>
							<div className="relative flex min-h-screen flex-col">
								<Header />
								<main className="flex-1">{children}</main>
								<Footer />
								<Toaster />
							</div>
						</ErrorBoundary>
					</CartProvider>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}

import "./globals.css";
