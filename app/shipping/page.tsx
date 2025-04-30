import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function ShippingPage() {
	return (
		<div className="container px-4 md:px-6 py-8 max-w-4xl mx-auto">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="text-4xl font-bold tracking-tight mb-4">
					Shipping & Returns
				</h1>
				{/* <p className="text-xl text-muted-foreground max-w-3xl">
          Information about our shipping methods, delivery times, and return policies.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
          <p className="mb-6">
            We ship all orders from our warehouse in Anytown, California. Orders are processed and shipped within 1-2
            business days after payment confirmation, excluding weekends and holidays.
          </p>

          <h3 className="text-xl font-bold mb-4">Shipping Methods & Rates</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipping Method</TableHead>
                <TableHead>Delivery Time</TableHead>
                <TableHead>Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Standard Shipping</TableCell>
                <TableCell>3-5 business days</TableCell>
                <TableCell>$4.99 (Free on orders over $50)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Express Shipping</TableCell>
                <TableCell>1-2 business days</TableCell>
                <TableCell>$9.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>International Shipping</TableCell>
                <TableCell>7-14 business days</TableCell>
                <TableCell>Starting at $14.99 (varies by location)</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h3 className="text-xl font-bold mt-8 mb-4">Order Tracking</h3>
          <p className="mb-4">
            Once your order ships, you'll receive a confirmation email with tracking information. You can also track
            your order by logging into your account and viewing your order history.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">International Shipping</h3>
          <p className="mb-4">
            We ship to select international destinations. Please note that international customers are responsible for
            all duties, taxes, and customs fees that may be imposed by their country's regulations. These charges are
            not included in the order total and will be collected by the delivery carrier.
          </p>
          <p>
            International delivery times may vary depending on customs processing in your country. Please allow
            additional time for international shipments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Return Policy</h2>
          <p className="mb-6">
            We want you to be completely satisfied with your purchase. If for any reason you're not happy with your
            order, we offer a simple return process.
          </p>

          <h3 className="text-xl font-bold mb-4">Return Eligibility</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Items must be returned within 30 days of delivery.</li>
            <li>Products must be unworn, unwashed, and undamaged with all original tags attached.</li>
            <li>For hygiene reasons, certain items like undergarments cannot be returned.</li>
            <li>Sale items marked as "Final Sale" cannot be returned or exchanged.</li>
            <li>Custom or personalized items cannot be returned unless there is a manufacturing defect.</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">How to Return an Item</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Log into your account and select the order containing the item(s) you wish to return.</li>
            <li>Select the items you want to return and the reason for the return.</li>
            <li>Print the return shipping label (if applicable) and return authorization form.</li>
            <li>Pack the item(s) securely in the original packaging if possible.</li>
            <li>Include the return authorization form inside the package.</li>
            <li>Attach the shipping label to the outside of the package.</li>
            <li>Drop off the package at the specified carrier location.</li>
          </ol>

          <h3 className="text-xl font-bold mb-4">Return Shipping</h3>
          <p className="mb-4">
            Customers are responsible for return shipping costs unless the return is due to our error (such as sending
            the wrong item or a defective product). In those cases, we will provide a prepaid return shipping label.
          </p>

          <h3 className="text-xl font-bold mb-4">Refunds</h3>
          <p className="mb-4">
            Once we receive your return, it typically takes 3-5 business days to process. Refunds are issued to the
            original payment method and may take an additional 2-7 business days to appear on your statement, depending
            on your financial institution.
          </p>
          <p className="mb-4">
            The original shipping charges are non-refundable unless the return is due to our error.
          </p>

          <h3 className="text-xl font-bold mb-4">Exchanges</h3>
          <p className="mb-6">
            If you need a different size or color, we recommend returning the item for a refund and placing a new order
            for the desired item. This ensures the item you want is still in stock and will be shipped to you as quickly
            as possible.
          </p>

          <h3 className="text-xl font-bold mb-4">Damaged or Defective Items</h3>
          <p>
            If you receive a damaged or defective item, please contact our customer service team within 7 days of
            delivery. We may request photos of the damage or defect to process your claim more efficiently.
          </p>
        </section>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have any questions about shipping, returns, or your order, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg">
                View FAQs
              </Button>
            </Link>
          </div>
        </div> */}
				<p>this page is still in development</p>
			</div>
		</div>
	);
}
