import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for product categories
const categories = [
  {
    id: 1,
    name: "Shirts",
    image: "/images/products/tshirt-black.png",
    count: 24,
    slug: "shirts",
  },
  {
    id: 2,
    name: "Caps",
    image: "/images/products/cap-blue.png",
    count: 12,
    slug: "caps",
  },
  {
    id: 3,
    name: "Posters",
    image: "/images/products/poster-scripture.png",
    count: 18,
    slug: "posters",
  },
  {
    id: 4,
    name: "CDs & Music",
    image: "/images/products/cd-worship.png",
    count: 15,
    slug: "cds-music",
  },
  {
    id: 5,
    name: "Books",
    image: "/images/products/journal.png",
    count: 20,
    slug: "books",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/images/products/water-bottle.png",
    count: 30,
    slug: "accessories",
  },
]

export default function ProductCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
      {categories.map((category) => (
        <Link key={category.id} href={`/products/category/${category.slug}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={100}
                height={100}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} items</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
