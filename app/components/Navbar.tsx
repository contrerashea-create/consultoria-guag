import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-icon">✦</span>
          <span className="nav-logo-text">Guagnelli</span>
        </Link>
        <div className="nav-links">
          <Link href="/nosotros"  className="nav-link">Nosotros</Link>
          <Link href="/servicios" className="nav-link">Servicios</Link>
          <Link href="/cursos"    className="nav-link">Formación</Link>
          <Link href="/peritaje"  className="nav-link">Peritaje</Link>
          <Link href="/contacto"  className="nav-cta-btn">Consulta</Link>
        </div>
      </div>
    </nav>
  )
}
