"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/cart-provider";
import { useToast } from "@/components/ui/use-toast";

export default function CartPage() {
	const { cartItems, updateCartItemQuantity, removeFromCart, cartTotal }: any =
		useCart();
	const [promoCode, setPromoCode] = useState("");
	const [isApplyingPromo, setIsApplyingPromo] = useState(false);
	const { toast } = useToast();

	const shipping = cartTotal > 50 ? 0 : 4.99;
	const total = cartTotal + shipping;

	const handleApplyPromo = () => {
		setIsApplyingPromo(true);

		// Simulate API call
		setTimeout(() => {
			setIsApplyingPromo(false);

			if (promoCode.toLowerCase() === "olivet10") {
				toast({
					title: "Promo code applied",
					description: "10% discount has been applied to your order.",
				});
			} else {
				toast({
					title: "Invalid promo code",
					description: "The promo code you entered is invalid or expired.",
					variant: "destructive",
				});
			}
		}, 1000);
	};

	return (
		<div className="container px-4 md:px-6 py-8">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
					<p className="text-muted-foreground">
						{cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
						your cart
					</p>
				</div>
				<Link href="/products">
					<Button variant="outline" className="mt-4 md:mt-0">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Continue Shopping
					</Button>
				</Link>
			</div>

			{cartItems.length > 0 ? (
				<div className="grid md:grid-cols-3 gap-8">
					<div className="md:col-span-2 space-y-4">
						{cartItems.map((item: any) => (
							<Card key={`${item.id}-${item.size}-${item.color}`}>
								<CardContent className="p-6">
									<div className="flex flex-col sm:flex-row gap-4">
										<Image
											src={item.image || "/placeholder.svg"}
											alt={item.name}
											width={100}
											height={100}
											className="rounded-md object-cover"
										/>
										<div className="flex-1 space-y-2">
											<div className="flex justify-between">
												<h3 className="font-medium">{item.name}</h3>
												<p className="font-bold">
													${(item.price * item.quantity).toFixed(2)}
												</p>
											</div>
											<div className="text-sm text-muted-foreground">
												<p>Size: {item.size}</p>
												<p>Color: {item.color}</p>
												<p>Price: ${item.price.toFixed(2)}</p>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<Button
														variant="outline"
														size="icon"
														className="h-8 w-8 rounded-r-none"
														onClick={() =>
															updateCartItemQuantity(
																item.id,
																item.size,
																item.color,
																Math.max(1, item.quantity - 1)
															)
														}
													>
														<Minus className="h-3 w-3" />
														<span className="sr-only">Decrease quantity</span>
													</Button>
													<div className="h-8 w-10 flex items-center justify-center border-y text-sm">
														{item.quantity}
													</div>
													<Button
														variant="outline"
														size="icon"
														className="h-8 w-8 rounded-l-none"
														onClick={() =>
															updateCartItemQuantity(
																item.id,
																item.size,
																item.color,
																item.quantity + 1
															)
														}
													>
														<Plus className="h-3 w-3" />
														<span className="sr-only">Increase quantity</span>
													</Button>
												</div>
												<Button
													variant="ghost"
													size="sm"
													className="text-muted-foreground"
													onClick={() =>
														removeFromCart(item.id, item.size, item.color)
													}
												>
													<Trash2 className="h-4 w-4 mr-1" />
													Remove
												</Button>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div>
						<Card className="sticky top-8">
							<CardHeader>
								<CardTitle>Order Summary</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>${cartTotal.toFixed(2)}</span>
								</div>
								<div className="flex justify-between">
									<span>Shipping</span>
									<span>
										{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
									</span>
								</div>
								<Separator />
								<div className="flex justify-between font-bold">
									<span>Total</span>
									<span>${total.toFixed(2)}</span>
								</div>
								{/* <div className="pt-4">
                  <div className="space-y-2 mb-4">
                    <h3 className="text-sm font-medium">Promo Code</h3>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        className="flex-1"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handleApplyPromo} disabled={isApplyingPromo || !promoCode}>
                        {isApplyingPromo ? "Applying..." : "Apply"}
                      </Button>
                    </div>
                  </div>
                </div> */}
							</CardContent>
							<CardFooter>
								<Link href="/checkout" className="w-full">
									<Button className="w-full" size="lg">
										<ShoppingBag className="mr-2 h-5 w-5" />
										Checkout
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-12 text-center">
					<ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
					<h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
					<p className="text-muted-foreground mb-6">
						Looks like you haven't added any items to your cart yet.
					</p>
					<Link href="/products">
						<Button size="lg">Start Shopping</Button>
					</Link>
				</div>
			)}
		</div>
	);
}
