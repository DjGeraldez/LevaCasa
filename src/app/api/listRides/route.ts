import { NextResponse } from 'next/server';

export async function GET() {
  // Apenas teste — depois pões o teu Supabase
  return NextResponse.json({
    rides: [
      { id: 1, from: "Rua X", to: "Rua Y", price: 10 },
      { id: 2, from: "Rua Z", to: "Rua W", price: 15 }
    ]
  });
}
