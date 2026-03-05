import { motion } from "motion/react";
import { UserPlus, Package, Truck, IndianRupee } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign up & verify",
    description:
      "Create your account, complete a quick KYC verification, and your dashboard is ready within 24 hours.",
  },
  {
    icon: Package,
    step: "02",
    title: "Book shipments",
    description:
      "Enter pickup and delivery details. Our smart engine compares rates across 6+ couriers and recommends the best.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Track & manage",
    description:
      "Monitor all shipments in real-time. Get instant NDR alerts, manage returns, and handle exceptions.",
  },
  {
    icon: IndianRupee,
    step: "04",
    title: "Collect & reconcile",
    description:
      "COD remittances tracked automatically. View settlements, pending amounts, and download reports.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Start shipping in 4 simple steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:text-center mb-5">
                  <div className="relative">
                    <div className="size-[52px] rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-sm relative z-10">
                      <step.icon className="size-6 text-primary" />
                    </div>
                    <span className="absolute -top-1 -right-1 size-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center z-20 shadow-sm">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground lg:mt-5">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed lg:text-center max-w-xs lg:mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
