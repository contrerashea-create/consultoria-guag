import Link from 'next/link'

const PAGINAS = [
  { label: 'Nosotros',         href: '/nosotros' },
  { label: 'Servicios',        href: '/servicios' },
  { label: 'Derecho Cultural', href: '/derecho-cultural' },
  { label: 'Cursos',           href: '/cursos' },
  { label: 'Portafolio',       href: '/portafolio' },
  { label: 'Contacto',         href: '/contacto' },
]

const ESPECIALIDADES = [
  { label: 'Derecho Cultural',  href: '/servicios' },
  { label: 'Derecho Indígena',  href: '/servicios' },
  { label: 'Peritaje Cultural', href: '/peritaje' },
]

export function Footer() {
  return (
    <footer>

      {/* ─── Cuerpo principal — fondo claro para contrastar con el CTA oscuro ─── */}
      <div className="footer-body">
        <div className="footer-body-inner">

          {/* Col 1 — Páginas */}
          <div className="footer-col">
            <p className="footer-col-label">Páginas</p>
            <nav className="footer-col-links">
              {PAGINAS.map(({ label, href }) => (
                <Link key={href + label} href={href} className="footer-col-link">{label}</Link>
              ))}
            </nav>
          </div>

          {/* Col 2 — Especialidades */}
          <div className="footer-col">
            <p className="footer-col-label">Especialidades</p>
            <nav className="footer-col-links">
              {ESPECIALIDADES.map(({ label, href }) => (
                <Link key={label} href={href} className="footer-col-link">{label}</Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Contacto */}
          <div className="footer-col">
            <p className="footer-col-label">Contacto directo</p>
            <div className="footer-col-links">
              <a href="mailto:cjc.guag@gmail.com" className="footer-col-link footer-col-link--contact">
                cjc.guag@gmail.com
              </a>
              <a href="tel:4425619711" className="footer-col-link footer-col-link--contact">
                442 561 9711
              </a>
              <span className="footer-col-link footer-col-link--muted">CDMX y Rep. Mexicana</span>
              <Link href="/contacto" className="footer-cta-btn">
                Solicitar consulta →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Barra inferior oscura ─── */}
      <div className="footer-bar">
        <div className="footer-bar-inner">

          <div className="footer-bar-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/website/logoo.png"
              alt="Guagnelli"
              className="footer-bar-logo"
            />
            <div className="footer-bar-wordmark">
              <span className="footer-bar-name">Guagnelli</span>
              <span className="footer-bar-sub">Consultoría Jurídica Cultural</span>
            </div>
          </div>

          <div className="footer-bar-right">
            <span className="footer-bar-copy">© 2026 Guagnelli Consultoría Jurídica Cultural · Todos los derechos reservados</span>
            <span className="footer-bar-copy">Ciudad de México, México</span>
          </div>

        </div>
      </div>

    </footer>
  )
}
