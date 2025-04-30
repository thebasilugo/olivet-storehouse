"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Subscribe to our newsletter for updates on new products, sales, and events.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  )
}

