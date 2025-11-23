import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      user_id, 
      full_name, 
      email, 
      phone, 
      user_type,
      avatar_url 
    } = req.body;

    // Validação básica
    if (!user_id || !full_name || !email) {
      return res.status(400).json({ 
        error: 'Campos obrigatórios: user_id, full_name, email' 
      });
    }

    // Validar tipo de usuário
    if (user_type && !['passenger', 'driver'].includes(user_type)) {
      return res.status(400).json({ 
        error: 'user_type deve ser "passenger" ou "driver"' 
      });
    }

    // Criar perfil no Supabase
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          user_id,
          full_name,
          email,
          phone,
          user_type: user_type || 'passenger',
          avatar_url,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar perfil:', error);
      return res.status(500).json({ error: 'Erro ao criar perfil', details: error.message });
    }

    return res.status(201).json({ 
      success: true, 
      profile: data,
      message: 'Perfil criado com sucesso!' 
    });

  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
}
