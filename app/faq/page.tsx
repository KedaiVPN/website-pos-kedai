import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tanya Jawab (FAQ) - POS Kedai',
  description: 'Pertanyaan yang sering diajukan seputar aplikasi kasir POS Kedai.',
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
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

          <div className="faq-item">
            <button className="faq-question">Apa itu POS Kedai?</button>
            <div className="faq-answer">
              <p>POS Kedai adalah aplikasi Point of Sales (kasir) berbasis mobile yang dirancang khusus untuk UMKM. Aplikasi ini membantu Anda mencatat transaksi, mengelola stok produk, membuat laporan keuangan, dan mengelola karyawan — semuanya dari smartphone Anda.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah POS Kedai gratis?</button>
            <div className="faq-answer">
              <p>Ya! POS Kedai menyediakan paket <strong>Free</strong> yang bisa digunakan tanpa biaya apapun. Fitur utama seperti transaksi, produk, stok, dan laporan dasar sudah tersedia. Untuk kebutuhan lebih lanjut (multi-toko, laporan lanjutan, export data, dll), tersedia paket <strong>Pro</strong> dengan harga terjangkau.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah saya butuh internet untuk menggunakan POS Kedai?</button>
            <div className="faq-answer">
              <p>Untuk fitur utama (transaksi, produk, stok) — <strong>tidak wajib selalu online</strong>. Data disimpan lokal di perangkat dan akan sinkron otomatis saat terhubung internet. Namun untuk verifikasi OTP, pembayaran paket Pro, dan sinkronisasi data ke cloud, koneksi internet diperlukan.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Di sistem operasi apa POS Kedai berjalan?</button>
            <div className="faq-answer">
              <p>POS Kedai tersedia di <strong>Android</strong> (versi 7.0 ke atas). Anda bisa mendownloadnya melalui Google Play Store.</p>
            </div>
          </div>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Akun & Keamanan</h2>

          <div className="faq-item">
            <button className="faq-question">Bagaimana cara mendaftar akun POS Kedai?</button>
            <div className="faq-answer">
              <ol>
                <li>Download aplikasi dari Google Play Store</li>
                <li>Buka aplikasi, pilih "Daftar"</li>
                <li>Isi nama lengkap, email, nomor telepon, nama toko</li>
                <li>Buat kata sandi</li>
                <li>Verifikasi email melalui kode OTP yang dikirim</li>
                <li>Selesai! Anda bisa langsung menggunakan aplikasi</li>
              </ol>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Lupa kata sandi, bagaimana?</button>
            <div className="faq-answer">
              <p>Di halaman login, pilih "Lupa Password". Masukkan email yang terdaftar, lalu kode OTP reset akan dikirim ke email Anda. Ikuti instruksi untuk membuat kata sandi baru.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah data toko saya aman?</button>
            <div className="faq-answer">
              <p>Ya. Kami menggunakan enkripsi <strong>bcrypt</strong> untuk kata sandi, komunikasi <strong>HTTPS/TLS</strong> untuk semua transmisi data, <strong>JWT Token</strong> untuk autentikasi, dan <strong>rate limiting</strong> untuk mencegah akses tidak sah. Backup data dilakukan otomatis ke cloud.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bisakah saya menambahkan karyawan/kasir?</button>
            <div className="faq-answer">
              <p>Bisa! Sebagai <strong>Owner</strong>, Anda bisa menambahkan akun Kasir/Karyawan dengan hak akses terbatas. Owner mengelola seluruh toko, sedangkan Kasir hanya bisa mengakses fitur transaksi. Semua aktivitas karyawan menjadi tanggung jawab Owner.</p>
            </div>
          </div>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Transaksi & Fitur</h2>

          <div className="faq-item">
            <button className="faq-question">Bagaimana cara mencatat transaksi?</button>
            <div className="faq-answer">
              <p>Masuk ke menu "Transaksi" → "Transaksi Baru" → Pilih/tambah produk → Tentukan jumlah → Pilih metode pembayaran (Tunai/QRIS/Transfer) → Simpan. Transaksi langsung tercatat dan stok otomatis berkurang.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah stok otomatis berkurang saat transaksi?</button>
            <div className="faq-answer">
              <p>Ya, <strong>stok berkurang otomatis</strong> begitu transaksi disimpan. Anda juga akan mendapat notifikasi jika stok produk mendekati batas minimum (bisa diatur per produk).</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bisa saya cetak struk?</button>
            <div className="faq-answer">
              <p>Ya. POS Kedai mendukung pencetakan struk via Bluetooth ke printer thermal (58mm/80mm). Pastikan printer sudah di-pairing dengan HP Anda.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah ada fitur pembayaran QRIS?</button>
            <div className="faq-answer">
              <p>Ya, tersedia fitur pembayaran QRIS terintegrasi. Pembayaran via QRIS akan tercatat otomatis di sistem dan laporan keuangan.</p>
            </div>
          </div>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Laporan & Data</h2>

          <div className="faq-item">
            <button className="faq-question">Laporan apa saja yang tersedia?</button>
            <div className="faq-answer">
              <ul>
                <li><strong>Laporan Penjualan</strong> (harian/mingguan/bulanan/custom range)</li>
                <li><strong>Laporan Laba Rugi</strong> (laba kotor & bersih per periode)</li>
                <li><strong>Laporan Stok</strong> (produk habis, stok minimum, nilai stok)</li>
                <li><strong>Laporan Produk Terlaris</strong></li>
                <li><strong>Laporan Shift Kasir</strong> (untuk akun Owner memantau karyawan)</li>
              </ul>
              <p>Paket Pro membuka akses ekspor ke Excel/PDF dan filter lebih lanjut.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bisa saya ekspor data ke Excel?</button>
            <div className="faq-answer">
              <p>Fitur ekspor Excel/PDF tersedia di <strong>paket Pro</strong>. Paket Free hanya bisa melihat laporan di layar aplikasi.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bagaimana jika saya ganti HP? Data hilang?</button>
            <div className="faq-answer">
              <p><strong>Tidak hilang.</strong> Data Anda tersimpan di cloud (backend kami). Cukup install aplikasi di HP baru, login dengan akun yang sama — seluruh data toko, produk, transaksi, dan laporan akan sinkron otomatis.</p>
            </div>
          </div>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Paket Pro & Pembayaran</h2>

          <div className="faq-item">
            <button className="faq-question">Apa bedanya paket Free dan Pro?</button>
            <div className="faq-answer">
              <ul>
                <li><strong>Free:</strong> 1 toko, transaksi unlimited, produk unlimited, laporan dasar, 1 akun kasir</li>
                <li><strong>Pro:</strong> Multi-toko, laporan lanjutan + ekspor Excel/PDF, kasir unlimited, notifikasi stok lanjutan, prioritas support, API access</li>
              </ul>
              <p>Detail perbandingan lengkap bisa dilihat di aplikasi menu "Upgrade Pro".</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bagaimana cara berlangganan Pro?</button>
            <div className="faq-answer">
              <p>Masuk ke aplikasi → Menu "Upgrade Pro" → Pilih durasi (bulanan/tahunan) → Pilih metode pembayaran via <strong>Tripay</strong> (Transfer Bank, E-Wallet, Virtual Account, dll) → Bayar → Aktifasi otomatis.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah langganan Pro otomatis perpanjang?</button>
            <div className="faq-answer">
              <p><strong>Tidak.</strong> Langganan Pro tidak auto-renew. Anda harus melakukan pembayaran manual kembali setelah masa berlangganan berakhir untuk melanjutkan fitur Pro.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bisa saya minta refund?</button>
            <div className="faq-answer">
              <p>Dana yang dibayarkan <strong>tidak bisa dikembalikan</strong> kecuali terbukti terjadi kesalahan sistem di pihak kami. Klaim refund maksimal 1×24 jam setelah transaksi dengan menghubungi support via email <a href="mailto:kontak@poskedai.com">kontak@poskedai.com</a>.</p>
            </div>
          </div>
        </div>

        <div className="faq-category">
          <h2 className="faq-category-title">Teknis & Dukungan</h2>

          <div className="faq-item">
            <button className="faq-question">Aplikasi error/tidak bisa dibuka, apa yang harus saya lakukan?</button>
            <div className="faq-answer">
              <ol>
                <li>Pastikan versi Android minimal 7.0</li>
                <li>Update aplikasi ke versi terbaru via Play Store</li>
                <li>Restart HP, lalu buka aplikasi lagi</li>
                <li>Jika tetap error, hubungi kami via WhatsApp/email dengan screenshot error-nya</li>
              </ol>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Bagaimana cara menghubungi support?</button>
            <div className="faq-answer">
              <ul>
                <li><strong>WhatsApp Support:</strong> Klik tombol "WhatsApp Support" di aplikasi atau website</li>
                <li><strong>Email:</strong> <a href="mailto:kontak@poskedai.com">kontak@poskedai.com</a></li>
              </ul>
              <p>Kami berkomitmen merespons dalam waktu wajar pada jam kerja (Senin–Jumat, 09:00–17:00 WIB).</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">Apakah ada tutorial cara pakai?</button>
            <div className="faq-answer">
              <p>Ya. Di aplikasi tersedia <strong>panduan interaktif</strong> untuk pemula. Kami juga menyediakan video tutorial di channel YouTube POS Kedai dan artikel bantuan di website.</p>
            </div>
          </div>
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
