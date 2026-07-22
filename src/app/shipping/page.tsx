import LegalPage from "@/components/LegalPage";

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping Policy" lastUpdated="July 21, 2026">
      <section>
        <h2 className="text-2xl font-bold text-black">Order processing</h2>
        <p className="mt-3">
          In-stock orders are normally processed within 2–4 business days,
          excluding weekends and holidays. Limited releases and high-volume
          launch periods may require additional processing time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Canadian delivery estimates
        </h2>
        <p className="mt-3">
          Standard Canadian delivery is estimated at 3–10 business days after
          dispatch. Remote destinations may take longer.
        </p>

        <p className="mt-3">
          Final delivery options, charges and estimates will be displayed during
          checkout before payment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">Tracking</h2>
        <p className="mt-3">
          When tracking is available, you will receive a shipping confirmation
          email containing the tracking information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Address changes
        </h2>
        <p className="mt-3">
          Contact us immediately if an address is incorrect. We cannot guarantee
          that an address can be changed after an order begins processing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Delayed or missing packages
        </h2>
        <p className="mt-3">
          Carrier delays may occur. Contact us if tracking has not updated for
          an extended period or the package is marked delivered but cannot be
          located. We will assist with the carrier investigation where
          appropriate.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          International shipping
        </h2>
        <p className="mt-3">
          International shipping is not currently guaranteed to be available.
          When offered, customers may be responsible for applicable duties,
          taxes, brokerage charges and import fees.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">
          Pre-orders
        </h2>
        <p className="mt-3">
          Pre-order products will display an expected shipping period on the
          applicable product page. Products ordered together may ship separately
          or when all items are available.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black">Contact</h2>
        <p className="mt-3">
          For shipping help, email{" "}
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