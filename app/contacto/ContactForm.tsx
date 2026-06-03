'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ nombre: '', correo: '', area: '', mensaje: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: '1rem', padding: '3rem', background: 'var(--off-wh)', border: '1px solid rgba(168,144,96,.2)', borderTop: '2px solid var(--gold)' }}>
        <span style={{ fontFamily: 'var(--f-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)' }}>Consulta recibida</span>
        <p style={{ fontSize: '.9rem', color: 'var(--stone)', lineHeight: 1.8 }}>
          Gracias por contactarnos. Revisaremos su caso y le responderemos a la brevedad posible.
        </p>
        <button onClick={() => { setStatus('idle'); setForm({ nombre: '', correo: '', area: '', mensaje: '' }) }} style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' as const, color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          Enviar otra consulta →
        </button>
      </div>
    )
  }

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <div className="cform-2">
        <div className="cgroup">
          <label>Nombre completo</label>
          <input type="text" placeholder="Su nombre" value={form.nombre} onChange={set('nombre')} required />
        </div>
        <div className="cgroup">
          <label>Correo electrónico</label>
          <input type="email" placeholder="correo@ejemplo.com" value={form.correo} onChange={set('correo')} required />
        </div>
      </div>
      <div className="cgroup">
        <label>Área de interés</label>
        <select value={form.area} onChange={set('area')}>
          <option value="">Seleccione un área</option>
          <option>Derecho Cultural</option>
          <option>Derecho Indígena</option>
          <option>Derecho Constitucional</option>
          <option>Derecho Administrativo</option>
          <option>Derecho Civil</option>
          <option>Derecho Laboral</option>
          <option>Propiedad Intelectual</option>
          <option>Peritaje Cultural</option>
          <option>Cursos y Talleres</option>
        </select>
      </div>
      <div className="cgroup">
        <label>Mensaje</label>
        <textarea placeholder="Describa brevemente su caso o consulta…" value={form.mensaje} onChange={set('mensaje')} required />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '.82rem', color: '#c0392b', padding: '.8rem 1rem', background: 'rgba(192,57,43,.06)', border: '1px solid rgba(192,57,43,.2)' }}>
          Ocurrió un error. Por favor intente de nuevo o escríbanos directamente.
        </p>
      )}

      <button type="submit" className="btn-send" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando…' : 'Solicitar consulta →'}
      </button>
    </form>
  )
}
