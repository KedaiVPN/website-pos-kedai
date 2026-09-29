import type { Metadata } from 'next'
import './globals.css'
import ClientAnimations from '@/components/ClientAnimations'

export const metadata: Metadata = {
  metadataBase: new URL('https://poskedai.com'),
  title: {
    default: 'POS Kedai - Aplikasi Kasir Digital Modern',
    template: '%s | POS Kedai'
  },
  description: 'Aplikasi kasir pintar untuk toko sembako, warung kelontong, dan UMKM. Catat transaksi cepat, kontrol stok otomatis, dan pantau laba harian.',
  keywords: ['aplikasi kasir', 'POS Android', 'kasir UMKM', 'aplikasi toko sembako', 'kasir digital', 'aplikasi warung', 'kasir offline', 'manajemen stok', 'laporan penjualan', 'kasir gratis'],
  authors: [{ name: 'POS Kedai' }],
  creator: 'POS Kedai',
  publisher: 'POS Kedai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://poskedai.com',
    siteName: 'POS Kedai',
    title: 'POS Kedai - Aplikasi Kasir Digital Modern untuk UMKM',
    description: 'Aplikasi kasir pintar berbasis Android untuk toko sembako, warung kelontong, dan UMKM. Mode offline, notifikasi stok otomatis, laporan laba bersih real-time.',
    images: [
      {
        url: '/img/app-dashboard.webp',
        width: 460,
        height: 994,
        alt: 'POS Kedai Dashboard - Aplikasi Kasir UMKM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POS Kedai - Aplikasi Kasir Digital Modern untuk UMKM',
    description: 'Aplikasi kasir pintar berbasis Android untuk toko sembako dan warung. Mode offline, notifikasi stok, laporan laba bersih otomatis.',
    images: ['/img/app-dashboard.webp'],
  },
  alternates: {
    canonical: 'https://poskedai.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema.org JSON-LD for SoftwareApplication and Organization
  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'POS Kedai',
    url: 'https://poskedai.com',
    logo: 'https://poskedai.com/img/logo.webp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-859-5176-3638',
      contactType: 'Customer Support',
      email: 'kontak@poskedai.com',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
    sameAs: [],
  }

  const schemaSoftwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'POS Kedai',
    operatingSystem: 'Android',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '10',
    },
    description: 'Aplikasi Point of Sales (kasir digital) berbasis Android untuk UMKM seperti toko sembako, warung kelontong, minimarket. Fitur offline-first, notifikasi stok otomatis, laporan laba bersih real-time, multi kasir dengan rekap shift harian.',
  }

  return (
    <html lang="id">
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js-active")' }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSoftwareApplication) }}
        />
      </head>
      <body>
        {children}
        <ClientAnimations />
      </body>
    </html>
  )
}
