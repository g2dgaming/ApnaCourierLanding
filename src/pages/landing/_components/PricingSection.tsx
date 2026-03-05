import { motion } from "motion/react";
import { Check, Zap, Building2, Rocket } from "lucide-react";
import { SignInButton } from "@/components/ui/signin.tsx";

const PLANS = [
  {
    name: "Starter",
    icon: Zap,
    tagline: "Perfect for new sellers",
    price: "Free",
    priceNote: "Zero platform fee on first 50 shipments",
    features: [
      "Access to all 6 courier partners",
      "Real-time tracking dashboard",
      "Single order booking",
      "Basic COD reporting",
      "Email support",
      "Standard label generation",
    ],
    highlighted: false,
    cta: "Start Free",
  },
  {
    name: "Growth",
    icon: Building2,
    tagline: "For scaling businesses",
    price: "Custom",
    priceNote: "Volume-based pricing, pay per shipment",
    features: [
      "Everything in Starter",
      "Bulk CSV/Excel upload",
      "Auto courier allocation",
      "Advanced COD reconciliation",
      "Priority support with account manager",
      "Detailed analytics & RTO insights",
      "NDR management tools",
      "API access for integration",
    ],
    highlighted: true,
    cta: "Get Custom Quote",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    tagline: "For high-volume shippers",
    price: "Negotiated",
    priceNote: "Best rates guaranteed for 1000+ daily orders",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom courier rate negotiation",
      "White-label tracking page",
      "Webhook integrations",
      "SLA-backed delivery guarantees",
      "Custom settlement cycles",
      "On-premise training & onboarding",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Transparent pricing,
            <br />
            <span className="text-muted-foreground">no hidden charges.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Start free and scale as you grow. Pay only for what you ship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-2xl border p-7 flex flex-col ${
                plan.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                  : "border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`size-10 rounded-lg flex items-center justify-center ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <plan.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {plan.tagline}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-foreground">
                  {plan.price}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {plan.priceNote}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="size-4 mt-0.5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <SignInButton
                size="lg"
                className={`w-full font-semibold ${
                  plan.highlighted
                    ? ""
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                signInText={plan.cta}
                showIcon={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Rate comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-card rounded-2xl border border-border/50 overflow-hidden"
        >
          <div className="p-6 sm:p-8 border-b border-border/50">
            <h3 className="text-lg font-bold">
              Sample shipping rates across couriers
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Indicative rates for 0.5 kg parcel (actual rates vary by volume
              and route)
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-6 py-3 font-semibold text-foreground">
                    Courier
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">
                    Within City
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">
                    Within State
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">
                    Metro to Metro
                  </th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">
                    Rest of India
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Delhivery",
                    rates: ["₹28", "₹38", "₹45", "₹55"],
                  },
                  { name: "DTDC", rates: ["₹32", "₹42", "₹48", "₹58"] },
                  {
                    name: "Blue Dart",
                    rates: ["₹45", "₹55", "₹65", "₹78"],
                  },
                  {
                    name: "XpressBees",
                    rates: ["₹26", "₹35", "₹42", "₹52"],
                  },
                  {
                    name: "Ecom Express",
                    rates: ["₹30", "₹40", "₹47", "₹56"],
                  },
                  {
                    name: "Trackon",
                    rates: ["₹25", "₹33", "₹40", "₹50"],
                  },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className="border-t border-border/30 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-6 py-3 font-medium text-foreground">
                      {row.name}
                    </td>
                    {row.rates.map((rate, j) => (
                      <td key={j} className="px-6 py-3 text-muted-foreground">
                        {rate}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-secondary/30 text-center">
            <p className="text-xs text-muted-foreground">
              * Rates are indicative and subject to change based on volume
              agreements. GST extra.
            </p>
          </div>
        </motion.div>

        {/* No hidden fees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              title: "No Setup Fee",
              desc: "Create your account and start shipping completely free",
            },
            {
              title: "No Minimum Volume",
              desc: "Ship 1 or 10,000 parcels, no commitment required",
            },
            {
              title: "No Lock-in Period",
              desc: "Use ApnaCourier as long as it works for you",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl border border-border/50 p-5 text-center"
            >
              <div className="text-sm font-bold text-primary">{item.title}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
