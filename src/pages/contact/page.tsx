import { motion } from "motion/react";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd.tsx";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@apnacourier.in",
    subDetail: "For general queries and support",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    subDetail: "Mon-Sat, 9 AM - 8 PM IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Sector 62, Noida",
    subDetail: "Uttar Pradesh 201301, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Sat: 9 AM - 8 PM",
    subDetail: "Sunday: 10 AM - 4 PM (Support only)",
  },
];

const SUPPORT_CHANNELS = [
  {
    icon: Headphones,
    title: "Seller Support",
    description:
      "Dedicated support for sellers with order, tracking, COD, or account queries. Average response time under 2 hours.",
  },
  {
    icon: MessageCircle,
    title: "Agent Support",
    description:
      "Priority support for agent partners with commission, booking, or onboarding questions. Dedicated agent success manager.",
  },
  {
    icon: Mail,
    title: "Enterprise / Sales",
    description:
      "Looking for custom rates or enterprise features? Our sales team will create a tailored solution for your volume.",
  },
];

const RELATED_LINKS = [
  { label: "Our Services", href: "/services", description: "Explore multi-courier booking, tracking, COD management, and more." },
  { label: "Transparent Pricing", href: "/pricing", description: "Simple pricing with no hidden fees. Start free and scale as you grow." },
  { label: "About ApnaCourier", href: "/about", description: "Learn about our mission, team, and journey in Indian logistics." },
  { label: "Shopify Shipping India", href: "/shopify-shipping-india", description: "Multi-courier shipping integration for your Shopify store." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description:
        "Thank you for reaching out. Our team will get back to you within 24 hours.",
    });
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Get Help with Shipping & Logistics"
        description="Contact ApnaCourier for seller support, agent onboarding, enterprise solutions, or general queries. Located in Sector 62, Noida. Email: support@apnacourier.in. Phone: +91 98765 43210. Average response time under 2 hours."
        keywords="contact ApnaCourier, courier support India, logistics help, shipping support, agent onboarding, enterprise logistics contact"
        canonicalPath="/contact"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]}
      />
      <LocalBusinessJsonLd />

      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              We{"'"}re Here to Help You Ship Better
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question about ApnaCourier? Need help with your account?
              Want to explore enterprise solutions? Reach out and we{"'"}ll get
              back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border/50 p-6 text-center"
              >
                <div className="inline-flex size-12 rounded-xl bg-primary/10 items-center justify-center mb-3">
                  <item.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <div className="text-base font-semibold text-foreground mt-1">
                  {item.detail}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {item.subDetail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + Support channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Rahul Verma"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rahul@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Regarding bulk shipping rates"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="font-semibold">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Support channels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-5"
            >
              <h2 className="text-2xl font-bold mb-6">Support Channels</h2>
              {SUPPORT_CHANNELS.map((channel) => (
                <div
                  key={channel.title}
                  className="bg-card rounded-2xl border border-border/50 p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <channel.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-bold">{channel.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              ))}

              {/* Office location */}
              <div className="bg-foreground rounded-2xl p-6 text-background">
                <h3 className="font-bold mb-2">Head Office</h3>
                <p className="text-sm text-background/60 leading-relaxed">
                  ApnaCourier Technologies Pvt. Ltd.
                  <br />
                  Tower B, 5th Floor
                  <br />
                  Sector 62, Noida
                  <br />
                  Uttar Pradesh 201301, India
                </p>
              </div>
            </motion.div>
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
    </>
  );
}
