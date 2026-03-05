import { motion } from "motion/react";
import { Truck } from "lucide-react";

const COURIER_PARTNERS = [
  { name: "Delhivery", tagline: "Pan-India Express", accent: "text-red-600 dark:text-red-400" },
  { name: "DTDC", tagline: "Reliable Nationwide", accent: "text-blue-600 dark:text-blue-400" },
  { name: "Blue Dart", tagline: "Premium Express", accent: "text-sky-600 dark:text-sky-400" },
  { name: "XpressBees", tagline: "E-commerce Specialist", accent: "text-amber-600 dark:text-amber-400" },
  { name: "Ecom Express", tagline: "COD Expert", accent: "text-green-600 dark:text-green-400" },
  { name: "Trackon", tagline: "Value Courier", accent: "text-purple-600 dark:text-purple-400" },
];

// Duplicate for seamless loop
const MARQUEE_ITEMS = [...COURIER_PARTNERS, ...COURIER_PARTNERS];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Integrated with India{"'"}s leading couriers
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -50 * COURIER_PARTNERS.length + "%"] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
          style={{ width: "fit-content" }}
        >
          {MARQUEE_ITEMS.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-4 bg-card border border-border/50 rounded-2xl px-8 py-5 min-w-[260px] hover:border-primary/30 transition-colors"
            >
              <div className={`${partner.accent}`}>
                <Truck className="size-8" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-bold text-foreground text-base">{partner.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{partner.tagline}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
