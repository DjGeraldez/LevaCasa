import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.ride_id || !body?.motorista_id) return NextResponse.json({ success:false, error:'missing fields' },{ status:400 });
    return NextResponse.json({ success:true, ride_id:body.ride_id, motorista_id:body.motorista_id },{ status:200 });
  } catch (err) { return NextResponse.json({ success:false, error:String(err) },{ status:500 }); }
}