'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on route change (back button etc)
  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Link href="/" className="brand">
            <Image src="/img/logo.webp" alt="POS Kedai" width={50} height={40} className="brand-logo" priority />
            <span className="brand-name">POS Kedai</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-menu">
            <Link href="/#fitur" className="nav-link">Fitur</Link>
            <Link href="/#keunggulan" className="nav-link">Keunggulan</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
            <Link href="/about" className="nav-link">Tentang</Link>
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <div className="hamburger-icon">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay menu — fixed so main content doesn't shift */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
      )}
      <div ref={menuRef} className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a
          href="https://wa.me/6285951763638"
          className="mobile-menu-item"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>WhatsApp Support</span>
        </a>
        <Link
          href="/about"
          className="mobile-menu-item"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>Tentang Kami</span>
        </Link>
        <Link
          href="/faq"
          className="mobile-menu-item"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span>FAQ</span>
        </Link>
      </div>
    </>
  )
}