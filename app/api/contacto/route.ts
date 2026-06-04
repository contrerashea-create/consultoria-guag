import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: Request) {
  const { nombre, correo, area, mensaje } = await req.json()

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
  }

  // 1. Guardar en Supabase
  const { error: dbError } = await supabaseAdmin()
    .from('consultas')
    .insert({ nombre, correo, area: area || null, mensaje })

  if (dbError) {
    console.error('Supabase error:', dbError)
    return NextResponse.json({ error: 'Error al guardar la consulta' }, { status: 500 })
  }

  // 2. Enviar correo con Resend
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error: emailError } = await resend.emails.send({
    from: 'Consultoría Guagnelli <onboarding@resend.dev>',
    to: ['xons.juridica.cultural@gmail.com'],
    replyTo: correo,
    subject: `Nueva consulta — ${area || 'General'}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:2rem;color:#2C2118">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem;border-bottom:2px solid #A89060;padding-bottom:1rem">
          Nueva consulta recibida
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:.6rem 0;color:#7A6A56;font-size:.85rem;width:140px">Nombre</td><td style="padding:.6rem 0;font-weight:600">${nombre}</td></tr>
          <tr><td style="padding:.6rem 0;color:#7A6A56;font-size:.85rem">Correo</td><td style="padding:.6rem 0"><a href="mailto:${correo}" style="color:#A89060">${correo}</a></td></tr>
          <tr><td style="padding:.6rem 0;color:#7A6A56;font-size:.85rem">Área</td><td style="padding:.6rem 0">${area || '—'}</td></tr>
        </table>
        <div style="margin-top:1.5rem;padding:1.2rem;background:#F5EFE6;border-left:3px solid #A89060">
          <p style="margin:0;font-size:.9rem;line-height:1.75;white-space:pre-wrap">${mensaje}</p>
        </div>
      </div>
    `,
  })

  if (emailError) {
    // La consulta ya quedó guardada — no falla el request por el correo
    console.error('Resend error:', emailError)
  }

  return NextResponse.json({ ok: true })
}
