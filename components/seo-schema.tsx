import Script from "next/script"

interface OrganizationSchemaProps {
  name?: string
  description?: string
  url?: string
  logo?: string
  contactEmail?: string
  contactPhone?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  sameAs?: string[]
}

interface ProductSchemaProps {
  name: string
  description: string
  category: string
  operatingSystem?: string[]
  applicationCategory?: string
  offers?: {
    price: string
    priceCurrency: string
    description?: string
    priceValidUntil?: string
  }
  aggregateRating?: {
    ratingValue: string
    ratingCount: string
    bestRating?: string
    worstRating?: string
  }
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function OrganizationSchema({
  name = "PulseLog",
  description = "Privacy-first employee productivity analytics platform",
  url = "https://pulselog.com",
  logo = "https://pulselog.com/logo.png",
  contactEmail = "sales@pulselog.com",
  contactPhone = "+1-555-PULSE-LOG",
  address = {
    streetAddress: "123 Innovation Drive",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  sameAs = ["https://linkedin.com/company/pulselog", "https://twitter.com/pulselog"],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    description: description,
    url: url,
    logo: logo,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contactPhone,
        contactType: "sales",
        email: contactEmail,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "support@pulselog.com",
        contactType: "customer service",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    sameAs: sameAs,
    foundingDate: "2023",
    numberOfEmployees: "11-50",
    industry: "Software Development",
    knowsAbout: [
      "Employee Productivity Analytics",
      "Privacy-First Software",
      "Workplace Monitoring",
      "GDPR Compliance",
      "Data Privacy",
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema({
  name,
  description,
  category,
  operatingSystem = ["Windows", "macOS", "Linux"],
  applicationCategory = "BusinessApplication",
  offers,
  aggregateRating,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    applicationCategory: applicationCategory,
    operatingSystem: operatingSystem.join(", "),
    softwareVersion: "2.1.4",
    releaseNotes: "https://pulselog.com/changelog",
    screenshot: "https://pulselog.com/screenshots/dashboard.png",
    // HIDDEN: Download URLs temporarily disabled
    // downloadUrl: "https://pulselog.com/download",
    // installUrl: "https://pulselog.com/download",
    storageRequirements: "500MB",
    memoryRequirements: "2GB RAM",
    processorRequirements: "x86_64 or ARM64",
    permissions: "System monitoring, file access",
    category: category,
    author: {
      "@type": "Organization",
      name: "PulseLog",
      url: "https://pulselog.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PulseLog",
      url: "https://pulselog.com",
    },
    ...(offers && {
      offers: {
        "@type": "Offer",
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        description: offers.description,
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
        ...(offers.priceValidUntil && { priceValidUntil: offers.priceValidUntil }),
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        ratingCount: aggregateRating.ratingCount,
        bestRating: aggregateRating.bestRating || "5",
        worstRating: aggregateRating.worstRating || "1",
      },
    }),
  }

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
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
  }

  return (
    <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PulseLog",
    description: "Privacy-first employee productivity analytics platform",
    url: "https://pulselog.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://pulselog.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "PulseLog",
      url: "https://pulselog.com",
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
