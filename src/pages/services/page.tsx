import { motion } from "motion/react";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd, ServicesJsonLd } from "@/components/seo/JsonLd.tsx";
import {
  Truck,
  Package,
  Search,
  IndianRupee,
  Upload,
  FileText,
  ShieldCheck,
  BarChart3,
  RotateCcw,
  MapPin,
  Clock,
  Bell,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Link } from "react-router-dom";

const CORE_SERVICES = [
  {
    icon: Package,
    title: "Multi-Courier Shipment Booking",
    description:
      "Book shipments across Delhivery, DTDC, Blue Dart, XpressBees, Ecom Express, and Trackon from a single dashboard. Compare rates, delivery estimates, and serviceability in real-time before choosing the best courier for each parcel.",
    keywords: "courier booking, multi-courier shipping, parcel booking India",
  },
  {
    icon: Search,
    title: "Unified Shipment Tracking",
    description:
      "Track every shipment across all courier partners in one unified view. Get real-time status updates, estimated delivery dates, and instant notifications on delivery attempts, delays, or exceptions.",
    keywords: "shipment tracking, parcel tracking India, courier tracking",
  },
  {
    icon: IndianRupee,
    title: "COD Reconciliation & Settlements",
    description:
      "Automated Cash on Delivery tracking with detailed reconciliation reports. Know exactly how much COD is pending, in-transit, and settled. Download settlement reports by courier, date range, or shipment status.",
    keywords: "COD management, cash on delivery reconciliation, COD settlement",
  },
  {
    icon: Upload,
    title: "Bulk Order Processing",
    description:
      "Upload thousands of orders at once via CSV or Excel files. Our auto-allocation engine assigns the optimal courier for each shipment based on price, speed, serviceability, and your custom rules.",
    keywords: "bulk shipping, CSV order upload, bulk courier booking",
  },
  {
    icon: FileText,
    title: "Label & Manifest Generation",
    description:
      "Generate compliant shipping labels and courier manifests automatically. Supports all standard formats required by Indian courier partners. Print in bulk or one at a time, with customizable label layouts.",
    keywords: "shipping labels India, manifest generation, courier labels",
  },
  {
    icon: BarChart3,
    title: "Logistics Analytics & Reporting",
    description:
      "Comprehensive dashboards with delivery performance metrics, courier comparison reports, cost analysis, RTO rate tracking, and zone-wise delivery insights to optimize your shipping strategy.",
    keywords: "logistics analytics, shipping reports, delivery performance",
  },
];

const ADDITIONAL_SERVICES = [
  {
    icon: RotateCcw,
    title: "RTO Reduction",
    description:
      "Smart address verification, automated NDR management, and buyer communication workflows to significantly reduce Return-to-Origin rates.",
  },
  {
    icon: ShieldCheck,
    title: "KYC & Onboarding",
    description:
      "Fast step-by-step business verification with GST, Aadhaar, and bank details. Get approved and start shipping within 24 hours.",
  },
  {
    icon: MapPin,
    title: "Pincode Serviceability",
    description:
      "Instant pincode-level checks showing which couriers can deliver, estimated transit time, and applicable rates for 29,000+ pincodes.",
  },
  {
    icon: Clock,
    title: "NDR Management",
    description:
      "Automated Non-Delivery Report handling with buyer reattempt requests, address corrections, and escalation workflows.",
  },
  {
    icon: Bell,
    title: "Buyer Notifications",
    description:
      "Automatic SMS and email updates to buyers on shipment status changes including dispatch, in-transit, out-for-delivery, and delivered.",
  },
  {
    icon: Truck,
    title: "Reverse Logistics",
    description:
      "Manage return pickups and reverse shipments with the same ease as forward shipping. Track returns and process refunds faster.",
  },
];

const COURIER_DETAILS = [
  {
    name: "Delhivery",
    speciality: "Pan-India Express, Surface, and Economy services",
    coverage: "18,000+ pincodes",
    bestFor: "E-commerce sellers with high volumes across India",
  },
  {
    name: "DTDC",
    speciality: "Domestic and international courier services",
    coverage: "14,000+ pincodes",
    bestFor: "Businesses needing reliable nationwide coverage",
  },
  {
    name: "Blue Dart",
    speciality: "Premium express with guaranteed delivery times",
    coverage: "12,000+ pincodes",
    bestFor: "High-value shipments requiring premium handling",
  },
  {
    name: "XpressBees",
    speciality: "Technology-driven e-commerce logistics",
    coverage: "15,000+ pincodes",
    bestFor: "D2C brands and e-commerce first-mile/last-mile",
  },
  {
    name: "Ecom Express",
    speciality: "E-commerce focused with strong COD handling",
    coverage: "13,000+ pincodes",
    bestFor: "COD-heavy sellers in Tier 2/3 cities",
  },
  {
    name: "Trackon",
    speciality: "Value courier with competitive surface rates",
    coverage: "10,000+ pincodes",
    bestFor: "Budget-conscious sellers shipping non-urgent parcels",
  },
];

const RELATED_LINKS = [
  { label: "Courier Aggregator Platform", href: "/courier-aggregator-india", description: "Compare rates across 6+ courier partners and auto-allocate shipments." },
  { label: "E-commerce Shipping Solutions", href: "/ecommerce-shipping-solutions", description: "Tailored shipping solutions for online sellers managing multiple orders." },
  { label: "Bulk Shipping Platform", href: "/bulk-shipping-platform", description: "Process thousands of orders daily with CSV upload and auto-allocation." },
  { label: "COD Management System", href: "/cod-management-system", description: "Track, reconcile, and settle cash on delivery across all courier partners." },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Logistics Services - Multi-Courier Shipping, Tracking, COD Management"
        description="Complete logistics solutions for Indian businesses. Multi-courier shipment booking, unified tracking, COD reconciliation, bulk order processing, label generation, and analytics across Delhivery, DTDC, Blue Dart, XpressBees, Ecom Express & Trackon."
        keywords="logistics services India, courier booking service, shipment tracking service, COD reconciliation service, bulk shipping service, label generation, reverse logistics India"
        canonicalPath="/services"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicesJsonLd services={CORE_SERVICES} />

      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Complete Logistics Solutions for Indian Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From single parcel booking to enterprise bulk shipping, ApnaCourier
              provides end-to-end logistics services through India{"'"}s top
              courier partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Core Platform Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run efficient shipping operations at any
              scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border/50 p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Additional Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Tools and features that make your logistics operations smarter.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADDITIONAL_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 bg-card rounded-xl border border-border/50 p-5"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">{service.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courier Partner Details */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Courier Partner Network
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of each courier partner available on
              ApnaCourier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURIER_DETAILS.map((courier, i) => (
              <motion.div
                key={courier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border/50 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Truck className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{courier.name}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Speciality
                    </div>
                    <div className="text-sm text-foreground mt-0.5">
                      {courier.speciality}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Coverage
                    </div>
                    <div className="text-sm text-foreground mt-0.5">
                      {courier.coverage}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Best For
                    </div>
                    <div className="text-sm text-foreground mt-0.5">
                      {courier.bestFor}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-background">
            Ready to Ship Smarter?
          </h2>
          <p className="mt-4 text-background/60">
            Sign up for free and start comparing rates across 6 courier partners
            in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignInButton
              size="lg"
              className="font-semibold"
              signInText="Get Started Free"
              showIcon={false}
            />
            <a href="/pricing">
              <Button variant="ghost" size="lg" className="font-semibold text-background/70 hover:text-background hover:bg-background/10">
                View Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
