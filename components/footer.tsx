import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/ablaze-dove.png" alt="Olivet Storehouse" width={40} height={40} className="rounded-full" />
              <h3 className="text-lg font-semibold">Olivet Storehouse</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The official merchandise store for Olivet Church, featuring apparel, books, music, and more.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/shirts" className="text-muted-foreground hover:text-primary">
                  Shirts
                </Link>
              </li>
              <li>
                <Link href="/products/caps" className="text-muted-foreground hover:text-primary">
                  Caps
                </Link>
              </li>
              <li>
                <Link href="/products/posters" className="text-muted-foreground hover:text-primary">
                  Posters
                </Link>
              </li>
              <li>
                <Link href="/products/cds" className="text-muted-foreground hover:text-primary">
                  CDs & Music
                </Link>
              </li>
              <li>
                <Link href="/ablaze" className="text-muted-foreground hover:text-primary">
                  Ablaze Collection
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="text-muted-foreground hover:text-primary">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/account/wishlist" className="text-muted-foreground hover:text-primary">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-primary">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Olivet Storehouse. All rights reserved.</p>
            <div className="flex items-center mt-2 md:mt-0">
              <p>Developed by</p>
              <Link
                href="https://github.com/thebasilugo"
                className="flex items-center ml-2 font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Basil Ugo</span>
                <Github className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <p className="mt-2">
            <Link href="/accessibility" className="hover:text-primary">
              Accessibility
            </Link>{" "}
            |{" "}
            <Link href="/sitemap" className="hover:text-primary">
              Sitemap
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
