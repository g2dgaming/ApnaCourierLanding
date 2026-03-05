import SEOHead from "@/components/seo/SEOHead.tsx";
import { BreadcrumbJsonLd, FaqPageJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd.tsx";
import { FAQ_ITEMS } from "@/lib/faq-data.ts";
import HeroSection from "./landing/_components/HeroSection.tsx";
import TrustBadgesSection from "./landing/_components/TrustBadgesSection.tsx";
import PartnersSection from "./landing/_components/PartnersSection.tsx";
import FeaturesSection from "./landing/_components/FeaturesSection.tsx";
import HowItWorksSection from "./landing/_components/HowItWorksSection.tsx";
import TestimonialsSection from "./landing/_components/TestimonialsSection.tsx";
import CtaSection from "./landing/_components/CtaSection.tsx";

export default function Index() {
  return (
    <>
      <SEOHead
        canonicalPath="/"
        description="India's leading multi-courier logistics aggregator. Compare rates across Delhivery, DTDC, Blue Dart, XpressBees, Ecom Express & Trackon. Book shipments, track parcels, manage COD from one dashboard. Built for Indian SMEs and e-commerce sellers."
        keywords="courier aggregator India, cheapest courier rates, multi-courier booking, e-commerce shipping platform, COD reconciliation, bulk shipping India"
      />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <LocalBusinessJsonLd />
      <FaqPageJsonLd items={FAQ_ITEMS} />

      <HeroSection />
      <TrustBadgesSection />
      <PartnersSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
