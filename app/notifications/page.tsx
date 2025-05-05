"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Check, Package, ShoppingBag, Tag, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

// Mock notification data
const notifications = [
  {
    id: 1,
    type: "order",
    title: "Order Shipped",
    message: "Your order #ORD-123455 has been shipped and is on its way.",
    date: "2 hours ago",
    read: false,
    link: "/account/orders/ORD-123455",
  },
  {
    id: 2,
    type: "promo",
    title: "Special Offer",
    message: "Get 15% off all Ablaze 2024 merchandise this week only!",
    date: "1 day ago",
    read: false,
    link: "/ablaze/2024",
  },
  {
    id: 3,
    type: "order",
    title: "Order Delivered",
    message: "Your order #ORD-123454 has been delivered.",
    date: "3 days ago",
    read: true,
    link: "/account/orders/ORD-123454",
  },
  {
    id: 4,
    type: "restock",
    title: "Item Back in Stock",
    message: "The Olivet Hoodie in Navy, size XL is back in stock!",
    date: "5 days ago",
    read: true,
    link: "/products/6",
  },
  {
    id: 5,
    type: "promo",
    title: "New Arrivals",
    message: "Check out our latest merchandise additions to the store.",
    date: "1 week ago",
    read: true,
    link: "/new-arrivals",
  },
]

export default function NotificationsPage() {
  const [notificationList, setNotificationList] = useState(notifications)
  const [activeTab, setActiveTab] = useState("all")
  const { toast } = useToast()

  const markAsRead = (id) => {
    setNotificationList(
      notificationList.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotificationList(notificationList.map((notification) => ({ ...notification, read: true })))
    toast({
      title: "All notifications marked as read",
      description: "Your notifications have been updated.",
    })
  }

  const deleteNotification = (id) => {
    setNotificationList(notificationList.filter((notification) => notification.id !== id))
    toast({
      title: "Notification deleted",
      description: "The notification has been removed.",
    })
  }

  const clearAllNotifications = () => {
    setNotificationList([])
    toast({
      title: "All notifications cleared",
      description: "Your notifications have been removed.",
    })
  }

  const getFilteredNotifications = () => {
    if (activeTab === "all") return notificationList
    if (activeTab === "unread") return notificationList.filter((notification) => !notification.read)
    return notificationList.filter((notification) => notification.type === activeTab)
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "order":
        return <Package className="h-5 w-5" />
      case "promo":
        return <Tag className="h-5 w-5" />
      case "restock":
        return <ShoppingBag className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const filteredNotifications = getFilteredNotifications()
  const unreadCount = notificationList.filter((notification) => !notification.read).length

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="mb-8">
        <Link href="/account" className="flex items-center text-sm mb-4 text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}.`
                : "You have no unread notifications."}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <Check className="mr-2 h-4 w-4" />
              Mark All Read
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllNotifications}
              disabled={notificationList.length === 0}
            >
              <Trash className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">
            All
            {notificationList.length > 0 && (
              <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                {notificationList.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            {unreadCount > 0 && (
              <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                {unreadCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="order">Orders</TabsTrigger>
          <TabsTrigger value="promo">Promotions</TabsTrigger>
          <TabsTrigger value="restock">Restocks</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Notifications</CardTitle>
              <CardDescription>
                {filteredNotifications.length > 0
                  ? `Showing ${filteredNotifications.length} notification${filteredNotifications.length > 1 ? "s" : ""}.`
                  : "No notifications to display."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredNotifications.length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start p-4 rounded-lg ${notification.read ? "bg-background" : "bg-muted"}`}
                    >
                      <div
                        className={`flex-shrink-0 mr-4 p-2 rounded-full ${
                          notification.read ? "bg-muted" : "bg-primary/10"
                        }`}
                      >
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <h3 className={`text-sm font-medium ${notification.read ? "" : "font-bold"}`}>
                            {notification.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{notification.date}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        <div className="mt-2 flex gap-2">
                          <Link href={notification.link}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          {!notification.read && (
                            <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                              Mark as Read
                            </Button>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <p className="mt-4 text-muted-foreground">No notifications to display.</p>
                </div>
              )}
            </CardContent>
            {filteredNotifications.length > 5 && (
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Load More
                </Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
