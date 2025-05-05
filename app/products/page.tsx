"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

// Mock data for products
const allProducts = [
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
  {
    id: 5,
    name: "Faith Journal",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Books",
    description: "A journal for your spiritual journey and reflections.",
    sizes: ["Standard"],
    colors: ["Brown", "Black"],
  },
  {
    id: 6,
    name: "Olivet Hoodie",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Shirts",
    description: "Comfortable hoodie with the Olivet Church logo.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy"],
  },
  {
    id: 7,
    name: "Prayer Bracelet",
    price: 7.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    description: "Handcrafted bracelet with inspirational message.",
    sizes: ["One Size"],
    colors: ["Brown", "Black"],
  },
  {
    id: 8,
    name: "Ablaze 2024 T-Shirt",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Shirts",
    isNew: true,
    description: "Official t-shirt from the Ablaze 2024 youth program.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Black"],
  },
  {
    id: 9,
    name: "Worship Leader's Guide",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Books",
    description: "Comprehensive guide for worship leaders.",
    sizes: ["Standard"],
    colors: ["Standard"],
  },
  {
    id: 10,
    name: "Olivet Water Bottle",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    description: "Stainless steel water bottle with Olivet logo.",
    sizes: ["20oz"],
    colors: ["Silver", "Black", "Blue"],
  },
  {
    id: 11,
    name: "Ablaze 2023 Poster",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Posters",
    description: "Commemorative poster from Ablaze 2023.",
    sizes: ["18x24"],
    colors: ["Standard"],
  },
  {
    id: 12,
    name: "Scripture Memory Cards",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    description: "Set of 52 cards with key scripture verses.",
    sizes: ["Standard"],
    colors: ["Standard"],
  },
]

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [sortOption, setSortOption] = useState("featured")
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRanges((prev) => {
      if (prev.includes(range)) {
        return prev.filter((r) => r !== range)
      } else {
        return [...prev, range]
      }
    })
  }

  const filterProducts = () => {
    let filtered = [...allProducts]

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        const price = product.price
        return selectedPriceRanges.some((range) => {
          if (range === "under10") return price < 10
          if (range === "10to20") return price >= 10 && price < 20
          if (range === "20to30") return price >= 20 && price < 30
          if (range === "over30") return price >= 30
          return false
        })
      })
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortOption) {
        case "featured":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default:
          return 0
      }
    })

    return filtered
  }

  const filteredProducts = filterProducts()

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
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-muted-foreground">Browse our collection of church merchandise.</p>
        </div>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Narrow down your product search with these filters.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="grid gap-2">
                    {["Shirts", "Caps", "Posters", "CDs", "Books", "Accessories"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-under10"
                        checked={selectedPriceRanges.includes("under10")}
                        onCheckedChange={() => handlePriceRangeChange("under10")}
                      />
                      <Label htmlFor="price-under10">Under $10</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-10to20"
                        checked={selectedPriceRanges.includes("10to20")}
                        onCheckedChange={() => handlePriceRangeChange("10to20")}
                      />
                      <Label htmlFor="price-10to20">$10 - $20</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-20to30"
                        checked={selectedPriceRanges.includes("20to30")}
                        onCheckedChange={() => handlePriceRangeChange("20to30")}
                      />
                      <Label htmlFor="price-20to30">$20 - $30</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="price-over30"
                        checked={selectedPriceRanges.includes("over30")}
                        onCheckedChange={() => handlePriceRangeChange("over30")}
                      />
                      <Label htmlFor="price-over30">Over $30</Label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedPriceRanges([])
                  }}
                >
                  Reset
                </Button>
                <Button>Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" size="icon" className="md:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
              {product.isNew && (
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>
              )}
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
    </div>
  )
}
