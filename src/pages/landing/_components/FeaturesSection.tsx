import { motion } from "motion/react";
import {
  LayoutDashboard,
  Search,
  IndianRupee,
  Upload,
  FileText,
  ShieldCheck,
  BarChart3,
  RotateCcw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  size: "large" | "small";
};

const FEATURES: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "Book shipments across all couriers from a single powerful dashboard. Compare rates, delivery times, and serviceability in real-time — no more juggling between multiple courier panels.",
    size: "large",
  },
  {
    icon: Search,
    title: "Real-Time Tracking",
    description:
      "Track every shipment across all courier partners with real-time status updates and NDR alerts.",
    size: "small",
  },
  {
    icon: IndianRupee,
    title: "COD Management",
    description:
      "Fast COD reconciliation with automated settlement tracking. Know where your money is at all times.",
    size: "small",
  },
  {
    icon: Upload,
    title: "Bulk Shipments",
    description:
      "Upload thousands of orders via CSV or Excel. Auto-assign couriers based on your preferred logic — price, speed, or pincode serviceability — and generate labels in bulk.",
    size: "large",
  },
  {
    icon: FileText,
    title: "Label Generation",
    description:
      "Generate shipping labels and manifests automatically in all standard formats.",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "KYC Onboarding",
    description:
      "Smooth step-by-step verification. Get approved and start shipping within 24 hours.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Deep insights into delivery performance, RTO rates, courier comparisons, and cost breakdowns.",
    size: "small",
  },
  {
    icon: RotateCcw,
    title: "RTO Management",
    description:
      "Reduce return-to-origin rates with smart address verification and automated buyer communication.",
    size: "small",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Platform Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need
            <br />
            <span className="text-muted-foreground">to ship at scale.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 ${
                feature.size === "large" ? "sm:col-span-2 sm:row-span-1" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
