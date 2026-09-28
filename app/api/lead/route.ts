import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email wajib diisi' }, { status: 400 })
    }
    // Simulate DB save / external API call
    console.log(`[LEAD] New lead registered: ${email}`)
    return NextResponse.json({ message: 'Registrasi berhasil, kami akan menghubungi Anda segera!' })
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan pada server' }, { status: 500 })
  }
}
