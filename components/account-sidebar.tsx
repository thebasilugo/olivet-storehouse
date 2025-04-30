"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, Heart, Home, LogOut, Package, Settings, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AccountSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/account",
      icon: Home,
    },
    {
      title: "Orders",
      href: "/account/orders",
      icon: Package,
    },
    {
      title: "Profile",
      href: "/account/profile",
      icon: User,
    },
    {
      title: "Addresses",
      href: "/account/addresses",
      icon: ShoppingBag,
    },
    {
      title: "Payment Methods",
      href: "/account/payment",
      icon: CreditCard,
    },
    {
      title: "Wishlist",
      href: "/account/wishlist",
      icon: Heart,
    },
    {
      title: "Account Settings",
      href: "/account/settings",
      icon: Settings,
    },
  ]

  return (
    <Card className="w-full md:w-64 p-4">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button variant={pathname === item.href ? "default" : "ghost"} className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        ))}
        <Link href="/account/login">
          <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </Link>
      </div>
    </Card>
  )
}

