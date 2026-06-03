import Link from 'next/link'

const NAV = [
  { label: 'Nosotros',         href: '/nosotros' },
  { label: 'Servicios',        href: '/servicios' },
  { label: 'Derecho Cultural', href: '/derecho-cultural' },
  { label: 'Cursos',           href: '/cursos' },
  { label: 'Peritaje',         href: '/peritaje' },
  { label: 'Portafolio',       href: '/portafolio' },
  { label: 'Contacto',         href: '/contacto' },
]

export function Footer() {
  return (
    <footer className="footer">

      {/* ─── Cuerpo principal ─── */}
      <div className="footer-body">

        {/* Columna izquierda — identidad */}
        <div className="footer-identity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/website/logoo.png"
            alt="Guagnelli Consultoría Jurídica Cultural"
            className="footer-logo"
          />
          <div className="footer-wordmark">
            <span className="footer-wordmark-main">Guagnelli</span>
            <span className="footer-wordmark-sub">Consultoría Jurídica Cultural</span>
          </div>
          <p className="footer-tagline">
            Derecho al servicio<br />de la cultura y los pueblos.
          </p>
        </div>

        {/* Divisor vertical */}
        <div className="footer-divider-v" />

        {/* Columna derecha — navegación y contacto */}
        <div className="footer-info">

          <div className="footer-nav-block">
            <p className="footer-label">Páginas</p>
            <nav className="footer-nav">
              {NAV.map(({ label, href }) => (
                <Link key={href} href={href} className="footer-nav-link">{label}</Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact-block">
            <p className="footer-label">Contacto directo</p>
            <a href="tel:5523214441" className="footer-contact-line">
              <span className="footer-contact-key">Tel.</span>
              55 2321 4441
            </a>
            <a href="mailto:xons.juridica.cultural@gmail.com" className="footer-contact-line">
              <span className="footer-contact-key">Email</span>
              xons.juridica.cultural@gmail.com
            </a>
            <span className="footer-contact-line" style={{ cursor: 'default' }}>
              <span className="footer-contact-key">Zona</span>
              CDMX y República Mexicana
            </span>
            <Link href="/contacto" className="footer-cta-btn">
              Solicitar consulta →
            </Link>
          </div>

        </div>
      </div>

      {/* ─── Barra inferior ─── */}
      <div className="footer-bar">
        <span>© 2025 Guagnelli Consultoría Jurídica Cultural · Todos los derechos reservados</span>
        <span>Ciudad de México, México</span>
      </div>

    </footer>
  )
}
