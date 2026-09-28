import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="brand">
          <img src="/img/logo.png" alt="POS Kedai" className="brand-logo" />
          <span className="brand-name">POS Kedai</span>
        </Link>

        <nav className="nav-menu">
          <Link href="/#fitur" className="nav-link">Fitur</Link>
          <Link href="/#keunggulan" className="nav-link">Keunggulan</Link>
          <Link href="/faq" className="nav-link">FAQ</Link>
          <Link href="/about" className="nav-link">Tentang</Link>
        </nav>
      </div>
    </header>
  )
}
