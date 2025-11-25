import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_id, role } = body ?? {};
    if (!user_id || !role) return NextResponse.json({ success:false, error:'missing user_id or role' },{ status:400 });
    return NextResponse.json({ success:true, profile:{ user_id, role, ...(body || {}) } },{ status:201 });
  } catch (err) { return NextResponse.json({ success:false, error:String(err) },{ status:500 }); }
}