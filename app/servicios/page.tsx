import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios · Guagnelli | Consultoría Jurídica Cultural',
}

const SERVICES = [
  { n:"01", name:"Derecho Cultural",        items:["Asesoría al sector público, privado y OSC","INAH, INBA, INDAUTOR, INPI, INALI","Patrimonio tangible e intangible","Violación de derechos culturales","Derecho a la memoria histórica"] },
  { n:"02", name:"Derecho Indígena",         items:["Pueblos y comunidades indígenas y afromexicanas","Derechos colectivos","Propiedad intelectual colectiva","Títulos primordiales","Litigio estratégico"] },
  { n:"03", name:"Derecho Constitucional",   items:["Juicio de amparo","Garantías constitucionales","Acciones en materia cultural"] },
  { n:"04", name:"Derecho Administrativo",   items:["Marcas colectivas — IMPI","Denominaciones de origen","Indicaciones geográficas"] },
  { n:"05", name:"Derecho Civil",            items:["Contratos civiles","Regularización de inmuebles","Usucapión","Sucesiones"] },
  { n:"06", name:"Acompañamiento",           items:["Comisiones de derechos humanos","Organizaciones sociales y culturales","Representación legal integral"] },
];

export default function Servicios() {
  return (
    <>
      <section className="services-section" style={{ paddingTop: 'calc(8rem + 80px)' }}>
        <div className="services-inner">
          <div className="services-head">
            <h2 className="services-title">Nuestros<br />Servicios</h2>
            <p className="services-intro">
              Representación jurídica integral con perspectiva intercultural
              y profundo conocimiento del derecho cultural, indígena y constitucional.
            </p>
          </div>
          <ul>
            {SERVICES.map(({ n, name, items }) => (
              <li key={n} className="srv-row">
                <span className="srv-n">{n}</span>
                <div className="srv-content">
                  <h3 className="srv-name">{name}</h3>
                  <ul className="srv-items">
                    {items.map((it) => <li key={it} className="srv-item">{it}</li>)}
                  </ul>
                </div>
                <span className="srv-chevron">›</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="vbreak">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="vbreak-img" src="/vbreak.jpg" alt="Ruinas mayas en la costa" />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">
            "Contribuir al fortalecimiento de los derechos humanos
            como herramientas de cambio social a través de la cultura."
          </p>
          <span className="vbreak-source">Visión — Guagnelli Consultoría</span>
        </div>
      </div>
    </>
  )
}
