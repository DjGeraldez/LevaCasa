import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // body deve ter: ride_id, driver_id, status (ex: 'accepted')
    const { ride_id, ...updateData } = body
    const { data, error } = await supabase
      .from('passeios')
      .update(updateData)
      .eq('id', ride_id)
      .select()
    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ data }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Erro' }, { status: 500 })
  }
}
