import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Representación jurídica integral con perspectiva intercultural. Derecho cultural, indígena, civil, administrativo y constitucional.',
  openGraph: {
    title: 'Servicios · Guagnelli | Consultoría Jurídica Cultural',
    description: 'Representación jurídica integral con perspectiva intercultural. Derecho cultural, indígena, civil, administrativo y constitucional.',
    url: 'https://consultoria-guag.vercel.app/servicios',
    siteName: 'Guagnelli · Consultoría Jurídica Cultural',
    images: [{ url: 'https://consultoria-guag.vercel.app/website/1.png', width: 1200, height: 630, alt: 'Servicios · Guagnelli Consultoría Jurídica Cultural' }],
    locale: 'es_MX',
    type: 'website',
  },
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
      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', background: 'var(--dark)', paddingTop: 'calc(7rem + 80px)', paddingBottom: '7rem', paddingLeft: '3.5rem', paddingRight: '3.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--gold), var(--gold-lt), var(--gold), transparent)', zIndex: 2 }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(20%) brightness(.35) contrast(1.1)', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(18,15,10,.95) 0%, rgba(18,15,10,.55) 100%)', zIndex: 1 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '2rem' }}>
              <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              Representación integral
            </p>
            <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3rem, 5.5vw, 6rem)', fontWeight: 600, lineHeight: .93, color: '#FAF6F0', letterSpacing: '-.01em' }}>
              Servicios<br /><em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Jurídicos</em>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, justifyContent: 'flex-end', gap: '2rem' }}>
            <p style={{ fontSize: '.95rem', color: 'rgba(250,246,240,.4)', lineHeight: 1.85 }}>
              Atención personalizada en las áreas del derecho que más impactan a personas, familias, organizaciones y empresas — con el enfoque intercultural que nos distingue.
            </p>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(168,144,96,.5)' }}>
              <span>05 servicios generales</span>
              <span style={{ color: 'rgba(168,144,96,.25)' }}>·</span>
              <span>03 especializados</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          {['Derecho Civil', 'Derecho Laboral', 'Derecho Administrativo', 'Propiedad Intelectual', 'Derecho Constitucional', 'Derecho Cultural', 'Derecho Indígena', 'Peritaje Cultural', 'Derecho Civil', 'Derecho Laboral', 'Derecho Administrativo', 'Propiedad Intelectual', 'Derecho Constitucional', 'Derecho Cultural', 'Derecho Indígena', 'Peritaje Cultural'].map((k, i, arr) => (
            <span key={i} className="marquee-text">{k}{i < arr.length - 1 ? '  ·  ' : ''}</span>
          ))}
        </div>
      </div>

      {/* ─── BLOQUE GENERAL ─── */}
      <section className="services-section">
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

      {/* ─── SEPARADOR ESPECIALIZADO con imagen ─── */}
      <div className="srv-diferenciador">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="srv-dif-photo" src="/piramide.png" alt="" aria-hidden="true" />
        <div className="srv-dif-fade" />
        <div className="srv-dif-body">
          <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>El diferenciador</span>
          <p style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: '#FAF6F0', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Servicios<br />Especializados
          </p>
          <p style={{ fontSize: '.88rem', color: 'rgba(194,180,162,.5)', lineHeight: 1.85, maxWidth: 460 }}>
            Pocas consultorías en México cubren el derecho cultural e indígena. Esta es la especialidad que distingue a Guagnelli — 25 años en la intersección entre el derecho, la cultura y los pueblos.
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
