import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils.ts";
import { FAQ_ITEMS } from "@/lib/faq-data.ts";

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="border-b border-border/50 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <h3 className="text-base font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={cn(
            "size-5 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about shipping with ApnaCourier.
          </p>
        </motion.div>

        <div className="bg-card rounded-2xl border border-border/50 px-6 sm:px-8">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
