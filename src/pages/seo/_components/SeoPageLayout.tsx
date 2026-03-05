import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils.ts";
import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";

type ContentSection = {
  heading: string;
  content: string[];
  bullets?: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

export type SeoPageData = {
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonicalPath: string;
  };
  breadcrumbName: string;
  hero: {
    label: string;
    heading: string;
    description: string;
  };
  sections: ContentSection[];
  faqs: FaqItem[];
  relatedLinks: RelatedLink[];
};

export default function SeoPageLayout({ data }: { data: SeoPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        canonicalPath={data.seo.canonicalPath}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: data.breadcrumbName, path: data.seo.canonicalPath },
        ]}
      />
      <FaqPageJsonLd items={data.faqs} />

      {/* Breadcrumb navigation */}
      <div className="pt-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">
              {data.breadcrumbName}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              {data.hero.label}
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              {data.hero.heading}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {data.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article content sections */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {data.sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.map((p, j) => (
                  <p
                    key={j}
                    className="text-muted-foreground leading-relaxed text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-muted-foreground text-[15px]"
                    >
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>
      </article>

      {/* FAQ section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="text-sm font-semibold pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      openFaq === i && "rotate-180",
                    )}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.relatedLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {link.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {link.description}
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Start Shipping Smarter Today
          </h2>
          <p className="mt-4 text-background/60 leading-relaxed">
            Join thousands of Indian businesses using ApnaCourier to save time
            and money on logistics.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignInButton
              size="lg"
              className="font-semibold"
              signInText="Get Started Free"
              showIcon={false}
            />
            <Link to="/pricing">
              <span className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-lg border border-background/20 text-background/80 hover:text-background hover:border-background/40 transition-colors">
                View Pricing
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
