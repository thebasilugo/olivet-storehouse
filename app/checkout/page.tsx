// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useCart } from "@/components/cart-provider"
// import { useToast } from "@/components/ui/use-toast"
// import { useRouter } from "next/navigation"

// export default function CheckoutPage() {
//   const { cartItems, cartTotal, clearCart }:any = useCart()
//   const { toast } = useToast()
//   const router = useRouter()
//   const [isProcessing, setIsProcessing] = useState(false)

//   const shipping = cartTotal > 50 ? 0 : 4.99
//   const total = cartTotal + shipping

//   const handleSubmitOrder = (e:any) => {
//     e.preventDefault()
//     setIsProcessing(true)

//     // Simulate payment processing
//     setTimeout(() => {
//       setIsProcessing(false)
//       clearCart()

//       toast({
//         title: "Order placed successfully!",
//         description: "Thank you for your purchase. You will receive a confirmation email shortly.",
//       })

//       router.push("/checkout/confirmation")
//     }, 2000)
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="container px-4 md:px-6 py-8 text-center">
//         <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
//         <p className="mb-6">You need to add items to your cart before checking out.</p>
//         <Link href="/products">
//           <Button>Browse Products</Button>
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="container px-4 md:px-6 py-8">
//       <Link href="/cart" className="flex items-center text-sm mb-6 text-muted-foreground hover:text-primary">
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to Cart
//       </Link>

//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           <form onSubmit={handleSubmitOrder}>
//             <div className="space-y-8">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Contact Information</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" required />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" required />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" required />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input id="phone" type="tel" required />
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Shipping Address</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="address">Street Address</Label>
//                     <Input id="address" required />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
//                     <Input id="address2" />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="city">City</Label>
//                       <Input id="city" required />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="state">State</Label>
//                       <Input id="state" required />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="zip">ZIP Code</Label>
//                       <Input id="zip" required />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="country">Country</Label>
//                       <Input id="country" defaultValue="United States" required />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Shipping Method</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <RadioGroup defaultValue="standard">
//                     <div className="flex items-center justify-between space-x-2 p-3 border rounded-md">
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="standard" id="standard" />
//                         <Label htmlFor="standard">Standard Shipping (3-5 business days)</Label>
//                       </div>
//                       <div>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</div>
//                     </div>
//                     <div className="flex items-center justify-between space-x-2 p-3 border rounded-md mt-2">
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="express" id="express" />
//                         <Label htmlFor="express">Express Shipping (1-2 business days)</Label>
//                       </div>
//                       <div>$9.99</div>
//                     </div>
//                   </RadioGroup>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle>Payment</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Tabs defaultValue="card">
//                     <TabsList className="grid w-full grid-cols-3">
//                       <TabsTrigger value="card">Credit Card</TabsTrigger>
//                       <TabsTrigger value="paypal">PayPal</TabsTrigger>
//                       <TabsTrigger value="apple">Apple Pay</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="card" className="space-y-4 mt-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="cardName">Name on Card</Label>
//                         <Input id="cardName" required />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="cardNumber">Card Number</Label>
//                         <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="expiry">Expiry Date</Label>
//                           <Input id="expiry" placeholder="MM/YY" required />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="cvc">CVC</Label>
//                           <Input id="cvc" placeholder="123" required />
//                         </div>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="paypal" className="mt-4">
//                       <div className="text-center py-4">
//                         <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
//                         <Button type="button" variant="outline">
//                           Continue with PayPal
//                         </Button>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="apple" className="mt-4">
//                       <div className="text-center py-4">
//                         <p className="mb-4">You will be prompted to complete your payment with Apple Pay.</p>
//                         <Button type="button" variant="outline">
//                           Continue with Apple Pay
//                         </Button>
//                       </div>
//                     </TabsContent>
//                   </Tabs>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <ShieldCheck className="mr-1 h-4 w-4" />
//                     Secure payment processing
//                   </div>
//                   <div className="flex items-center">
//                     <CreditCard className="mr-2 h-5 w-5" />
//                     <span className="text-sm">We accept all major credit cards</span>
//                   </div>
//                 </CardFooter>
//               </Card>

//               <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
//                 {isProcessing ? "Processing..." : `Complete Order • $${total.toFixed(2)}`}
//               </Button>
//             </div>
//           </form>
//         </div>

//         <div>
//           <Card>
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {cartItems.map((item:any) => (
//                 <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-sm">
//                   <span>
//                     {item.name} ({item.size}, {item.color}) x{item.quantity}
//                   </span>
//                   <span>${(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//               ))}
//               <Separator />
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${cartTotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
//               </div>
//               <Separator />
//               <div className="flex justify-between font-bold">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";

const checkout = () => {
	return <div className="text-center mt-32">checkout is coming soon</div>;
};

export default checkout;
