import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Representación jurídica integral con perspectiva intercultural. Derecho cultural, indígena, civil, administrativo y constitucional.',
}

const GENERAL = [
  { n:"01", name:"Derecho Civil",          items:["Contratos civiles y mercantiles","Regularización de inmuebles","Usucapión y prescripción","Sucesiones y herencias","Arrendamiento"] },
  { n:"02", name:"Derecho Laboral",         items:["Asesoría a trabajadores y empleadores","Conflictos laborales y despidos","Negociación colectiva","Conciliación ante CFCRL","Derechos sindicales"] },
  { n:"03", name:"Derecho Administrativo",  items:["Trámites ante dependencias públicas","Marcas colectivas — IMPI","Denominaciones de origen","Indicaciones geográficas","Recursos administrativos"] },
  { n:"04", name:"Propiedad Intelectual",   items:["Registro de obras ante INDAUTOR","Derechos de autor","Protección de creaciones artísticas","Licencias y cesiones","Propiedad intelectual colectiva"] },
  { n:"05", name:"Derecho Constitucional",  items:["Juicio de amparo","Garantías constitucionales","Acciones de inconstitucionalidad","Derechos fundamentales","Acciones en materia cultural"] },
]

const ESPECIALIZADO = [
  { n:"01", name:"Derecho Cultural",   items:["Asesoría al sector público, privado y OSC","INAH, INBA, INDAUTOR, INPI, INALI","Patrimonio tangible e intangible","Violación de derechos culturales","Derecho a la memoria histórica"] },
  { n:"02", name:"Derecho Indígena",   items:["Pueblos y comunidades indígenas y afromexicanas","Derechos colectivos e individuales","Propiedad intelectual colectiva","Títulos primordiales y territoriales","Litigio estratégico intercultural"] },
  { n:"03", name:"Peritaje Cultural",  items:["Dictámenes periciales antropológicos","Peritaje etnohistórico para procesos legales","Análisis de documentos históricos cuestionados","Transcripción paleográfica de fuentes coloniales","Perspectiva sociocultural e intercultural"] },
]

function ServiceRow({ n, name, items }: { n: string; name: string; items: string[] }) {
  return (
    <li className="srv-row">
      <span className="srv-n">{n}</span>
      <div className="srv-content">
        <h3 className="srv-name">{name}</h3>
        <ul className="srv-items">
          {items.map((it) => <li key={it} className="srv-item">{it}</li>)}
        </ul>
      </div>
      <span className="srv-chevron">›</span>
    </li>
  )
}

export default function Servicios() {
  return (
    <>
      {/* ─── BLOQUE GENERAL ─── */}
      <section className="services-section" style={{ paddingTop: 'calc(8rem + 80px)' }}>
        <div className="services-inner">
          <div className="services-head">
            <div>
              <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1rem' }}>
                <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                Servicios generales
              </span>
              <h2 className="services-title">Asesoría<br />Jurídica<br />Integral</h2>
            </div>
            <p className="services-intro">
              Representación legal en las áreas del derecho que más afectan a personas, familias, organizaciones y empresas. Atención personalizada con enfoque en resultados concretos.
            </p>
          </div>
          <ul>
            {GENERAL.map(({ n, name, items }) => <ServiceRow key={n} n={n} name={name} items={items} />)}
          </ul>
        </div>
      </section>

      {/* ─── SEPARADOR ESPECIALIZADO ─── */}
      <div style={{ background: 'var(--dark)', padding: '4rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <div style={{ flexShrink: 0 }}>
            <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'block', marginBottom: '.6rem' }}>El diferenciador</span>
            <p style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.15 }}>Servicios<br />Especializados</p>
          </div>
          <div style={{ width: 1, background: 'rgba(168,144,96,.2)', alignSelf: 'stretch', flexShrink: 0 }} />
          <p style={{ fontSize: '.88rem', color: 'rgba(194,180,162,.5)', lineHeight: 1.85, maxWidth: 560 }}>
            Pocas consultorías en México cubren el derecho cultural e indígena. Esta es la especialidad que distingue a Guagnelli — 25 años de experiencia en la intersección entre el derecho, la cultura y los pueblos.
          </p>
        </div>
      </div>

      {/* ─── BLOQUE ESPECIALIZADO ─── */}
      <section className="services-section" style={{ background: 'var(--cream)' }}>
        <div className="services-inner">
          <ul>
            {ESPECIALIZADO.map(({ n, name, items }) => <ServiceRow key={n} n={n} name={name} items={items} />)}
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div className="vbreak">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="vbreak-img" src="/vbreak.jpg" alt="Ruinas mayas en la costa" />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">"¿No sabes si tu caso aplica? Contáctanos — la primera orientación es sin costo."</p>
          <Link href="/contacto" className="hero-cta" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Solicitar consulta</Link>
        </div>
      </div>
    </>
  )
}
