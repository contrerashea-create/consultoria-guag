import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros · Guagnelli | Consultoría Jurídica Cultural',
}

const AREAS = [
  "Derechos Humanos","Derecho Constitucional","Derecho Cultural",
  "Derecho Indígena","Derecho Civil","Derecho Administrativo","Peritaje Cultural",
];

export default function Nosotros() {
  return (
    <>
      <section style={{ background: 'var(--warm)' }}>
        <div className="about-section" style={{ paddingTop: 'calc(9rem + 64px)' }}>
          <div className="about-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-img" src="/piramide.png" alt="Pirámide de Teotihuacan" />
            <div className="about-img-border" />
            <div className="about-tag">25 años de práctica</div>
          </div>
          <div className="about-text-col">
            <p className="about-eyebrow">Sobre el fundador</p>
            <h2 className="about-name">
              Aldo A.<br /><em>Guagnelli Nuñez</em>
            </h2>
            <p className="about-role">Abogado · Etnohistoriador · Especialista en Derechos Humanos</p>
            <p className="about-body">
              Especialista con más de 25 años de trayectoria profesional combinando
              el rigor jurídico con la perspectiva etnohistórica. Ofrece representación
              legal integral a comunidades indígenas, organizaciones civiles y sectores
              público y privado. Su labor se sustenta en la defensa de la cultura como
              derecho humano irrenunciable, conforme a la legislación nacional e
              internacional vigente.
            </p>
            <div className="about-grid">
              <div className="about-cell">
                <span className="about-cell-label">Especialidad</span>
                <span className="about-cell-val">Derechos Humanos y Derecho Cultural</span>
              </div>
              <div className="about-cell">
                <span className="about-cell-label">Enfoque</span>
                <span className="about-cell-val">Perspectiva intercultural y etnohistórica</span>
              </div>
              <div className="about-cell">
                <span className="about-cell-label">Experiencia</span>
                <span className="about-cell-val">25 años de práctica profesional</span>
              </div>
              <div className="about-cell">
                <span className="about-cell-label">Atención</span>
                <span className="about-cell-val">Sector público, privado y OSC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="areas-section">
        <div className="areas-inner">
          <span className="areas-label">Áreas de atención</span>
          <span className="areas-sep" />
          <ul className="areas-list">
            {AREAS.map((a) => <li key={a} className="area-pill">{a}</li>)}
          </ul>
        </div>
      </div>

      <section className="mv-section">
        <div className="mv-pane mv-pane--left">
          <span className="mv-tag">Misión</span>
          <h3 className="mv-title">Justicia con<br />dimensión social</h3>
          <p className="mv-text">
            Brindar servicios jurídicos y de representación legal con dimensión
            social, entendiendo la cultura y la diversidad cultural como derechos
            humanos de acuerdo con la legislación nacional e internacional.
          </p>
        </div>
        <div className="mv-pane mv-pane--right">
          <span className="mv-tag">Visión</span>
          <h3 className="mv-title">Cultura como<br />herramienta</h3>
          <p className="mv-text">
            Contribuir al fortalecimiento de los derechos humanos como
            herramientas de cambio social a través de la cultura, impulsando
            comunidades más justas, plurales e interculturales.
          </p>
        </div>
      </section>
    </>
  )
}
