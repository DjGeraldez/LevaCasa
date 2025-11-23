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
    const { ride_id, driver_id } = req.body;

    // Validação básica
    if (!ride_id || !driver_id) {
      return res.status(400).json({ 
        error: 'Campos obrigatórios: ride_id, driver_id' 
      });
    }

    // Verificar se a corrida existe e está pendente
    const { data: ride, error: rideError } = await supabase
      .from('rides')
      .select('*')
      .eq('id', ride_id)
      .single();

    if (rideError || !ride) {
      return res.status(404).json({ 
        error: 'Corrida não encontrada' 
      });
    }

    if (ride.status !== 'pending') {
      return res.status(400).json({ 
        error: 'Corrida não está disponível para aceitar',
        current_status: ride.status 
      });
    }

    // Verificar se o motorista existe
    const { data: driver, error: driverError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', driver_id)
      .eq('user_type', 'driver')
      .single();

    if (driverError || !driver) {
      return res.status(404).json({ 
        error: 'Motorista não encontrado ou não autorizado' 
      });
    }

    // Aceitar a corrida
    const { data, error } = await supabase
      .from('rides')
      .update({
        driver_id,
        status: 'accepted',
        accepted_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', ride_id)
      .select()
      .single();

    if (error) {
      console.error('Erro ao aceitar corrida:', error);
      return res.status(500).json({ error: 'Erro ao aceitar corrida', details: error.message });
    }

    return res.status(200).json({ 
      success: true, 
      ride: data,
      message: 'Corrida aceita com sucesso!' 
    });

  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
}
