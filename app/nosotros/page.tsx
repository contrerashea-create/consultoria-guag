import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Conoce a Aldo A. Guagnelli Nuñez, abogado y etnohistoriador con 25 años de experiencia en derecho cultural, indígena y derechos humanos.',
  openGraph: {
    title: 'Nosotros · Guagnelli | Consultoría Jurídica Cultural',
    description: 'Conoce a Aldo A. Guagnelli Nuñez, abogado y etnohistoriador con 25 años de experiencia en derecho cultural, indígena y derechos humanos.',
    url: 'https://consultoria-guag.vercel.app/nosotros',
    siteName: 'Guagnelli · Consultoría Jurídica Cultural',
    images: [{ url: 'https://consultoria-guag.vercel.app/website/1.png', width: 1200, height: 630, alt: 'Nosotros · Guagnelli Consultoría Jurídica Cultural' }],
    locale: 'es_MX',
    type: 'website',
  },
}

const AREAS = [
  "Derechos Humanos","Derecho Constitucional","Derecho Cultural",
  "Derecho Indígena","Derecho Civil","Derecho Administrativo","Peritaje Cultural",
]

const PUBLICO = [
  { title: "Comunidades indígenas y afromexicanas", desc: "Pueblos que requieren representación legal para defender sus derechos colectivos, territoriales y culturales." },
  { title: "Instituciones públicas y culturales", desc: "Dependencias de gobierno, museos, centros culturales y organismos como INAH, INBA, INPI e INDAUTOR." },
  { title: "OSC y organizaciones civiles", desc: "Asociaciones, fundaciones y colectivos que trabajan en defensa de derechos humanos, cultura e interculturalidad." },
  { title: "Sector privado", desc: "Empresas y particulares que necesitan navegar trámites culturales, patrimonio histórico, marcas colectivas o propiedad intelectual." },
]

export default function Nosotros() {
  return (
    <>
      {/* ─── ABOUT ─── */}
      <section style={{ background: 'var(--warm)' }}>
        <div className="about-section" style={{ paddingTop: 'calc(9rem + 80px)' }}>
          <div className="about-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-img" src="/piramide.png" alt="Pirámide de Teotihuacan" />
            <div className="about-img-border" />
            <div className="about-tag">25 años de práctica</div>
          </div>
          <div className="about-text-col">
            <p className="about-eyebrow">Sobre el fundador</p>
            <h2 className="about-name">
              Aldo A.<br /><em>Guagnelli Nuñez</em>
            </h2>
            <p className="about-role">Abogado · Etnohistoriador · Especialista en Derechos Humanos</p>
            <p className="about-body">
              Especialista con más de 25 años de trayectoria profesional combinando
              el rigor jurídico con la perspectiva etnohistórica. Ofrece representación
              legal integral a comunidades indígenas, organizaciones civiles y sectores
              público y privado. Su labor se sustenta en la defensa de la cultura como
              derecho humano irrenunciable, conforme a la legislación nacional e
              internacional vigente.
            </p>
            <div className="about-grid">
              <div className="about-cell">
                <span className="about-cell-label">Especialidad</span>
                <span className="about-cell-val">Derechos Humanos y Derecho Cultural</span>
              </div>
              <div className="about-cell">
                <span className="about-cell-label">Enfoque</span>
                <span className="about-cell-val">Perspectiva intercultural y etnohistórica</span>
              </div>
              <div className="about-cell">
                <span className="about-cell-label">Experiencia</span>
                <span className="about-cell-val">25 años de práctica profesional</span>
              </div>
              <div className="about-cell">
                <span className="about-cell-label">Cobertura</span>
                <span className="about-cell-val">CDMX y República Mexicana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÁREAS ─── */}
      <div className="areas-section">
        <div className="areas-inner">
          <span className="areas-label">Áreas de atención</span>
          <span className="areas-sep" />
          <ul className="areas-list">
            {AREAS.map((a) => <li key={a} className="area-pill">{a}</li>)}
          </ul>
        </div>
      </div>

      {/* ─── PÚBLICO OBJETIVO ─── */}
      <section style={{ background: 'var(--warm)', padding: '8rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(168,144,96,.18)' }}>
            <div>
              <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.3rem' }}>
                <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                ¿A quién atendemos?
              </p>
              <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)' }}>
                Nuestro<br />público
              </h2>
            </div>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.85 }}>
              Atendemos a quienes enfrentan situaciones donde el derecho y la cultura se intersectan — desde comunidades que defienden su territorio hasta instituciones que gestionan patrimonio histórico.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {PUBLICO.map(({ title, desc }, i) => (
              <div key={title} style={{ background: 'var(--off-wh)', border: '1px solid rgba(168,144,96,.12)', padding: '2rem 2.2rem', position: 'relative', overflow: 'hidden' }}>
                <span style={{ fontFamily: 'var(--f-serif)', fontSize: '3rem', fontWeight: 600, color: 'rgba(168,144,96,.12)', lineHeight: 1, display: 'block', marginBottom: '.8rem', letterSpacing: '-.03em' }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '.6rem' }}>{title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--stone)', lineHeight: 1.75 }}>{desc}</p>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORTE VISUAL ─── */}
      <div className="vbreak">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="vbreak-img" src="/hero.jpg" alt="Tradición y cultura" />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">"La cultura y la diversidad cultural son derechos humanos irrenunciables."</p>
          <span className="vbreak-source">Misión · Guagnelli Consultoría</span>
        </div>
      </div>

      {/* ─── MISIÓN / VISIÓN ─── */}
      <section className="mv-section">
        <div className="mv-pane mv-pane--left">
          <span className="mv-tag">Misión</span>
          <h3 className="mv-title">Justicia con<br />dimensión social</h3>
          <p className="mv-text">
            Brindar servicios jurídicos y de representación legal con dimensión
            social, entendiendo la cultura y la diversidad cultural como derechos
            humanos de acuerdo con la legislación nacional e internacional.
          </p>
        </div>
        <div className="mv-pane mv-pane--right">
          <span className="mv-tag">Visión</span>
          <h3 className="mv-title">Cultura como<br />herramienta</h3>
          <p className="mv-text">
            Contribuir al fortalecimiento de los derechos humanos como
            herramientas de cambio social a través de la cultura, impulsando
            comunidades más justas, plurales e interculturales.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div style={{ background: 'var(--cream)', padding: '5rem 3.5rem', textAlign: 'center' as const }}>
        <p style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '2rem' }}>
          ¿Tienes un caso que atender?
        </p>
        <Link href="/contacto" className="btn-send" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Solicitar consulta →
        </Link>
      </div>
    </>
  )
}
