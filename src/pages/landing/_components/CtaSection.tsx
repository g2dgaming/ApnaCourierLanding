import { SignInButton } from "@/components/ui/signin.tsx";
import { Button } from "@/components/ui/button.tsx";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-16"
        >
          {/* Geometric decoration */}
          <div className="absolute top-0 right-0 size-[300px] opacity-[0.04]">
            <div className="absolute inset-0 border-[40px] border-current rounded-full" />
            <div className="absolute inset-16 border-[20px] border-current rounded-full" />
          </div>
          <div className="absolute bottom-0 left-0 size-[200px] opacity-[0.04] -translate-x-1/4 translate-y-1/4">
            <div className="absolute inset-0 border-[30px] border-current rounded-full" />
          </div>

          {/* Gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.1]">
              Ready to simplify
              <br />
              <span className="text-primary">your logistics?</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-background/60 max-w-lg mx-auto">
              Join thousands of Indian businesses shipping smarter. Get your
              first 50 shipments at zero platform fee.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <SignInButton
                size="lg"
                className="text-base px-8 py-6 font-semibold shadow-lg shadow-primary/25"
                signInText="Start shipping free"
                showIcon={false}
              />
              <a href="#features">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base px-8 py-6 font-semibold text-background/70 hover:text-background hover:bg-background/10 group"
                >
                  Explore features
                  <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
