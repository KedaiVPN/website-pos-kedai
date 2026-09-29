import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan - POS Kedai',
  description: 'Syarat dan ketentuan penggunaan aplikasi kasir POS Kedai serta layanan pengelolaan toko UMKM.',
  alternates: {
    canonical: 'https://poskedai.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/*  Floating Nav Header  */}
  

  {/*  Terms of Service Page  */}
  <section className="legal-page">
    <div className="legal-container">
      <div className="legal-header">
        <h1>Syarat dan Ketentuan</h1>
        <p className="date">Terakhir diperbarui: 28 September 2026</p>
      </div>

      <div className="legal-content">
        <h2>1. PENDAHULUAN</h2>
        <p>Sebelum Anda mengunduh, memasang, atau menggunakan layanan yang tersedia pada Aplikasi POS Kedai ("Aplikasi"), mohon untuk memeriksa dan membaca dengan seksama syarat dan ketentuan penggunaan aplikasi. Dengan mengunduh, memasang, dan/atau menggunakan layanan yang tersedia pada Aplikasi POS Kedai, Anda setuju bahwa Anda telah membaca, memahami, menerima dan menyetujui Syarat dan Ketentuan penggunaan ini (Syarat dan Ketentuan), termasuk apabila terdapat perubahan dan/atau penambahan ketentuan dari waktu ke waktu.</p>
        <p>Silakan menghapus Aplikasi dari perangkat Anda jika Anda tidak setuju pada salah satu, sebagian, atau keseluruhan Syarat dan Ketentuan ini beserta dengan perubahannya.</p>

        <h2>2. DEFINISI</h2>
        <p><strong>Aplikasi POS Kedai</strong> dibuat dan dikelola oleh POS Kedai ("Kami" atau "Kami"). POS Kedai merupakan pengembang aplikasi yang bergerak pada bidang usaha software as a service (SaaS) khusus untuk kebutuhan kasir dan manajemen toko.</p>
        <p>Aplikasi ini merupakan aplikasi perangkat lunak yang berfungsi sebagai sarana untuk mempermudah Anda, khususnya para pebisnis, dalam mengelola sistem transaksi, stok, produk, laporan keuangan, serta manajemen karyawan dalam usaha Anda.</p>

        <h2>3. DEFINISI PENGGUNA</h2>
        <p><strong>Akun</strong> adalah identitas yang didaftarkan dan diverifikasi oleh Pengguna kepada POS Kedai untuk menggunakan layanan Aplikasi.</p>
        <p><strong>Pengguna</strong> atau <strong>User</strong> adalah orang perseorangan atau pelaku usaha yang berencana mendaftar dan/atau yang Akunnya telah terdaftar dan diverifikasi oleh POS Kedai.</p>
        <p><strong>Layanan</strong> adalah setiap fitur yang disediakan oleh POS Kedai melalui Aplikasi, termasuk tetapi tidak terbatas pada: transaksi, produk, manajemen stok, laporan keuangan, dan notifikasi.</p>
        <p><strong>Owner</strong> adalah Pengguna yang mendaftarkan toko dan memiliki akses penuh untuk mengelola toko beserta seluruh karyawannya.</p>
        <p><strong>Kasir/Karyawan</strong> adalah akun yang ditambahkan oleh Owner untuk membantu operasional toko, dengan hak akses yang terbatas sesuai peran yang diberikan oleh Owner.</p>
        <p><strong>Verifikasi</strong> adalah serangkaian kegiatan yang dilakukan oleh POS Kedai untuk mengecek keabsahan data yang disampaikan oleh Pengguna, termasuk verifikasi email melalui kode OTP.</p>

        <h2>4. KETENTUAN PENGGUNAAN APLIKASI DAN LAYANAN</h2>
        <p>Anda menyatakan dan menjamin bahwa Anda adalah individu yang secara hukum berhak untuk mengadakan perjanjian yang mengikat berdasarkan hukum Negara Republik Indonesia untuk menggunakan Aplikasi ini.</p>
        <p>Kami mengumpulkan dan memproses informasi pribadi Anda seperti nama, alamat email, dan nomor telepon ketika Anda mendaftar. Anda harus memberikan informasi yang akurat dan lengkap.</p>
        <p>Anda hanya dapat menggunakan Aplikasi setelah berhasil mendaftarkan diri. Setelah pendaftaran berhasil, Aplikasi akan memberikan Anda suatu Akun pribadi yang dapat diakses dengan kata sandi yang Anda pilih. Hanya Anda yang dapat menggunakan Akun Anda sendiri. Anda tidak dapat menyerahkan atau mengalihkan Akun Anda kepada pihak lain dengan alasan apapun.</p>
        <p>Anda harus menjaga keamanan dan kerahasiaan kata sandi Akun Anda. Dalam hal terjadi pengungkapan kata sandi yang mengakibatkan penggunaan tidak sah atas Akun Anda, hal tersebut bukan merupakan tanggung jawab Kami selama Anda belum memberitahukan kejadian tersebut kepada Kami.</p>
        <p>Mohon informasikan kepada Kami jika Anda tidak lagi memiliki kontrol atas Akun Anda (misalnya Akun diretas atau perangkat dicuri), sehingga Kami dapat mengambil tindakan pengamanan yang diperlukan.</p>
        <p>Informasi yang diberikan oleh Aplikasi tidak dapat diartikan sebagai suatu saran atau penawaran; keputusan untuk menggunakan Aplikasi sepenuhnya berada di tangan Anda.</p>
        <p>Aplikasi tidak boleh dipergunakan untuk hal yang tidak wajar, termasuk namun tidak terbatas pada: mencatat transaksi barang ilegal, narkotika, barang berbahaya, atau barang curian.</p>
        <p>Data operasional toko yang disimpan di Aplikasi sepenuhnya menjadi tanggung jawab Anda. Kami tidak menjamin ketersediaan data jika terjadi hal-hal di luar kendali Kami.</p>

        <h2>5. PEMBAYARAN APLIKASI BERBAYAR (PAKET PRO)</h2>
        <p>Penggunaan Aplikasi ini tersedia dalam dua versi: versi gratis (POS Kedai Free) dan versi berbayar (POS Kedai Pro). Kami akan memberitahukan perbedaan fitur agar Anda dapat memutuskan pilihan yang sesuai kebutuhan.</p>
        <p>Pembayaran paket Pro diproses melalui Tripay sebagai gateway pembayaran pihak ketiga. Tersedia berbagai metode pembayaran sesuai yang disediakan oleh Tripay (transfer bank, dompet digital, dan lainnya).</p>
        <p>Dana yang telah dibayarkan tidak dapat dikembalikan (refund) kecuali terbukti terjadi kesalahan sistem di pihak Kami. Laporan klaim refund dapat dilakukan maksimal 1x24 jam sejak terjadinya transaksi dengan menghubungi Kami melalui kontak yang tertera di bagian akhir dokumen ini.</p>
        <p>Langganan paket Pro tidak diperpanjang secara otomatis. Pengguna harus melakukan pembayaran kembali setelah masa berlangganan berakhir.</p>

        <h2>6. PENDAFTARAN DAN PROSES VERIFIKASI</h2>
        <p>Anda dapat membuat Akun POS Kedai dengan mengisi formulir pendaftaran yang tersedia pada Aplikasi.</p>
        <p>Setelah mendaftar, Anda akan diminta untuk melakukan verifikasi Akun melalui kode OTP yang dikirim ke email yang Anda daftarkan.</p>
        <p>Informasi yang Anda sampaikan kepada Kami harus disampaikan dengan sebenar-benarnya. Apabila dikemudian hari ditemukan bahwa data yang Anda sampaikan tidak valid atau tidak benar, Kami berhak mengambil tindakan yang diperlukan termasuk menonaktifkan Akun Anda.</p>
        <p>Owner dapat menambahkan akun Kasir/Karyawan untuk membantu operasional toko. Segala tindakan yang dilakukan oleh akun Kasir/Karyawan yang terdaftar pada Akun Anda adalah sepenuhnya menjadi tanggung jawab Anda sebagai Owner.</p>

        <h2>7. KEAMANAN AKUN</h2>
        <p>Keamanan dan kerahasiaan Akun Anda, termasuk nama terdaftar, alamat email terdaftar, kata sandi, dan kode OTP merupakan tanggung jawab Anda sepenuhnya.</p>
        <p>Kami tidak pernah meminta kata sandi atau kode OTP Anda untuk alasan apapun, baik melalui SMS, telepon, maupun media lainnya. Anda diwajibkan menjaga kerahasiaan informasi tersebut dari pihak manapun.</p>
        <p>Jika kata sandi atau kode OTP Anda diketahui oleh pihak lain dan terjadi penyalahgunaan Akun Anda, hal tersebut bukan menjadi tanggung jawab Kami.</p>
        <p>Jika Anda lupa kata sandi, Anda dapat menggunakan fitur "Lupa Password" pada halaman login Aplikasi. Kode OTP reset password akan dikirimkan ke email yang Anda daftarkan.</p>

        <h2>8. PENONAKTIFAN, PENUTUPAN, DAN PEMBLOKIRAN</h2>
        <p>Atas diskresi Kami sendiri, Kami berhak untuk menonaktifkan, membekukan, atau memblokir Akun Anda apabila:</p>
        <ul>
          <li>Terdapat permintaan dari instansi pemerintah, kepolisian, atau badan penegak hukum;</li>
          <li>Terdapat indikasi transaksi atau aktivitas yang mencurigakan;</li>
          <li>Tindakan Anda tidak sesuai dengan Syarat dan Ketentuan ini; dan/atau</li>
          <li>Akun Anda tidak aktif digunakan selama lebih dari 1 (satu) tahun, yang dapat mengakibatkan penghapusan seluruh data akun.</li>
        </ul>
        <p>Apabila Akun Anda diblokir, segera hubungi Kami dan sampaikan bukti-bukti pendukung. Kami akan melakukan pemeriksaan dan memberikan penjelasan terkait pemblokiran tersebut.</p>
        <p>Penutupan atau penghentian akses terhadap Aplikasi tidak menghapus hak POS Kedai untuk mengambil setiap tindakan lain yang dianggap perlu sehubungan dengan pelanggaran yang dilakukan oleh Anda.</p>

        <h2>9. TRANSAKSI MENCURIGAKAN</h2>
        <p>Jika Kami memiliki alasan untuk mempercayai adanya indikasi penipuan atau aktivitas tidak wajar pada Akun Anda, Kami berhak membekukan Akun tersebut sementara waktu selama proses investigasi berlangsung. Kembalinya hak akses Anda bergantung pada hasil investigasi Kami.</p>

        <h2>10. INFORMASI PRIBADI</h2>
        <p>Sehubungan dengan pengumpulan, penyimpanan, pengolahan, dan penggunaan Informasi Pribadi Anda, hal tersebut diatur lebih lanjut pada Kebijakan Privasi POS Kedai, yang merupakan bagian yang tidak terpisahkan dari Syarat dan Ketentuan ini, dan dapat diakses melalui <a href="/privacy.html">https://pra-register.poskedai.com/privacy</a>.</p>

        <h2>11. PERNYATAAN DAN JAMINAN</h2>
        <p>Dengan melakukan pendaftaran Akun, Anda menjamin dan menyatakan bahwa:</p>
        <ul>
          <li>Anda adalah subjek hukum yang cakap dan berwenang menurut ketentuan hukum yang berlaku untuk menggunakan Aplikasi dan mengikatkan diri pada Syarat dan Ketentuan ini;</li>
          <li>Setiap informasi dan data yang Anda berikan adalah benar, akurat, lengkap, dan masih berlaku;</li>
          <li>Anda telah membaca dan memahami Syarat dan Ketentuan ini serta Kebijakan Privasi; dan</li>
          <li>Anda tidak akan menggunakan Aplikasi untuk tujuan yang melanggar hukum atau merugikan pihak lain.</li>
        </ul>
        <p>Anda mengakui dan menyetujui bahwa seluruh risiko yang timbul dari penggunaan Layanan tetap sepenuhnya ada pada Anda.</p>

        <h2>12. TANGGUNG JAWAB POS KEDAI</h2>
        <p>Anda sepenuhnya bertanggung jawab atas kebenaran, kelengkapan, dan akurasi data yang Anda masukkan ke dalam Aplikasi. POS Kedai tidak bertanggung jawab atas setiap akibat yang timbul dari ketidakbenaran atau ketidaklengkapan data tersebut.</p>
        <p>POS Kedai tidak memberikan jaminan tentang tidak adanya gangguan atau cacat pada Aplikasi. Aplikasi dan Layanan disediakan "sebagaimana adanya" kepada Anda.</p>
        <p>POS Kedai tidak bertanggung jawab atas kerugian, kehilangan data, atau kerusakan lain dalam bentuk apapun yang timbul dari penggunaan atau ketidakmampuan mengakses Layanan, kecuali kerugian tersebut disebabkan oleh kelalaian nyata dari pihak POS Kedai.</p>

        <h2>13. KEKAYAAN INTELEKTUAL</h2>
        <p>POS Kedai, termasuk nama, logo, dan layannya dilindungi oleh hak cipta dan hak kekayaan intelektual yang berlaku berdasarkan hukum Republik Indonesia. POS Kedai adalah pemilik seluruh hak atas nama, logo, Aplikasi, dan seluruh hak kekayaan intelektual yang berkaitan dengannya.</p>
        <p>Penggunaan Aplikasi tidak dapat diartikan sebagai pemberian hak atau lisensi apapun kepada Anda atas kekayaan intelektual milik POS Kedai.</p>
        <p>Tata operasional toko (produk, transaksi, laporan) adalah milik Anda sebagai Pengguna. Kami hanya menyimpan dan memproses data tersebut untuk memberikan layanan kepada Anda.</p>

        <h2>14. PERUBAHAN SYARAT DAN KETENTUAN</h2>
        <p>Syarat dan Ketentuan ini berlaku efektif setiap saat Anda mengakses dan/atau menggunakan Aplikasi.</p>
        <p>Atas diskresi Kami, Kami berhak untuk sewaktu-waktu mengubah Syarat dan Ketentuan ini dengan menyampaikan pemberitahuan kepada Anda melalui Aplikasi. Anda dianggap menyetujui perubahan tersebut dengan tetap mengakses dan/atau menggunakan Aplikasi.</p>
        <p>Dalam hal satu atau lebih ketentuan dalam dokumen ini menjadi tidak berlaku atau tidak dapat dilaksanakan menurut hukum yang berlaku, maka hal tersebut tidak berdampak pada keberlakuan ketentuan-ketentuan lainnya.</p>
        <p>Anda tidak dapat mengalihkan sebagian atau seluruh hak dan/atau kewajiban Anda berdasarkan Syarat dan Ketentuan ini kepada pihak lain.</p>

        <h2>15. HUKUM YANG BERLAKU DAN PENYELESAIAN PERSELISIHAN</h2>
        <p>Syarat dan Ketentuan ini diatur oleh dan tunduk pada hukum Negara Republik Indonesia. Para pihak sepakat untuk menyelesaikan setiap perselisihan sehubungan dengan Syarat dan Ketentuan ini secara musyawarah mufakat terlebih dahulu.</p>
        <p>Apabila perselisihan tidak dapat diselesaikan secara musyawarah dalam waktu 30 (tiga puluh) hari kalender, maka perselisihan akan diselesaikan melalui Pengadilan Negeri yang berwenang.</p>

        <div className="legal-footer">
          <h2>16. KONTAK KAMI DAN PENGADUAN</h2>
          <p>Anda dapat menyampaikan saran, permintaan, keluhan, atau pertanyaan terkait Aplikasi kepada Kami melalui:</p>
          <p className="contact">POS KEDAI</p>
          <p>Email: <a href="mailto:kontak@poskedai.com">kontak@poskedai.com</a></p>
          <p>Website: <a href="https://poskedai.com" target="_blank">https://poskedai.com</a></p>
          <p>Untuk menanggapi setiap saran, permintaan, atau keluhan Anda, Kami akan melakukan verifikasi atas informasi atau data Anda terlebih dahulu. Kami berkomitmen untuk memberikan tanggapan dalam waktu yang wajar setelah menerima laporan yang lengkap dari Anda.</p>
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
