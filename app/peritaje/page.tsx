import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Peritaje Cultural · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Dictámenes periciales antropológicos y etnohistóricos para procesos legales. Análisis de documentos históricos y transcripción paleográfica.',
}

const DISCIPLINAS = [
  { n: '01', name: 'Peritaje Antropológico',     desc: 'Dictámenes con perspectiva sociocultural e intercultural para procesos judiciales.' },
  { n: '02', name: 'Peritaje Etnohistórico',     desc: 'Análisis e interpretación de fuentes históricas relativas a pueblos y comunidades.' },
  { n: '03', name: 'Documentos Cuestionados',    desc: 'Análisis de autenticidad de documentos históricos en contexto legal.' },
  { n: '04', name: 'Transcripción Paleográfica', desc: 'Lectura y transcripción de documentos coloniales y manuscritos históricos.' },
]

const PROCESO = [
  { n: '01', title: 'Consulta inicial',         desc: 'Evaluamos el caso, definimos el tipo de peritaje requerido y establecemos el alcance del dictamen.' },
  { n: '02', title: 'Investigación y análisis', desc: 'Revisión rigurosa de fuentes históricas, documentos, evidencias y contexto antropológico o etnohistórico.' },
  { n: '03', title: 'Dictaminación',            desc: 'Redacción y entrega del dictamen pericial con metodología académica y validez jurídica.' },
]

const APLICACIONES = [
  { n: '01', title: 'Juicios agrarios y territoriales', desc: 'Dictámenes para acreditar la identidad indígena y los derechos históricos sobre tierras y territorios comunales.' },
  { n: '02', title: 'Procesos penales interculturales', desc: 'Análisis del contexto cultural del imputado para garantizar el acceso a la justicia con perspectiva intercultural.' },
  { n: '03', title: 'Autenticidad documental',         desc: 'Peritaje de manuscritos coloniales y títulos primordiales cuestionados en litigios sucesorios o patrimoniales.' },
]

const KEYWORDS = [
  'Peritaje Antropológico', 'Etnohistoria', 'Transcripción Paleográfica',
  'Documentos Coloniales', 'Litigio Intercultural', 'Derechos Indígenas',
  'Dictaminación Pericial', 'Perspectiva Sociocultural', 'Fuentes Históricas',
]

export default function Peritaje() {
  const marqueeText = [...KEYWORDS, ...KEYWORDS].join('  ·  ')

  return (
    <>
      {/* ─── HERO: foto dramática a la derecha ─── */}
      <section className="per-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-lt), var(--gold), transparent)' }} />

        {/* Foto enorme, recortada a la derecha */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="per-hero-photo" src="/piramide.png" alt="" aria-hidden="true" />
        <div className="per-hero-photo-fade" />

        {/* "01" decorativo */}
        <span className="per-hero-bg-num" aria-hidden="true">01</span>

        {/* Eyebrow */}
        <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: 'auto', paddingBottom: '4rem', position: 'relative', zIndex: 2 }}>
          <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
          Guagnelli Consultoría · Servicio especializado
        </p>

        {/* Grid inferior */}
        <div className="per-hero-body">
          <div className="per-hero-left">
            <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3rem, 5vw, 5.5rem)', fontWeight: 600, lineHeight: .92, color: '#FAF6F0', letterSpacing: '-.02em' }}>
              Peritaje &amp;<br />Dictaminación<br /><em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Pericial</em>
            </h1>
          </div>
          <div className="per-hero-right">
            <p style={{ fontSize: '.92rem', color: 'rgba(250,246,240,.4)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Elaboración de dictámenes con perspectiva antropológica, sociocultural y etnohistórica para procesos legales. Rigor metodológico con validez jurídica.
            </p>
            <Link href="/contacto" className="hero-cta">Solicitar consulta</Link>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
        </div>
      </div>

      {/* ─── DISCIPLINAS: filas editoriales ─── */}
      <section style={{ background: 'var(--dark)', padding: '6rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(168,144,96,.12)', alignItems: 'end' }}>
            <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: '#FAF6F0' }}>
              Disciplinas<br />periciales
            </h2>
            <p style={{ fontSize: '.88rem', color: 'rgba(194,180,162,.4)', lineHeight: 1.85 }}>
              Cada disciplina aporta una perspectiva distinta al proceso legal. La combinación de etnohistoria, antropología y paleografía permite dictámenes de alto rigor académico.
            </p>
          </div>
          {DISCIPLINAS.map(({ n, name, desc }) => (
            <div key={n} className="disciplinas-row">
              <span style={{ fontFamily: 'var(--f-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'rgba(168,144,96,.35)' }}>{n}</span>
              <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600, color: '#FAF6F0', lineHeight: 1.2 }}>{name}</h3>
              <p style={{ fontSize: '.85rem', color: 'rgba(194,180,162,.4)', lineHeight: 1.7 }}>{desc}</p>
              <span style={{ width: 24, height: 1, background: 'rgba(168,144,96,.3)', display: 'block', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROCESO ─── */}
      <section style={{ background: 'var(--warm)', padding: '7rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            Cómo trabajamos
          </p>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '4rem' }}>
            Proceso de<br />dictaminación
          </h2>
          <div className="proceso-grid" style={{ border: '1px solid rgba(168,144,96,.15)' }}>
            {PROCESO.map(({ n, title, desc }) => (
              <div key={n} className="proceso-step">
                <span style={{ fontFamily: 'var(--f-serif)', fontSize: '3.5rem', fontWeight: 600, color: 'rgba(168,144,96,.15)', lineHeight: 1, display: 'block', marginBottom: '1.2rem' }}>{n}</span>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '.7rem' }}>{title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--stone)', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APLICACIONES ─── */}
      <section style={{ background: 'var(--dark)', padding: '7rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(168,144,96,.12)' }}>
            <div>
              <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.2rem' }}>
                <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                Casos de aplicación
              </p>
              <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, lineHeight: 1.05, color: '#FAF6F0' }}>
                ¿Cuándo se<br />necesita un perito?
              </h2>
            </div>
            <p style={{ fontSize: '.88rem', color: 'rgba(194,180,162,.45)', lineHeight: 1.85 }}>
              El peritaje cultural entra en juego cuando el juez necesita un experto en cultura, historia o antropología para resolver un caso.
            </p>
          </div>
          <div className="aplicaciones-grid">
            {APLICACIONES.map(({ n, title, desc }) => (
              <div key={n} className="aplicacion-item">
                <span style={{ fontFamily: 'var(--f-serif)', fontSize: '5rem', fontWeight: 700, color: 'rgba(168,144,96,.1)', lineHeight: 1, display: 'block', marginBottom: '1.5rem', letterSpacing: '-.04em' }}>{n}</span>
                <div style={{ width: 32, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.3rem', fontWeight: 600, color: '#FAF6F0', lineHeight: 1.2, marginBottom: '1rem' }}>{title}</h3>
                <p style={{ fontSize: '.85rem', color: 'rgba(194,180,162,.45)', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div className="vbreak">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="vbreak-img" src="/vbreak.jpg" alt="Patrimonio cultural" />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">"¿Necesitas un dictamen pericial? La primera consulta es sin costo."</p>
          <Link href="/contacto" className="hero-cta" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Solicitar consulta</Link>
        </div>
      </div>
    </>
  )
}
