import { NextResponse } from 'next/server';
export async function GET() {
  const mock = [{ id: "1", origem: "Lisboa", destino: "Porto", status: "open" }];
  return NextResponse.json({ success:true, rides: mock },{ status:200 });
}