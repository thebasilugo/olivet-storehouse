export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 md:px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <h2>Introduction</h2>
        <p>
          Olivet Storehouse ("we," "our," or "us") respects your privacy and is committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
          you visit our website or make a purchase.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, postal address, phone number, and payment
            information when you make a purchase or create an account.
          </li>
          <li>
            <strong>Transaction Information:</strong> Details about purchases or orders you make through our website.
          </li>
          <li>
            <strong>Log Data:</strong> Information that your browser sends whenever you visit our website, including
            your IP address, browser type, pages visited, and time spent on those pages.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> We use cookies to enhance your experience, gather general
            visitor information, and track visits to our website.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Provide customer service and respond to inquiries</li>
          <li>Send transactional emails and order confirmations</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Prevent fraudulent transactions and monitor against theft</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing and Disclosure</h2>
        <p>We may share your information in the following situations:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information with third-party service providers who
            perform services on our behalf, such as payment processing, shipping, and marketing.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
            response to valid requests by public authorities.
          </li>
          <li>
            <strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger,
            acquisition, or sale of all or a portion of our assets.
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However, please note that no
          method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to opt-out of marketing communications</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          Our website is not intended for children under 13 years of age. We do not knowingly collect personal
          information from children under 13. If you are a parent or guardian and believe your child has provided us
          with personal information, please contact us.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          Olivet Storehouse
          <br />
          123 Faith Avenue
          <br />
          Anytown, CA 12345
          <br />
          Email: privacy@olivetstorehouse.com
          <br />
          Phone: (123) 456-7890
        </p>
      </div>
    </div>
  )
}
