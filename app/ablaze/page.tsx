"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/components/cart-provider";
import { useToast } from "@/components/ui/use-toast";

// Mock data for Ablaze products
const ablazeProducts = {
	"2024": [
		{
			id: 1,
			name: "Ablaze 2024 T-Shirt",
			price: 24.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Shirts",
			isNew: true,
			description: "Official t-shirt from the Ablaze 2024 youth program.",
			sizes: ["S", "M", "L", "XL", "XXL"],
			colors: ["Red", "Black"],
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
			colors: ["Black", "Red"],
		},
		{
			id: 3,
			name: "Ablaze 2024 Hoodie",
			price: 39.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Shirts",
			isNew: true,
			description: "Stay warm with this official Ablaze 2024 hoodie.",
			sizes: ["S", "M", "L", "XL", "XXL"],
			colors: ["Black", "Gray"],
		},
		{
			id: 4,
			name: "Ablaze 2024 Wristband",
			price: 4.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Accessories",
			isNew: true,
			description: "Silicone wristband with the Ablaze 2024 theme.",
			sizes: ["One Size"],
			colors: ["Red", "Black"],
		},
	],
	"2023": [
		{
			id: 5,
			name: "Ablaze 2023 T-Shirt",
			price: 19.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Shirts",
			description: "Official t-shirt from the Ablaze 2023 youth program.",
			sizes: ["S", "M", "L", "XL"],
			colors: ["Blue", "Black"],
		},
		{
			id: 6,
			name: "Ablaze 2023 Cap",
			price: 14.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Caps",
			description: "Official cap from the Ablaze 2023 youth program.",
			sizes: ["One Size"],
			colors: ["Blue", "Black"],
		},
		{
			id: 7,
			name: "Ablaze 2023 Poster",
			price: 9.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Posters",
			description: "Commemorative poster from Ablaze 2023.",
			sizes: ["18x24"],
			colors: ["Standard"],
		},
		{
			id: 8,
			name: "Ablaze 2023 CD",
			price: 12.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "CDs",
			description: "Live worship recordings from Ablaze 2023.",
			sizes: ["Standard"],
			colors: ["Standard"],
		},
	],
	upcoming: [
		{
			id: 9,
			name: "Ablaze 2024 Limited Edition Bundle",
			price: 59.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Bundles",
			comingSoon: true,
			description:
				"Special bundle including t-shirt, cap, and exclusive items.",
			sizes: ["S", "M", "L", "XL"],
			colors: ["Standard"],
		},
		{
			id: 10,
			name: "Ablaze 2024 Worship Journal",
			price: 14.99,
			image: "/placeholder.svg?height=300&width=300",
			category: "Books",
			comingSoon: true,
			description:
				"Journal with devotionals and space for notes from Ablaze 2024.",
			sizes: ["Standard"],
			colors: ["Standard"],
		},
	],
};

export default function AblazePage() {
	const { addToCart } = useCart();
	const { toast } = useToast();

	const handleAddToCart = (product: any) => {
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			quantity: 1,
			size: product.sizes[0],
			color: product.colors[0],
		});

		toast({
			title: "Added to cart",
			description: `${product.name} has been added to your cart.`,
		});
	};

	return (
		<div className="container px-4 md:px-6 py-8">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-4xl font-bold tracking-tight mb-4">
					Ablaze Youth Program
				</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Shop merchandise from our annual youth program, featuring items from
					current and previous years.
				</p>
			</div>

			<Tabs defaultValue="2024" className="w-full">
				<TabsList className="grid w-full grid-cols-3 mb-8">
					<TabsTrigger value="2024">Ablaze 2024</TabsTrigger>
					<TabsTrigger value="2023">Ablaze 2023</TabsTrigger>
					<TabsTrigger value="upcoming">Coming Soon</TabsTrigger>
				</TabsList>
				<TabsContent value="2024">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{ablazeProducts["2024"].map((product) => (
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
										<Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
											New
										</Badge>
									)}
								</div>
								<CardContent className="p-4">
									<div className="space-y-1">
										<h3 className="font-medium">{product.name}</h3>
										<p className="text-sm text-muted-foreground">
											{product.category}
										</p>
										<p className="font-bold">${product.price.toFixed(2)}</p>
									</div>
								</CardContent>
								<CardFooter className="p-4 pt-0 flex gap-2">
									<Button
										className="w-full"
										size="sm"
										onClick={() => handleAddToCart(product)}
									>
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
				</TabsContent>
				<TabsContent value="2023">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{ablazeProducts["2023"].map((product) => (
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
								</div>
								<CardContent className="p-4">
									<div className="space-y-1">
										<h3 className="font-medium">{product.name}</h3>
										<p className="text-sm text-muted-foreground">
											{product.category}
										</p>
										<p className="font-bold">${product.price.toFixed(2)}</p>
									</div>
								</CardContent>
								<CardFooter className="p-4 pt-0 flex gap-2">
									<Button
										className="w-full"
										size="sm"
										onClick={() => handleAddToCart(product)}
									>
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
				</TabsContent>
				<TabsContent value="upcoming">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{ablazeProducts["upcoming"].map((product) => (
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
									{product.comingSoon && (
										<div className="absolute inset-0 bg-background/80 flex items-center justify-center">
											<Badge className="text-lg py-2 px-4 bg-primary text-primary-foreground">
												Coming Soon
											</Badge>
										</div>
									)}
								</div>
								<CardContent className="p-4">
									<div className="space-y-1">
										<h3 className="font-medium">{product.name}</h3>
										<p className="text-sm text-muted-foreground">
											{product.category}
										</p>
										<p className="font-bold">${product.price.toFixed(2)}</p>
									</div>
								</CardContent>
								<CardFooter className="p-4 pt-0 flex gap-2">
									<Button className="w-full" size="sm" disabled>
										Coming Soon
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
				</TabsContent>
			</Tabs>

			<div className="mt-16">
				<h2 className="text-2xl font-bold tracking-tight mb-6">
					Ablaze Archive
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[2022, 2021, 2020].map((year) => (
						<Card key={year}>
							<CardContent className="p-6">
								<div className="flex flex-col items-center text-center space-y-4">
									<Image
										src="/placeholder.svg?height=150&width=150"
										width={150}
										height={150}
										alt={`Ablaze ${year}`}
										className="rounded-full object-cover"
									/>
									<div>
										<h3 className="text-xl font-bold">Ablaze {year}</h3>
										<p className="text-muted-foreground">
											Browse the archive collection
										</p>
									</div>
									<Link href={`/ablaze/${year}`}>
										<Button variant="outline">
											View Collection
											<ChevronRight className="ml-2 h-4 w-4" />
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
