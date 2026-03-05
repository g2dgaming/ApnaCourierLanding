/**
 * Central SEO configuration for ApnaCourier.
 * Update SITE_URL once you connect a custom domain.
 */

export const SEO_CONFIG = {
  siteName: "ApnaCourier",
  siteTagline: "Aapka Apna Courier",
  // Update this to your custom domain when you go live
  siteUrl: "https://apnacourier.in",
  logoUrl: "https://cdn.hercules.app/file_a4G8qaJ90OOh3king07NN5bU",
  defaultTitle: "ApnaCourier - India's #1 Multi-Courier Logistics Platform",
  defaultDescription:
    "India's leading multi-courier logistics aggregator. Compare rates, book shipments, track parcels, and manage COD across Delhivery, DTDC, Blue Dart, XpressBees & more. Built for SMEs and e-commerce sellers.",
  defaultKeywords:
    "courier service India, multi-courier shipping, logistics aggregator, parcel booking, shipment tracking, COD management, Delhivery, DTDC, Blue Dart, XpressBees, Ecom Express, e-commerce shipping, bulk shipping India, courier rate comparison, logistics platform India, ApnaCourier",
  contactEmail: "support@apnacourier.in",
  contactPhone: "+919876543210",
  address: {
    street: "Tower B, 5th Floor, Sector 62",
    city: "Noida",
    state: "Uttar Pradesh",
    postalCode: "201301",
    country: "IN",
  },
  socialLinks: {
    twitter: "https://twitter.com/apnacourier",
    linkedin: "https://linkedin.com/company/apnacourier",
  },
} as const;

/** All crawlable pages for sitemap and canonical URLs */
export const SITE_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/courier-aggregator-india", priority: "0.9", changefreq: "monthly" },
  { path: "/ecommerce-shipping-solutions", priority: "0.9", changefreq: "monthly" },
  { path: "/bulk-shipping-platform", priority: "0.8", changefreq: "monthly" },
  { path: "/cod-management-system", priority: "0.8", changefreq: "monthly" },
  { path: "/delhivery-integration", priority: "0.8", changefreq: "monthly" },
  { path: "/logistics-for-sme-india", priority: "0.8", changefreq: "monthly" },
  { path: "/ecommerce-courier-services", priority: "0.8", changefreq: "monthly" },
  { path: "/shopify-shipping-india", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
] as const;
