import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_id, role, nome } = body;

    if (!user_id || !role) {
      return NextResponse.json(
        { error: "Campos obrigatórios: user_id, role" },
        { status: 400 }
      );
    }

    const created = {
      id: "profile_" + Date.now(),
      user_id,
      role,
      nome,
    };

    return NextResponse.json({ success: true, profile: created }, { status: 201 });

  } catch (err) {
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
