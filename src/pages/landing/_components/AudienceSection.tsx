import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingCart,
  Store,
  Package,
  Palette,
  Users,
  Boxes,
  Building2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Audience = {
  icon: LucideIcon;
  label: string;
  tag: string;
  description: string;
};

const AUDIENCES: Audience[] = [
  {
    icon: ShoppingCart,
    tag: "Sellers",
    label: "Ecommerce Sellers",
    description: "Shipping across India from any marketplace or website",
  },
  {
    icon: Store,
    tag: "Stores",
    label: "Shopify & Online Store Owners",
    description: "Seamless integration with your existing storefront",
  },
  {
    icon: Package,
    tag: "Marketplaces",
    label: "Meesho, Amazon & Flipkart Sellers",
    description: "Optimize multi-platform logistics from a single dashboard",
  },
  {
    icon: Palette,
    tag: "D2C",
    label: "D2C Brands",
    description: "Managing COD orders and reducing RTO rates effortlessly",
  },
  {
    icon: Users,
    tag: "Agents",
    label: "Logistics Agents & Courier Franchises",
    description: "Earn commissions and manage local deliveries with ease",
  },
  {
    icon: Boxes,
    tag: "SMEs",
    label: "SMEs & Bulk Shippers",
    description: "Upload thousands of orders and auto-assign best couriers",
  },
  {
    icon: Building2,
    tag: "Enterprise",
    label: "Multi-Courier Aggregation",
    description: "Compare rates across 6+ couriers and pick the best every time",
  },
];

export default function AudienceSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="who-can-use" className="py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout: Left heading sticks, right has the list */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column - heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Built For You
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Who can use
              <br />
              ApnaCourier?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Automate shipping, reduce RTO, manage COD reconciliation and
              optimize courier selection — all from a single dashboard.
            </p>
            <a
              href="#features"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Explore features
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

          {/* Right column - interactive list */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-border/60">
              {AUDIENCES.map((audience, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={audience.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className="py-6 flex items-center gap-4 sm:gap-6 transition-all duration-300">
                      {/* Number */}
                      <span
                        className={`text-xs font-mono tabular-nums w-6 text-right transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground/40"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}
                      <div
                        className={`size-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-primary-foreground scale-110"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <audience.icon className="size-4" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <h3
                            className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 truncate ${
                              isActive ? "text-foreground" : "text-foreground/70"
                            }`}
                          >
                            {audience.label}
                          </h3>
                          <span
                            className={`hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "bg-transparent text-transparent"
                            }`}
                          >
                            {audience.tag}
                          </span>
                        </div>

                        {/* Expandable description */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                            >
                              {audience.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        className={`size-5 shrink-0 transition-all duration-300 ${
                          isActive
                            ? "text-primary translate-x-1"
                            : "text-muted-foreground/20"
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-foreground rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-background">
                  One platform, every shipper.
                </p>
                <p className="text-xs text-background/60 mt-1">
                  7 audience types. One unified dashboard. Zero hassle.
                </p>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-background bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-lg transition-colors shrink-0"
              >
                View pricing
                <ArrowRight className="size-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
