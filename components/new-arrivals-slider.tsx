"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

// Mock new arrivals data
const newArrivals = [
  {
    id: 8,
    name: "Ablaze 2024 T-Shirt",
    price: 22.99,
    image: "/images/products/tshirt-black.png",
    category: "Shirts",
    description: "Official t-shirt from the Ablaze 2024 youth program. Features the event theme and logo.",
    dateAdded: "2024-03-10",
    isNew: true,
  },
  {
    id: 13,
    name: "Faith Over Fear Bracelet",
    price: 12.99,
    image: "/images/products/bracelet.png",
    category: "Accessories",
    description: "Handcrafted leather bracelet with 'Faith Over Fear' engraving. Adjustable size.",
    dateAdded: "2024-03-08",
    isNew: true,
  },
  {
    id: 14,
    name: "Olivet Kids T-Shirt",
    price: 16.99,
    image: "/images/products/tshirt-white.png",
    category: "Kids",
    description: "Colorful t-shirt designed for our youngest church members. Available in children's sizes.",
    dateAdded: "2024-03-05",
    isNew: true,
  },
  {
    id: 15,
    name: "Praise & Worship Songbook",
    price: 19.99,
    image: "/images/products/journal.png",
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
    image: "/images/products/poster-scripture.png",
    category: "Posters",
    description: "Set of three art prints featuring beautiful typography of favorite scripture verses.",
    dateAdded: "2024-02-28",
    isNew: true,
  },
  {
    id: 17,
    name: "Olivet Logo Mug",
    price: 14.99,
    image: "/images/products/water-bottle.png",
    category: "Accessories",
    description: "Ceramic mug with the Olivet Church logo. Dishwasher and microwave safe.",
    dateAdded: "2024-02-25",
    isNew: true,
  },
]

export default function NewArrivalsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(4)
  const { addToCart } = useCart()
  const { toast } = useToast()
  const containerRef = useRef(null)

  // Determine how many items to show based on container width
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        if (width < 640) {
          setVisibleItems(1)
        } else if (width < 768) {
          setVisibleItems(2)
        } else if (width < 1024) {
          setVisibleItems(3)
        } else {
          setVisibleItems(4)
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newArrivals.length - visibleItems : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newArrivals.length - visibleItems ? 0 : prevIndex + 1))
  }

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: "M", // Default size
      color: "Default", // Default color
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  // Get visible products based on current index
  const visibleProducts = []
  for (let i = 0; i < visibleItems; i++) {
    const index = (currentIndex + i) % newArrivals.length
    visibleProducts.push(newArrivals[index])
  }

  return (
    <div className="relative mt-8" ref={containerRef}>
      <div className="flex space-x-4 overflow-hidden">
        {visibleProducts.map((product) => (
          <Card key={product.id} className="flex-shrink-0" style={{ width: `calc(100% / ${visibleItems} - 16px)` }}>
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
                <Badge variant="outline">{product.category}</Badge>
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <p className="font-bold">${product.price.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button className="w-full" size="sm" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
              <Link href={`/products/${product.id}`} className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  View
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
