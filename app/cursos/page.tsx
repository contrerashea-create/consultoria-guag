import type { Metadata } from 'next'
import Link from 'next/link'
import CursosGrid from './CursosGrid'

export const metadata: Metadata = {
  title: 'Cursos & Talleres · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Capacitación especializada en derechos humanos, derechos culturales e interculturalidad para instituciones, organizaciones y comunidades.',
  openGraph: {
    title: 'Cursos & Talleres · Guagnelli | Consultoría Jurídica Cultural',
    description: 'Capacitación especializada en derechos humanos, derechos culturales e interculturalidad para instituciones, organizaciones y comunidades.',
    url: 'https://consultoria-guag.vercel.app/cursos',
    siteName: 'Guagnelli · Consultoría Jurídica Cultural',
    images: [{ url: 'https://consultoria-guag.vercel.app/website/1.png', width: 1200, height: 630, alt: 'Cursos & Talleres · Guagnelli Consultoría Jurídica Cultural' }],
    locale: 'es_MX',
    type: 'website',
  },
}

const PARA_QUIEN = [
  { n: '01', title: 'Instituciones públicas', desc: 'Dependencias de gobierno, museos, organismos culturales y educativos que necesitan formación especializada.' },
  { n: '02', title: 'OSC y organizaciones',   desc: 'Asociaciones y colectivos que trabajan en derechos humanos, cultura e interculturalidad.' },
  { n: '03', title: 'Comunidades y pueblos',  desc: 'Grupos indígenas y afromexicanos que buscan conocer y defender sus derechos colectivos.' },
]

export default function Cursos() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ background: 'var(--warm)', paddingTop: 'calc(7rem + 80px)', paddingBottom: '6rem', paddingLeft: '3.5rem', paddingRight: '3.5rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(168,144,96,.18)' }}>
        <span aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--f-serif)', fontSize: '42vw', fontWeight: 700, lineHeight: .85, color: 'transparent', WebkitTextStroke: '1px rgba(168,144,96,.07)', right: '-2vw', bottom: '-8vw', letterSpacing: '-.04em', userSelect: 'none', pointerEvents: 'none' }}>09</span>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '2.5rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            Formación especializada
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end' }}>
            <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3.2rem, 6vw, 6.5rem)', fontWeight: 600, lineHeight: .9, color: 'var(--ink)', letterSpacing: '-.02em' }}>
              Cursos<br />&amp;<br /><em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Talleres</em>
            </h1>
            <div>
              <p style={{ fontSize: '.95rem', color: 'var(--stone)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                Capacitación especializada en derechos humanos, derechos culturales e interculturalidad para instituciones, organizaciones y comunidades.
              </p>
              <span style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' as const, color: 'rgba(168,144,96,.5)', borderBottom: '1px solid rgba(168,144,96,.2)', paddingBottom: '.4rem', display: 'inline-block' }}>9 cursos disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRID INTERACTIVO ─── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <CursosGrid />
        </div>
      </section>

      {/* ─── CORTE VISUAL ─── */}
      <div className="vbreak" style={{ height: 380 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="vbreak-img" src="/vbreak.jpg" alt="Patrimonio cultural" />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">"La formación en derechos culturales transforma la manera en que personas e instituciones entienden su responsabilidad con el patrimonio."</p>
        </div>
      </div>

      {/* ─── PARA QUIÉN ─── */}
      <section style={{ background: 'var(--warm)', padding: '7rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(168,144,96,.18)' }}>
            <div>
              <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
                <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                Dirigido a
              </p>
              <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)' }}>
                ¿Para<br />quién?
              </h2>
            </div>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.85 }}>
              Los cursos y talleres se adaptan al perfil, nivel y objetivos del grupo. Pueden impartirse en modalidad presencial o en línea.
            </p>
          </div>
          <div className="proceso-grid" style={{ border: '1px solid rgba(168,144,96,.15)' }}>
            {PARA_QUIEN.map(({ n, title, desc }) => (
              <div key={n} className="proceso-step">
                <span style={{ fontFamily: 'var(--f-serif)', fontSize: '3.5rem', fontWeight: 600, color: 'rgba(168,144,96,.12)', lineHeight: 1, display: 'block', marginBottom: '1.2rem' }}>{n}</span>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '.7rem' }}>{title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--stone)', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AMALI ─── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 3.5rem', borderTop: '1px solid rgba(168,144,96,.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
              <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              Organización aliada
            </p>
            <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              AMALI
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Guagnelli Consultoría colabora con AMALI, organización dedicada a la formación, gestión y difusión de servicios culturales.
            </p>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.85 }}>
              Esta alianza amplía la oferta formativa con programas que combinan perspectiva jurídica y gestión cultural — pensados para instituciones, comunidades y profesionales del sector.
            </p>
          </div>
          <div style={{ background: 'var(--warm)', border: '1px solid rgba(168,144,96,.2)', padding: '3rem', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '.55rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' as const, color: 'rgba(168,144,96,.4)' }}>Alianza estratégica</span>
            <p style={{ fontFamily: 'var(--f-serif)', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.75, marginBottom: '2rem' }}>
              "La formación y el derecho son dos caras de la misma moneda cuando se trata de proteger la cultura."
            </p>
            <span style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'var(--gold)' }}>Guagnelli × AMALI</span>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div style={{ background: 'var(--dark)', padding: '6rem 3.5rem', textAlign: 'center' as const }}>
        <p style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#FAF6F0', marginBottom: '.8rem' }}>
          ¿Necesitas capacitación para tu equipo?
        </p>
        <p style={{ fontSize: '.9rem', color: 'rgba(250,246,240,.35)', marginBottom: '3rem' }}>Diseñamos el programa a la medida de tus objetivos.</p>
        <Link href="/contacto" className="hero-cta">Solicitar consulta</Link>
      </div>
    </>
  )
}
