const AREAS = [
  "Derechos Humanos","Derecho Constitucional","Derecho Cultural",
  "Derecho Indígena","Derecho Civil","Derecho Administrativo","Peritaje Cultural",
];

const SERVICES = [
  { n:"01", name:"Derecho Cultural",        items:["Asesoría al sector público, privado y OSC","INAH, INBA, INDAUTOR, INPI, INALI","Patrimonio tangible e intangible","Violación de derechos culturales","Derecho a la memoria histórica"] },
  { n:"02", name:"Derecho Indígena",         items:["Pueblos y comunidades indígenas y afromexicanas","Derechos colectivos","Propiedad intelectual colectiva","Títulos primordiales","Litigio estratégico"] },
  { n:"03", name:"Derecho Constitucional",   items:["Juicio de amparo","Garantías constitucionales","Acciones en materia cultural"] },
  { n:"04", name:"Derecho Administrativo",   items:["Marcas colectivas — IMPI","Denominaciones de origen","Indicaciones geográficas"] },
  { n:"05", name:"Derecho Civil",            items:["Contratos civiles","Regularización de inmuebles","Usucapión","Sucesiones"] },
  { n:"06", name:"Acompañamiento",           items:["Comisiones de derechos humanos","Organizaciones sociales y culturales","Representación legal integral"] },
];

const CURSOS = [
  "Derechos Humanos","Derechos Culturales","Derecho a la Cultura",
  "Igualdad y No Discriminación","Interculturalidad","Cultura para el Desarrollo",
  "Pluralismo Jurídico","Sistemas Normativos Indígenas","Derecho a la Memoria Histórica",
];

const PERITAJE_ITEMS = [
  { name:"Peritaje Antropológico",    desc:"Dictámenes periciales con perspectiva sociocultural e intercultural para procesos judiciales." },
  { name:"Peritaje Etnohistórico",    desc:"Análisis e interpretación de fuentes históricas relativas a pueblos y comunidades." },
  { name:"Documentos Cuestionados",   desc:"Análisis de autenticidad de documentos históricos en contexto legal." },
  { name:"Transcripción Paleográfica",desc:"Lectura y transcripción de documentos coloniales y manuscritos históricos." },
];

export default function Home() {
  return (
    <>
      {/* ─── NAV ─── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo">
            <span className="nav-logo-icon">✦</span>
            <span className="nav-logo-text">Guagnelli</span>
          </a>
          <div className="nav-links">
            <a href="#nosotros"  className="nav-link">Nosotros</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#cursos"    className="nav-link">Formación</a>
            <a href="#peritaje"  className="nav-link">Peritaje</a>
            <a href="#contacto"  className="nav-cta-btn">Consulta</a>
          </div>
        </div>
      </nav>

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
          <a href="#contacto" className="hero-cta">Solicitar consulta</a>
        </div>
      </section>

      {/* ─── GOLD STRIP ─── */}
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
            <span className="istat-val">7</span>
            <span className="istat-lbl">Áreas de práctica</span>
          </div>
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <section id="nosotros">
        <div className="about-section">
          {/* imagen */}
          <div className="about-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-img"
              src="/piramide.png"
              alt="Pirámide de Teotihuacan"
            />
            <div className="about-img-border" />
            <div className="about-tag">25 años de práctica</div>
          </div>
          {/* texto */}
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

      {/* ─── AREAS ─── */}
      <div className="areas-section">
        <div className="areas-inner">
          <span className="areas-label">Áreas de atención</span>
          <span className="areas-sep" />
          <ul className="areas-list">
            {AREAS.map((a) => <li key={a} className="area-pill">{a}</li>)}
          </ul>
        </div>
      </div>

      {/* ─── MISIÓN / VISIÓN ─── */}
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

      {/* ─── SERVICES ─── */}
      <section className="services-section" id="servicios">
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

      {/* ─── VISUAL BREAK ─── */}
      <div className="vbreak">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="vbreak-img"
          src="/vbreak.jpg"
          alt="Ruinas mayas en la costa"
        />
        <div className="vbreak-overlay" />
        <div className="vbreak-body">
          <p className="vbreak-quote">
            "Contribuir al fortalecimiento de los derechos humanos
            como herramientas de cambio social a través de la cultura."
          </p>
          <span className="vbreak-source">Visión — Guagnelli Consultoría</span>
        </div>
      </div>

      {/* ─── CURSOS ─── */}
      <section className="cursos-section" id="cursos">
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

      {/* ─── PERITAJE ─── */}
      <section className="peritaje-section" id="peritaje">
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

      {/* ─── CONTACT ─── */}
      <section className="contact-section" id="contacto">
        <div className="contact-inner">
          <div>
            <p className="contact-eyebrow">Contacto</p>
            <h2 className="contact-title">Inicia tu<br />consulta hoy</h2>
            <div>
              <div className="contact-row">
                <span className="contact-lbl">Teléfono</span>
                <span className="contact-val"><a href="tel:5523214441">55 2321 4441</a></span>
              </div>
              <div className="contact-row">
                <span className="contact-lbl">Correo electrónico</span>
                <span className="contact-val">
                  <a href="mailto:xons.juridica.cultural@gmail.com">xons.juridica.cultural@gmail.com</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-lbl">Cobertura</span>
                <span className="contact-val">CDMX y República Mexicana</span>
              </div>
            </div>
          </div>
          <form className="cform">
            <div className="cform-2">
              <div className="cgroup">
                <label>Nombre completo</label>
                <input type="text" placeholder="Su nombre" />
              </div>
              <div className="cgroup">
                <label>Correo electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com" />
              </div>
            </div>
            <div className="cgroup">
              <label>Área de interés</label>
              <select>
                <option value="">Seleccione un área</option>
                <option>Derecho Cultural</option>
                <option>Derecho Indígena</option>
                <option>Derecho Constitucional</option>
                <option>Derecho Administrativo</option>
                <option>Derecho Civil</option>
                <option>Peritaje Cultural</option>
                <option>Cursos y Talleres</option>
              </select>
            </div>
            <div className="cgroup">
              <label>Mensaje</label>
              <textarea placeholder="Describa brevemente su caso o consulta…" />
            </div>
            <button type="submit" className="btn-send">Enviar consulta →</button>
          </form>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-icon">✦</span>
            <span className="footer-name">Guagnelli · Consultoría Jurídica Cultural</span>
          </div>
          <nav className="footer-links">
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#cursos">Cursos</a>
            <a href="#peritaje">Peritaje</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <span className="footer-copy">© 2025 Guagnelli Consultoría Jurídica Cultural</span>
        </div>
      </footer>
    </>
  );
}
