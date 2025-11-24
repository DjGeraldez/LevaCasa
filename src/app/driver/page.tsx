'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Navigation, Clock, Euro } from 'lucide-react'

type Ride = any

export default function DriverPage() {
  const router = useRouter()
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const raw = localStorage.getItem('levacasa_user')
    if (!raw) {
      router.push('/login')
      return
    }
    const userData = JSON.parse(raw)
    if (userData.type !== 'motorista') {
      router.push('/request')
      return
    }
    setUser(userData)
    
    fetchRides()
    const interval = setInterval(fetchRides, 5000) // poll a cada 5s
    return () => clearInterval(interval)
  }, [router])

  async function fetchRides() {
    try {
      const res = await fetch('/api/listRides')
      if (!res.ok) return
      const data = await res.json()
      setRides(data || [])
    } catch (error) {
      console.error('Erro ao buscar corridas:', error)
    }
  }

  async function handleAccept(rideId: string) {
    if (!user) return alert('Inicia sessão como motorista')
    
    setLoading(true)
    try {
      const res = await fetch('/api/acceptRide', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ rideId, driverId: user.id })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erro')
      
      alert('Corrida aceite com sucesso!')
      fetchRides()
    } catch (err: any) {
      alert(err.message || 'Erro ao aceitar corrida')
    } finally { 
      setLoading(false) 
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-5xl mx-auto pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
            Painel do Motorista
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Olá, {user.full_name}! Corridas disponíveis para aceitar.
          </p>
        </div>

        {rides.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <Clock className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Sem corridas no momento
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Aguarde novos pedidos. A página atualiza automaticamente.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {rides.map((ride: any) => (
            <div 
              key={ride.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Origem</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {ride.origin?.address || '—'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Destino</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {ride.destination?.address || '—'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Euro className="w-4 h-4" />
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        €{ride.price_estimated}
                      </span>
                    </div>
                    <div>
                      {ride.distance_km} km
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-stretch lg:items-end gap-3">
                  <button 
                    onClick={() => handleAccept(ride.id)} 
                    disabled={loading}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {loading ? 'A aceitar…' : 'Aceitar Corrida'}
                  </button>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center lg:text-right">
                    Cliente: {ride.customer_id?.full_name || ride.customer_id?.email || 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
