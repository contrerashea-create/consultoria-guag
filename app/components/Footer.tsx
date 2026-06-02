import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-icon">✦</span>
          <span className="footer-name">Guagnelli · Consultoría Jurídica Cultural</span>
        </div>
        <nav className="footer-links">
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/cursos">Cursos</Link>
          <Link href="/peritaje">Peritaje</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <span className="footer-copy">© 2025 Guagnelli Consultoría Jurídica Cultural</span>
      </div>
    </footer>
  )
}
