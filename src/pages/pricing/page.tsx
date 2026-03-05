import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd.tsx";
import { FAQ_ITEMS } from "@/lib/faq-data.ts";
import PricingSection from "@/pages/landing/_components/PricingSection.tsx";
import FaqSection from "@/pages/landing/_components/FaqSection.tsx";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RELATED_LINKS = [
  { label: "Courier Aggregator Platform", href: "/courier-aggregator-india", description: "Learn how our multi-courier aggregation saves you up to 40% on shipping." },
  { label: "E-commerce Shipping Solutions", href: "/ecommerce-shipping-solutions", description: "Complete shipping solutions for online sellers across India." },
  { label: "Delhivery Integration", href: "/delhivery-integration", description: "Ship with India's largest courier network through ApnaCourier." },
  { label: "All Services", href: "/services", description: "Explore our full range of logistics and shipping services." },
];

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing - Transparent Shipping Rates for Indian Businesses"
        description="Simple, transparent pricing with no hidden fees. Start free with 50 shipments. Volume-based discounts across Delhivery, DTDC, Blue Dart, XpressBees, Ecom Express & Trackon. No minimum volume, no lock-in."
        keywords="courier pricing India, shipping rates comparison, cheapest courier rates India, logistics pricing, courier aggregator pricing, bulk shipping rates"
        canonicalPath="/pricing"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />
      <FaqPageJsonLd items={FAQ_ITEMS} />
      {/* Hero */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Pricing
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Simple, Transparent Pricing for Every Business
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No minimum commitments. Start free and scale your
              shipping operations as your business grows across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse the pricing section from homepage */}
      <PricingSection />

      {/* Why ApnaCourier pricing is different */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Our Pricing Works for Indian Sellers
            </h2>
            <div className="bg-card rounded-2xl border border-border/50 p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Volume-Based Discounts
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The more you ship, the cheaper each shipment gets. ApnaCourier
                  aggregates volume across all our sellers to negotiate the best
                  rates with courier partners. Even small sellers benefit from
                  enterprise-grade pricing because of our collective bargaining
                  power.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  COD Charges Made Clear
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  COD charges are typically 1.5-2.5% of the order value or a
                  flat fee, depending on the courier partner. We display the
                  exact COD charges at booking time so there are never any
                  surprises. COD remittance cycles are also clearly shown for
                  each courier.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  RTO Charges
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Return-to-Origin shipments are charged at the forward shipping
                  rate by most couriers. ApnaCourier helps you minimize RTOs
                  with address verification, NDR management, and pincode-level
                  analytics so you pay less in return shipping costs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  No Platform Lock-in
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You{"'"}re free to use ApnaCourier for as long as it works
                  for you. There are no annual contracts, no cancellation fees,
                  and no penalties. We earn your business every single day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources - Internal Linking */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {RELATED_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="group flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold group-hover:text-primary transition-colors">{link.label}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{link.description}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
