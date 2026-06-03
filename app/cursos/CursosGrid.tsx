'use client'

import { useState } from 'react'

const CURSOS = [
  { n: '01', name: 'Derechos Humanos',              cat: 'Derechos' },
  { n: '02', name: 'Derechos Culturales',            cat: 'Derechos' },
  { n: '03', name: 'Derecho a la Cultura',           cat: 'Derechos' },
  { n: '04', name: 'Igualdad y No Discriminación',   cat: 'Social' },
  { n: '05', name: 'Interculturalidad',              cat: 'Social' },
  { n: '06', name: 'Cultura para el Desarrollo',     cat: 'Social' },
  { n: '07', name: 'Pluralismo Jurídico',            cat: 'Indígena' },
  { n: '08', name: 'Sistemas Normativos Indígenas',  cat: 'Indígena' },
  { n: '09', name: 'Derecho a la Memoria Histórica', cat: 'Indígena' },
]

const CATS = ['Todos', 'Derechos', 'Social', 'Indígena']

export default function CursosGrid() {
  const [active, setActive] = useState('Todos')

  const visible = active === 'Todos' ? CURSOS : CURSOS.filter(c => c.cat === active)

  return (
    <div>
      {/* Filtros */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', borderBottom: '1px solid rgba(168,144,96,.18)' }}>
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '.9rem 2rem',
              fontFamily: 'var(--f-sans)',
              fontSize: '.68rem',
              fontWeight: 700,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: active === cat ? 'var(--ink)' : 'var(--stone)',
              borderBottom: active === cat ? '2px solid var(--gold)' : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'color .2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de tarjetas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
      }}>
        {visible.map(({ n, name, cat }) => (
          <div
            key={n}
            style={{
              background: 'var(--dark)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
              transition: 'transform .25s ease, box-shadow .25s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 220,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(0,0,0,.35)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
            }}
          >
            {/* Número de fondo */}
            <span style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '1rem',
              fontFamily: 'var(--f-serif)',
              fontSize: '7rem',
              fontWeight: 700,
              lineHeight: 1,
              color: 'rgba(168,144,96,.06)',
              letterSpacing: '-.04em',
              userSelect: 'none',
              pointerEvents: 'none',
            }}>{n}</span>

            {/* Header: número + categoría */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--f-serif)', fontSize: '.8rem', fontWeight: 500, color: 'rgba(168,144,96,.4)' }}>{n}</span>
              <span style={{
                fontSize: '.58rem', fontWeight: 700, letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'rgba(168,144,96,.6)',
                border: '1px solid rgba(168,144,96,.2)',
                padding: '.25rem .7rem',
              }}>{cat}</span>
            </div>

            {/* Nombre */}
            <h3 style={{
              fontFamily: 'var(--f-serif)',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              fontWeight: 600,
              color: '#FAF6F0',
              lineHeight: 1.15,
              position: 'relative',
              zIndex: 1,
            }}>{name}</h3>

            {/* Línea dorada bottom */}
            <div style={{ width: '2rem', height: '2px', background: 'var(--gold)', marginTop: '1.5rem', opacity: .5 }} />
          </div>
        ))}
      </div>
    </div>
  )
}
