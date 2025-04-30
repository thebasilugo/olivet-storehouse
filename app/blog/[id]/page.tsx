import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

// Mock blog posts data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Ablaze 2024: Theme Reveal and Merchandise Preview",
    excerpt:
      "Get a first look at this year's Ablaze youth program theme and the exclusive merchandise collection designed for the event.",
    content: `
      <p>We're excited to announce the theme for Ablaze 2024: "Ignite Your Purpose." This year's program will focus on helping our youth discover and embrace their God-given purpose in life.</p>
      
      <p>The theme is inspired by Jeremiah 29:11: "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."</p>
      
      <h2>The Merchandise Collection</h2>
      
      <p>To commemorate this year's event, we've designed a special merchandise collection that reflects the theme. The collection includes t-shirts, hoodies, caps, wristbands, and more, all featuring the Ablaze 2024 logo and theme.</p>
      
      <p>The design incorporates a flame motif with vibrant colors of red, orange, and gold, symbolizing the fire of purpose that God ignites within each of us. Each item in the collection is not just a souvenir but a reminder of the message and experience of Ablaze 2024.</p>
      
      <h2>Pre-Order Information</h2>
      
      <p>The Ablaze 2024 merchandise collection is now available for pre-order through our online store. Pre-orders will be fulfilled two weeks before the event, ensuring you have your items in time for the program.</p>
      
      <p>A portion of the proceeds from each purchase goes directly to supporting our youth ministry and helping fund scholarships for those who need financial assistance to attend the event.</p>
      
      <h2>Event Details</h2>
      
      <p>Ablaze 2024 will take place from July 15-19 at the Olivet Church campus. Registration is now open for youth ages 13-18. Early bird registration ends on May 31.</p>
      
      <p>We can't wait to see how God will work through this year's program to ignite purpose in the lives of our youth. Stay tuned for more updates and announcements as we get closer to the event!</p>
    `,
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
    content: `
      <p>At Olivet Storehouse, every product tells a story. Behind each design is a team of dedicated creatives who pour their hearts and talents into creating merchandise that inspires and uplifts.</p>
      
      <h2>The Creative Process</h2>
      
      <p>Our design process begins with prayer and reflection. The team gathers to discuss themes, scriptures, and messages that resonate with our church community. From there, concepts are sketched, refined, and eventually transformed into the products you see in our store.</p>
      
      <p>"We don't just create designs; we create tangible reminders of faith," says Sarah Williams, our lead designer. "Each product is an opportunity to share God's word in a visual and practical way."</p>
      
      <h2>Meet the Team</h2>
      
      <p><strong>Sarah Williams, Lead Designer:</strong> With a background in graphic design and a passion for ministry, Sarah has been leading our creative team for the past five years. Her signature style combines modern aesthetics with timeless scriptural truths.</p>
      
      <p><strong>David Chen, Illustrator:</strong> David's hand-drawn illustrations add a unique touch to many of our products. His ability to capture emotion and meaning through simple lines and shapes is truly remarkable.</p>
      
      <p><strong>Rebecca Martinez, Typography Specialist:</strong> Rebecca has a gift for selecting and arranging fonts that perfectly complement our designs. Her work ensures that every word on our products is both beautiful and readable.</p>
      
      <p><strong>James Wilson, Youth Consultant:</strong> As our youth pastor, James provides valuable insights into what resonates with our younger audience. His input is especially crucial for our Ablaze collection.</p>
      
      <h2>From Concept to Product</h2>
      
      <p>Once a design is approved, our production team works with trusted manufacturers to bring it to life. We prioritize quality materials and ethical production practices to ensure that our merchandise not only looks good but feels good and lasts long.</p>
      
      <p>"Seeing someone wearing or using something we designed is incredibly rewarding," says David. "It means they connected with the message enough to make it part of their daily life."</p>
      
      <h2>Looking Ahead</h2>
      
      <p>The creative team is always working on new designs and products. They draw inspiration from scripture, sermons, church events, and feedback from our community.</p>
      
      <p>"We're excited about the upcoming collections," Sarah shares. "We're exploring new product categories and design styles while staying true to our mission of creating meaningful, faith-inspired merchandise."</p>
      
      <p>Next time you browse our store, remember that each item represents not just a product, but a labor of love from our creative team—designed to inspire faith and foster community.</p>
    `,
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
    content: `
      <p>When you purchase merchandise from Olivet Storehouse, you're doing more than buying a product—you're making a difference in the lives of people around the world. A portion of every sale goes directly to supporting our church's annual summer mission trip.</p>
      
      <h2>This Year's Mission</h2>
      
      <p>This summer, a team of 20 volunteers from Olivet Church will be traveling to Guatemala to help build a community center that will serve as a school, medical clinic, and gathering place for a rural village.</p>
      
      <p>"The community center will be a lifeline for this village," explains Pastor David Thompson, who leads the mission team. "It will provide education for children, healthcare for families, and a place where the community can gather for various events and activities."</p>
      
      <h2>The Impact of Your Support</h2>
      
      <p>Last year, thanks to the support from Olivet Storehouse customers, our mission team was able to:</p>
      
      <ul>
        <li>Build a water filtration system that provides clean drinking water to over 500 people</li>
        <li>Distribute school supplies to 200 children</li>
        <li>Conduct medical clinics serving more than 300 patients</li>
        <li>Host vacation Bible school programs for 150 children</li>
      </ul>
      
      <p>"It's amazing to see how a t-shirt or a coffee mug purchased at our store can translate into tangible help for communities in need," says Pastor David. "Every purchase, no matter how small, contributes to our mission work."</p>
      
      <h2>Special Mission Trip Collection</h2>
      
      <p>To further support this year's mission trip, we've created a special collection of merchandise. The "Hearts for Guatemala" collection features designs inspired by Guatemalan culture and includes t-shirts, tote bags, and handcrafted items made by local artisans in Guatemala.</p>
      
      <p>100% of the proceeds from this collection will go directly to the mission trip fund, helping to cover costs for building materials, medical supplies, and other necessities.</p>
      
      <h2>Get Involved</h2>
      
      <p>In addition to purchasing merchandise, there are other ways you can support our mission work:</p>
      
      <ul>
        <li>Pray for our mission team and the communities we serve</li>
        <li>Donate directly to the mission fund</li>
        <li>Volunteer for local mission projects</li>
        <li>Spread the word about our store and mission work</li>
      </ul>
      
      <p>Thank you for your continued support of Olivet Storehouse and our mission initiatives. Together, we're making a difference in the world, one purchase at a time.</p>
    `,
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

// Get blog post by ID
const getBlogPostById = (id) => {
  return blogPosts.find((post) => post.id === Number.parseInt(id))
}

// Get related posts (same category or tags)
const getRelatedPosts = (currentPost) => {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, 3)
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostById(params.id)

  if (!post) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-6">Sorry, the blog post you are looking for does not exist.</p>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(post)

  return (
    <div className="container px-4 md:px-6 py-8 max-w-4xl mx-auto">
      <Link href="/blog" className="flex items-center text-sm mb-6 text-muted-foreground hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <article className="mb-16">
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              By {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>
        </div>

        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full rounded-lg mb-8 object-cover"
        />

        <div
          className="prose prose-sm sm:prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
              <Badge variant="outline" className="hover:bg-secondary">
                #{tag}
              </Badge>
            </Link>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold mb-2">Share this post</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Copy link</span>
              </Button>
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden">
                <Link href={`/blog/${relatedPost.id}`}>
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={400}
                    height={200}
                    className="w-full h-[150px] object-cover"
                  />
                </Link>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {relatedPost.category}
                  </Badge>
                  <Link href={`/blog/${relatedPost.id}`}>
                    <h3 className="font-bold hover:text-primary transition-colors">{relatedPost.title}</h3>
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(relatedPost.date)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

