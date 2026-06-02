import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peritaje · Guagnelli | Consultoría Jurídica Cultural',
}

const PERITAJE_ITEMS = [
  { name:"Peritaje Antropológico",    desc:"Dictámenes periciales con perspectiva sociocultural e intercultural para procesos judiciales." },
  { name:"Peritaje Etnohistórico",    desc:"Análisis e interpretación de fuentes históricas relativas a pueblos y comunidades." },
  { name:"Documentos Cuestionados",   desc:"Análisis de autenticidad de documentos históricos en contexto legal." },
  { name:"Transcripción Paleográfica",desc:"Lectura y transcripción de documentos coloniales y manuscritos históricos." },
];

export default function Peritaje() {
  return (
    <section className="peritaje-section" style={{ paddingTop: 'calc(5rem + 64px)' }}>
      <div className="peritaje-inner">
        <div className="peritaje-head">
          <h2 className="peritaje-title">Peritaje &amp;<br />Dictaminación<br />Pericial</h2>
          <p className="peritaje-desc">
            Elaboración de dictámenes con perspectiva antropológica, sociocultural
            y etnohistórica. Análisis de documentos históricos cuestionados y
            transcripción paleográfica de fuentes coloniales para procesos legales.
          </p>
        </div>
        <div className="peritaje-grid">
          {PERITAJE_ITEMS.map(({ name, desc }, i) => (
            <div key={name} className="per-card">
              <span className="per-n">0{i + 1}</span>
              <h3 className="per-name">{name}</h3>
              <p className="per-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
