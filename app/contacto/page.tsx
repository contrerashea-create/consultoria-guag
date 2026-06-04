import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto · Guagnelli | Consultoría Jurídica Cultural',
  description: 'Solicita una consulta con Guagnelli Consultoría Jurídica Cultural. Primera orientación sin costo. CDMX y República Mexicana.',
}

export default function Contacto() {
  return (
    <section className="contact-section" style={{ paddingTop: 'calc(8rem + 80px)' }}>
      <div className="contact-inner">
        <div>
          <p className="contact-eyebrow">Contacto</p>
          <h2 className="contact-title">Inicia tu<br />consulta hoy</h2>
          <p style={{ fontSize: '.88rem', color: 'var(--stone)', lineHeight: 1.85, marginBottom: '2.5rem', maxWidth: 320 }}>
            La primera orientación es sin costo. Cuéntenos su caso y le responderemos a la brevedad.
          </p>
          <div>
            <div className="contact-row">
              <span className="contact-lbl">Teléfono</span>
              <span className="contact-val"><a href="tel:4425619711">442 561 9711</a></span>
            </div>
            <div className="contact-row">
              <span className="contact-lbl">Correo</span>
              <span className="contact-val">
                <a href="mailto:cjc.guag@gmail.com">cjc.guag@gmail.com</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-lbl">Cobertura</span>
              <span className="contact-val">CDMX y República Mexicana</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
