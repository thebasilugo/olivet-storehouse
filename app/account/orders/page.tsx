import Link from "next/link"
import { ArrowLeft, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import AccountSidebar from "@/components/account-sidebar"

// Mock order data
const orders = [
  {
    id: "ORD-123456",
    date: "March 15, 2024",
    status: "Delivered",
    total: 78.97,
    items: [
      {
        id: 1,
        name: "Olivet Logo T-Shirt",
        price: 24.99,
        quantity: 1,
        size: "M",
        color: "Black",
      },
      {
        id: 8,
        name: "Ablaze 2024 T-Shirt",
        price: 22.99,
        quantity: 1,
        size: "L",
        color: "Red",
      },
      {
        id: 7,
        name: "Prayer Bracelet",
        price: 7.99,
        quantity: 3,
        size: "One Size",
        color: "Brown",
      },
    ],
  },
  {
    id: "ORD-123455",
    date: "February 28, 2024",
    status: "Shipped",
    total: 45.99,
    items: [
      {
        id: 6,
        name: "Olivet Hoodie",
        price: 39.99,
        quantity: 1,
        size: "XL",
        color: "Navy",
      },
      {
        id: 12,
        name: "Scripture Memory Cards",
        price: 6.99,
        quantity: 1,
        size: "Standard",
        color: "Standard",
      },
    ],
  },
  {
    id: "ORD-123454",
    date: "January 10, 2024",
    status: "Delivered",
    total: 24.99,
    items: [
      {
        id: 1,
        name: "Olivet Logo T-Shirt",
        price: 24.99,
        quantity: 1,
        size: "S",
        color: "White",
      },
    ],
  },
  {
    id: "ORD-123453",
    date: "December 5, 2023",
    status: "Delivered",
    total: 52.97,
    items: [
      {
        id: 4,
        name: "Scripture Poster",
        price: 9.99,
        quantity: 1,
        size: "18x24",
        color: "Standard",
      },
      {
        id: 5,
        name: "Faith Journal",
        price: 12.99,
        quantity: 1,
        size: "Standard",
        color: "Brown",
      },
      {
        id: 10,
        name: "Olivet Water Bottle",
        price: 15.99,
        quantity: 1,
        size: "20oz",
        color: "Silver",
      },
      {
        id: 7,
        name: "Prayer Bracelet",
        price: 7.99,
        quantity: 1,
        size: "One Size",
        color: "Black",
      },
    ],
  },
  {
    id: "ORD-123452",
    date: "November 20, 2023",
    status: "Delivered",
    total: 34.98,
    items: [
      {
        id: 3,
        name: "Worship CD Collection",
        price: 14.99,
        quantity: 1,
        size: "Standard",
        color: "Standard",
      },
      {
        id: 9,
        name: "Worship Leader's Guide",
        price: 18.99,
        quantity: 1,
        size: "Standard",
        color: "Standard",
      },
    ],
  },
]

export default function OrdersPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <AccountSidebar />

        <div className="flex-1">
          <div className="mb-8">
            <Link href="/account" className="flex items-center text-sm mb-4 text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Order History</h1>
            <p className="text-muted-foreground">View and track all your orders</p>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Orders</CardTitle>
                  <CardDescription>View all your past orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row justify-between mb-4">
                          <div>
                            <h3 className="font-bold">{order.id}</h3>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 flex items-center">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Shipped"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          {order.items.map((item) => (
                            <div key={`${order.id}-${item.id}`} className="flex justify-between text-sm">
                              <span>
                                {item.name} ({item.size}, {item.color}) x{item.quantity}
                              </span>
                              <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>

                        <Separator className="my-4" />

                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{order.items.length} items</p>
                          </div>
                          <div>
                            <p className="font-bold">${order.total.toFixed(2)}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 justify-end">
                          <Link href={`/account/orders/${order.id}`}>
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Download className="mr-2 h-4 w-4" />
                            Invoice
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="processing" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Processing Orders</CardTitle>
                  <CardDescription>Orders that are being processed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You have no orders being processed at this time.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipped" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipped Orders</CardTitle>
                  <CardDescription>Orders that have been shipped</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orders
                      .filter((order) => order.status === "Shipped")
                      .map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row justify-between mb-4">
                            <div>
                              <h3 className="font-bold">{order.id}</h3>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center">
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                                {order.status}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            {order.items.map((item) => (
                              <div key={`${order.id}-${item.id}`} className="flex justify-between text-sm">
                                <span>
                                  {item.name} ({item.size}, {item.color}) x{item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>

                          <Separator className="my-4" />

                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">{order.items.length} items</p>
                            </div>
                            <div>
                              <p className="font-bold">${order.total.toFixed(2)}</p>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2 justify-end">
                            <Link href={`/account/orders/${order.id}`}>
                              <Button variant="outline" size="sm" className="flex items-center">
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </Button>
                            </Link>
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Download className="mr-2 h-4 w-4" />
                              Invoice
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="delivered" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Delivered Orders</CardTitle>
                  <CardDescription>Orders that have been delivered</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orders
                      .filter((order) => order.status === "Delivered")
                      .map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row justify-between mb-4">
                            <div>
                              <h3 className="font-bold">{order.id}</h3>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center">
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                                {order.status}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            {order.items.map((item) => (
                              <div key={`${order.id}-${item.id}`} className="flex justify-between text-sm">
                                <span>
                                  {item.name} ({item.size}, {item.color}) x{item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>

                          <Separator className="my-4" />

                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">{order.items.length} items</p>
                            </div>
                            <div>
                              <p className="font-bold">${order.total.toFixed(2)}</p>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2 justify-end">
                            <Link href={`/account/orders/${order.id}`}>
                              <Button variant="outline" size="sm" className="flex items-center">
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </Button>
                            </Link>
                            <Button variant="outline" size="sm" className="flex items-center">
                              <Download className="mr-2 h-4 w-4" />
                              Invoice
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

