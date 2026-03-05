import { Helmet } from "@dr.pogodin/react-helmet";
import { SEO_CONFIG } from "@/lib/seo-config.ts";

// ----- Organization Schema (site-wide) -----
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: SEO_CONFIG.logoUrl,
    description: SEO_CONFIG.defaultDescription,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO_CONFIG.contactPhone,
      email: SEO_CONFIG.contactEmail,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.street,
      addressLocality: SEO_CONFIG.address.city,
      addressRegion: SEO_CONFIG.address.state,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    sameAs: Object.values(SEO_CONFIG.socialLinks),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ----- WebSite Schema (for sitelinks search box) -----
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
      logo: {
        "@type": "ImageObject",
        url: SEO_CONFIG.logoUrl,
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ----- LocalBusiness Schema -----
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    image: SEO_CONFIG.logoUrl,
    telephone: SEO_CONFIG.contactPhone,
    email: SEO_CONFIG.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.street,
      addressLocality: SEO_CONFIG.address.city,
      addressRegion: SEO_CONFIG.address.state,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₹25-₹78 per shipment",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ----- FAQ Page Schema -----
type FaqItem = { question: string; answer: string };

export function FaqPageJsonLd({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ----- Service Schema -----
type ServiceItem = { title: string; description: string };

export function ServicesJsonLd({ services }: { services: ServiceItem[] }) {
  const schema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }));

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ----- Breadcrumb Schema -----
type BreadcrumbItem = { name: string; path: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
