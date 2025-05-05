import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Olivet Storehouse</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our mission is to provide quality merchandise that helps spread the message of faith and community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Olivet Storehouse was established in 2010 as a small initiative to provide church members with quality
            merchandise that represents our values and beliefs. What started as a small table at the back of the church
            has grown into a full-fledged online store serving our community and beyond.
          </p>
          <p className="text-muted-foreground mb-4">
            Our store is named after the Mount of Olives, a significant place in biblical history, symbolizing peace,
            growth, and spiritual nourishment. Just as the olive tree provides sustenance, we aim to provide products
            that nourish the spirit and foster a sense of belonging.
          </p>
          <p className="text-muted-foreground">
            Today, Olivet Storehouse offers a wide range of products, from apparel to books, music, and more, all
            designed to inspire and uplift. We're particularly proud of our Ablaze collection, which celebrates our
            annual youth program and its impact on young lives.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Olivet Storehouse Team"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Olivet Storehouse, we're guided by a set of core values that inform everything we do.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Faith</h3>
            <p className="text-muted-foreground">
              Our products are designed to inspire and strengthen faith, reflecting our commitment to spiritual growth.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-muted-foreground">
              We believe in fostering a sense of belonging and connection through our merchandise and service.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We're committed to providing high-quality products that our customers can be proud to own and share.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Stewardship</h3>
            <p className="text-muted-foreground">
              A portion of our proceeds supports church ministries and community outreach programs.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          Meet the dedicated individuals who make Olivet Storehouse possible.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "Store Manager", image: "/placeholder.svg?height=300&width=300" },
            { name: "Michael Chen", role: "Product Designer", image: "/placeholder.svg?height=300&width=300" },
            { name: "Rebecca Williams", role: "Customer Service", image: "/placeholder.svg?height=300&width=300" },
            { name: "David Thompson", role: "Inventory Manager", image: "/placeholder.svg?height=300&width=300" },
            { name: "Olivia Martinez", role: "Marketing Coordinator", image: "/placeholder.svg?height=300&width=300" },
            { name: "James Wilson", role: "Youth Program Liaison", image: "/placeholder.svg?height=300&width=300" },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Image
                src={member.image || "/placeholder.svg"}
                width={200}
                height={200}
                alt={member.name}
                className="rounded-full object-cover w-32 h-32 mb-4"
              />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="max-w-2xl mx-auto mb-6">
          We're more than just a store – we're a community of believers sharing our faith through quality merchandise.
          Connect with us and be part of our story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button variant="secondary">Contact Us</Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
