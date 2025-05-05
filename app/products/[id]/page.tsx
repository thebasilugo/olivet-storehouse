"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

// This would normally come from a database or API
const getProductById = (id) => {
  // Mock product data for all products
  const allProducts = [
    {
      id: 1,
      name: "Olivet Logo T-Shirt",
      price: 24.99,
      images: [
        "/placeholder.svg?text=shirt_front_1&height=600&width=600",
        "/placeholder.svg?text=shirt_back_1&height=600&width=600",
        "/placeholder.svg?text=shirt_detail_1&height=600&width=600",
      ],
      category: "Shirts",
      description:
        "Classic t-shirt with the Olivet Church logo on the front and scripture verse on the back. Made from 100% cotton for comfort and durability.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      inStock: true,
      stockLevel: 25,
      isNew: false,
      tags: ["casual", "logo", "cotton"],
    },
    {
      id: 2,
      name: "Ablaze 2024 Cap",
      price: 19.99,
      images: [
        "/placeholder.svg?text=cap_front_1&height=600&width=600",
        "/placeholder.svg?text=cap_side_1&height=600&width=600",
        "/placeholder.svg?text=cap_back_1&height=600&width=600",
      ],
      category: "Caps",
      description:
        "Official cap from the Ablaze 2024 youth program featuring the event logo. Adjustable strap for a comfortable fit.",
      sizes: ["One Size"],
      colors: ["Black", "Blue", "Red"],
      inStock: true,
      stockLevel: 18,
      isNew: true,
      tags: ["ablaze", "2024", "headwear"],
    },
    {
      id: 3,
      name: "Worship CD Collection",
      price: 14.99,
      images: [
        "/placeholder.svg?text=cd_front_1&height=600&width=600",
        "/placeholder.svg?text=cd_back_1&height=600&width=600",
        "/placeholder.svg?text=cd_inside_1&height=600&width=600",
      ],
      category: "CDs",
      description:
        "A collection of worship songs from Olivet Church featuring our worship team. Includes 12 original songs of praise and worship.",
      sizes: ["Standard"],
      colors: ["Standard"],
      inStock: true,
      stockLevel: 32,
      isNew: false,
      tags: ["music", "worship", "audio"],
    },
    {
      id: 4,
      name: "Scripture Poster",
      price: 9.99,
      images: [
        "/placeholder.svg?text=poster_1&height=600&width=600",
        "/placeholder.svg?text=poster_frame_1&height=600&width=600",
        "/placeholder.svg?text=poster_detail_1&height=600&width=600",
      ],
      category: "Posters",
      description: "Inspirational scripture poster for your home or office. High-quality print on premium paper.",
      sizes: ["18x24", "24x36"],
      colors: ["Standard"],
      inStock: true,
      stockLevel: 45,
      isNew: false,
      tags: ["decor", "scripture", "wall art"],
    },
    {
      id: 5,
      name: "Faith Journal",
      price: 12.99,
      images: [
        "/placeholder.svg?text=journal_cover_1&height=600&width=600",
        "/placeholder.svg?text=journal_inside_1&height=600&width=600",
        "/placeholder.svg?text=journal_back_1&height=600&width=600",
      ],
      category: "Books",
      description:
        "A journal for your spiritual journey and reflections. Features scripture verses and prompts for daily devotionals.",
      sizes: ["Standard"],
      colors: ["Brown", "Black", "Burgundy"],
      inStock: true,
      stockLevel: 28,
      isNew: false,
      tags: ["stationery", "devotional", "writing"],
    },
    {
      id: 6,
      name: "Olivet Hoodie",
      price: 39.99,
      images: [
        "/placeholder.svg?text=hoodie_front_1&height=600&width=600",
        "/placeholder.svg?text=hoodie_back_1&height=600&width=600",
        "/placeholder.svg?text=hoodie_detail_1&height=600&width=600",
      ],
      category: "Shirts",
      description: "Comfortable hoodie with the Olivet Church logo. Perfect for cooler weather and casual wear.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Gray", "Black", "Navy"],
      inStock: true,
      stockLevel: 15,
      isNew: false,
      tags: ["outerwear", "casual", "logo"],
    },
    {
      id: 7,
      name: "Prayer Bracelet",
      price: 7.99,
      images: [
        "/placeholder.svg?text=bracelet_1&height=600&width=600",
        "/placeholder.svg?text=bracelet_worn_1&height=600&width=600",
        "/placeholder.svg?text=bracelet_detail_1&height=600&width=600",
      ],
      category: "Accessories",
      description: "Handcrafted bracelet with inspirational message. A reminder to pray throughout your day.",
      sizes: ["One Size"],
      colors: ["Brown", "Black"],
      inStock: true,
      stockLevel: 50,
      isNew: false,
      tags: ["jewelry", "accessories", "prayer"],
    },
    {
      id: 8,
      name: "Ablaze 2024 T-Shirt",
      price: 22.99,
      images: [
        "/placeholder.svg?text=ablaze_shirt_front_1&height=600&width=600",
        "/placeholder.svg?text=ablaze_shirt_back_1&height=600&width=600",
        "/placeholder.svg?text=ablaze_shirt_detail_1&height=600&width=600",
      ],
      category: "Shirts",
      description: "Official t-shirt from the Ablaze 2024 youth program. Features the event theme and logo.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Red", "Black"],
      inStock: true,
      stockLevel: 40,
      isNew: true,
      tags: ["ablaze", "2024", "youth"],
    },
    {
      id: 9,
      name: "Worship Leader's Guide",
      price: 18.99,
      images: [
        "/placeholder.svg?text=book_cover_1&height=600&width=600",
        "/placeholder.svg?text=book_back_1&height=600&width=600",
        "/placeholder.svg?text=book_inside_1&height=600&width=600",
      ],
      category: "Books",
      description: "Comprehensive guide for worship leaders. Includes tips, song suggestions, and spiritual guidance.",
      sizes: ["Standard"],
      colors: ["Standard"],
      inStock: true,
      stockLevel: 12,
      isNew: false,
      tags: ["worship", "leadership", "ministry"],
    },
    {
      id: 10,
      name: "Olivet Water Bottle",
      price: 15.99,
      images: [
        "/placeholder.svg?text=bottle_1&height=600&width=600",
        "/placeholder.svg?text=bottle_detail_1&height=600&width=600",
        "/placeholder.svg?text=bottle_logo_1&height=600&width=600",
      ],
      category: "Accessories",
      description: "Stainless steel water bottle with Olivet logo. Keeps drinks cold for 24 hours or hot for 12 hours.",
      sizes: ["20oz"],
      colors: ["Silver", "Black", "Blue"],
      inStock: true,
      stockLevel: 22,
      isNew: false,
      tags: ["drinkware", "eco-friendly", "logo"],
    },
    {
      id: 11,
      name: "Ablaze 2023 Poster",
      price: 8.99,
      images: [
        "/placeholder.svg?text=ablaze_poster_1&height=600&width=600",
        "/placeholder.svg?text=ablaze_poster_frame_1&height=600&width=600",
        "/placeholder.svg?text=ablaze_poster_detail_1&height=600&width=600",
      ],
      category: "Posters",
      description: "Commemorative poster from Ablaze 2023. A great memento from last year's youth program.",
      sizes: ["18x24"],
      colors: ["Standard"],
      inStock: true,
      stockLevel: 8,
      isNew: false,
      tags: ["ablaze", "2023", "memorabilia"],
    },
    {
      id: 12,
      name: "Scripture Memory Cards",
      price: 6.99,
      images: [
        "/placeholder.svg?text=cards_1&height=600&width=600",
        "/placeholder.svg?text=cards_spread_1&height=600&width=600",
        "/placeholder.svg?text=cards_box_1&height=600&width=600",
      ],
      category: "Accessories",
      description: "Set of 52 cards with key scripture verses. Perfect for memorization and daily reflection.",
      sizes: ["Standard"],
      colors: ["Standard"],
      inStock: true,
      stockLevel: 35,
      isNew: false,
      tags: ["scripture", "study", "devotional"],
    },
  ]

  // Find the product by ID
  const product = allProducts.find((p) => p.id === Number.parseInt(id))

  if (product) {
    // Get 3 related products (excluding the current one)
    product.relatedProducts = allProducts
      .filter(
        (p) =>
          p.id !== Number.parseInt(id) &&
          (p.category === product.category || p.tags.some((tag) => product.tags.includes(tag))),
      )
      .slice(0, 4)
      .map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.images[0],
        category: p.category,
        isNew: p.isNew,
      }))
  }

  return product
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <Link href="/products" className="flex items-center text-sm mb-6 text-muted-foreground hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={`${product.name} - View ${selectedImage + 1}`}
              width={600}
              height={600}
              className="rounded-lg object-cover w-full"
            />
            {product.isNew && <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">New</Badge>}
            {product.stockLevel <= 5 && product.stockLevel > 0 && (
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white">Low Stock</Badge>
            )}
            {product.stockLevel === 0 && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-lg">
                <Badge className="text-lg py-2 px-4 bg-destructive text-destructive-foreground">Out of Stock</Badge>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href={`/products/category/${product.category.toLowerCase()}`}>
                <Badge variant="outline" className="hover:bg-secondary">
                  {product.category}
                </Badge>
              </Link>
              {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
              {product.stockLevel <= 5 && product.stockLevel > 0 && (
                <Badge variant="outline" className="text-orange-500 border-orange-500">
                  Only {product.stockLevel} left
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>

          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="text-muted-foreground">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="details" className="text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>High-quality materials</li>
                <li>Machine washable (where applicable)</li>
                <li>Official Olivet Storehouse merchandise</li>
                <li>{product.category === "Shirts" ? "Unisex sizing available" : "Standard sizing"}</li>
                <li>Made with care</li>
                <li>Product ID: {product.id}</li>
                <li>Category: {product.category}</li>
                <li>Tags: {product.tags.join(", ")}</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="text-muted-foreground">
              <p>
                Standard shipping (3-5 business days): $4.99
                <br />
                Express shipping (1-2 business days): $9.99
                <br />
                Free shipping on orders over $50
                <br />
                <br />
                See our{" "}
                <Link href="/shipping" className="text-primary underline">
                  shipping policy
                </Link>{" "}
                for more details.
              </p>
            </TabsContent>
          </Tabs>

          <Separator />

          <div className="space-y-4">
            {product.sizes.length > 1 && (
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className="h-10 px-4"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {product.colors.length > 1 && (
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      className="h-10 px-4"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="h-10 w-12 flex items-center justify-center border-y">{quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-l-none"
                  onClick={() => setQuantity(Math.min(product.stockLevel, quantity + 1))}
                  disabled={!product.inStock || quantity >= product.stockLevel}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="sm:flex-1"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock || product.stockLevel === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              variant="secondary"
              className="sm:flex-1"
              size="lg"
              disabled={!product.inStock || product.stockLevel === 0}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-[200px] group-hover:scale-105 transition-transform duration-300"
                  />
                  {relatedProduct.isNew && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="font-medium group-hover:text-primary transition-colors">{relatedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground">{relatedProduct.category}</p>
                  <p className="font-bold">${relatedProduct.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
