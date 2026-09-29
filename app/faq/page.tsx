import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'

export const metadata: Metadata = {
  title: 'Tanya Jawab (FAQ) - POS Kedai | Solusi Kasir Digital UMKM',
  description: 'Pertanyaan yang sering diajukan seputar aplikasi kasir POS Kedai — fitur offline, stok otomatis, laporan laba, paket Free & Pro, dan printer thermal.',
  alternates: {
    canonical: 'https://poskedai.com/faq',
  },
}

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apa itu POS Kedai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'POS Kedai adalah aplikasi Point of Sales (kasir) berbasis mobile yang dirancang khusus untuk UMKM. Aplikasi ini membantu Anda mencatat transaksi, mengelola stok produk, membuat laporan keuangan, dan mengelola karyawan — semuanya dari smartphone Anda.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah POS Kedai gratis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya! POS Kedai menyediakan paket Free yang bisa digunakan tanpa biaya apapun. Fitur utama seperti transaksi, produk, stok, dan laporan dasar sudah tersedia. Untuk kebutuhan lebih lanjut (multi‑toko, laporan lanjutan, export data, dll), tersedia paket Pro dengan harga terjangkau.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah saya butuh internet untuk menggunakan POS Kedai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tidak. Fitur inti kasir, pencatatan produk, dan perubahan stok bekerja 100% offline. Data disinkronkan otomatis saat ada koneksi internet. Hanya fitur OTP, paket Pro, dan sinkronisasi cloud yang membutuhkan internet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Di sistem operasi apa POS Kedai berjalan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'POS Kedai tersedia di Android (versi 7.0 ke atas). Anda dapat mengunduhnya melalui Google Play Store.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bagaimana cara mendaftar akun POS Kedai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Download aplikasi dari Google Play Store, pilih "Daftar", isi nama lengkap, email, nomor telepon, nama toko, buat kata sandi, verifikasi email melalui kode OTP, selesai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah data toko saya aman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya. Kami menggunakan enkripsi bcrypt untuk kata sandi, komunikasi HTTPS/TLS untuk semua transmisi data, JWT Token untuk autentikasi, dan backup otomatis ke cloud.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bagaimana cara mencatat transaksi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Masuk ke menu "Transaksi" → "Transaksi Baru" → Pilih/tambah produk → Tentukan jumlah → Pilih metode pembayaran (Tunai/QRIS/Transfer) → Simpan. Transaksi langsung tercatat dan stok otomatis berkurang.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah stok otomatis berkurang saat transaksi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, stok berkurang otomatis begitu transaksi disimpan. Anda juga akan mendapat notifikasi jika stok produk mendekati batas minimum.',
        },
      },
      {
        '@type': 'Question',
        name: 'Laporan apa saja yang tersedia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Laporan penjualan (harian/mingguan/bulanan), laporan laba rugi, laporan stok, laporan produk terlaris, laporan shift kasir. Paket Pro menambah ekspor ke Excel/PDF dan filter lanjutan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apa bedanya paket Free dan Pro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free: 1 toko, transaksi unlimited, produk unlimited, laporan dasar, 1 akun kasir. Pro: multi‑toko, laporan lanjutan + ekspor Excel/PDF, kasir unlimited, notifikasi stok lanjutan, dukungan prioritas, API access.',
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* Schema.org FAQPage JSON-LD for AI SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/*  Floating Nav Header  */}


  {/*  FAQ Page  */}
  <section className="faq-page">
    <div className="faq-container">
      <div className="faq-header">
        <h1>Tanya Jawab (FAQ)</h1>
        <p>Cepat menemukan jawaban untuk pertanyaan paling sering diajukan</p>
      </div>

      <div className="faq-content">
        <div className="faq-category">
          <h2 className="faq-category-title">Umum</h2>

          <FaqItem question="Apa itu POS Kedai?">
            <p>POS Kedai adalah aplikasi Point of Sales (kasir) berbasis mobile yang dirancang khusus untuk UMKM. Aplikasi ini membantu Anda mencatat transaksi, mengelola stok produk, membuat laporan keuangan, dan mengelola karyawan — semuanya dari smartphone Anda.</p>
          </FaqItem>

          <FaqItem question="Apakah POS Kedai gratis?">
            <p>Ya! POS Kedai menyediakan paket <strong>Free</strong> yang bisa digunakan tanpa biaya apapun. Fitur utama seperti transaksi, produk, stok, dan laporan dasar sudah tersedia. Untuk kebutuhan lebih lanjut (multi-toko, laporan lanjutan, export data, dll), tersedia paket <strong>Pro</strong> dengan harga terjangkau.</p>
          </FaqItem>

          <FaqItem question="Apakah saya butuh internet untuk menggunakan POS Kedai?">
            <p>Untuk fitur utama (transaksi, produk, stok) — <strong>tidak wajib selalu online</strong>. Data disimpan lokal di perangkat dan akan sinkron otomatis saat terhubung internet. Namun untuk verifikasi OTP, pembayaran paket Pro, dan sinkronisasi data ke cloud, koneksi internet diperlukan.</p>
          </FaqItem>

          <FaqItem question="Di sistem operasi apa POS Kedai berjalan?">
            <p>POS Kedai tersedia di <strong>Android</strong> (versi 7.0 ke atas). Anda bisa mendownloadnya melalui Google Play Store.</p>
          </FaqItem>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Akun & Keamanan</h2>

          <FaqItem question="Bagaimana cara mendaftar akun POS Kedai?">
            <ol>
              <li>Download aplikasi dari Google Play Store</li>
              <li>Buka aplikasi, pilih "Daftar"</li>
              <li>Isi nama lengkap, email, nomor telepon, nama toko</li>
              <li>Buat kata sandi</li>
              <li>Verifikasi email melalui kode OTP yang dikirim</li>
              <li>Selesai! Anda bisa langsung menggunakan aplikasi</li>
            </ol>
          </FaqItem>

          <FaqItem question="Lupa kata sandi, bagaimana?">
            <p>Di halaman login, pilih "Lupa Password". Masukkan email yang terdaftar, lalu kode OTP reset akan dikirim ke email Anda. Ikuti instruksi untuk membuat kata sandi baru.</p>
          </FaqItem>

          <FaqItem question="Apakah data toko saya aman?">
            <p>Ya. Kami menggunakan enkripsi <strong>bcrypt</strong> untuk kata sandi, komunikasi <strong>HTTPS/TLS</strong> untuk semua transmisi data, <strong>JWT Token</strong> untuk autentikasi, dan <strong>rate limiting</strong> untuk mencegah akses tidak sah. Backup data dilakukan otomatis ke cloud.</p>
          </FaqItem>

          <FaqItem question="Bisakah saya menambahkan karyawan/kasir?">
            <p>Bisa! Sebagai <strong>Owner</strong>, Anda bisa menambahkan akun Kasir/Karyawan dengan hak akses terbatas. Owner mengelola seluruh toko, sedangkan Kasir hanya bisa mengakses fitur transaksi. Semua aktivitas karyawan menjadi tanggung jawab Owner.</p>
          </FaqItem>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Transaksi & Fitur</h2>

          <FaqItem question="Bagaimana cara mencatat transaksi?">
            <p>Masuk ke menu "Transaksi" → "Transaksi Baru" → Pilih/tambah produk → Tentukan jumlah → Pilih metode pembayaran (Tunai/QRIS/Transfer) → Simpan. Transaksi langsung tercatat dan stok otomatis berkurang.</p>
          </FaqItem>

          <FaqItem question="Apakah stok otomatis berkurang saat transaksi?">
            <p>Ya, <strong>stok berkurang otomatis</strong> begitu transaksi disimpan. Anda juga akan mendapat notifikasi jika stok produk mendekati batas minimum (bisa diatur per produk).</p>
          </FaqItem>

          <FaqItem question="Bisa saya cetak struk?">
            <p>Ya. POS Kedai mendukung pencetakan struk via Bluetooth ke printer thermal (58mm/80mm). Pastikan printer sudah di-pairing dengan HP Anda.</p>
          </FaqItem>

          <FaqItem question="Apakah ada fitur pembayaran QRIS?">
            <p>Ya, tersedia fitur pembayaran QRIS terintegrasi. Pembayaran via QRIS akan tercatat otomatis di sistem dan laporan keuangan.</p>
          </FaqItem>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Laporan & Data</h2>

          <FaqItem question="Laporan apa saja yang tersedia?">
            <ul>
              <li><strong>Laporan Penjualan</strong> (harian/mingguan/bulanan/custom range)</li>
              <li><strong>Laporan Laba Rugi</strong> (laba kotor & bersih per periode)</li>
              <li><strong>Laporan Stok</strong> (produk habis, stok minimum, nilai stok)</li>
              <li><strong>Laporan Produk Terlaris</strong></li>
              <li><strong>Laporan Shift Kasir</strong> (untuk akun Owner memantau karyawan)</li>
            </ul>
            <p>Paket Pro membuka akses ekspor ke Excel/PDF dan filter lebih lanjut.</p>
          </FaqItem>

          <FaqItem question="Bisa saya ekspor data ke Excel?">
            <p>Fitur ekspor Excel/PDF tersedia di <strong>paket Pro</strong>. Paket Free hanya bisa melihat laporan di layar aplikasi.</p>
          </FaqItem>

          <FaqItem question="Bagaimana jika saya ganti HP? Data hilang?">
            <p><strong>Tidak hilang.</strong> Data Anda tersimpan di cloud (backend kami). Cukup install aplikasi di HP baru, login dengan akun yang sama — seluruh data toko, produk, transaksi, dan laporan akan sinkron otomatis.</p>
          </FaqItem>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Paket Pro & Pembayaran</h2>

          <FaqItem question="Apa bedanya paket Free dan Pro?">
            <ul>
              <li><strong>Free:</strong> 1 toko, transaksi unlimited, produk unlimited, laporan dasar, 1 akun kasir</li>
              <li><strong>Pro:</strong> Multi-toko, laporan lanjutan + ekspor Excel/PDF, kasir unlimited, notifikasi stok lanjutan, prioritas support, API access</li>
            </ul>
            <p>Detail perbandingan lengkap bisa dilihat di aplikasi menu "Upgrade Pro".</p>
          </FaqItem>

          <FaqItem question="Bagaimana cara berlangganan Pro?">
            <p>Masuk ke aplikasi → Menu "Upgrade Pro" → Pilih durasi (bulanan/tahunan) → Pilih metode pembayaran via <strong>Tripay</strong> (Transfer Bank, E-Wallet, Virtual Account, dll) → Bayar → Aktifasi otomatis.</p>
          </FaqItem>

          <FaqItem question="Apakah langganan Pro otomatis perpanjang?">
            <p><strong>Tidak.</strong> Langganan Pro tidak auto-renew. Anda harus melakukan pembayaran manual kembali setelah masa berlangganan berakhir untuk melanjutkan fitur Pro.</p>
          </FaqItem>

          <FaqItem question="Bisa saya minta refund?">
            <p>Dana yang dibayarkan <strong>tidak bisa dikembalikan</strong> kecuali terbukti terjadi kesalahan sistem di pihak kami. Klaim refund maksimal 1×24 jam setelah transaksi dengan menghubungi support via email <a href="mailto:kontak@poskedai.com">kontak@poskedai.com</a>.</p>
          </FaqItem>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Teknis & Dukungan</h2>

          <FaqItem question="Aplikasi error/tidak bisa dibuka, apa yang harus saya lakukan?">
            <ol>
              <li>Pastikan versi Android minimal 7.0</li>
              <li>Update aplikasi ke versi terbaru via Play Store</li>
              <li>Restart HP, lalu buka aplikasi lagi</li>
              <li>Jika tetap error, hubungi kami via WhatsApp/email dengan screenshot error-nya</li>
            </ol>
          </FaqItem>

          <FaqItem question="Bagaimana cara menghubungi support?">
            <ul>
              <li><strong>WhatsApp Support:</strong> Klik tombol "WhatsApp Support" di aplikasi atau website</li>
              <li><strong>Email:</strong> <a href="mailto:kontak@poskedai.com">kontak@poskedai.com</a></li>
            </ul>
            <p>Kami berkomitmen merespons dalam waktu wajar pada jam kerja (Senin–Jumat, 09:00–17:00 WIB).</p>
          </FaqItem>

          <FaqItem question="Apakah ada tutorial cara pakai?">
            <p>Ya. Di aplikasi tersedia <strong>panduan interaktif</strong> untuk pemula. Kami juga menyediakan video tutorial di channel YouTube POS Kedai dan artikel bantuan di website.</p>
          </FaqItem>
        </div>
      </div>
    </div>
  </section>

  {/*  Penutup: Definition Block + Comparison Table (AI Extractable)  */}
  <section className="definition-section" aria-label="Tentang POS Kedai">
    <div className="faq-container">
      <p className="definition-text">
        <strong>POS Kedai</strong> adalah aplikasi kasir (Point of Sales) berbasis Android yang dirancang khusus untuk UMKM — toko sembako, warung kelontong, kedai, dan minimarket di Indonesia. Aplikasi ini bekerja tanpa internet (offline-first), menghitung laba bersih secara otomatis, memberi notifikasi stok menipis, serta mendukung multi kasir dengan rekap shift harian dalam format PDF.
      </p>
    </div>
  </section>

  <section id="perbandingan" className="comparison-section" aria-label="Perbandingan POS Kedai vs Kasir Manual">
    <div className="faq-container">
      <div className="faq-header">
        <span className="badge-pill">POS Kedai vs Manual</span>
        <h2>Mengapa Beralih dari Kasir Manual?</h2>
        <p>Bandingkan sendiri efisiensi toko Anda dengan dan tanpa aplikasi kasir digital.</p>
      </div>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Aspek</th>
              <th>Kasir Manual / Buku Nota</th>
              <th className="highlight-col">POS Kedai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kecepatan transaksi</td>
              <td>Hitung pakai kalkulator, risiko salah kembalian</td>
              <td className="highlight-col">Otomatis hitung total & kembalian dalam 3 detik</td>
            </tr>
            <tr>
              <td>Pencatatan stok</td>
              <td>Stok opname manual mingguan, sering telat</td>
              <td className="highlight-col">Stok berkurang otomatis saat transaksi + notifikasi stok menipis</td>
            </tr>
            <tr>
              <td>Laporan laba</td>
              <td>Rekap nota & Excel manual, 2+ jam per hari</td>
              <td className="highlight-col">Laba bersih harian/mingguan/bulanan otomatis, real-time</td>
            </tr>
            <tr>
              <td>Multi kasir & shift</td>
              <td>Sulit pantau karyawan, sering selisih kas</td>
              <td className="highlight-col">Akun kasir berjenjang + rekap shift harian PDF</td>
            </tr>
            <tr>
              <td>Mode offline</td>
              <td>Buku tetap dipakai walau listrik mati</td>
              <td className="highlight-col">Tetap transaksi tanpa internet, sinkron otomatis saat online</td>
            </tr>
            <tr>
              <td>Backup data</td>
              <td>Buku hilang / basah = data hilang</td>
              <td className="highlight-col">Cloud backup otomatis, ganti HP tanpa kehilangan data</td>
            </tr>
            <tr>
              <td>Biaya</td>
              <td>Gratis, tapi waktu terbuang banyak</td>
              <td className="highlight-col">Paket Free gratis selamanya, Pro mulai Rp 19.000/bulan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/*  Footer  */}
      </main>
      <Footer />
    </>
  )
}
