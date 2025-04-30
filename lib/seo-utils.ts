import type { Metadata } from "next"

type GenerateMetadataProps = {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
  pathname?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  noIndex = false,
  pathname = "",
}: GenerateMetadataProps): Metadata {
  const baseUrl = "https://olivet-storehouse.vercel.app"
  const url = `${baseUrl}${pathname}`

  return {
    title,
    description,
    keywords: [
      "church merchandise",
      "christian apparel",
      "religious gifts",
      "Olivet Storehouse",
      "Ablaze youth program",
      ...keywords,
    ].join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Olivet Storehouse",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${image}`],
      creator: "@thebasilugo",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  }
}

