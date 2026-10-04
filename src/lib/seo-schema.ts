// ============================================================
// Shared JSON-LD Schema Utilities for B2B Industrial Websites
// ============================================================

export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductSchemaItem {
  name: string;
  description: string;
  image: string;
  category: string;
  brand: { name: string };
  manufacturer: { name: string };
  offers?: {
    type: "Offer";
    availability: "https://schema.org/InStock";
    itemCondition: "https://schema.org/NewCondition";
  };
}

// Organization Schema
export function buildOrganizationSchema(org: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
    ...(org.logo ? { logo: org.logo } : {}),
    description: org.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: org.telephone,
      contactType: "sales",
      email: org.email,
      availableLanguage: ["English", "Chinese"],
    },
    address: {
      "@type": "PostalAddress",
      ...org.address,
    },
    ...(org.sameAs ? { sameAs: org.sameAs } : {}),
  };
}

// WebSite Schema with SearchAction
export function buildWebSiteSchema(url: string, name: string, searchUrlTemplate: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrlTemplate,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// FAQPage Schema
export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Product Schema
export function buildProductSchema(product: ProductSchemaItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: { "@type": "Brand", name: product.brand.name },
    manufacturer: { "@type": "Organization", name: product.manufacturer.name },
    ...(product.offers
      ? {
          offers: {
            "@type": product.offers.type,
            availability: product.offers.availability,
            itemCondition: product.offers.itemCondition,
          },
        }
      : {}),
  };
}

// BreadcrumbList Schema
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper: render JSON-LD script tag as string for dangerouslySetInnerHTML
export function renderJSONLD(schema: Record<string, unknown>) {
  return JSON.stringify(schema, null, 2);
}
