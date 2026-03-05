import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd.tsx";
import { motion } from "motion/react";
import { Search, Package, Truck, MapPin, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Demo tracking data for visual showcase
const DEMO_TRACKING = {
  awb: "APNA2847193056",
  courier: "Delhivery",
  status: "In Transit",
  origin: "Mumbai, Maharashtra",
  destination: "Delhi, NCR",
  weight: "0.5 kg",
  estimatedDelivery: "Feb 28, 2026",
  timeline: [
    {
      status: "Order Placed",
      location: "Mumbai, Maharashtra",
      time: "Feb 25, 2026 · 10:15 AM",
      completed: true,
      icon: Package,
    },
    {
      status: "Picked Up",
      location: "Mumbai Hub, Andheri East",
      time: "Feb 25, 2026 · 3:42 PM",
      completed: true,
      icon: CheckCircle,
    },
    {
      status: "In Transit",
      location: "Nagpur Sorting Centre",
      time: "Feb 26, 2026 · 11:20 AM",
      completed: true,
      icon: Truck,
    },
    {
      status: "In Transit",
      location: "Jaipur Hub",
      time: "Feb 27, 2026 · 6:05 AM",
      completed: true,
      icon: Truck,
    },
    {
      status: "Out for Delivery",
      location: "Delhi, Connaught Place",
      time: "Expected: Feb 28, 2026",
      completed: false,
      icon: MapPin,
    },
    {
      status: "Delivered",
      location: "Delhi, NCR",
      time: "Pending",
      completed: false,
      icon: CheckCircle,
    },
  ],
};

export default function TrackPage() {
  const [searchParams] = useSearchParams();
  const initialAwb = searchParams.get("awb") || "";
  const [awb, setAwb] = useState(initialAwb);
  const [showDemo, setShowDemo] = useState(initialAwb.length > 0);

  const handleTrack = () => {
    setShowDemo(true);
  };

  return (
    <>
      <SEOHead
        title="Track Your Shipment - ApnaCourier"
        description="Track your shipment in real-time across Delhivery, DTDC, Blue Dart, XpressBees, Ecom Express, and Trackon. Enter your AWB number for instant updates on your parcel's journey."
        keywords="track shipment India, courier tracking, AWB tracking, parcel tracking, Delhivery tracking, DTDC tracking"
        canonicalPath="/track"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Track Shipment", path: "/track" },
        ]}
      />

      {/* Hero with search */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex size-16 rounded-2xl bg-primary/10 items-center justify-center mb-6">
              <Search className="size-7 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Track Your Shipment
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Enter your AWB number to get real-time tracking updates across all
              courier partners.
            </p>
          </motion.div>

          {/* Search input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter AWB / Tracking Number"
                value={awb}
                onChange={(e) => setAwb(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                className="w-full h-14 pl-11 pr-4 rounded-xl border border-border bg-card text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
              />
            </div>
            <Button
              onClick={handleTrack}
              className="h-14 px-8 rounded-xl font-semibold text-base shrink-0"
            >
              Track
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-xs text-muted-foreground/60"
          >
            Try any AWB number to see a demo of our tracking experience
          </motion.p>
        </div>
      </section>

      {/* Demo tracking result */}
      {showDemo && (
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Shipment overview card */}
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden mb-6">
                <div className="p-6 border-b border-border/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          AWB Number
                        </span>
                      </div>
                      <div className="text-xl font-bold font-mono">
                        {awb || DEMO_TRACKING.awb}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-semibold">
                        <Clock className="size-3.5" />
                        {DEMO_TRACKING.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/30">
                  {[
                    { label: "Courier", value: DEMO_TRACKING.courier },
                    { label: "Origin", value: DEMO_TRACKING.origin },
                    { label: "Destination", value: DEMO_TRACKING.destination },
                    { label: "Est. Delivery", value: DEMO_TRACKING.estimatedDelivery },
                  ].map((item) => (
                    <div key={item.label} className="p-4 sm:p-5">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey timeline */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8">
                <h2 className="text-lg font-bold mb-8">Shipment Journey</h2>

                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

                  <div className="space-y-0">
                    {DEMO_TRACKING.timeline.map((event, i) => (
                      <motion.div
                        key={`${event.status}-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.12 }}
                        className="relative flex items-start gap-5 pb-8 last:pb-0"
                      >
                        {/* Timeline node */}
                        <div
                          className={`relative z-10 size-10 shrink-0 rounded-full flex items-center justify-center transition-all ${
                            event.completed
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground border-2 border-border"
                          }`}
                        >
                          <event.icon className="size-4" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pt-1.5">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h3
                              className={`text-sm font-bold ${
                                event.completed ? "text-foreground" : "text-muted-foreground"
                              }`}
                            >
                              {event.status}
                            </h3>
                            <span className="text-xs text-muted-foreground font-mono">
                              {event.time}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {event.location}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info banner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6 text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <p className="text-sm text-muted-foreground">
                  This is a demo of the ApnaCourier tracking experience.{" "}
                  <a href="/" className="text-primary font-semibold hover:underline">
                    Sign up
                  </a>{" "}
                  to track your real shipments across 6+ courier partners.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
