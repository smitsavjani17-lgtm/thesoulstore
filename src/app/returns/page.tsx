import LegalPage from "@/components/LegalPage";

export default function ReturnsPage() {
  return (
    <LegalPage title="Return & Refund Policy" lastUpdated="July 21, 2026">
      <section>
        <h2 className="text-2xl font-bold text-black">Return period</h2>
        <p className="mt-3">
          You may request a return within 14 days after the order is delivered.
          Returns sent without prior authorization may not be accepted.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Return eligibility
        </h2>
        <p className="mt-3">Returned products must be:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Unworn, unwashed and unused.</li>
          <li>Free from scents, stains, hair and damage.</li>
          <li>Returned with original tags and packaging where applicable.</li>
          <li>Accompanied by the order number or proof of purchase.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Non-returnable products
        </h2>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Final-sale products clearly identified before purchase.</li>
          <li>Gift cards.</li>
          <li>Products damaged after delivery through misuse or wear.</li>
          <li>Items that do not meet the return conditions above.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Return shipping
        </h2>
        <p className="mt-3">
          Unless the product is defective, damaged upon arrival or incorrect,
          the customer is responsible for return-shipping costs. Original
          shipping charges are normally non-refundable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Damaged or incorrect orders
        </h2>
        <p className="mt-3">
          Contact us within 7 days of delivery and include your order number,
          description of the issue, and clear photographs. Where confirmed, we
          will arrange an appropriate replacement, refund or other remedy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">Refunds</h2>
        <p className="mt-3">
          Approved refunds are returned to the original payment method. Bank and
          payment-provider processing times may vary. We will notify you after
          the return has been inspected and a decision has been made.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">Exchanges</h2>
        <p className="mt-3">
          Exchanges depend on inventory availability. For limited releases, the
          preferred size or product may no longer be available.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Legal rights
        </h2>
        <p className="mt-3">
          This policy does not limit any cancellation, refund or other rights
          that cannot be excluded under applicable consumer-protection law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Start a return
        </h2>
        <p className="mt-3">
          Email{" "}
          <a
            href="mailto:thesoulstore.ca@gmail.com"
            className="font-semibold text-black underline"
          >
            thesoulstore.ca@gmail.com
          </a>{" "}
          with your order number and reason for the return.
        </p>
      </section>
    </LegalPage>
  );
}