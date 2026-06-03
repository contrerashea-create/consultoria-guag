import { HEASticker } from './components/HEASticker'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" id="inicio">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-vignette" />
        <div className="hero-content">
          <span className="hero-eyebrow">Consultoría Jurídica Cultural · México</span>
          <h1 className="hero-title">
            Consultoría<br />Jurídica<br />Cultural
          </h1>
          <p className="hero-sub">Derecho al servicio de la cultura y los pueblos</p>
          <Link href="/contacto" className="hero-cta">Solicitar consulta</Link>
        </div>
      </section>

      <div className="gold-strip" />

      {/* ─── INTRO BAND ─── */}
      <div className="intro-band">
        <p className="intro-quote">
          "Brindar servicios jurídicos con dimensión social, entendiendo
          la cultura y la diversidad cultural como derechos humanos."
        </p>
        <div className="intro-stats">
          <div className="istat">
            <span className="istat-val">25</span>
            <span className="istat-lbl">Años de experiencia</span>
          </div>
          <div className="istat">
            <span className="istat-val">8</span>
            <span className="istat-lbl">Áreas de práctica</span>
          </div>
        </div>
      </div>

      {/* ─── EL DIFERENCIADOR ─── */}
      <div className="home-dif">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="home-dif-img" src="/vbreak.jpg" alt="" aria-hidden="true" />
        <div className="home-dif-fade" />
        <div className="home-dif-body">
          <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.24em', textTransform: 'uppercase' as const, color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '2rem' }}>
            <span style={{ width: 22, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            El diferenciador
          </p>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 600, lineHeight: .93, color: '#FAF6F0', letterSpacing: '-.01em', marginBottom: '2rem' }}>
            Derecho<br /><em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Cultural</em><br />e Indígena
          </h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(250,246,240,.45)', lineHeight: 1.85, maxWidth: 460, marginBottom: '2.5rem' }}>
            Pocas consultorías en México cubren el derecho cultural e indígena. Guagnelli lleva 25 años protegiendo patrimonio, identidades y comunidades.
          </p>
          <Link href="/derecho-cultural" className="hero-cta">Explorar derecho cultural</Link>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <section style={{ background: 'var(--dark)', padding: '7rem 3.5rem', textAlign: 'center' as const, position: 'relative', overflow: 'hidden' }}>
        <span aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--f-serif)', fontSize: '28vw', fontWeight: 700, color: 'transparent', WebkitTextStroke: '1px rgba(168,144,96,.06)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', letterSpacing: '-.04em', userSelect: 'none', whiteSpace: 'nowrap', pointerEvents: 'none' }}>¿Hablamos?</span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)', fontWeight: 600, lineHeight: 1.05, color: '#FAF6F0', marginBottom: '1rem' }}>
            ¿Tienes un caso<br />que atender?
          </h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(250,246,240,.35)', marginBottom: '3rem' }}>La primera orientación es sin costo.</p>
          <Link href="/contacto" className="hero-cta">Solicitar consulta</Link>
        </div>
      </section>

      <HEASticker />
    </>
  )
}
