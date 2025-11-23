import Link from 'next/link'
import { Car, MapPin, CreditCard, Star, Bike, Shield, Clock, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/custom/navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Novo em Portugal
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Leve o seu carro para casa{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  em segurança
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Saiu à noite? Não se preocupe. Um motorista vai até si, conduz o seu carro para casa 
                e regressa de bicicleta eléctrica. Simples, seguro e legal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register?role=cliente">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-lg px-8 py-6 shadow-xl">
                    <Car className="w-5 h-5 mr-2" />
                    Pedir Motorista
                  </Button>
                </Link>
                <Link href="/auth/register?role=motorista">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 text-lg px-8 py-6">
                    <Bike className="w-5 h-5 mr-2" />
                    Seja Motorista
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white dark:border-gray-900" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-white dark:border-gray-900" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-2 border-white dark:border-gray-900" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">500+ clientes</div>
                    <div className="text-gray-600 dark:text-gray-400">já confiam em nós</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-xl">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Localização atual</div>
                      <div className="font-semibold text-gray-900 dark:text-white">Rua do Comércio, Lisboa</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 rounded-xl">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Destino</div>
                      <div className="font-semibold text-gray-900 dark:text-white">Avenida da Liberdade, 123</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-400">Distância</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8.5 km</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-600 dark:text-gray-400">Preço estimado</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">€12.50</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 py-6 text-lg shadow-lg">
                      Confirmar Pedido
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 dark:opacity-10" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 dark:opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simples, rápido e seguro em 4 passos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: MapPin,
                title: 'Peça o Serviço',
                description: 'Abra a app e indique onde está e para onde quer ir',
              },
              {
                step: '2',
                icon: Bike,
                title: 'Motorista a Caminho',
                description: 'Um motorista próximo aceita e vai até si de bicicleta',
              },
              {
                step: '3',
                icon: Car,
                title: 'Conduz o Seu Carro',
                description: 'O motorista conduz o seu carro até ao destino com segurança',
              },
              {
                step: '4',
                icon: CreditCard,
                title: 'Pague e Avalie',
                description: 'Pagamento automático e avalie o serviço',
              },
            ].map((item) => (
              <Card key={item.step} className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-4 rounded-2xl shadow-lg">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Preços Transparentes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Sem surpresas, sem taxas escondidas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-gray-600 dark:text-gray-400 mb-2">Tarifa Base</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">€5.00</div>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Inclui primeiros 2 km
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Disponível 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-600 dark:border-blue-400 shadow-xl scale-105 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                    Mais Popular
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">Por Quilómetro</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">€0.90</div>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Após os primeiros 2 km
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Preço fixo garantido
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-gray-600 dark:text-gray-400 mb-2">Exemplo</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">€12.20</div>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Viagem de 10 km
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    €5 + (8 × €0.90)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seja Motorista */}
      <section id="motoristas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">Ganhe Dinheiro como Motorista</h2>
              <p className="text-xl text-blue-100">
                Trabalhe quando quiser, ganhe por cada viagem e ajude pessoas a chegarem em casa em segurança.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Clock, title: 'Horário Flexível', desc: 'Trabalhe quando quiser' },
                  { icon: TrendingUp, title: 'Bons Ganhos', desc: 'Até €15-20/hora' },
                  { icon: Shield, title: 'Seguro Incluído', desc: 'Proteção completa' },
                  { icon: Bike, title: 'Bicicleta Própria', desc: 'Use a sua bicicleta' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-blue-100">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/auth/register?role=motorista">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 mt-4 shadow-xl">
                  <Bike className="w-5 h-5 mr-2" />
                  Candidatar-me Agora
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Requisitos</h3>
              <ul className="space-y-4 text-white">
                {[
                  'Carta de condução válida',
                  'Certificado de Condução (CC)',
                  'Seguro para conduzir veículos de terceiros',
                  'Bicicleta eléctrica dobrável (recomendada)',
                  'Smartphone com GPS',
                  'Maior de 21 anos',
                ].map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-2 rounded-lg shadow-lg">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  LevaCasa
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Leve o seu carro para casa em segurança. Disponível 24/7 em Portugal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviço</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</Link></li>
                <li><Link href="#precos" className="hover:text-white transition-colors">Preços</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Áreas Cobertas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Motoristas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/auth/register?role=motorista" className="hover:text-white transition-colors">Candidatar-me</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Requisitos</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Ganhos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Termos de Serviço</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">RGPD</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 LevaCasa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
