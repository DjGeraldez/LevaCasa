import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { ride_id, motorista_id } = await req.json();

    if (!ride_id || !motorista_id) {
      return NextResponse.json(
        { error: "Campos obrigatórios: ride_id, motorista_id" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      ride_id,
      motorista_id,
      status: "accepted",
    });

  } catch (err) {
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
