import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto · Guagnelli | Consultoría Jurídica Cultural',
}

export default function Contacto() {
  return (
    <section className="contact-section" style={{ paddingTop: 'calc(8rem + 64px)' }}>
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
  )
}
