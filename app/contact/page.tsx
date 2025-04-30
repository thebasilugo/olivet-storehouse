"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
    }, 1500)
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Have questions or feedback? We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Phone className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">Call us during business hours for immediate assistance.</p>
            <a href="tel:+2348012345678" className="text-primary font-medium">
              +234 801 234 5678
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Send us an email and we'll get back to you within 24 hours.</p>
            <a href="mailto:info@olivetstorehouse.com" className="text-primary font-medium">
              info@olivetstorehouse.com
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Visit our physical store located at the church.</p>
            <address className="not-italic text-primary font-medium">
              Plot D 6th Avenue, Cavera 13 Rd,
              <br />
              Festac Town, Lagos
            </address>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-muted-foreground mb-6">
            Fill out the form below and we'll get back to you as soon as possible. We value your feedback and are here
            to answer any questions you may have.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Store Hours</h2>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">How can I track my order?</h3>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive a tracking number via email. You can also check your order status
                in your account dashboard.
              </p>
            </div>
            <div>
              <h3 className="font-bold">What is your return policy?</h3>
              <p className="text-muted-foreground">
                We accept returns within 30 days of purchase. Items must be in original condition with tags attached.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Do you ship internationally?</h3>
              <p className="text-muted-foreground">
                Yes, we ship to select international destinations. Shipping rates and delivery times vary by location.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Can I purchase items for my church group?</h3>
              <p className="text-muted-foreground">
                We offer bulk discounts for church groups. Contact us for more information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7302424749164!2d3.2835!3d6.4651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8991a5f0e2d7%3A0x3b33e0f4e1f9aa78!2sPlot%20D%206th%20Avenue%2C%20Cavera%2013%20Rd%2C%20Festac%20Town%2C%20Lagos!5e0!3m2!1sen!2sng!4v1648226938209!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Olivet Storehouse Location"
          className="absolute inset-0"
        ></iframe>
      </div>
    </div>
  )
}

