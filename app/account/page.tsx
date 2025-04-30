"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Package, ShoppingBag, CreditCard, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccountSidebar from "@/components/account-sidebar"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  joinDate: "January 2023",
  orders: [
    {
      id: "ORD-123456",
      date: "March 15, 2024",
      status: "Delivered",
      total: 78.97,
      items: 3,
    },
    {
      id: "ORD-123455",
      date: "February 28, 2024",
      status: "Shipped",
      total: 45.99,
      items: 2,
    },
    {
      id: "ORD-123454",
      date: "January 10, 2024",
      status: "Delivered",
      total: 24.99,
      items: 1,
    },
  ],
}

export default function AccountPage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)

    // Simulate logout process
    setTimeout(() => {
      setIsLoggingOut(false)
      router.push("/account/login")
    }, 1000)
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <AccountSidebar />

        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Account Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {userData.name}</p>
          </div>

          <div className="grid gap-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recent-orders">Recent Orders</TabsTrigger>
                <TabsTrigger value="account-info">Account Info</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{userData.orders.length}</div>
                      <p className="text-xs text-muted-foreground">Lifetime purchases</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-xs text-muted-foreground">Saved for later</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1</div>
                      <p className="text-xs text-muted-foreground">In transit</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">250</div>
                      <p className="text-xs text-muted-foreground">$25 in store credit</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your most recent purchases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.orders.slice(0, 2).map((order) => (
                        <div key={order.id} className="flex items-center justify-between border-b pb-4">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${order.total.toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">{order.items} items</p>
                          </div>
                          <div>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/account/orders" className="w-full">
                      <Button variant="outline" className="w-full">
                        View All Orders
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>Your personal details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Name:</span>
                          <span className="font-medium">{userData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="font-medium">{userData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Member Since:</span>
                          <span className="font-medium">{userData.joinDate}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/account/profile" className="w-full">
                        <Button variant="outline" className="w-full">
                          Edit Profile
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Address</CardTitle>
                      <CardDescription>Your default shipping address</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <address className="not-italic space-y-1">
                        <p className="font-medium">{userData.name}</p>
                        <p>123 Main Street</p>
                        <p>Apt 4B</p>
                        <p>Lagos, Nigeria</p>
                        <p>+234 801 234 5678</p>
                      </address>
                    </CardContent>
                    <CardFooter>
                      <Link href="/account/addresses" className="w-full">
                        <Button variant="outline" className="w-full">
                          Manage Addresses
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="recent-orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>View all your past orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userData.orders.map((order) => (
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
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-between border-t pt-4">
                            <div>
                              <p className="text-sm text-muted-foreground">{order.items} items</p>
                            </div>
                            <div>
                              <p className="font-bold">${order.total.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Link href={`/account/orders/${order.id}`}>
                              <Button variant="outline" size="sm">
                                View Order
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="account-info">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Contact Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p>{userData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p>{userData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p>+234 801 234 5678</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Member Since</p>
                          <p>{userData.joinDate}</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Link href="/account/profile">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Default Addresses</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="border rounded-lg p-4">
                          <p className="font-medium mb-2">Shipping Address</p>
                          <address className="not-italic text-sm text-muted-foreground">
                            <p>{userData.name}</p>
                            <p>123 Main Street</p>
                            <p>Apt 4B</p>
                            <p>Lagos, Nigeria</p>
                            <p>+234 801 234 5678</p>
                          </address>
                          <div className="flex justify-end mt-2">
                            <Link href="/account/addresses">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div className="border rounded-lg p-4">
                          <p className="font-medium mb-2">Billing Address</p>
                          <address className="not-italic text-sm text-muted-foreground">
                            <p>{userData.name}</p>
                            <p>123 Main Street</p>
                            <p>Apt 4B</p>
                            <p>Lagos, Nigeria</p>
                            <p>+234 801 234 5678</p>
                          </address>
                          <div className="flex justify-end mt-2">
                            <Link href="/account/addresses">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Security</h3>
                      <div className="flex justify-between items-center border rounded-lg p-4">
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                        </div>
                        <Link href="/account/security">
                          <Button variant="outline" size="sm">
                            Change Password
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="destructive" onClick={handleLogout} disabled={isLoggingOut}>
                        {isLoggingOut ? "Logging out..." : "Log Out"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

