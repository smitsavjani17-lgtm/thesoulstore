import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 21, 2026">
      <section>
        <h2 className="text-2xl font-bold text-black">1. Introduction</h2>
        <p className="mt-3">
          TheSoulStore respects your privacy. This policy explains what personal
          information we collect, why we collect it, how we use it, and the
          choices available to you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          2. Information we collect
        </h2>
        <p className="mt-3">We may collect information such as:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Your name, email address, shipping address and phone number.</li>
          <li>Order, transaction, return and customer-service information.</li>
          <li>
            Website information such as browser type, device type, IP address
            and pages visited.
          </li>
          <li>
            Marketing preferences and information submitted through our
            waitlist or contact forms.
          </li>
        </ul>

        <p className="mt-3">
          Payment information is processed by our payment providers. We do not
          intend to directly store complete payment-card details on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          3. How we use information
        </h2>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>To process, deliver and support orders.</li>
          <li>To operate and improve our website.</li>
          <li>To communicate about purchases, returns and support requests.</li>
          <li>
            To send launch news or marketing messages when you have consented.
          </li>
          <li>To prevent fraud, misuse and security incidents.</li>
          <li>To meet legal, tax and regulatory obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          4. Service providers
        </h2>
        <p className="mt-3">
          We may share information with service providers that help us operate
          the business, including hosting, payment, email, analytics, shipping
          and customer-support providers. They receive only the information
          reasonably required to provide their services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          5. Cookies and analytics
        </h2>
        <p className="mt-3">
          Our website may use cookies and similar technologies for essential
          website functions, security, preferences and analytics. You can
          control certain cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          6. Retention and security
        </h2>
        <p className="mt-3">
          We retain personal information only as long as reasonably necessary
          for the purposes described in this policy or as required by law. We
          use reasonable administrative, technical and physical safeguards, but
          no online system can guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">7. Your choices</h2>
        <p className="mt-3">
          You may request access to, or correction of, your personal
          information. You may also withdraw consent to marketing emails at any
          time by using the unsubscribe option or contacting us.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          8. International processing
        </h2>
        <p className="mt-3">
          Some providers may process information outside Alberta or Canada.
          Information processed in another jurisdiction may be subject to that
          jurisdiction&apos;s laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">9. Contact</h2>
        <p className="mt-3">
          For privacy questions or requests, contact our privacy representative
          at{" "}
          <a
            href="mailto:thesoulstore.ca@gmail.com"
            className="font-semibold text-black underline"
          >
            thesoulstore.ca@gmail.com
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}