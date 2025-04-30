import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://olivet-storehouse.vercel.app"

  // Main pages
  const routes = [
    "",
    "/products",
    "/ablaze",
    "/new-arrivals",
    "/blog",
    "/about",
    "/contact",
    "/cart",
    "/checkout",
    "/account",
    "/account/login",
    "/account/register",
    "/account/orders",
    "/account/profile",
    "/account/addresses",
    "/privacy",
    "/terms",
    "/faq",
    "/shipping",
    "/notifications",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // Product categories
  const categories = [
    "/products/category/shirts",
    "/products/category/caps",
    "/products/category/posters",
    "/products/category/cds-music",
    "/products/category/books",
    "/products/category/accessories",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Ablaze collections
  const ablazeCollections = ["/ablaze/2024", "/ablaze/2023", "/ablaze/archive"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Blog posts (would typically be dynamically generated)
  const blogPosts = ["/blog/1", "/blog/2", "/blog/3", "/blog/4", "/blog/5", "/blog/6"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...routes, ...categories, ...ablazeCollections, ...blogPosts]
}

