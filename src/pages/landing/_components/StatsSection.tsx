import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 2500000, suffix: "+", label: "Shipments Processed", format: "compact" },
  { value: 29000, suffix: "+", label: "Pincodes Covered", format: "full" },
  { value: 12000, suffix: "+", label: "Active Agents", format: "full" },
  { value: 99.2, suffix: "%", label: "Delivery Success", format: "decimal" },
];

function CountUp({
  value,
  suffix,
  format,
}: {
  value: number;
  suffix: string;
  format: string;
}) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    if (format === "decimal") return v.toFixed(1);
    if (format === "compact") return (v / 1000000).toFixed(1) + "M";
    return Math.round(v).toLocaleString("en-IN");
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2.5, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-foreground text-background">
      {/* Decorative large numbers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
        29,000+
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-background/50">
              Our Impact
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Numbers that
              <br />
              <span className="text-primary">speak for themselves.</span>
            </h2>
            <p className="mt-5 text-base text-background/60 max-w-md leading-relaxed">
              Trusted by thousands of businesses across India to power their
              logistics operations every single day.
            </p>
          </motion.div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-background/10 rounded-2xl overflow-hidden">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-foreground p-8 sm:p-10 flex flex-col"
              >
                <div className="text-3xl sm:text-4xl font-bold text-background">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </div>
                <div className="mt-2 text-sm text-background/50 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
