import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user_id, role, nome } = body;

    if (!user_id || !role || !nome) {
      return NextResponse.json(
        { error: "Campos obrigatórios: user_id, role, nome" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("profiles")
      .insert([{ id: user_id, role, nome }])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profile: data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Erro" }, { status: 500 });
  }
}
