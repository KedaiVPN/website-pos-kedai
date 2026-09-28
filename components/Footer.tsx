import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="foodnoms-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-text-stacked">
              <span className="brand-pos">POS</span>
              <span className="brand-kedai">KEDAI</span>
            </div>
            <p className="footer-tagline">Kasir nya UMKM.</p>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-col">
              <h4 className="col-title">Dukungan</h4>
              <a href="https://wa.me/6285951763638" className="footer-link">WhatsApp Support</a>
              <a href="mailto:kontak@poskedai.com" className="footer-link">Email Support</a>
              <Link href="/faq" className="footer-link">Tanya Jawab (FAQ)</Link>
            </div>
            <div className="footer-col">
              <h4 className="col-title">Tentang</h4>
              <Link href="/about" className="footer-link">Tentang Kami</Link>
              <Link href="/terms" className="footer-link">Syarat &amp; Ketentuan</Link>
              <Link href="/privacy" className="footer-link">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 POS Kedai. Hak cipta dilindungi undang-undang.</p>
          <div className="social-links">
            <a href="#" className="social-item">Instagram</a>
            <a href="#" className="social-item">Facebook</a>
            <a href="#" className="social-item">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
