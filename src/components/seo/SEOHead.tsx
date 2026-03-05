import { Helmet } from "@dr.pogodin/react-helmet";
import { SEO_CONFIG } from "@/lib/seo-config.ts";

type SEOHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  children?: React.ReactNode;
};

/**
 * Per-page SEO head component.
 * Dynamically updates title, meta description, keywords,
 * canonical URL, and OpenGraph tags as users navigate.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = "website",
  ogImage,
  noindex = false,
  children,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
  const desc = description ?? SEO_CONFIG.defaultDescription;
  const kw = keywords
    ? `${keywords}, ${SEO_CONFIG.defaultKeywords}`
    : SEO_CONFIG.defaultKeywords;
  const canonical = canonicalPath
    ? `${SEO_CONFIG.siteUrl}${canonicalPath}`
    : undefined;
  const image = ogImage ?? SEO_CONFIG.logoUrl;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      {/* Extra children (JSON-LD, etc.) */}
      {children}
    </Helmet>
  );
}
