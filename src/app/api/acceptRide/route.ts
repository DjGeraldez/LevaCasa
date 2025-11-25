import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ride_id, driver_id } = body;

    if (!ride_id || !driver_id) {
      return NextResponse.json(
        { error: "Campos obrigatórios: ride_id, driver_id" },
        { status: 400 }
      );
    }

    // Verifica corrida
    const { data: existing, error: findErr } = await supabase
      .from("rides")
      .select("*")
      .eq("id", ride_id)
      .single();

    if (findErr || !existing) {
      return NextResponse.json({ error: "Corrida não encontrada" }, { status: 404 });
    }

    if (existing.status !== "pending") {
      return NextResponse.json({ error: "Corrida não disponível" }, { status: 409 });
    }

    // Aceita
    const { data, error } = await supabase
      .from("rides")
      .update({ driver_id, status: "accepted", accepted_at: new Date().toISOString() })
      .eq("id", ride_id)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ ride: data }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Erro" }, { status: 500 });
  }
}
