import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <div className="container px-4 md:px-6 py-8 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Find answers to common questions about our products, ordering process, shipping, and more.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-4">
            <h3 className="font-bold text-lg">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#ordering" className="text-muted-foreground hover:text-primary">
                  Ordering & Payment
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#returns" className="text-muted-foreground hover:text-primary">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary">
                  Products & Sizing
                </a>
              </li>
              <li>
                <a href="#account" className="text-muted-foreground hover:text-primary">
                  Account & Orders
                </a>
              </li>
              <li>
                <a href="#ablaze" className="text-muted-foreground hover:text-primary">
                  Ablaze Collection
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <section id="ordering" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Ordering & Payment</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I place an order?</AccordionTrigger>
                <AccordionContent>
                  To place an order, browse our products, select the items you wish to purchase, add them to your cart,
                  and proceed to checkout. You can check out as a guest or create an account for faster checkout in the
                  future.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple
                  Pay. All payments are securely processed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it safe to enter my credit card information on your website?</AccordionTrigger>
                <AccordionContent>
                  Yes, we use industry-standard SSL encryption to protect your personal and payment information. Your
                  credit card details are never stored on our servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I modify or cancel my order after it's been placed?</AccordionTrigger>
                <AccordionContent>
                  You can modify or cancel your order within 1 hour of placing it by contacting our customer service
                  team. Once an order has been processed, it cannot be modified or canceled.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="shipping" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Shipping & Delivery</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
                <AccordionContent>
                  Standard shipping typically takes 3-5 business days within the continental United States. Express
                  shipping (1-2 business days) is also available for an additional fee.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer free shipping?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer free standard shipping on all orders over $50 within the continental United States.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to select international destinations. International shipping rates and delivery times
                  vary by location. Please note that customers are responsible for any customs fees or import taxes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you'll receive a confirmation email with tracking information. You can also
                  track your order by logging into your account or using the tracking link provided in the shipping
                  confirmation email.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="returns" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Returns & Refunds</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We accept returns of unworn, unwashed, and undamaged items with original tags attached within 30 days
                  of delivery. For hygiene reasons, certain items like undergarments cannot be returned.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I return an item?</AccordionTrigger>
                <AccordionContent>
                  To initiate a return, log into your account and select the order containing the item(s) you wish to
                  return. Follow the return instructions or contact our customer service team for assistance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does it take to process a refund?</AccordionTrigger>
                <AccordionContent>
                  Once we receive your return, it typically takes 3-5 business days to process. Refunds are issued to
                  the original payment method and may take an additional 2-7 business days to appear on your statement,
                  depending on your financial institution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I have to pay for return shipping?</AccordionTrigger>
                <AccordionContent>
                  Customers are responsible for return shipping costs unless the return is due to our error (such as
                  sending the wrong item or a defective product). In those cases, we will provide a prepaid return
                  shipping label.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="products" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Products & Sizing</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I find the right size?</AccordionTrigger>
                <AccordionContent>
                  Each product page includes a size guide with detailed measurements. If you're between sizes, we
                  generally recommend sizing up for a more comfortable fit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What materials are used in your products?</AccordionTrigger>
                <AccordionContent>
                  Material information is listed on each product page. Most of our apparel is made from high-quality
                  cotton or cotton blends. We strive to use durable, comfortable materials for all our products.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are your products ethically made?</AccordionTrigger>
                <AccordionContent>
                  Yes, we partner with suppliers who maintain ethical manufacturing practices. We are committed to
                  responsible sourcing and fair labor practices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How should I care for my purchases?</AccordionTrigger>
                <AccordionContent>
                  Care instructions are included on the product labels and product pages. Generally, we recommend
                  washing apparel in cold water and air drying to maintain quality and prevent shrinkage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="account" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Account & Orders</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do I need to create an account to make a purchase?</AccordionTrigger>
                <AccordionContent>
                  No, you can check out as a guest. However, creating an account allows you to track orders, save
                  shipping information, and enjoy a faster checkout process for future purchases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I check the status of my order?</AccordionTrigger>
                <AccordionContent>
                  You can check your order status by logging into your account and viewing your order history. If you
                  checked out as a guest, you can use the order tracking link provided in your order confirmation email.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>I forgot my password. How do I reset it?</AccordionTrigger>
                <AccordionContent>
                  Click on the "Forgot Password" link on the login page. Enter your email address, and we'll send you
                  instructions to reset your password.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I update my shipping address after placing an order?</AccordionTrigger>
                <AccordionContent>
                  If you need to update your shipping address after placing an order, please contact our customer
                  service team immediately. We can only change the shipping address if the order has not yet been
                  processed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="ablaze" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Ablaze Collection</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the Ablaze Collection?</AccordionTrigger>
                <AccordionContent>
                  The Ablaze Collection features merchandise related to our church's annual youth program. Each year's
                  collection includes unique designs and items that commemorate the event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>When is the new Ablaze Collection released?</AccordionTrigger>
                <AccordionContent>
                  The new Ablaze Collection is typically released 1-2 months before the annual youth program. Sign up
                  for our newsletter to be notified when new items are available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are previous years' Ablaze items still available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we maintain an archive of previous years' Ablaze merchandise while supplies last. These items can
                  be found in the "Ablaze Archive" section of our website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I pre-order upcoming Ablaze merchandise?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer pre-orders for select Ablaze items. Pre-order availability is announced through our
                  newsletter and on the website. Pre-ordered items are shipped as soon as they become available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer to your question, our customer service team is here to help. Contact us and
          we'll get back to you as soon as possible.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}

