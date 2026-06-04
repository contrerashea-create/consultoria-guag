import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'Derecho Cultural · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Asesoría especializada en derecho cultural, patrimonio tangible e intangible, derechos culturales y memoria histórica en México.',
  openGraph: {
    title: 'Derecho Cultural · Guagnelli | Consultoría Jurídica Cultural',
    description: 'Asesoría especializada en derecho cultural, patrimonio tangible e intangible, derechos culturales y memoria histórica en México.',
    url: 'https://consultoria-guag.vercel.app/derecho-cultural',
    siteName: 'Guagnelli · Consultoría Jurídica Cultural',
    images: [{ url: 'https://consultoria-guag.vercel.app/website/1.png', width: 1200, height: 630, alt: 'Derecho Cultural · Guagnelli Consultoría Jurídica Cultural' }],
    locale: 'es_MX',
    type: 'website',
  },
}

const RAMAS = [
  { title: 'Patrimonio Cultural', desc: 'Tangible (monumentos, zonas arqueológicas, museos) e intangible (tradiciones, lenguas, rituales, conocimientos).' },
  { title: 'Derechos Culturales', desc: 'Derecho humano a participar en la vida cultural, acceder al patrimonio y que se respete la identidad de cada persona y comunidad.' },
  { title: 'Propiedad Intelectual Cultural', desc: 'Protección de obras artísticas, artesanías, expresiones culturales tradicionales y conocimientos de pueblos indígenas.' },
  { title: 'Memoria Histórica', desc: 'Derecho a la verdad, a la preservación de la historia y a la reparación cuando la memoria colectiva ha sido vulnerada.' },
  { title: 'Regulación Cultural', desc: 'Marco normativo que regula museos, galerías, importación/exportación de arte, fomento cultural y gestión del patrimonio.' },
  { title: 'Litigio Estratégico', desc: 'Defensa de derechos culturales ante tribunales nacionales e internacionales, comisiones de derechos humanos y organismos de la ONU.' },
]

export default function DerechoCultural() {
  return (
    <>
      {/* ─── HERO con imagen de fondo ─── */}
      <section style={{ position: 'relative', background: 'var(--dark)', paddingTop: 'calc(7rem + 80px)', paddingBottom: '7rem', paddingLeft: '3.5rem', paddingRight: '3.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-lt), var(--gold), transparent)', zIndex: 2 }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vbreak.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(20%) brightness(.4) contrast(1.1)', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(18,15,10,.95) 0%, rgba(18,15,10,.65) 100%)', zIndex: 1 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '2rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            El diferenciador
          </p>
          <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 600, lineHeight: .95, color: '#FAF6F0', marginBottom: '2rem', letterSpacing: '-.01em' }}>
            Derecho<br /><em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Cultural</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(250,246,240,.5)', maxWidth: 560, lineHeight: 1.8, marginBottom: '3rem' }}>
            Una rama del derecho poco conocida pero fundamental — protege el patrimonio, las tradiciones, las lenguas y los derechos culturales de personas, comunidades e instituciones.
          </p>
          <Link href="/contacto" className="hero-cta">Solicitar consulta</Link>
        </div>
      </section>

      {/* ─── QUÉ ES: imagen izquierda + texto derecha ─── */}
      <section style={{ background: 'var(--warm)', padding: '8rem 3.5rem' }}>
        <div className="dc-quees-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Imagen */}
          <div style={{ position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="dc-quees-img"
              src="/piramide.png"
              alt="Pirámide de Teotihuacan"
            />
            <div style={{ position: 'absolute', bottom: '1.5rem', right: 0, background: 'var(--gold)', color: 'var(--dark)', padding: '.6rem 1.4rem', fontFamily: 'var(--f-serif)', fontSize: '.85rem', fontWeight: 700, letterSpacing: '.02em' }}>
              25 años de práctica
            </div>
          </div>

          {/* Texto */}
          <div>
            <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.3rem' }}>
              <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              ¿Qué es?
            </p>
            <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '2rem' }}>
              La cultura<br />como derecho<br />humano
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              El derecho cultural es la rama jurídica que regula todo lo relacionado con la cultura, el patrimonio y la identidad. En México está reconocido en la Constitución y en tratados internacionales que México ha ratificado.
            </p>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.9 }}>
              Pocas consultorías en México tienen la especialización para atender estos casos. Guagnelli lleva 25 años en la intersección entre el derecho, la cultura y los pueblos.
            </p>
          </div>
        </div>
      </section>

      {/* ─── RAMAS: grid 3 columnas ─── */}
      <section style={{ background: 'var(--cream)', padding: '7rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            Ramas principales
          </p>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '4rem' }}>
            Áreas de<br />especialización
          </h2>
          <div className="dc-ramas-grid">
            {RAMAS.map(({ title, desc }) => (
              <div key={title} style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '.6rem' }}>{title}</h3>
                <p style={{ fontSize: '.82rem', color: 'var(--stone)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUÁNDO APLICA ─── */}
      <section style={{ background: 'var(--warm)', padding: '7rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            Situaciones concretas
          </p>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1rem' }}>
            ¿Cuándo aplica<br />el derecho cultural?
          </h2>
          <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.8, maxWidth: 560, marginBottom: '4rem' }}>
            Aparece en más situaciones cotidianas de lo que parece. Estas son algunas de las más frecuentes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🏛', title: 'Trámites en zonas históricas', desc: 'Intervenciones, remodelaciones o negocios en centros históricos o zonas con declaratoria de patrimonio.' },
              { icon: '🎨', title: 'Importación y exportación de arte', desc: 'Movimiento de piezas artísticas, antigüedades o bienes culturales a través de aduanas nacionales e internacionales.' },
              { icon: '🪶', title: 'Derechos de comunidades indígenas', desc: 'Defensa del territorio, lengua, tradiciones y formas de gobierno propias ante instituciones del Estado.' },
              { icon: '📜', title: 'Propiedad intelectual colectiva', desc: 'Protección de artesanías, conocimientos tradicionales y expresiones culturales de pueblos y comunidades.' },
              { icon: '🎭', title: 'Gestión de instituciones culturales', desc: 'Museos, galerías, fundaciones y centros culturales que necesitan navegar el marco normativo del sector.' },
              { icon: '⚖️', title: 'Litigios por patrimonio cultural', desc: 'Conflictos ante tribunales o comisiones de derechos humanos relacionados con bienes o prácticas culturales.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: 'var(--cream)', border: '1px solid rgba(168,144,96,.15)', padding: '2rem', borderRadius: 2, transition: 'border-color .2s' }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '.5rem', lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: '.8rem', color: 'var(--stone)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORTE VISUAL con hero.jpg ─── */}
      <div className="vbreak">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="vbreak-img" src="/hero.jpg" alt="Patrimonio cultural mexicano" />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">"La cultura es un derecho humano — y como tal, es exigible ante la ley."</p>
          <span className="vbreak-source">Aldo A. Guagnelli Nuñez</span>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <section style={{ background: 'var(--warm)', padding: '8rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(168,144,96,.18)' }}>
            <div>
              <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.3rem' }}>
                <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                Casos frecuentes
              </p>
              <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)' }}>
                ¿Tu caso<br />aplica?
              </h2>
            </div>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.85 }}>
              El derecho cultural aparece en situaciones cotidianas que muchas veces no reconocemos como legales. Aquí algunos ejemplos reales.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: 'var(--dark)', padding: '6rem 3.5rem', textAlign: 'center' as const }}>
        <p style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#FAF6F0', marginBottom: '.8rem' }}>
          ¿Tienes dudas sobre tu caso?
        </p>
        <p style={{ fontSize: '.9rem', color: 'rgba(250,246,240,.4)', marginBottom: '3rem' }}>La primera orientación es sin costo.</p>
        <Link href="/contacto" className="hero-cta">Solicitar consulta</Link>
      </section>
    </>
  )
}
