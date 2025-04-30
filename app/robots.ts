import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account/", "/checkout/", "/api/", "/admin/"],
    },
    sitemap: "https://olivet-storehouse.vercel.app/sitemap.xml",
  }
}

