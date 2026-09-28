import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'POS Kedai - Aplikasi Kasir Digital Modern',
  description: 'Aplikasi kasir pintar untuk toko sembako, warung kelontong, dan UMKM. Catat transaksi cepat, kelola stok akurat, dan pantau laporan penjualan dari HP Android.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/*  Floating Nav Header  */}
  

  {/*  Hero Section  */}
  <section className="hero">
    <div className="container hero-container">
      <h1 className="hero-title">
        <span className="rotating-words">
          <span className="word" style={{'color': '#ff5400'}}>Pantau transaksi</span>
          <span className="word">Pantau stok</span>
          <span className="word">Pantau laba bersih</span>
          <span className="word">Pantau laba kotor</span>
        </span><br />
        Bersama POS Kedai
      </h1>

      <p className="hero-subtitle">
        Tinggalkan kalkulator dan buku catatan. POS Kedai membantu mencatat transaksi kilat, pantau stok secara real-time, dan cek keuntungan toko dari genggaman.
      </p>

      <div className="hero-actions">
        <a href="#daftar" className="btn btn-download-dark google-play-badge-link">
          <img src="img/google-play-badge.jpg" alt="Get it on Google Play" className="google-play-badge-img" />
        </a>
      </div>

      {/*  Fanned Device Mockups Row  */}
      <div className="hero-showcase">
        <div className="mockup-fanned">
          {/*  Screen 1: Dashboard Ringkasan  */}
          <div className="android-phone frame-side frame-left-2">
            <div className="android-screen">
              <img src="img/app-statistik.jpg" alt="Statistik Penjualan" />
            </div>
          </div>
          <div className="android-phone frame-side frame-left-1">
            <div className="android-screen">
              <img src="img/app-laporan-shift.jpg" alt="Laporan Transaksi Riwayat Shift" />
            </div>
          </div>
          <div className="android-phone frame-center">
            <div className="android-screen">
              <img src="img/app-dashboard.jpg" alt="Dashboard Toko Sembako" />
            </div>
          </div>
          <div className="android-phone frame-side frame-right-1">
            <div className="android-screen">
              <img src="img/app-pembayaran.jpg" alt="Daftar Pesanan Pembayaran Kasir" />
            </div>
          </div>
          <div className="android-phone frame-side frame-right-2">
            <div className="android-screen">
              <img src="img/app-notifikasi-stok.jpg" alt="Peringatan Stok Menipis" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Feature Cards (2x2 Grid ala Foodnoms)  */}
  <section id="fitur" className="features-section">
    <div className="container">
      
      <div className="feature-grid">
        
        {/*  Card 1: Transaksi Kilat  */}
        <div className="feature-card">
          <div className="card-content">
            <span className="card-pill pill-blue">Transaksi</span>
            <h2 className="card-title">Hitung Cepat Tanpa Salah Kembalian</h2>
            <p className="card-desc">
              Tinggalkan kalkulator. Masukkan pesanan, sistem otomatis menghitung total dan kembalian hanya dalam 3 detik.
            </p>
          </div>
          <div className="card-mockup">
            <div className="card-phone-wrapper android-phone">
              <div className="android-screen">
                <img src="img/app-pembayaran.jpg" alt="Daftar Pesanan dan Hitung Kembalian Pembayaran" />
              </div>
            </div>
          </div>
        </div>

        {/*  Card 2: Laporan Keuangan  */}
        <div className="feature-card">
          <div className="card-content">
            <span className="card-pill pill-orange">Laporan Laba</span>
            <h2 className="card-title">Tahu Keuntungan Bersih Tiap Sore</h2>
            <p className="card-desc">
              Cek omset dan laba bersih langsung dari HP. Lihat produk terlaris tanpa perlu rekap buku nota.
            </p>
          </div>
          <div className="card-mockup">
            <div className="card-phone-wrapper android-phone">
              <div className="android-screen">
                <img src="img/app-statistik.jpg" alt="Statistik Grafik Penjualan" />
              </div>
            </div>
          </div>
        </div>

        {/*  Card 3: Kontrol Stok  */}
        <div className="feature-card">
          <div className="card-content">
            <span className="card-pill pill-green">Peringatan Stok</span>
            <h2 className="card-title">Stok Menipis Langsung Diingatkan</h2>
            <p className="card-desc">
              Dapatkan notifikasi otomatis saat produk mendekati batas minimum. Belanja kulakan selalu tepat waktu tanpa bikin pelanggan kecewa.
            </p>
          </div>
          <div className="card-mockup">
            <div className="card-phone-wrapper android-phone">
              <div className="android-screen">
                <img src="img/app-notifikasi-stok.jpg" alt="Peringatan Stok Menipis POS Kedai" />
              </div>
            </div>
          </div>
        </div>

        {/*  Card 4: Multi Kasir & Shift  */}
        <div className="feature-card">
          <div className="card-content">
            <span className="card-pill pill-iris">Multi Kasir</span>
            <h2 className="card-title">Pantau Shift & Rekap Kas Tiap Kasir</h2>
            <p className="card-desc">
              Punya kasir jaga bergantian? Unduh laporan shift harian dalam bentuk PDF untuk audit yang transparan dan bebas selisih.
            </p>
          </div>
          <div className="card-mockup">
            <div className="card-phone-wrapper android-phone">
              <div className="android-screen">
                <img src="img/app-laporan-shift.jpg" alt="Laporan Transaksi Riwayat Shift" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/*  3-Pillar Value Props (Clean, Airy Icons)  */}
  <section id="keunggulan" className="pillars-section">
    <div className="container">
      <div className="pillars-grid">
        
        <div className="pillar-item" data-reveal data-reveal-delay="0">
          <div className="pillar-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 className="pillar-title">100% Data Aman di Cloud</h3>
          <p className="pillar-desc">Ganti HP? Jangan hawatir. Seluruh data produk dan penjualan aman tersimpan di dalam cloud.</p>
        </div>

        <div className="pillar-item" data-reveal data-reveal-delay="100">
          <div className="pillar-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 className="pillar-title">Bisa Mode Offline</h3>
          <p className="pillar-desc">Sinyal internet sedang lemot di warung? Transaksi tetap berjalan normal dan akan tersinkronisasi otomatis saat online.</p>
        </div>

        <div className="pillar-item" data-reveal data-reveal-delay="200">
          <div className="pillar-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3 className="pillar-title">Sangat Ringan di Android</h3>
          <p className="pillar-desc">Dibuat khusus untuk device spesifikasi standar. Tidak lemot, hemat baterai, dan ukuran aplikasi sangat kecil.</p>
        </div>

      </div>
    </div>
  </section>

  {/*  Testimonials Section  */}
  <section id="testimoni" className="testimonials-section">
    <div className="container">
      <div className="section-heading text-center" data-reveal>
        <span className="badge-pill">Kisah Nyata Mitra</span>
        <h2 className="section-title">Dipercaya Pemilik Toko & Warung</h2>
        <p className="section-sub">Mereka yang sudah meninggalkan rekap manual dan omsetnya bertumbuh rapi.</p>
      </div>

      {/*  Row 1: Left to Right Marquee  */}
      <div className="testimonials-marquee">
        <div className="marquee-track" data-direction="ltr">
          <div className="testi-card" data-reveal data-reveal-delay="0">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Dulu kalau tutup toko jam 9 malam, baru bisa pulang jam 11 karena ngitungin nota. Sekarang pakai POS Kedai jam 9 malam langsung klik tutup shift, semua beres!"
            </p>
            <div className="testi-author">
              <div className="author-avatar">BS</div>
              <div>
                <h4 className="author-name">Budi Santoso</h4>
                <p className="author-shop">Toko Sembako Berkah, Bekasi</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="100">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Fitur pengingat stoknya juara! Ga ada lagi cerita pembeli mau beli beras pandan wangi tapi stoknya ternyata kosong di gudang."
            </p>
            <div className="testi-author">
              <div className="author-avatar">SR</div>
              <div>
                <h4 className="author-name">Hj. Siti Rahayu</h4>
                <p className="author-shop">Agen Telur & Minyak, Surabaya</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="200">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Karyawan baru lulus SMA langsung bisa pakai tanpa harus ditraining berhari-hari. Aplikasinya simpel banget dan ga bikin pusing."
            </p>
            <div className="testi-author">
              <div className="author-avatar">AH</div>
              <div>
                <h4 className="author-name">Ahmad Hidayat</h4>
                <p className="author-shop">Kedai Kopi & Sembako, Bandung</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="300">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Laporan shift harian otomatis bikin audit bulanan cuma butuh 10 menit. Dulu pake Excel bolak-balik 2 jam."
            </p>
            <div className="testi-author">
              <div className="author-avatar">DW</div>
              <div>
                <h4 className="author-name">Dewi Wulandari</h4>
                <p className="author-shop">Warung Makmur, Solo</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="400">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Stok opname yang dulunya seminggu sekarang cuma 1 jam. Cek HP aja, langsung tau mana yang perlu dibelin."
            </p>
            <div className="testi-author">
              <div className="author-avatar">RP</div>
              <div>
                <h4 className="author-name">Rudi Pratama</h4>
                <p className="author-shop">Toko Roti & Sembako, Yogyakarta</p>
              </div>
            </div>
          </div>

          {/*  Duplicate for seamless loop  */}
          <div className="testi-card" data-reveal data-reveal-delay="0">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Dulu kalau tutup toko jam 9 malam, baru bisa pulang jam 11 karena ngitungin nota. Sekarang pakai POS Kedai jam 9 malam langsung klik tutup shift, semua beres!"
            </p>
            <div className="testi-author">
              <div className="author-avatar">BS</div>
              <div>
                <h4 className="author-name">Budi Santoso</h4>
                <p className="author-shop">Toko Sembako Berkah, Bekasi</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="100">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Fitur pengingat stoknya juara! Ga ada lagi cerita pembeli mau beli beras pandan wangi tapi stoknya ternyata kosong di gudang."
            </p>
            <div className="testi-author">
              <div className="author-avatar">SR</div>
              <div>
                <h4 className="author-name">Hj. Siti Rahayu</h4>
                <p className="author-shop">Agen Telur & Minyak, Surabaya</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="200">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Karyawan baru lulus SMA langsung bisa pakai tanpa harus ditraining berhari-hari. Aplikasinya simpel banget dan ga bikin pusing."
            </p>
            <div className="testi-author">
              <div className="author-avatar">AH</div>
              <div>
                <h4 className="author-name">Ahmad Hidayat</h4>
                <p className="author-shop">Kedai Kopi & Sembako, Bandung</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="300">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Laporan shift harian otomatis bikin audit bulanan cuma butuh 10 menit. Dulu pake Excel bolak-balik 2 jam."
            </p>
            <div className="testi-author">
              <div className="author-avatar">DW</div>
              <div>
                <h4 className="author-name">Dewi Wulandari</h4>
                <p className="author-shop">Warung Makmur, Solo</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="400">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Stok opname yang dulunya seminggu sekarang cuma 1 jam. Cek HP aja, langsung tau mana yang perlu dibelin."
            </p>
            <div className="testi-author">
              <div className="author-avatar">RP</div>
              <div>
                <h4 className="author-name">Rudi Pratama</h4>
                <p className="author-shop">Toko Roti & Sembako, Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Row 2: Right to Left Marquee  */}
      <div className="testimonials-marquee">
        <div className="marquee-track" data-direction="rtl">
          <div className="testi-card" data-reveal data-reveal-delay="0">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Mode offline-nya mantap banget. Sinyal di warung jelek tapi transaksi tetap jalan normal, sinkron ke cloud pas online."
            </p>
            <div className="testi-author">
              <div className="author-avatar">MS</div>
              <div>
                <h4 className="author-name">M. Syahrul</h4>
                <p className="author-shop">Warung Syahrul, Lampung</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="100">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Pakai POS Kedai 6 bulan, omset naik 40% karena bisa tau produk mana yang laku dan mana yang nganggur."
            </p>
            <div className="testi-author">
              <div className="author-avatar">LN</div>
              <div>
                <h4 className="author-name">Lina Novianti</h4>
                <p className="author-shop">Minimarket Lina, Medan</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="200">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Ganti HP cuma install aplikasi, login, data langsung muncul semua. Ga perlu backup manual ribet."
            </p>
            <div className="testi-author">
              <div className="author-avatar">FK</div>
              <div>
                <h4 className="author-name">Fajar Kurniawan</h4>
                <p className="author-shop">Toko Kelontong Fajar, Malang</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="300">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Kasir paruh waktu baru masuk 1 hari langsung lancar. UI-nya intuitif, ga butuh training lama."
            </p>
            <div className="testi-author">
              <div className="author-avatar">AS</div>
              <div>
                <h4 className="author-name">Anisa Putri</h4>
                <p className="author-shop">Kedai Kopi Anisa, Semarang</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="400">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Support WhatsApp responsif banget. Ada kendala chat langsung ditanggapi, ga ngambek minggu-minggu."
            </p>
            <div className="testi-author">
              <div className="author-avatar">HB</div>
              <div>
                <h4 className="author-name">Hendra Budi</h4>
                <p className="author-shop">Agen Pupuk & Sembako, Palembang</p>
              </div>
            </div>
          </div>

          {/*  Duplicate for seamless loop  */}
          <div className="testi-card" data-reveal data-reveal-delay="0">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Mode offline-nya mantap banget. Sinyal di warung jelek tapi transaksi tetap jalan normal, sinkron ke cloud pas online."
            </p>
            <div className="testi-author">
              <div className="author-avatar">MS</div>
              <div>
                <h4 className="author-name">M. Syahrul</h4>
                <p className="author-shop">Warung Syahrul, Lampung</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="100">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Pakai POS Kedai 6 bulan, omset naik 40% karena bisa tau produk mana yang laku dan mana yang nganggur."
            </p>
            <div className="testi-author">
              <div className="author-avatar">LN</div>
              <div>
                <h4 className="author-name">Lina Novianti</h4>
                <p className="author-shop">Minimarket Lina, Medan</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="200">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Ganti HP cuma install aplikasi, login, data langsung muncul semua. Ga perlu backup manual ribet."
            </p>
            <div className="testi-author">
              <div className="author-avatar">FK</div>
              <div>
                <h4 className="author-name">Fajar Kurniawan</h4>
                <p className="author-shop">Toko Kelontong Fajar, Malang</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="300">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Kasir paruh waktu baru masuk 1 hari langsung lancar. UI-nya intuitif, ga butuh training lama."
            </p>
            <div className="testi-author">
              <div className="author-avatar">AS</div>
              <div>
                <h4 className="author-name">Anisa Putri</h4>
                <p className="author-shop">Kedai Kopi Anisa, Semarang</p>
              </div>
            </div>
          </div>

          <div className="testi-card" data-reveal data-reveal-delay="400">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Support WhatsApp responsif banget. Ada kendala chat langsung ditanggapi, ga ngambek minggu-minggu."
            </p>
            <div className="testi-author">
              <div className="author-avatar">HB</div>
              <div>
                <h4 className="author-name">Hendra Budi</h4>
                <p className="author-shop">Agen Pupuk & Sembako, Palembang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  Full-Bleed Orange Footer ala Foodnoms  */}
      </main>
      <Footer />
    </>
  )
}
