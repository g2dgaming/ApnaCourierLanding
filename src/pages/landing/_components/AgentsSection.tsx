import { SignInButton } from "@/components/ui/signin.tsx";
import { motion } from "motion/react";
import {
  Wallet,
  BarChart3,
  Clock,
  Headphones,
} from "lucide-react";

const AGENT_BENEFITS = [
  {
    icon: Wallet,
    title: "Earn Commissions",
    description:
      "Earn on every shipment booked through your account. The more you ship, the more you earn.",
  },
  {
    icon: BarChart3,
    title: "Track Your Earnings",
    description:
      "Real-time commission tracking with detailed breakdown by courier, shipment type, and period.",
  },
  {
    icon: Clock,
    title: "Simple Booking",
    description:
      "A streamlined booking interface designed for speed. Book shipments in under 60 seconds.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Priority support with a dedicated agent success manager to help you grow your business.",
  },
];

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              For Agents
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Turn your network into
              <br />
              <span className="text-muted-foreground">logistics revenue.</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
              Join 12,000+ agents across India who are earning commissions by
              booking shipments for local businesses. No inventory, no
              investment, just your network.
            </p>

            <div className="mt-8">
              <SignInButton
                size="lg"
                className="font-semibold"
                signInText="Become an Agent"
                showIcon={false}
              />
            </div>
          </motion.div>

          {/* Right: Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AGENT_BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <benefit.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
