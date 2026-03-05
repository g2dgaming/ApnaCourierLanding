import { motion } from "motion/react";
import { ShieldCheck, Award, Clock, HeartHandshake } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Secure & Encrypted" },
  { icon: Award, label: "ISO Compliant" },
  { icon: Clock, label: "24/7 Support" },
  { icon: HeartHandshake, label: "12,000+ Agents" },
];

export default function TrustBadgesSection() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-muted-foreground"
            >
              <item.icon className="size-4 text-primary" />
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
