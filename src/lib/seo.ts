import type { Metadata } from 'next'

export const SEO_KEYWORDS = {
  donate: 'donate, charity, fundraising, Liberia, football, youth development',
  default: 'Ashfall United, sports, youth development, Liberia',
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  openGraphTitle,
}: {
  title: string
  description: string
  path: string
  keywords: string
  image?: { url: string; alt: string }
  openGraphTitle?: string
}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ashfallunited.com'

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: openGraphTitle || title,
      description,
      type: 'website',
      url: `${siteUrl}${path}`,
      images: image ? [{ url: image.url, alt: image.alt }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle || title,
      description,
      images: image ? [image.url] : [],
    },
  }
}
