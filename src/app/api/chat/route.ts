import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { messages, language } = await request.json()

    // Sistema de prompt adaptado ao idioma
    const systemPrompt = language === 'pt' 
      ? `Você é um assistente virtual da LevaCasa, uma plataforma de entregas rápidas em Portugal. 
         Você ajuda clientes e motoristas a resolver problemas, tirar dúvidas sobre:
         - Como solicitar uma entrega
         - Rastreamento de pedidos
         - Preços e formas de pagamento (€2.50 base + €0.50/km após 3km)
         - Como se tornar motorista
         - Requisitos para motoristas (18+ anos, moto/bicicleta, licença válida, smartphone)
         - Problemas técnicos com o app
         - Políticas de cancelamento e reembolso
         
         Seja sempre prestativo, profissional e objetivo. Use linguagem clara e amigável.`
      : `You are a virtual assistant for LevaCasa, a fast delivery platform in Portugal.
         You help customers and drivers solve problems and answer questions about:
         - How to request a delivery
         - Order tracking
         - Pricing and payment methods (€2.50 base + €0.50/km after 3km)
         - How to become a driver
         - Driver requirements (18+ years, motorcycle/bicycle, valid license, smartphone)
         - Technical issues with the app
         - Cancellation and refund policies
         
         Always be helpful, professional and objective. Use clear and friendly language.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const assistantMessage = completion.choices[0].message.content

    return NextResponse.json({ 
      message: assistantMessage,
      usage: completion.usage 
    })
  } catch (error: any) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: error.message || 'Erro ao processar mensagem' },
      { status: 500 }
    )
  }
}
