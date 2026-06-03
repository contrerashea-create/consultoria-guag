import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portafolio · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Casos representativos y trabajos realizados por Guagnelli Consultoría Jurídica Cultural.',
}

const CASOS = [
  {
    area: 'Derecho Indígena',
    titulo: 'Defensa de derechos territoriales de comunidad nahua',
    desc: 'Representación legal de una comunidad del Estado de México en conflicto por límites territoriales con el municipio. Resultado: reconocimiento de tierras comunales ante tribunal agrario.',
    año: '2023',
  },
  {
    area: 'Derecho Cultural',
    titulo: 'Trámite de autorización ante INAH para restauración de inmueble histórico',
    desc: 'Gestión integral de permisos ante el Instituto Nacional de Antropología e Historia para la restauración de un inmueble del siglo XVIII en el Centro Histórico de la Ciudad de México.',
    año: '2022',
  },
  {
    area: 'Peritaje Etnohistórico',
    titulo: 'Dictamen pericial en proceso de restitución de bienes culturales',
    desc: 'Elaboración de dictamen etnohistórico para determinar la procedencia y valor patrimonial de piezas arqueológicas en litigio internacional. Presentado ante juzgado federal.',
    año: '2023',
  },
  {
    area: 'Propiedad Intelectual',
    titulo: 'Registro de marca colectiva para artesanos de Oaxaca',
    desc: 'Asesoría y trámite de registro de marca colectiva ante el IMPI para una cooperativa de artesanos textiles de la Sierra Juárez. Protección de diseños tradicionales zapotecos.',
    año: '2021',
  },
  {
    area: 'Derecho Constitucional',
    titulo: 'Amparo por violación al derecho a la consulta indígena',
    desc: 'Litigio estratégico en defensa del derecho a la consulta previa, libre e informada de una comunidad otomí ante la imposición de un proyecto de infraestructura en su territorio.',
    año: '2022',
  },
  {
    area: 'Formación',
    titulo: 'Curso de derechos culturales para funcionarios del INBA',
    desc: 'Impartición de curso especializado sobre derechos culturales, patrimonio y legislación aplicable para personal del Instituto Nacional de Bellas Artes. 40 horas, presencial.',
    año: '2023',
  },
]

const AREAS_COLOR: Record<string, string> = {
  'Derecho Indígena': 'var(--gold)',
  'Derecho Cultural': 'var(--stone)',
  'Peritaje Etnohistórico': 'var(--ink)',
  'Propiedad Intelectual': 'var(--gold-lt)',
  'Derecho Constitucional': 'var(--arena)',
  'Formación': 'var(--gold)',
}

export default function Portafolio() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section style={{ background: 'var(--warm)', paddingTop: 'calc(7rem + 80px)', paddingBottom: '6rem', paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1.3rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            Lo que hemos hecho
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }}>
            <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 600, lineHeight: .95, color: 'var(--ink)' }}>
              Casos &<br />Proyectos
            </h1>
            <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.85 }}>
              Una muestra de los casos, proyectos y cursos en los que hemos acompañado a clientes, comunidades e instituciones a lo largo de 25 años de práctica.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-strip" />

      {/* ─── CASOS ─── */}
      <section style={{ background: 'var(--off-wh)', padding: '6rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {CASOS.map(({ area, titulo, desc, año }) => (
              <div key={titulo} style={{ background: 'white', border: '1px solid rgba(168,144,96,.15)', padding: '2.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'var(--gold)' }}>{area}</span>
                  <span style={{ fontSize: '.72rem', color: 'var(--stone)' }}>{año}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>{titulo}</h3>
                <p style={{ fontSize: '.84rem', color: 'var(--stone)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div style={{ background: 'var(--cream)', padding: '5rem 3.5rem', textAlign: 'center' as const }}>
        <p style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '2rem' }}>
          ¿Tienes un caso similar?
        </p>
        <Link href="/contacto" className="btn-send" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Solicitar consulta →
        </Link>
      </div>
    </>
  )
}
