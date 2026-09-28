import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tentang Kami - POS Kedai',
  description: 'Tentang POS Kedai - Startup SaaS yang berfokus pada pemberdayaan Usaha Kecil Menengah (UKM).',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/*  Floating Nav Header  */}
  

  {/*  About Page  */}
  <section className="about-page">
    <div className="about-container">
      <div className="about-header">
        <h1>Ciptakan ekosistem UMKM yang lebih maju di era digital.</h1>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Tentang POS Kedai</h2>
          <p>POS Kedai adalah Startup SaaS yang berfokus pada pemberdayaan Usaha Kecil Menengah (UKM) dengan menyediakan Point of Sales berbasis mobile yang dirancang untuk menggantikan sistem kasir berbasis desktop untuk mobilitas yang lebih tinggi.</p>
          <p>Kami percaya bahwa teknologi harus mudah diakses dan terjangkau bagi semua. Itulah mengapa kami membangun POS Kedai dengan filosofi simplicity first, power when needed.</p>
        </div>

        <div className="mission-vision">
          <div className="mission-box">
            <h3>Misi</h3>
            <p>Memberdayakan UMKM dengan solusi teknologi yang mudah digunakan, terjangkau, dan berdampak nyata pada bisnis mereka.</p>
          </div>
          <div className="vision-box">
            <h3>Visi</h3>
            <p>Menjadi platform POS terpercaya dan pilihan utama bagi ribuan UMKM di seluruh Indonesia.</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Mengapa POS Kedai?</h2>
          <p>UMKM adalah tulang punggung ekonomi Indonesia. Namun, banyak di antaranya masih menggunakan sistem pencatatan manual atau software desktop yang tidak mobile-friendly. POS Kedai hadir untuk mengubah itu.</p>
          <p>Dengan teknologi cloud-based yang modern, kami menawarkan:</p>
        </div>

        <div className="values">
          <h3>Keunggulan Utama</h3>
          <div className="values-grid">
            <div className="value-item">
              <strong>Mobile First</strong>
              <span>Akses dari mana saja, kapan saja dengan smartphone Anda.</span>
            </div>
            <div className="value-item">
              <strong>Terjangkau</strong>
              <span>Paket gratis tersedia, pro mulai dari harga yang kompetitif.</span>
            </div>
            <div className="value-item">
              <strong>Cepat</strong>
              <span>Transaksi tercatat instan, laporan real-time.</span>
            </div>
            <div className="value-item">
              <strong>Aman</strong>
              <span>Data terenkripsi, backup otomatis, compliance legal.</span>
            </div>
            <div className="value-item">
              <strong>Insightful</strong>
              <span>Analytics mendalam untuk keputusan bisnis lebih baik.</span>
            </div>
            <div className="value-item">
              <strong>Support</strong>
              <span>Tim siap membantu via WhatsApp dan email.</span>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Komitmen Kami</h2>
          <p>Kami tidak hanya membuat software. Kami membangun partnership dengan setiap toko yang menggunakan POS Kedai. Kesuksesan Anda adalah kesuksesan kami.</p>
          <p>Setiap fitur dirancang berdasarkan feedback langsung dari UMKM. Setiap update membawa nilai tambah. Dan kami terus berinovasi untuk memberikan solusi terbaik di kelasnya.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Footer  */}
      </main>
      <Footer />
    </>
  )
}
