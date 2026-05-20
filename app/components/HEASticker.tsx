'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function HEASticker() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>

      {open && (
        <div style={{
          backgroundColor: 'var(--off-wh)',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          border: '1px solid var(--sand)',
          padding: '1rem',
          width: '13rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ position: 'relative', width: '1.75rem', height: '1.75rem', flexShrink: 0 }}>
                <Image src="/hea-logo.png" alt="HEA" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2, margin: 0 }}>HEA Consulting</p>
                <p style={{ fontSize: '0.6rem', color: 'var(--stone)', lineHeight: 1.2, margin: 0 }}>Empowering Innovation</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--stone)', fontSize: '0.85rem', lineHeight: 1, padding: '0.1rem' }}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          <Link
            href="/propuesta"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--ink)',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.5rem 0.75rem',
              borderRadius: '0.6rem',
              textDecoration: 'none',
              width: '100%',
            }}
          >
            <span>📄</span>
            Ver propuesta
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="HEA Consulting"
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          backgroundColor: 'var(--off-wh)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          border: '1px solid var(--sand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <div style={{ position: 'relative', width: '2rem', height: '2rem' }}>
          <Image src="/hea-logo.png" alt="HEA Consulting" fill style={{ objectFit: 'contain' }} />
        </div>
      </button>

    </div>
  )
}
