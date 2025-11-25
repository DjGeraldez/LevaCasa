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
      pickup_location, 
      dropoff_location, 
      pickup_lat, 
      pickup_lng, 
      dropoff_lat, 
      dropoff_lng,
      estimated_price 
    } = req.body;

    // Validação básica
    if (!user_id || !pickup_location || !dropoff_location) {
      return res.status(400).json({ 
        error: 'Campos obrigatórios: user_id, pickup_location, dropoff_location' 
      });
    }

    // Criar corrida no Supabase
    const { data, error } = await supabase
      .from('rides')
      .insert([
        {
          user_id,
          pickup_location,
          dropoff_location,
          pickup_lat,
          pickup_lng,
          dropoff_lat,
          dropoff_lng,
          estimated_price,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar corrida:', error);
      return res.status(500).json({ error: 'Erro ao criar corrida', details: error.message });
    }

    return res.status(201).json({ 
      success: true, 
      ride: data,
      message: 'Corrida criada com sucesso!' 
    });

  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
}
