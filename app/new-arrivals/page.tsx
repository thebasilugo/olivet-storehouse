import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock new arrivals data
const newArrivals = [
  {
    id: 8,
    name: "Ablaze 2024 T-Shirt",
    price: 22.99,
    image: "/placeholder.svg?text=ablaze_shirt_front_1&height=300&width=300",
    category: "Shirts",
    description: "Official t-shirt from the Ablaze 2024 youth program. Features the event theme and logo.",
    dateAdded: "2024-03-10",
    isNew: true,
  },
  {
    id: 13,
    name: "Faith Over Fear Bracelet",
    price: 12.99,
    image: "/placeholder.svg?text=bracelet_faith&height=300&width=300",
    category: "Accessories",
    description: "Handcrafted leather bracelet with 'Faith Over Fear' engraving. Adjustable size.",
    dateAdded: "2024-03-08",
    isNew: true,
  },
  {
    id: 14,
    name: "Olivet Kids T-Shirt",
    price: 16.99,
    image: "/placeholder.svg?text=kids_shirt&height=300&width=300",
    category: "Kids",
    description: "Colorful t-shirt designed for our youngest church members. Available in children's sizes.",
    dateAdded: "2024-03-05",
    isNew: true,
  },
  {
    id: 15,
    name: "Praise & Worship Songbook",
    price: 19.99,
    image: "/placeholder.svg?text=songbook&height=300&width=300",
    category: "Books",
    description:
      "Collection of worship songs with sheet music and chord charts. Perfect for musicians and worship teams.",
    dateAdded: "2024-03-03",
    isNew: true,
  },
  {
    id: 16,
    name: "Scripture Art Print Set",
    price: 29.99,
    image: "/placeholder.svg?text=art_prints&height=300&width=300",
    category: "Posters",
    description: "Set of three art prints featuring beautiful typography of favorite scripture verses.",
    dateAdded: "2024-02-28",
    isNew: true,
  },
  {
    id: 17,
    name: "Olivet Logo Mug",
    price: 14.99,
    image: "/placeholder.svg?text=mug&height=300&width=300",
    category: "Accessories",
    description: "Ceramic mug with the Olivet Church logo. Dishwasher and microwave safe.",
    dateAdded: "2024-02-25",
    isNew: true,
  },
  {
    id: 18,
    name: "Daily Devotional Journal",
    price: 16.99,
    image: "/placeholder.svg?text=devotional&height=300&width=300",
    category: "Books",
    description: "Guided journal with daily scripture readings and reflection prompts for a year of spiritual growth.",
    dateAdded: "2024-02-20",
    isNew: true,
  },
  {
    id: 19,
    name: "Worship Team Hoodie",
    price: 34.99,
    image: "/placeholder.svg?text=worship_hoodie&height=300&width=300",
    category: "Shirts",
    description: "Comfortable hoodie designed for our worship team. Limited edition available to the public.",
    dateAdded: "2024-02-18",
    isNew: true,
  },
]

// Format date for display
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// Group products by month
const groupByMonth = (products) => {
  const grouped = {}

  products.forEach((product) => {
    const date = new Date(product.dateAdded)
    const monthYear = date.toLocaleDateString("en-US", { month: "long", year: "numeric" })

    if (!grouped[monthYear]) {
      grouped[monthYear] = []
    }

    grouped[monthYear].push(product)
  })

  return grouped
}

export default function NewArrivalsPage() {
  const groupedProducts = groupByMonth(newArrivals)

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">New Arrivals</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Discover our latest merchandise additions to the Olivet Storehouse collection.
        </p>
      </div>

      {Object.entries(groupedProducts).map(([monthYear, products]) => (
        <section key={monthYear} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">{monthYear}</h2>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-[200px] object-cover"
                    />
                  </Link>
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{product.category}</Badge>
                      <span className="text-xs text-muted-foreground">Added {formatDate(product.dateAdded)}</span>
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button className="w-full" size="sm">
                    Add to Cart
                  </Button>
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Want to be the first to know about new products? Subscribe to our newsletter for updates on new arrivals and
          exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/products">
          <Button variant="outline" size="lg" className="gap-2">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
