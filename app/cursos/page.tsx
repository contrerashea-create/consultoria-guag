import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formación · Guagnelli | Consultoría Jurídica Cultural',
}

const CURSOS = [
  "Derechos Humanos","Derechos Culturales","Derecho a la Cultura",
  "Igualdad y No Discriminación","Interculturalidad","Cultura para el Desarrollo",
  "Pluralismo Jurídico","Sistemas Normativos Indígenas","Derecho a la Memoria Histórica",
];

export default function Cursos() {
  return (
    <section className="cursos-section" style={{ paddingTop: 'calc(8rem + 64px)' }}>
      <div className="cursos-inner">
        <div className="cursos-head">
          <h2 className="cursos-title">Cursos &amp;<br />Talleres</h2>
          <p className="cursos-desc">
            Capacitación especializada en derechos humanos, derechos culturales
            e interculturalidad para instituciones, organizaciones y comunidades.
          </p>
        </div>
        <div className="cursos-grid">
          {CURSOS.map((c, i) => (
            <div key={c} className="curso-item">
              <span className="curso-n">0{i + 1}</span>
              <h3 className="curso-name">{c}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
