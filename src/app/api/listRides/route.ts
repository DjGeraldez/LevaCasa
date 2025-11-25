import { NextResponse } from "next/server";

export async function GET() {
  const rides = [
    {
      id: "ride1",
      origem: "Lisboa",
      destino: "Porto",
      preco_est: 15.9,
    },
  ];

  return NextResponse.json({ rides });
}
