import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Derecho Cultural · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Asesoría especializada en derecho cultural, patrimonio tangible e intangible, derechos culturales y memoria histórica en México.',
}

const FAQ = [
  {
    q: '¿Qué pasa si quiero remodelar un inmueble en el Centro Histórico?',
    a: 'Los inmuebles ubicados en zonas de monumentos históricos están sujetos a la Ley Federal sobre Monumentos y Zonas Arqueológicos. Cualquier modificación requiere autorización del INAH. Te acompañamos en todo el proceso de trámite y representación ante la institución.',
  },
  {
    q: '¿Cómo puedo importar o exportar una obra de arte?',
    a: 'La importación y exportación de bienes culturales en México está regulada por la Secretaría de Cultura y el INAH. Existen restricciones específicas para piezas prehispánicas, coloniales y de autor. Analizamos tu caso y gestionamos los permisos correspondientes.',
  },
  {
    q: '¿Qué son los derechos culturales y cómo me afectan?',
    a: 'Los derechos culturales son derechos humanos reconocidos en la Constitución y tratados internacionales. Incluyen el derecho a participar en la vida cultural, acceder al patrimonio y que se respete tu identidad cultural. Son exigibles ante tribunales nacionales e internacionales.',
  },
  {
    q: '¿Puedo proteger legalmente las tradiciones o conocimientos de mi comunidad?',
    a: 'Sí. A través del derecho indígena y la propiedad intelectual colectiva es posible proteger conocimientos tradicionales, expresiones culturales y recursos genéticos. El proceso varía según el tipo de conocimiento y la comunidad involucrada.',
  },
  {
    q: '¿Qué hago si una institución violó los derechos culturales de mi comunidad?',
    a: 'Existen vías administrativas y judiciales para exigir la restitución de derechos culturales. Desde quejas ante comisiones de derechos humanos hasta amparos y acciones ante organismos internacionales. Evaluamos el caso y definimos la estrategia más efectiva.',
  },
]

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
      {/* ─── HERO ─── */}
      <section style={{ background: 'var(--dark)', paddingTop: 'calc(7rem + 80px)', paddingBottom: '7rem', paddingLeft: '3.5rem', paddingRight: '3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-lt), var(--gold), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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

      {/* ─── QUÉ ES ─── */}
      <section style={{ background: 'var(--warm)', padding: '8rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(168,144,96,.15)', border: '1px solid rgba(168,144,96,.15)' }}>
            {RAMAS.map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--warm)', padding: '1.8rem', transition: 'background .2s' }}>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '.6rem' }}>{title}</h3>
                <p style={{ fontSize: '.82rem', color: 'var(--stone)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: 'var(--cream)', padding: '8rem 3.5rem' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {FAQ.map(({ q, a }, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(168,144,96,.18)', padding: '2rem 0' }}>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '1rem' }}>{q}</h3>
                <p style={{ fontSize: '.88rem', color: 'var(--stone)', lineHeight: 1.85 }}>{a}</p>
              </div>
            ))}
          </div>
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
