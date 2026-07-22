import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="July 21, 2026">
      <section>
        <h2 className="text-2xl font-bold text-black">
          1. Acceptance of these terms
        </h2>
        <p className="mt-3">
          By accessing this website or purchasing from TheSoulStore, you agree
          to these Terms and Conditions and all applicable laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">2. Eligibility</h2>
        <p className="mt-3">
          You must be legally capable of entering into a purchase contract. A
          parent or legal guardian should complete purchases made for minors.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          3. Products and availability
        </h2>
        <p className="mt-3">
          Products may be released in limited quantities. We may limit
          quantities, correct product information, or cancel an order when an
          item is unavailable or information was displayed incorrectly.
        </p>

        <p className="mt-3">
          Product colours may appear differently depending on your screen.
          Measurements may vary slightly because of the manufacturing process.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          4. Prices and payment
        </h2>
        <p className="mt-3">
          Unless stated otherwise, prices are displayed in Canadian dollars.
          Applicable taxes and delivery charges will be shown before the order
          is completed.
        </p>

        <p className="mt-3">
          Payment must be authorized before an order is processed. An order
          confirmation does not guarantee acceptance if payment fails, the
          product is unavailable, or fraud is suspected.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          5. Shipping and delivery
        </h2>
        <p className="mt-3">
          Delivery estimates are provided in our Shipping Policy. They are
          estimates rather than guarantees unless we expressly agree otherwise.
          Customers are responsible for providing a complete and accurate
          delivery address.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          6. Returns and refunds
        </h2>
        <p className="mt-3">
          Returns are governed by our Return and Refund Policy. Nothing in these
          terms limits rights that cannot legally be excluded under applicable
          consumer-protection legislation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          7. Intellectual property
        </h2>
        <p className="mt-3">
          Website content, branding, graphics, photographs, product designs and
          text are owned by or licensed to TheSoulStore. They may not be copied,
          reproduced, sold or commercially used without written permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          8. Prohibited activity
        </h2>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Using the website unlawfully or fraudulently.</li>
          <li>Attempting to interfere with website security or operation.</li>
          <li>Using automated systems to scrape or overload the website.</li>
          <li>Submitting false payment, identity or delivery information.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          9. Limitation of liability
        </h2>
        <p className="mt-3">
          To the extent permitted by law, TheSoulStore is not responsible for
          indirect, incidental or consequential losses arising from use of the
          website or products. This section does not exclude liability that
          cannot legally be excluded.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">10. Governing law</h2>
        <p className="mt-3">
          These terms are governed by the laws of Alberta and the applicable
          federal laws of Canada, without limiting any mandatory rights
          available to consumers in their own jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">11. Contact</h2>
        <p className="mt-3">
          Questions may be sent to{" "}
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