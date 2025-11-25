// src/app/api/listRides/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Exemplo estático: devolve um array de rides mock
  const rides = [
    { id: 'ride1', from: 'Rua A', to: 'Rua B', price: 12.5 },
    { id: 'ride2', from: 'Rua C', to: 'Rua D', price: 8.0 }
  ];

  return NextResponse.json({ rides });
}
