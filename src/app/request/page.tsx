'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Navigation } from 'lucide-react'

export default function RequestRide() {
  const router = useRouter()
  const [origin, setOrigin] = useState('Praça do Comércio, Lisboa')
  const [destination, setDestination] = useState('Avenida da Liberdade, 123')
  const [distance_km, setDistanceKm] = useState(8.5)
  const [price, setPrice] = useState(12.5)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const raw = localStorage.getItem('levacasa_user')
    if (!raw) {
      router.push('/login')
      return
    }
    setUser(JSON.parse(raw))
  }, [router])

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return router.push('/login')
    
    setLoading(true)
    try {
      const res = await fetch('/api/createRide', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          customer_id: user.id,
          origin: { address: origin },
          destination: { address: destination },
          distance_km,
          price_estimated: price
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erro')
      
      alert('Corrida solicitada com sucesso! Um motorista irá aceitar em breve.')
      router.push('/')
    } catch (err: any) {
      alert(err.message || 'Erro ao pedir corrida')
    } finally { 
      setLoading(false) 
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
              Pedir Motorista
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Olá, {user.full_name}! Preencha os detalhes da sua viagem.
            </p>
          </div>

          <form onSubmit={handleRequest} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <MapPin className="w-4 h-4" />
                Origem
              </label>
              <input 
                value={origin} 
                onChange={e=>setOrigin(e.target.value)} 
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Navigation className="w-4 h-4" />
                Destino
              </label>
              <input 
                value={destination} 
                onChange={e=>setDestination(e.target.value)} 
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Distância (km)
                </label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={distance_km} 
                  onChange={e=>setDistanceKm(Number(e.target.value))} 
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preço estimado (€)
                </label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={price} 
                  onChange={e=>setPrice(Number(e.target.value))} 
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                  required
                />
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Total estimado:</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">€{price.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium text-lg hover:from-blue-700 hover:to-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'A pedir…' : 'Confirmar Pedido'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
