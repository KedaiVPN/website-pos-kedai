import type { Metadata } from 'next'
import './globals.css'
import ClientAnimations from '@/components/ClientAnimations'

export const metadata: Metadata = {
  title: 'POS Kedai - Aplikasi Kasir Digital Modern',
  description: 'Aplikasi kasir pintar untuk toko sembako, warung kelontong, dan UMKM. Catat transaksi cepat, kontrol stok otomatis, dan pantau laba harian.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <ClientAnimations />
      </body>
    </html>
  )
}
