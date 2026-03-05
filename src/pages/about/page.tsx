import { motion } from "motion/react";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd.tsx";
import {
  Target,
  Eye,
  Heart,
  Users,
  MapPin,
  Package,
  TrendingUp,
  Clock,
  Award,
  Handshake,
  Lightbulb,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Link } from "react-router-dom";

const TIMELINE = [
  {
    year: "2021",
    title: "The Idea",
    description:
      "Founded with a simple mission: make multi-courier shipping accessible to every Indian business, no matter the size.",
  },
  {
    year: "2022",
    title: "First 1,000 Sellers",
    description:
      "Launched with Delhivery and DTDC integrations. Onboarded our first 1,000 sellers within 6 months.",
  },
  {
    year: "2023",
    title: "Agent Network",
    description:
      "Launched the Agent Partner program, empowering on-ground entrepreneurs to earn through logistics services.",
  },
  {
    year: "2024",
    title: "6 Courier Partners",
    description:
      "Expanded to 6 major courier integrations, covering 29,000+ pincodes across India with 12,000+ active agents.",
  },
  {
    year: "2025",
    title: "2.5M+ Shipments",
    description:
      "Crossed 2.5 million shipments processed. Launched advanced analytics, bulk shipping, and enterprise solutions.",
  },
];

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We continuously improve our technology to give sellers, agents, and businesses the best logistics tools available.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "Every feature we build starts with a real customer problem. Your feedback directly shapes our product roadmap.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description:
      "No hidden charges, no surprise fees. We believe transparent pricing builds trust and long-term partnerships.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "World-class logistics technology should be available to a one-person shop in a Tier-3 city, not just large enterprises.",
  },
];

const STATS = [
  { icon: Package, value: "2.5M+", label: "Shipments Processed" },
  { icon: MapPin, value: "29,000+", label: "Pincodes Covered" },
  { icon: Users, value: "12,000+", label: "Active Agents" },
  { icon: TrendingUp, value: "99.2%", label: "Delivery Success Rate" },
  { icon: Clock, value: "< 24 hrs", label: "KYC Approval Time" },
  { icon: Award, value: "6+", label: "Courier Partners" },
];

const RELATED_LINKS = [
  { label: "Our Services", href: "/services", description: "Explore our complete logistics solutions including booking, tracking, and COD management." },
  { label: "Logistics for SMEs in India", href: "/logistics-for-sme-india", description: "Affordable, reliable shipping solutions designed specifically for small businesses." },
  { label: "E-commerce Courier Services", href: "/ecommerce-courier-services", description: "Compare and book across 6+ carriers for your online store." },
  { label: "Transparent Pricing", href: "/pricing", description: "Simple pricing with no hidden fees. Start free and scale as you grow." },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About ApnaCourier - India's Most Trusted Logistics Platform"
        description="Learn about ApnaCourier's mission to democratize logistics for Indian businesses. Founded in 2021, we've processed 2.5M+ shipments across 29,000+ pincodes with 12,000+ agents and 6 courier partners."
        keywords="about ApnaCourier, logistics company India, courier aggregator company, Indian logistics startup, shipping platform Noida"
        canonicalPath="/about"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About ApnaCourier
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Building India{"'"}s Most Trusted Logistics Platform
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              ApnaCourier was born from a simple frustration: Indian SMEs and
              e-commerce sellers deserve better logistics. Multiple courier
              accounts, scattered tracking, delayed COD payments, and zero
              visibility. We built one platform to solve it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To democratize logistics technology for every Indian business. We believe world-class shipping tools should be accessible, affordable, and simple for everyone from a solo Etsy seller to a growing D2C brand.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be India's most trusted multi-courier logistics aggregator, empowering 1 million businesses and 50,000 agents by 2028, while delivering unmatched reliability, speed, and value.",
              },
              {
                icon: Heart,
                title: "Our Promise",
                text: "Transparency in pricing, speed in execution, and trust in every transaction. We treat every parcel like it's our own and every partner like they're family. No hidden fees, no surprises.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 p-8 text-center"
              >
                <div className="inline-flex size-14 rounded-2xl bg-primary/10 items-center justify-center mb-5">
                  <item.icon className="size-7 text-primary" />
                </div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Journey
            </h2>
            <p className="mt-4 text-muted-foreground">
              From an idea to India{"'"}s fastest growing logistics platform.
            </p>
          </motion.div>

          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start py-6 border-b border-border/30 last:border-b-0"
              >
                <div className="shrink-0 size-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-background mb-12">
            ApnaCourier in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center bg-background/5 rounded-xl p-5 border border-background/10"
              >
                <stat.icon className="size-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-background">
                  {stat.value}
                </div>
                <div className="text-xs text-background/60 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that drive everything we build.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-bold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources - Internal Linking */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {RELATED_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="group flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold group-hover:text-primary transition-colors">{link.label}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{link.description}</div>
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
            Ready to Join the ApnaCourier Family?
          </h2>
          <p className="mt-4 text-background/60">
            Whether you{"'"}re a seller, agent, or enterprise, we{"'"}re here to
            simplify your logistics.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignInButton
              size="lg"
              className="font-semibold"
              signInText="Start Shipping Today"
              showIcon={false}
            />
            <a href="/contact">
              <Button variant="ghost" size="lg" className="font-semibold text-background/70 hover:text-background hover:bg-background/10">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
