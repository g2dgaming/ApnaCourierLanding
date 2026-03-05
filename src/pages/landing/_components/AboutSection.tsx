import { motion } from "motion/react";
import { Target, Eye, Heart } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize logistics technology for every Indian business, from a one-person shop to a growing D2C brand.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be India's most trusted multi-courier aggregator, empowering 1 million businesses and 50,000 agents by 2028.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Transparency in pricing, speed in execution, and trust in every transaction. Every parcel matters.",
  },
];

const HIGHLIGHTS = [
  "Compare 6+ courier rates in real-time",
  "COD remittance tracking with daily updates",
  "Bulk order upload with CSV/Excel support",
  "Auto courier allocation based on rules",
  "Pincode-level serviceability checks",
  "Dedicated account manager for each seller",
  "Smart NDR management to reduce RTOs",
  "Integrated KYC for fast onboarding",
  "Comprehensive analytics dashboard",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: left-aligned for variety */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Apna Courier,
              <br />
              <span className="text-muted-foreground">Apna Bharosa.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-muted-foreground leading-relaxed lg:pt-8"
          >
            ApnaCourier was born from a simple problem: Indian SMEs and e-commerce
            sellers were drowning in complexity when shipping parcels. Multiple
            courier accounts, scattered tracking, delayed COD payments, and zero
            visibility. We built ApnaCourier to fix all of that in one platform.
          </motion.p>
        </div>

        {/* Pillars - horizontal cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 p-7 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-3">
                <pillar.icon className="size-5 text-primary" />
                <h3 className="text-base font-bold text-foreground">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why choose - checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border/50 p-8 sm:p-10"
        >
          <h3 className="text-xl font-bold mb-6">
            Why businesses choose ApnaCourier
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {HIGHLIGHTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
