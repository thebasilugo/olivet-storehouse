"use client"

import Link from "next/link"
import { CheckCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmationPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="container px-4 md:px-6 py-8 max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <CheckCircle className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-3xl font-bold tracking-tight">Order Confirmed!</h1>
        <p className="text-muted-foreground mt-2">
          Thank you for your purchase. We've received your order and will process it right away.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Order Number:</span>
            <span>{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Payment Method:</span>
            <span>Credit Card (ending in 1234)</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping Method:</span>
            <span>Standard Shipping (3-5 business days)</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <Package className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-medium">Processing Your Order</h3>
              <p className="text-muted-foreground">
                We're preparing your items for shipment. You'll receive an email confirmation with tracking information
                once your order ships.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-medium">Order Confirmation Email</h3>
              <p className="text-muted-foreground">
                We've sent a confirmation email to your registered email address with all the details of your purchase.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <p className="text-center text-muted-foreground mb-4">
            If you have any questions about your order, please contact our customer service team.
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </CardFooter>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/account/orders">
          <Button variant="outline">View Order History</Button>
        </Link>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}

