import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import {
  ORG_DESCRIPTION,
  ORG_EMAIL,
  ORG_FACEBOOK,
  ORG_INSTAGRAM,
  ORG_LINKEDIN,
  ORG_NAME,
  SITE_HOME_TITLE,
  SITE_PAGE_TITLE_SUFFIX,
  SITE_URL,
} from '@/lib/constants'
import './globals.css'

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const heading = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
})

const OG_IMAGE =
  'https://fckzyvkbthqvmmjpvfxr.supabase.co/storage/v1/object/public/website_files/PSA-1.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_HOME_TITLE,
    template: `%s | ${SITE_PAGE_TITLE_SUFFIX}`,
  },
  description: ORG_DESCRIPTION,
  keywords: [
    'Gayduo Sports Association',
    'GSA Liberia',
    'sport for development Liberia',
    'youth development Monrovia',
    'social enterprise sport Africa',
    'Ashfall United',
    'football Liberia',
    'youth empowerment Liberia',
    'sport social change West Africa',
    'community development sport',
  ],
  authors: [{ name: ORG_NAME, url: SITE_URL }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: ORG_NAME,
    title: SITE_HOME_TITLE,
    description: ORG_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${ORG_NAME} — Sport for Social Change in Liberia`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_HOME_TITLE,
    description: ORG_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${ORG_NAME} — Sport for Social Change in Liberia`,
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORG_NAME,
  alternateName: 'GSA',
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.png`,
  description: ORG_DESCRIPTION,
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monrovia',
    addressCountry: 'LR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: ORG_EMAIL,
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [ORG_INSTAGRAM, ORG_FACEBOOK, ORG_LINKEDIN],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
