import { Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://cdn.hercules.app/file_a4G8qaJ90OOh3king07NN5bU";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Track Shipment", href: "/track" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Become an Agent", href: "/agents" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES_LINKS = [
  { label: "Courier Aggregator", href: "/courier-aggregator-india" },
  { label: "E-commerce Shipping", href: "/ecommerce-shipping-solutions" },
  { label: "Bulk Shipping", href: "/bulk-shipping-platform" },
  { label: "COD Management", href: "/cod-management-system" },
  { label: "Shopify Shipping", href: "/shopify-shipping-india" },
  { label: "All Services", href: "/services" },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Delhivery Integration", href: "/delhivery-integration" },
  { label: "SME Logistics", href: "/logistics-for-sme-india" },
  { label: "Courier Comparison", href: "/ecommerce-courier-services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center">
              <img
                src={LOGO_URL}
                alt="ApnaCourier - India's leading multi-courier logistics aggregator platform"
                className="h-10 w-auto object-contain brightness-0 invert"
                loading="lazy"
                width={160}
                height={40}
              />
            </a>
            <p className="mt-4 text-sm text-background/50 leading-relaxed max-w-sm">
              India{"'"}s leading multi-courier logistics aggregator platform.
              Simplify shipping for SMEs, e-commerce sellers, and on-ground
              agents with one unified dashboard.
            </p>
            <div className="mt-6 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Mail className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-background/50">
                  support@apnacourier.in
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-background/50">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-background/50">
                  Sector 62, Noida, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {RESOURCES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            &copy; {currentYear} ApnaCourier Technologies Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-background/40 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-background/40 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-background/40 hover:text-primary transition-colors"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
