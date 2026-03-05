import { motion } from "motion/react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Gupta",
    role: "D2C Brand Owner, Mumbai",
    rating: 5,
    text: "We shifted from managing 4 separate courier accounts to just ApnaCourier. Our shipping costs dropped 22% and COD remittance comes 3 days faster.",
  },
  {
    name: "Priya Sharma",
    role: "E-commerce Seller, Delhi NCR",
    text: "Bulk upload changed our life. We process 800+ orders daily and ApnaCourier auto-assigns the cheapest courier for each pincode. RTO dropped from 18% to 9%.",
    rating: 5,
  },
  {
    name: "Mohammed Irfan",
    role: "Agent Partner, Hyderabad",
    text: "I earn consistent commissions by helping local businesses ship through ApnaCourier. The agent dashboard is simple, I get paid on time, and support is always available.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Boutique Owner, Jaipur",
    text: "As a small business, I was overwhelmed by logistics. ApnaCourier made it so simple to compare rates and track parcels. My customers get delivery updates automatically.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Warehouse Manager, Lucknow",
    text: "The label generation and manifest features save us 2 hours every day. Integration was seamless and the analytics help us choose the right courier for each region.",
    rating: 5,
  },
  {
    name: "Sunita Patel",
    role: "Handicrafts Seller, Ahmedabad",
    text: "I started with 10 shipments a month and now I do 500+. ApnaCourier scaled with me without any extra fees. Their pincode checker is a lifesaver for rural deliveries.",
    rating: 5,
  },
];

const ROW_1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
const ROW_2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3)];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[400px] bg-card rounded-2xl border border-border/50 p-6">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="size-3.5 fill-primary text-primary" />
        ))}
        {Array.from({ length: 5 - testimonial.rating }).map((_, j) => (
          <Star
            key={`e-${j}`}
            className="size-3.5 text-muted-foreground/20"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {'"'}
        {testimonial.text}
        {'"'}
      </p>
      <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
        <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Loved by businesses across India
          </h2>
        </motion.div>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-5"
          animate={{ x: [0, "-50%"] }}
          transition={{ x: { duration: 40, repeat: Infinity, ease: "linear" } }}
          style={{ width: "fit-content" }}
        >
          {ROW_1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ x: { duration: 45, repeat: Infinity, ease: "linear" } }}
          style={{ width: "fit-content" }}
        >
          {ROW_2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
