import { HEASticker } from './components/HEASticker'
import Link from 'next/link'

export default function Home() {
  return (
    <>
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
            <span className="istat-val">7</span>
            <span className="istat-lbl">Áreas de práctica</span>
          </div>
        </div>
      </div>

      <HEASticker />
    </>
  );
}
