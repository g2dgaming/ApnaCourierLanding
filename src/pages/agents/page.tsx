import { motion } from "motion/react";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd.tsx";
import {
  Wallet,
  BarChart3,
  Clock,
  Headphones,
  CheckCircle,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Link } from "react-router-dom";

const BENEFITS = [
  {
    icon: Wallet,
    title: "Earn Commissions",
    description:
      "Earn on every shipment booked through your account. The more you ship, the more you earn. No cap on commissions.",
  },
  {
    icon: BarChart3,
    title: "Track Your Earnings",
    description:
      "Real-time commission tracking with detailed breakdown by courier, shipment type, and period. Full transparency.",
  },
  {
    icon: Clock,
    title: "60-Second Booking",
    description:
      "A streamlined booking interface designed for speed. Book shipments in under 60 seconds with auto-filled fields.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Priority support with a dedicated agent success manager to help you grow your business and resolve issues fast.",
  },
  {
    icon: Users,
    title: "Growing Network",
    description:
      "Join a community of 12,000+ agents across India. Share tips, learn from peers, and grow together.",
  },
  {
    icon: TrendingUp,
    title: "Training & Onboarding",
    description:
      "Comprehensive training materials and video guides to get you started quickly. No logistics experience needed.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Sign Up",
    description: "Create your agent account in 2 minutes. No fees, no paperwork upfront.",
  },
  {
    step: "02",
    title: "Complete KYC",
    description: "Quick identity verification. Get approved within 24 hours.",
  },
  {
    step: "03",
    title: "Start Booking",
    description: "Help local businesses ship. Book orders from your dashboard.",
  },
  {
    step: "04",
    title: "Earn & Grow",
    description: "Earn commissions on every shipment. Weekly payouts guaranteed.",
  },
];

const AGENT_STATS = [
  { value: "12,000+", label: "Active Agents" },
  { value: "500+", label: "Cities Covered" },
  { value: "Weekly", label: "Payouts" },
  { value: "₹0", label: "Investment Needed" },
];

export default function AgentsPage() {
  return (
    <>
      <SEOHead
        title="Become an Agent - ApnaCourier Partner Program"
        description="Join 12,000+ logistics agents earning commissions by helping local businesses ship across India. Zero investment, weekly payouts, dedicated support. Start your logistics business with ApnaCourier."
        keywords="ApnaCourier agent, courier agent India, logistics franchise, earn from shipping, courier partner program, delivery agent"
        canonicalPath="/agents"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Become an Agent", path: "/agents" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <MapPin className="size-3.5" /> Agent Partner Program
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                Turn your local
                <br />
                <span className="text-primary">network into revenue.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Join 12,000+ agents across India who earn commissions by helping
                local businesses ship through ApnaCourier. No inventory, no
                investment, just your network.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <SignInButton
                  size="lg"
                  className="text-base px-8 py-6 font-semibold"
                  signInText="Become an Agent"
                  showIcon={false}
                />
                <Link to="/contact">
                  <motion.button className="h-12 px-6 rounded-lg border border-border text-sm font-semibold hover:bg-secondary transition-colors">
                    Talk to Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Agent stats grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {AGENT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-card rounded-2xl border border-border/50 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Agents Love ApnaCourier
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to build a successful logistics business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <benefit.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to become an agent */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Get Started in 4 Steps
            </h2>
          </motion.div>

          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-colors"
              >
                <div className="size-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <CheckCircle className="size-5 text-primary/30 shrink-0 mt-1" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Our Services", href: "/services", desc: "Full range of logistics solutions for sellers and businesses." },
              { label: "About ApnaCourier", href: "/about", desc: "Learn about our mission, values, and journey." },
              { label: "Transparent Pricing", href: "/pricing", desc: "See our shipping rates and plans." },
              { label: "Contact Us", href: "/contact", desc: "Questions? Get in touch with our team." },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="group flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold group-hover:text-primary transition-colors">{link.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{link.desc}</div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-background">
            Start Earning Today
          </h2>
          <p className="mt-4 text-background/60">
            Zero investment. Weekly payouts. Dedicated support. Join 12,000+
            agents already shipping with ApnaCourier.
          </p>
          <div className="mt-8">
            <SignInButton
              size="lg"
              className="font-semibold text-base px-8"
              signInText="Join as Agent"
              showIcon={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
