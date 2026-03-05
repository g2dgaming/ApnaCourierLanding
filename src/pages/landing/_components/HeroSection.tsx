import { Button } from "@/components/ui/button.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IndiaMapAnimation from "./IndiaMapAnimation.tsx";

const HERO_STATS = [
  { value: 12000, suffix: "+", label: "Active Agents" },
  { value: 6, suffix: "+", label: "Courier Partners" },
  { value: 29000, suffix: "+", label: "Pincodes" },
  { value: 99.2, suffix: "%", label: "Success Rate" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value < 100) return v.toFixed(1);
    return Math.round(v).toLocaleString("en-IN");
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    navigate(`/track${trackingId ? `?awb=${encodeURIComponent(trackingId)}` : ""}`);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 size-[500px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-48 size-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left column: Content */}
          <div>
            {/* Live ticker badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-5 py-2 text-sm">
                <span className="relative flex size-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60" />
                  <span className="relative inline-flex rounded-full size-2.5 bg-primary" />
                </span>
                <span className="text-foreground/80 font-medium">
                  <span className="text-primary font-bold">2,847</span>{" "}
                  shipments booked today
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="block text-foreground">Ship smarter with</span>
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  multi-courier
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/30"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </span>
              <span className="block text-foreground mt-1">logistics power.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              One platform to book, track, and manage shipments across
              Delhivery, DTDC, Blue Dart, XpressBees and more.
            </motion.p>

            {/* Tracking mini-input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex gap-2 max-w-md"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter AWB number to track..."
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
                />
              </div>
              <Button
                onClick={handleTrack}
                className="h-12 px-6 rounded-xl font-semibold shrink-0"
              >
                Track
              </Button>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <SignInButton
                size="lg"
                className="text-base px-8 py-6 font-semibold shadow-lg shadow-primary/20 group"
                signInText="Start shipping now"
                showIcon={false}
              />
              <a href="#how-it-works">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base px-6 py-6 font-semibold group"
                >
                  How it works
                  <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right column: Animated India Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden md:block"
          >
            <IndiaMapAnimation />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 lg:mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/50 to-transparent h-px top-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/50 to-transparent h-px bottom-0" />
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center py-8 px-4">
                <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
