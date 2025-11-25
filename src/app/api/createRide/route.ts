import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer_id, origem, destino, preco_est } = body;

    if (!customer_id || !origem || !destino) {
      return NextResponse.json(
        { error: "Campos obrigatórios: customer_id, origem, destino" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("rides")
      .insert([{
        customer_id,
        origem,
        destino,
        preco_est,
        status: "pending",
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ ride: data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Erro" }, { status: 500 });
  }
}
