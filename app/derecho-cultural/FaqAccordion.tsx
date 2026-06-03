'use client'

import { useState } from 'react'

const FAQ = [
  {
    q: '¿Qué pasa si quiero remodelar un inmueble en el Centro Histórico?',
    a: 'Los inmuebles ubicados en zonas de monumentos históricos están sujetos a la Ley Federal sobre Monumentos y Zonas Arqueológicos. Cualquier modificación requiere autorización del INAH. Te acompañamos en todo el proceso de trámite y representación ante la institución.',
  },
  {
    q: '¿Cómo puedo importar o exportar una obra de arte?',
    a: 'La importación y exportación de bienes culturales en México está regulada por la Secretaría de Cultura y el INAH. Existen restricciones específicas para piezas prehispánicas, coloniales y de autor. Analizamos tu caso y gestionamos los permisos correspondientes.',
  },
  {
    q: '¿Qué son los derechos culturales y cómo me afectan?',
    a: 'Los derechos culturales son derechos humanos reconocidos en la Constitución y tratados internacionales. Incluyen el derecho a participar en la vida cultural, acceder al patrimonio y que se respete tu identidad cultural. Son exigibles ante tribunales nacionales e internacionales.',
  },
  {
    q: '¿Puedo proteger legalmente las tradiciones o conocimientos de mi comunidad?',
    a: 'Sí. A través del derecho indígena y la propiedad intelectual colectiva es posible proteger conocimientos tradicionales, expresiones culturales y recursos genéticos. El proceso varía según el tipo de conocimiento y la comunidad involucrada.',
  },
  {
    q: '¿Qué hago si una institución violó los derechos culturales de mi comunidad?',
    a: 'Existen vías administrativas y judiciales para exigir la restitución de derechos culturales. Desde quejas ante comisiones de derechos humanos hasta amparos y acciones ante organismos internacionales. Evaluamos el caso y definimos la estrategia más efectiva.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {FAQ.map(({ q, a }, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            style={{
              borderBottom: '1px solid rgba(168,144,96,.18)',
              borderLeft: isOpen ? '2px solid var(--gold)' : '2px solid transparent',
              transition: 'border-color .2s',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                padding: '1.8rem 0 1.8rem 1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{
                fontFamily: 'var(--f-serif)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: isOpen ? 'var(--ink)' : 'var(--ink)',
                lineHeight: 1.3,
                flex: 1,
              }}>
                {q}
              </span>
              <span style={{
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: '1px solid rgba(168,144,96,.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold)',
                fontSize: '1.1rem',
                fontWeight: 300,
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform .25s ease',
              }}>
                +
              </span>
            </button>

            <div style={{
              overflow: 'hidden',
              maxHeight: isOpen ? 300 : 0,
              transition: 'max-height .3s ease',
            }}>
              <p style={{
                fontSize: '.9rem',
                color: 'var(--stone)',
                lineHeight: 1.85,
                padding: '0 4rem 1.8rem 1.5rem',
              }}>
                {a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
