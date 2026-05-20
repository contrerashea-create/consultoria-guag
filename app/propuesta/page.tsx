import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Propuesta · Guagnelli | HEA Consulting',
}

const modules = [
  {
    num: '01',
    title: 'Sitio Web Informativo',
    items: [
      'Diseño 100% responsivo (móvil, tablet, escritorio)',
      '6 secciones: Inicio, Nosotros, Servicios, Cursos, Peritaje, Contacto',
      'Formulario de contacto funcional',
      'SEO básico: metadatos, sitemap, descripciones',
      'Despliegue en producción',
    ],
  },
  {
    num: '02',
    title: 'Contenido, CMS y Agenda',
    items: [
      'Blog con categorías y buscador integrado',
      'Galería de videos (YouTube embeds)',
      'Sección de Podcast con player integrado',
      'Panel de administración sin necesidad de código',
      'Integración directa con Google Calendar',
      'Disponibilidad en tiempo real',
      'Confirmaciones automáticas por email al cliente y al abogado',
      'Sin doble reserva',
      'Embebida en el sitio web',
      'Gestión de citas desde el panel de administración',
    ],
  },
]

const consultingServices = [
  'Documentación estratégica',
  'Estudio de mercado',
  'Análisis de clientes y segmentación',
  'Papeleo y formatos empresariales',
  'Horas de consultoría 1 a 1',
]

const futureModules = [
  'Portal de Clientes',
  'Pagos en Línea',
  'Biblioteca de Recursos Jurídicos',
  'Newsletter / Email Marketing',
]

const timeline = [
  {
    phase: 'Fase 1',
    weeks: 'Semanas 1 – 3',
    title: 'Sitio Web Informativo',
    tasks: ['Diseño y maquetado', 'Desarrollo de secciones', 'Formulario de contacto', 'Deploy en producción'],
  },
  {
    phase: 'Fase 2',
    weeks: 'Semanas 4 – 6',
    title: 'Contenido, CMS y Agenda',
    tasks: ['Configuración del CMS', 'Blog, videos y podcast', 'Integración Google Calendar', 'Pruebas y capacitación'],
  },
]

const deliverables = [
  'Sitio web en producción bajo dominio propio',
  'Panel de administración de contenidos',
  'Blog, galería de videos y podcast operativos',
  'Agenda integrada con Google Calendar',
  'Confirmaciones automáticas por email',
  'Formulario de contacto funcional',
  'Diseño responsivo (móvil, tablet, desktop)',
  'SEO técnico configurado',
  '30 días de soporte post-lanzamiento',
]

const clientNeeds = [
  'Fotografías y texto del fundador',
  'Logo en alta resolución',
  'Fotografías para las secciones del sitio',
  'Acceso al dominio actual',
  'Cuenta de Google (Calendar y Gmail)',
  'Contenido inicial del blog (opcional)',
]

const pricing = [
  { label: 'Módulo 01 – Sitio Web Informativo', price: '$7,000 MXN', highlight: false },
  { label: 'Módulo 02 – Contenido, CMS y Agenda', price: '$7,000 MXN', highlight: false },
  { label: 'Total desarrollo', price: '$14,000 MXN', highlight: true },
  { label: 'Hosting + Dominio (anual)', price: '$2,000 MXN/año', highlight: false },
  { label: 'Paquete de Branding', price: 'INCLUIDO', highlight: false },
]

const roiPoints = [
  {
    metric: '2–3',
    unit: 'nuevos clientes',
    description: 'Bastan para recuperar toda la inversión en desarrollo, dependiendo del valor de cada caso.',
  },
  {
    metric: '24/7',
    unit: 'disponibilidad',
    description: 'El sitio trabaja por ti aunque no estés, captando consultas y agendando citas automáticamente.',
  },
  {
    metric: '5+ hrs',
    unit: 'ahorradas por semana',
    description: 'La agenda automatizada elimina el ir y venir de mensajes para coordinar citas.',
  },
  {
    metric: '100%',
    unit: 'tuyo',
    description: 'Sin depender de redes sociales o directorios. Tu plataforma, tu audiencia, tu marca.',
  },
]

const nextSteps = [
  { n: '01', text: 'Firma de contrato' },
  { n: '02', text: 'Pago del 50% para iniciar el proyecto' },
  { n: '03', text: 'Kickoff: alineación de tiempos, accesos y contenido' },
  { n: '04', text: 'Inicio de desarrollo — Fase 1 lista en 3 semanas' },
]

function Eyebrow({ label, light }: { label: string; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
      <div style={{ width: '1.75rem', height: '2px', backgroundColor: 'var(--gold)', flexShrink: 0 }} />
      <p style={{
        color: light ? 'rgba(255,255,255,0.5)' : 'var(--gold)',
        fontSize: '0.62rem',
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        margin: 0,
      }}>{label}</p>
    </div>
  )
}

export default function PropuestaPage() {
  return (
    <div style={{ fontFamily: 'var(--f-sans)', backgroundColor: 'var(--warm)', color: 'var(--ink)' }}>

      {/* NAV */}
      <nav style={{
        backgroundColor: 'var(--dark)',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
          ← Volver al sitio
        </Link>
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>HEA Consulting</p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', lineHeight: 1.2, margin: 0 }}>Empowering Innovation</p>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(145deg, #090705 0%, #1c1409 45%, #0a0806 100%)',
        color: 'white',
        padding: '7rem 1.5rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent 0%, var(--gold) 40%, transparent 100%)' }} />
        <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '32rem', height: '32rem', borderRadius: '50%', border: '1px solid rgba(168,144,96,0.09)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: '20rem', height: '20rem', borderRadius: '50%', border: '1px solid rgba(168,144,96,0.06)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <p style={{ color: 'var(--gold)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>
              Propuesta Técnica y Comercial · Mayo 2026
            </p>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, backgroundColor: 'rgba(168,144,96,0.12)', color: 'var(--gold)', padding: '0.25rem 0.9rem', borderRadius: '9999px', border: '1px solid rgba(168,144,96,0.25)' }}>
              Vigencia: 30 días
            </span>
          </div>
          <p style={{ fontFamily: 'var(--f-serif)', color: 'rgba(255,255,255,0.35)', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
            Guagnelli · Consultoría Jurídica Cultural
          </p>
          <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(3rem, 7.5vw, 5.5rem)', fontWeight: 700, lineHeight: 0.97, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            Presencia Digital<br />
            <span style={{ color: 'var(--gold)' }}>con Identidad Jurídica</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', maxWidth: '34rem', lineHeight: 1.8, margin: 0 }}>
            Sitio web profesional con gestión de contenidos propia y agenda de consultas integrada directamente con Google Calendar.
          </p>
        </div>
      </section>

      {/* RESUMEN EJECUTIVO */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Resumen ejecutivo" />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            ¿De qué se trata este proyecto?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'El negocio', text: 'Guagnelli es una consultoría jurídica especializada con 25 años de experiencia en derechos humanos, derecho cultural e indígena, con presencia en CDMX y la República Mexicana.' },
              { title: 'La oportunidad', text: 'Una consultoría de este nivel requiere una presencia digital que refleje su autoridad, genere confianza y facilite el contacto con nuevos clientes de forma profesional y autónoma.' },
              { title: 'La solución', text: 'Sitio web de alto impacto con sistema de gestión de contenidos propio y agenda de consultas integrada directamente con Google Calendar, sin depender de plataformas de terceros.' },
            ].map(({ title, text }) => (
              <div key={title} style={{
                borderRadius: '1.25rem',
                padding: '1.75rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                borderTop: '3px solid var(--gold)',
                borderRight: '1px solid var(--sand)',
                borderBottom: '1px solid var(--sand)',
                borderLeft: '1px solid var(--sand)',
              }}>
                <p style={{ color: 'var(--gold)', fontSize: '0.68rem', fontWeight: 700, marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{title}</p>
                <p style={{ color: 'var(--stone)', fontSize: '0.85rem', lineHeight: 1.8, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section style={{ backgroundColor: 'var(--warm)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Alcance del proyecto" />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            2 módulos, una sola plataforma
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {modules.map(({ num, title, items }, i) => (
              <div key={num} style={{
                backgroundColor: 'white',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 8px 36px rgba(0,0,0,0.09)',
                border: '1px solid var(--sand)',
              }}>
                <div style={{
                  background: i === 0
                    ? 'linear-gradient(120deg, #111008 0%, #2a1f0a 100%)'
                    : 'linear-gradient(120deg, #b8963c 0%, #d4aa58 100%)',
                  padding: '1.35rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}>
                  <span style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>{num}</span>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{title}</h3>
                </div>
                <ul style={{ padding: '1.5rem 1.75rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem 2.5rem', margin: 0, listStyle: 'none' }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.83rem', color: 'var(--stone)' }}>
                      <span style={{ color: 'var(--gold)', marginTop: '0.12rem', flexShrink: 0, fontWeight: 700 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS FUTUROS */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Crecimiento a futuro" />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Módulos adicionales
          </h2>
          <p style={{ color: 'var(--stone)', fontSize: '0.9rem', maxWidth: '32rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            La plataforma está diseñada para crecer. Estos módulos se pueden agregar en cualquier momento sin romper lo existente.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {futureModules.map((label) => (
              <div key={label} style={{
                border: '1px solid var(--sand)',
                borderRadius: '1rem',
                padding: '1.35rem 1.25rem',
                textAlign: 'center',
                backgroundColor: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTORÍA EMPRESARIAL */}
      <section style={{
        background: 'linear-gradient(145deg, #090705 0%, #1c1409 50%, #0a0806 100%)',
        color: 'white',
        padding: '5.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '-8rem', left: '-8rem', width: '24rem', height: '24rem', borderRadius: '50%', border: '1px solid rgba(168,144,96,0.07)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative' }}>
          <Eyebrow label="Servicio adicional" light />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            ¿También necesitas<br />acompañamiento estratégico?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: '36rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Además del sitio web, podemos acompañar el crecimiento de tu consultoría con un servicio de consultoría empresarial personalizado, 100% uno a uno.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {consultingServices.map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '0.875rem',
                padding: '1rem 1.25rem',
              }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✓</span>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.83rem', margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{
            backgroundColor: 'rgba(168,144,96,0.1)',
            border: '1px solid rgba(168,144,96,0.28)',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.875rem',
          }}>
            <span style={{ fontSize: '1.15rem' }}>💬</span>
            <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem', margin: 0 }}>
              Inversión a definir · Cotización personalizada según necesidades
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ backgroundColor: 'var(--warm)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Cronograma" />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            6 semanas al lanzamiento
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {timeline.map(({ phase, weeks, title, tasks }, i) => (
              <div key={phase} style={{
                border: '1px solid var(--sand)',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <span style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c4a060, #a88040)',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 10px rgba(168,144,96,0.4)',
                  }}>
                    {i + 1}
                  </span>
                  <div>
                    <p style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{phase}</p>
                    <p style={{ fontSize: '0.63rem', color: 'var(--stone)', margin: 0 }}>{weeks}</p>
                  </div>
                </div>
                <h3 style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem', fontSize: '0.95rem' }}>{title}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', margin: 0, padding: 0, listStyle: 'none' }}>
                  {tasks.map((t) => (
                    <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--stone)' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--gold)', flexShrink: 0 }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTREGABLES */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Entregables" />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            Todo lo que recibes
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {deliverables.map((d) => (
              <div key={d} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                backgroundColor: 'white',
                borderRadius: '0.875rem',
                padding: '1rem 1.25rem',
                border: '1px solid var(--sand)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem', fontWeight: 700 }}>✓</span>
                <p style={{ fontSize: '0.83rem', color: 'var(--stone)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{
            backgroundColor: 'rgba(168,144,96,0.07)',
            border: '1px solid rgba(168,144,96,0.2)',
            borderRadius: '1.25rem',
            padding: '1.75rem',
          }}>
            <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>Lo que necesitamos de tu lado</p>
            <p style={{ color: 'var(--stone)', fontSize: '0.83rem', marginBottom: '1.25rem' }}>
              Para arrancar el desarrollo necesitamos que nos entregues los siguientes materiales.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
              {clientNeeds.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--gold)', flexShrink: 0, marginTop: '0.42rem' }} />
                  <p style={{ fontSize: '0.83rem', color: 'var(--stone)', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section style={{
        background: 'linear-gradient(145deg, #090705 0%, #1c1409 50%, #0a0806 100%)',
        color: 'white',
        padding: '5.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Inversión" light />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, color: 'white', marginBottom: '2.5rem' }}>
            Detalle de la inversión
          </h2>
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.35)' }}>
            {pricing.map(({ label, price, highlight }, i) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.15rem 1.75rem',
                  background: highlight
                    ? 'linear-gradient(90deg, rgba(168,144,96,0.22), rgba(168,144,96,0.1))'
                    : i % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.015)',
                  borderBottom: i < pricing.length - 1 ? '1px solid rgba(255,255,255,0.055)' : 'none',
                  borderLeft: highlight ? '3px solid var(--gold)' : '3px solid transparent',
                }}
              >
                <p style={{ fontSize: '0.88rem', fontWeight: highlight ? 700 : 400, color: highlight ? 'var(--gold-lt)' : 'rgba(255,255,255,0.6)', margin: 0 }}>
                  {label}
                </p>
                <p style={{ fontSize: highlight ? '1.15rem' : '0.9rem', fontWeight: 700, color: highlight ? 'var(--gold-lt)' : 'white', fontFamily: highlight ? 'var(--f-serif)' : 'inherit', margin: 0 }}>
                  {price}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ backgroundColor: 'rgba(168,144,96,0.08)', border: '1px solid rgba(168,144,96,0.18)', borderRadius: '1rem', padding: '1.25rem 1.5rem' }}>
              <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>Nota sobre el hosting</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>
                El costo de hosting y dominio se renueva anualmente. Incluye certificado SSL, despliegue continuo y disponibilidad 24/7.
              </p>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>🎁</span>
              <div>
                <p style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>Paquete de Branding · Incluido sin costo adicional</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>
                  Logo · Paleta de colores · Tipografías · Alta en Google Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <Eyebrow label="Retorno de inversión" />
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            ¿Qué ganas con esto?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {roiPoints.map(({ metric, unit, description }) => (
              <div key={unit} style={{
                backgroundColor: 'white',
                borderTop: '3px solid var(--gold)',
                borderRight: '1px solid var(--sand)',
                borderBottom: '1px solid var(--sand)',
                borderLeft: '1px solid var(--sand)',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
                <p style={{ fontFamily: 'var(--f-serif)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1 }}>{metric}</p>
                <p style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0.45rem 0 0.875rem' }}>{unit}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--stone)', lineHeight: 1.7, margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASOS */}
      <section style={{
        background: 'linear-gradient(135deg, #c09040 0%, #d4a84e 50%, #b07830 100%)',
        padding: '5.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            ¿Listo para arrancar?
          </p>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 700, color: 'white', marginBottom: '2.5rem' }}>
            Próximos pasos
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {nextSteps.map(({ n, text }) => (
              <div key={n} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                backgroundColor: 'rgba(255,255,255,0.16)',
                borderRadius: '1rem',
                padding: '1.1rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <span style={{
                  width: '2.1rem',
                  height: '2.1rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.22)',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>{n}</span>
                <p style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--warm)', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '1.75rem', height: '2px', backgroundColor: 'var(--gold)' }} />
            <p style={{ color: 'var(--gold)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0 }}>Siguiente paso</p>
            <div style={{ width: '1.75rem', height: '2px', backgroundColor: 'var(--gold)' }} />
          </div>
          <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
            ¿Listo para empezar?
          </h3>
          <p style={{ color: 'var(--stone)', fontSize: '1rem', marginBottom: '2.5rem' }}>
            Resuelvo cualquier duda y arrancamos cuando tú digas.
          </p>
          <a
            href="https://wa.me/5218180801950?text=Hola%2C%20quiero%20hablar%20sobre%20la%20propuesta%20de%20Guagnelli%20Consultor%C3%ADa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'linear-gradient(135deg, #2de070, #25D366)',
              color: 'white',
              fontWeight: 700,
              padding: '1rem 2.25rem',
              borderRadius: '9999px',
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(37,211,102,0.35)',
            }}
          >
            💬 Escribir por WhatsApp
          </a>
        </div>
        <div style={{ maxWidth: '56rem', margin: '2.5rem auto 0', backgroundColor: 'var(--cream)', borderRadius: '1.25rem', padding: '1.5rem', border: '1px solid var(--sand)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <p style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--stone)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.5rem' }}>
            Seguridad y confidencialidad
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--stone)', lineHeight: 1.7, margin: 0 }}>
            HEA Consulting opera bajo estándares alineados con ISO 9001, ISO/IEC 27001 y SOC 2. Toda la información de Guagnelli Consultoría, sus operaciones, clientes y datos comerciales, es tratada con estricta confidencialidad y no es compartida con terceros.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: 'linear-gradient(135deg, #090705, #1a1208)',
        padding: '2.75rem 1.5rem',
        borderTop: '1px solid rgba(168,144,96,0.18)',
      }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>HEA Consulting</p>
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.7rem', margin: 0 }}>Empowering Innovation, Efficiency and Growth</p>
          <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.68rem', marginTop: '0.4rem' }}>consultinghea.com · Documento confidencial · Mayo 2026</p>
        </div>
      </footer>

    </div>
  )
}
