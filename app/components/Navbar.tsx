'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const DARK_BG_PAGES = ['/', '/peritaje', '/derecho-cultural']

const NAV_LINKS = [
  { label: 'Nosotros',         href: '/nosotros' },
  { label: 'Servicios',        href: '/servicios' },
  { label: 'Derecho Cultural', href: '/derecho-cultural' },
  { label: 'Cursos',           href: '/cursos' },
  { label: 'Peritaje',         href: '/peritaje' },
  { label: 'Portafolio',       href: '/portafolio' },
]

export function Navbar() {
  const pathname  = usePathname()
  const hasDarkBg = DARK_BG_PAGES.includes(pathname)
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    setScrolled(window.scrollY > 60)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const transparent = !scrolled && !menuOpen
  const linkColor = transparent ? (hasDarkBg ? 'rgba(250,246,240,.7)' : 'rgba(44,33,24,.45)') : undefined
  const ctaBorder = transparent ? (hasDarkBg ? 'rgba(250,246,240,.45)' : 'rgba(44,33,24,.35)') : undefined
  const ctaColor  = transparent ? (hasDarkBg ? 'rgba(250,246,240,.9)'  : 'var(--ink)') : undefined
  const logoFilter = transparent && hasDarkBg ? 'brightness(0) invert(1)' : 'none'
  const iconColor  = transparent && hasDarkBg ? '#FAF6F0' : 'var(--ink)'

  return (
    <>
      <nav className="nav" style={{
        background: transparent ? 'transparent' : 'var(--arena)',
        transition: 'background .35s ease',
        borderBottom: transparent ? 'none' : '1px solid rgba(168,144,96,.15)',
      }}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/website/logoo.png" alt="Guagnelli" style={{ height: '68px', width: 'auto', filter: logoFilter, transition: 'filter .35s ease' }} />
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="nav-link" style={{ color: linkColor }}>{label}</Link>
            ))}
            <Link href="/contacto" className="nav-cta-btn" style={{ borderColor: ctaBorder, color: ctaColor }}>Consulta</Link>
          </div>

          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menú" style={{ color: iconColor }}>
            {menuOpen
              ? <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link href="/contacto" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Consulta</Link>
        </div>
      )}
    </>
  )
}
