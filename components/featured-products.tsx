"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Olivet Logo T-Shirt",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Shirts",
    description: "Classic t-shirt with the Olivet Church logo.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
  },
  {
    id: 2,
    name: "Ablaze 2024 Cap",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Caps",
    isNew: true,
    description: "Official cap from the Ablaze 2024 youth program.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
  },
  {
    id: 3,
    name: "Worship CD Collection",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "CDs",
    description: "A collection of worship songs from Olivet Church.",
    sizes: ["Standard"],
    colors: ["Standard"],
  },
  {
    id: 4,
    name: "Scripture Poster",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Posters",
    description: "Inspirational scripture poster for your home or office.",
    sizes: ["18x24", "24x36"],
    colors: ["Standard"],
  },
]

export default function FeaturedProducts() {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0],
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-[200px]"
              />
            </Link>
            {product.isNew && <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>}
          </div>
          <CardContent className="p-4">
            <div className="space-y-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <p className="font-bold">${product.price.toFixed(2)}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button className="w-full" size="sm" onClick={() => handleAddToCart(product)}>
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
  )
}

