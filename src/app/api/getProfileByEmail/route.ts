import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    // Busca perfil pelo email via query param: ?email=...
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    
    if (!email) {
      return NextResponse.json({ error: 'Email é obrigatório' }, { status: 400 })
    }
    
    const { data, error } = await supabase
      .from('perfis')
      .select('*')
      .eq('email', email)
      .limit(1)
    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ data: data?.[0] || null }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Erro' }, { status: 500 })
  }
}
