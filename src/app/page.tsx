'use client'
import Link from 'next/link'
import { Car, MapPin, CreditCard, Star, Bike, Shield, Clock, TrendingUp, Smartphone, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/custom/navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/i18n'

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language]

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
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t.hero.title}{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register?role=cliente">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-lg px-8 py-6 shadow-xl">
                    <Car className="w-5 h-5 mr-2" />
                    {t.hero.requestDriver}
                  </Button>
                </Link>
                <Link href="/auth/register?role=motorista">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 text-lg px-8 py-6">
                    <Bike className="w-5 h-5 mr-2" />
                    {t.hero.becomeDriver}
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
                    <div className="font-semibold text-gray-900 dark:text-white">500+ {t.hero.customers}</div>
                    <div className="text-gray-600 dark:text-gray-400">{t.hero.trustUs}</div>
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
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t.booking.currentLocation}</div>
                      <div className="font-semibold text-gray-900 dark:text-white">Rua do Comércio, Lisboa</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 rounded-xl">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t.booking.destination}</div>
                      <div className="font-semibold text-gray-900 dark:text-white">Avenida da Liberdade, 123</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-400">{t.booking.distance}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8.5 km</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-600 dark:text-gray-400">{t.booking.estimatedPrice}</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">€12.50</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 py-6 text-lg shadow-lg">
                      {t.booking.confirmOrder}
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

      {/* Download Apps Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'pt' ? 'Baixe Nossos Aplicativos' : 'Download Our Apps'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'pt' 
                ? 'Disponível para iOS e Android. Escolha o app ideal para você!' 
                : 'Available for iOS and Android. Choose the perfect app for you!'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* App Cliente */}
            <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-2xl bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-6 rounded-3xl inline-block mb-4 shadow-xl">
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {language === 'pt' ? 'App Cliente' : 'Customer App'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'pt' 
                      ? 'Solicite entregas de forma rápida e fácil' 
                      : 'Request deliveries quickly and easily'}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{language === 'pt' ? 'Rastreamento em tempo real' : 'Real-time tracking'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{language === 'pt' ? 'Pagamento integrado' : 'Integrated payment'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{language === 'pt' ? 'Histórico de pedidos' : 'Order history'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span>{language === 'pt' ? 'Avaliação de motoristas' : 'Driver ratings'}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'pt' ? 'Baixar para iOS' : 'Download for iOS'}
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-base shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'pt' ? 'Baixar para Android' : 'Download for Android'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* App Motorista */}
            <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-2xl bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-600 p-6 rounded-3xl inline-block mb-4 shadow-xl">
                    <Bike className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {language === 'pt' ? 'App Motorista' : 'Driver App'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'pt' 
                      ? 'Ganhe dinheiro fazendo entregas' 
                      : 'Earn money making deliveries'}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span>{language === 'pt' ? 'Aceite pedidos próximos' : 'Accept nearby orders'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span>{language === 'pt' ? 'Navegação integrada' : 'Integrated navigation'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span>{language === 'pt' ? 'Ganhos em tempo real' : 'Real-time earnings'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span>{language === 'pt' ? 'Horários flexíveis' : 'Flexible schedule'}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'pt' ? 'Baixar para iOS' : 'Download for iOS'}
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-base shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'pt' ? 'Baixar para Android' : 'Download for Android'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR Codes Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === 'pt' 
                ? 'Ou escaneie o QR Code para baixar diretamente' 
                : 'Or scan the QR Code to download directly'}
            </p>
            <div className="flex justify-center gap-12 flex-wrap">
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg inline-block mb-3 border-2 border-gray-200 dark:border-gray-700">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {language === 'pt' ? 'App Cliente' : 'Customer App'}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg inline-block mb-3 border-2 border-gray-200 dark:border-gray-700">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 rounded-xl flex items-center justify-center">
                    <Bike className="w-16 h-16 text-cyan-600 dark:text-cyan-400" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {language === 'pt' ? 'App Motorista' : 'Driver App'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.howItWorks.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: MapPin,
                title: t.howItWorks.step1.title,
                description: t.howItWorks.step1.description,
              },
              {
                step: '2',
                icon: Bike,
                title: t.howItWorks.step2.title,
                description: t.howItWorks.step2.description,
              },
              {
                step: '3',
                icon: Car,
                title: t.howItWorks.step3.title,
                description: t.howItWorks.step3.description,
              },
              {
                step: '4',
                icon: CreditCard,
                title: t.howItWorks.step4.title,
                description: t.howItWorks.step4.description,
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
      <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.pricing.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-gray-600 dark:text-gray-400 mb-2">{t.pricing.baseRate.title}</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{t.pricing.baseRate.price}</div>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {t.pricing.baseRate.includes}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {t.pricing.baseRate.available}
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-600 dark:border-blue-400 shadow-xl scale-105 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                    {t.pricing.perKm.badge}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">{t.pricing.perKm.title}</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{t.pricing.perKm.price}</div>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {t.pricing.perKm.after}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {t.pricing.perKm.fixed}
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-gray-600 dark:text-gray-400 mb-2">{t.pricing.example.title}</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">{t.pricing.example.price}</div>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {t.pricing.example.trip}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {t.pricing.example.calculation}
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
              <h2 className="text-4xl font-bold">{t.driver.title}</h2>
              <p className="text-xl text-blue-100">
                {t.driver.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Clock, title: t.driver.benefits.flexible.title, desc: t.driver.benefits.flexible.desc },
                  { icon: TrendingUp, title: t.driver.benefits.earnings.title, desc: t.driver.benefits.earnings.desc },
                  { icon: Shield, title: t.driver.benefits.insurance.title, desc: t.driver.benefits.insurance.desc },
                  { icon: Bike, title: t.driver.benefits.bike.title, desc: t.driver.benefits.bike.desc },
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
                  {t.driver.apply}
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">{t.driver.requirements.title}</h3>
              <ul className="space-y-4 text-white">
                {t.driver.requirements.list.map((req) => (
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
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.service.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#como-funciona" className="hover:text-white transition-colors">{t.footer.service.howItWorks}</Link></li>
                <li><Link href="#precos" className="hover:text-white transition-colors">{t.footer.service.pricing}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t.footer.service.coverage}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.drivers.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/auth/register?role=motorista" className="hover:text-white transition-colors">{t.footer.drivers.apply}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t.footer.drivers.requirements}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t.footer.drivers.earnings}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.legal.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">{t.footer.legal.terms}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t.footer.legal.privacy}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t.footer.legal.gdpr}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-sm text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
