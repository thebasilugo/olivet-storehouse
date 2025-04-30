import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Ablaze 2024: Theme Reveal and Merchandise Preview",
    excerpt:
      "Get a first look at this year's Ablaze youth program theme and the exclusive merchandise collection designed for the event.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?text=Ablaze+2024&height=400&width=800",
    date: "2024-03-15",
    author: "Pastor Michael Johnson",
    category: "Events",
    tags: ["ablaze", "youth", "merchandise"],
    readTime: 5,
    featured: true,
  },
  {
    id: 2,
    title: "Behind the Designs: Meet Our Creative Team",
    excerpt:
      "Learn about the creative process behind our merchandise designs and the talented team that brings them to life.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?text=Design+Team&height=400&width=800",
    date: "2024-03-01",
    author: "Sarah Williams",
    category: "Behind the Scenes",
    tags: ["design", "creativity", "team"],
    readTime: 7,
    featured: false,
  },
  {
    id: 3,
    title: "Summer Mission Trip: How Your Purchases Make a Difference",
    excerpt:
      "Discover how proceeds from our store support the church's annual summer mission trip and the communities we serve.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?text=Mission+Trip&height=400&width=800",
    date: "2024-02-20",
    author: "Pastor David Thompson",
    category: "Missions",
    tags: ["missions", "outreach", "impact"],
    readTime: 6,
    featured: true,
  },
  {
    id: 4,
    title: "New Scripture Collection: Inspiration for Your Home",
    excerpt: "Explore our new collection of scripture-based home decor designed to bring inspiration to every room.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?text=Scripture+Collection&height=400&width=800",
    date: "2024-02-10",
    author: "Rebecca Martinez",
    category: "Product Spotlight",
    tags: ["scripture", "decor", "inspiration"],
    readTime: 4,
    featured: false,
  },
  {
    id: 5,
    title: "Worship Album Release: Songs from the Heart",
    excerpt:
      "Our worship team's latest album is now available in the store. Learn about the inspiration behind the songs.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?text=Worship+Album&height=400&width=800",
    date: "2024-01-25",
    author: "James Wilson",
    category: "Music",
    tags: ["worship", "album", "music"],
    readTime: 5,
    featured: false,
  },
  {
    id: 6,
    title: "Community Outreach: Winter Clothing Drive Success",
    excerpt: "Thanks to your support, our winter clothing drive provided warm garments to over 200 families in need.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?text=Clothing+Drive&height=400&width=800",
    date: "2024-01-15",
    author: "Pastor Michael Johnson",
    category: "Community",
    tags: ["outreach", "charity", "community"],
    readTime: 6,
    featured: false,
  },
]

// Format date for display
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

export default function BlogPage() {
  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  // Get remaining posts
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Olivet Storehouse Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          News, updates, and stories from our church community and store.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-[250px] object-cover"
                  />
                </Link>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" />
                  <span>By {post.author}</span>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t">
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-[200px] object-cover"
                  />
                </Link>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" />
                  <span>By {post.author}</span>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t">
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories and Tags */}
      <section className="mt-16">
        <Separator className="mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => (
                <Link key={category} href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Badge variant="outline" className="hover:bg-secondary">
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Badge variant="outline" className="hover:bg-secondary">
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-16 bg-muted rounded-lg p-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Stay updated with the latest blog posts, product releases, and church events. We'll never spam your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

