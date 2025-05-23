import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/cart-provider"
import Analytics from "@/components/analytics"
import ErrorBoundary from "@/components/error-boundary"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Olivet Storehouse - Christian Merchandise & Resources",
    template: "%s | Olivet Storehouse",
  },
  description: "Shop for Christian merchandise, books, music, and resources at Olivet Storehouse.",
  keywords: "church merchandise, christian apparel, religious gifts, Olivet Storehouse, Ablaze youth program",
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
    title: "Olivet Storehouse - Christian Merchandise & Resources",
    description: "Shop for Christian merchandise, books, music, and resources at Olivet Storehouse.",
    siteName: "Olivet Storehouse",
    images: [
      {
        url: "/ablaze-dove.png",
        width: 512,
        height: 512,
        alt: "Olivet Storehouse Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivet Storehouse - Christian Merchandise & Resources",
    description: "Shop for Christian merchandise, books, music, and resources at Olivet Storehouse.",
    creator: "@thebasilugo",
    images: ["/ablaze-dove.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="theme-color" content="#1e1b4b" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <ErrorBoundary>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <Suspense>
                  <main className="flex-1">{children}</main>
                </Suspense>
                <Footer />
                <Toaster />
              </div>
            </ErrorBoundary>
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
