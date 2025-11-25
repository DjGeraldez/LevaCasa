import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { perfil_id, origem, destino, preco_est } = body;

    if (!perfil_id || !origem || !destino) {
      return NextResponse.json(
        { error: "Campos obrigatórios: perfil_id, origem, destino" },
        { status: 400 }
      );
    }

    const ride = {
      id: "ride_" + Date.now(),
      perfil_id,
      origem,
      destino,
      preco_est,
    };

    return NextResponse.json({ success: true, ride }, { status: 201 });

  } catch (err) {
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
