import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#features' },
    { label: 'Community', href: '#community' },
    { label: 'Stories', href: '#showcase' },
    { label: 'Contact', href: '#cta' },
  ]

  return (
    <>
      {/* Desktop navbar */}
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-text">PSJ</span>
        </a>

        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.label} className="navbar__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--primary btn--sm" href="#cta">
            Baca Artikel
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <span className="navbar__logo-text">PSJ</span>
          <button
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mobile-menu__nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="mobile-menu__link"
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary btn--lg mobile-menu__cta"
            href="#cta"
            onClick={() => setMobileOpen(false)}
          >
            Join PSJ
          </a>
        </nav>
      </div>
    </>
  )
}

export default Navbar
