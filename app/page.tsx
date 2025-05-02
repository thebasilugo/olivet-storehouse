import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeaturedProducts from "@/components/featured-products";
// import ProductCategories from "@/components/product-categories";
// import NewsletterSignup from "@/components/newsletter-signup";
import NewArrivalsSlider from "@/components/new-arrivals-slider";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Olivet Storehouse
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Shop our collection of church merchandise, including apparel,
									books, music, and more.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link href="/products">
									<Button size="lg">Shop Now</Button>
								</Link>
								<Link href="/ablaze">
									<Button size="lg" variant="outline">
										Ablaze Collection
									</Button>
								</Link>
							</div>
						</div>
						<div className="flex justify-center">
							<Image
								src="/placeholder.svg?text=Olivet+Storehouse&height=550&width=550"
								width={550}
								height={550}
								alt="Church Merchandise"
								className="rounded-lg object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* New Arrivals Slider */}
			<section className="w-full py-12 md:py-16">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								New Arrivals
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Check out our latest additions to the Olivet Storehouse
								collection.
							</p>
						</div>
					</div>
					<NewArrivalsSlider />
					<div className="flex justify-center mt-8">
						<Link href="/new-arrivals">
							<Button variant="outline" size="lg">
								View All New Arrivals
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								Featured Products
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Discover our most popular items from the Olivet Storehouse
								collection.
							</p>
						</div>
					</div>
					<FeaturedProducts />
					<div className="flex justify-center mt-8">
						<Link href="/products">
							<Button variant="outline" size="lg">
								View All Products
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Ablaze Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								Ablaze Youth Program
							</h2>
							<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Shop merchandise from our annual youth program, featuring items
								from current and previous years.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
						<Card className="bg-background">
							<CardContent className="p-6">
								<div className="flex flex-col items-center space-y-4">
									<Image
										src="/placeholder.svg?text=Ablaze+2024&height=200&width=200"
										width={200}
										height={200}
										alt="Ablaze 2024"
										className="rounded-lg object-cover"
									/>
									<div className="space-y-2 text-center">
										<h3 className="text-xl font-bold">Ablaze 2024</h3>
										<p className="text-muted-foreground">
											This year's collection
										</p>
									</div>
									<Link href="/ablaze/2024">
										<Button>Shop Collection</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="p-6">
								<div className="flex flex-col items-center space-y-4">
									<Image
										src="/placeholder.svg?text=Ablaze+2023&height=200&width=200"
										width={200}
										height={200}
										alt="Ablaze 2023"
										className="rounded-lg object-cover"
									/>
									<div className="space-y-2 text-center">
										<h3 className="text-xl font-bold">Ablaze 2023</h3>
										<p className="text-muted-foreground">
											Last year's collection
										</p>
									</div>
									<Link href="/ablaze/2023">
										<Button>Shop Collection</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
						<Card className="bg-background">
							<CardContent className="p-6">
								<div className="flex flex-col items-center space-y-4">
									<Image
										src="/placeholder.svg?text=Ablaze+Archive&height=200&width=200"
										width={200}
										height={200}
										alt="Ablaze Archive"
										className="rounded-lg object-cover"
									/>
									<div className="space-y-2 text-center">
										<h3 className="text-xl font-bold">Ablaze Archive</h3>
										<p className="text-muted-foreground">
											Collections from previous years
										</p>
									</div>
									<Link href="/ablaze/archive">
										<Button>View Archive</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Latest Blog Posts */}
			{/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest from Our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with church news, events, and product highlights.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ablaze 2024: Theme Reveal and Merchandise Preview",
                excerpt:
                  "Get a first look at this year's Ablaze youth program theme and the exclusive merchandise collection.",
                image: "/placeholder.svg?text=Ablaze+2024&height=200&width=400",
                date: "March 15, 2024",
                id: 1,
              },
              {
                title: "Summer Mission Trip: How Your Purchases Make a Difference",
                excerpt: "Discover how proceeds from our store support the church's annual summer mission trip.",
                image: "/placeholder.svg?text=Mission+Trip&height=200&width=400",
                date: "February 20, 2024",
                id: 3,
              },
              {
                title: "New Scripture Collection: Inspiration for Your Home",
                excerpt: "Explore our new collection of scripture-based home decor designed to bring inspiration.",
                image: "/placeholder.svg?text=Scripture+Collection&height=200&width=400",
                date: "February 10, 2024",
                id: 4,
              },
            ].map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                </Link>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:underline text-sm font-medium">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Posts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

			{/* Product Categories */}
			{/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
								Shop by Category
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Browse our merchandise by category to find exactly what you're
								looking for.
							</p>
						</div>
					</div>
					<ProductCategories />
				</div>
			</section> */}

			{/* Newsletter Signup */}
			{/* <section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<NewsletterSignup />
				</div>
			</section> */}
		</div>
	);
}
