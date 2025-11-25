import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.perfil_id || !body?.origem || !body?.destino) return NextResponse.json({ success:false, error:'missing fields' },{ status:400 });
    const rideId = `ride_${Date.now()}`;
    return NextResponse.json({ success:true, rideId, data: body },{ status:201 });
  } catch (err) { return NextResponse.json({ success:false, error:String(err) },{ status:500 }); }
}