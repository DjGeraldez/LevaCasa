// src/lib/i18n.ts
export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      howItWorks: 'Como Funciona',
      pricing: 'Preços',
      becomeDriver: 'Seja Motorista',
      login: 'Entrar',
      register: 'Registar',
    },
    hero: {
      badge: '🚀 Novo em Portugal',
      title: 'Leve o seu carro para casa',
      titleHighlight: 'em segurança',
      description: 'Saiu à noite? Não se preocupe. Um motorista vai até si, conduz o seu carro para casa e regressa de bicicleta eléctrica. Simples, seguro e legal.',
      requestDriver: 'Pedir Motorista',
      becomeDriver: 'Seja Motorista',
      customers: 'clientes',
      trustUs: 'já confiam em nós',
    },
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Simples, rápido e seguro em 4 passos',
      step1: {
        title: 'Peça o Serviço',
        description: 'Abra a app e indique onde está e para onde quer ir',
      },
      step2: {
        title: 'Motorista a Caminho',
        description: 'Um motorista próximo aceita e vai até si de bicicleta',
      },
      step3: {
        title: 'Conduz o Seu Carro',
        description: 'O motorista conduz o seu carro até ao destino com segurança',
      },
      step4: {
        title: 'Pague e Avalie',
        description: 'Pagamento automático e avalie o serviço',
      },
    },
    pricing: {
      title: 'Preços Transparentes',
      subtitle: 'Sem surpresas, sem taxas escondidas',
      baseRate: {
        title: 'Tarifa Base',
        price: '€5.00',
        includes: 'Inclui primeiros 2 km',
        available: 'Disponível 24/7',
      },
      perKm: {
        badge: 'Mais Popular',
        title: 'Por Quilómetro',
        price: '€0.90',
        after: 'Após os primeiros 2 km',
        fixed: 'Preço fixo garantido',
      },
      example: {
        title: 'Exemplo',
        price: '€12.20',
        trip: 'Viagem de 10 km',
        calculation: '€5 + (8 × €0.90)',
      },
    },
    driver: {
      title: 'Ganhe Dinheiro como Motorista',
      description: 'Trabalhe quando quiser, ganhe por cada viagem e ajude pessoas a chegarem em casa em segurança.',
      benefits: {
        flexible: {
          title: 'Horário Flexível',
          desc: 'Trabalhe quando quiser',
        },
        earnings: {
          title: 'Bons Ganhos',
          desc: 'Até €15-20/hora',
        },
        insurance: {
          title: 'Seguro Incluído',
          desc: 'Proteção completa',
        },
        bike: {
          title: 'Bicicleta Própria',
          desc: 'Use a sua bicicleta',
        },
      },
      apply: 'Candidatar-me Agora',
      requirements: {
        title: 'Requisitos',
        list: [
          'Carta de condução válida',
          'Certificado de Condução (CC)',
          'Seguro para conduzir veículos de terceiros',
          'Bicicleta eléctrica dobrável (recomendada)',
          'Smartphone com GPS',
          'Maior de 21 anos',
        ],
      },
    },
    footer: {
      description: 'Leve o seu carro para casa em segurança. Disponível 24/7 em Portugal.',
      service: {
        title: 'Serviço',
        howItWorks: 'Como Funciona',
        pricing: 'Preços',
        coverage: 'Áreas Cobertas',
      },
      drivers: {
        title: 'Motoristas',
        apply: 'Candidatar-me',
        requirements: 'Requisitos',
        earnings: 'Ganhos',
      },
      legal: {
        title: 'Legal',
        terms: 'Termos de Serviço',
        privacy: 'Política de Privacidade',
        gdpr: 'RGPD',
      },
      copyright: '© 2024 LevaCasa. Todos os direitos reservados.',
    },
    booking: {
      currentLocation: 'Localização atual',
      destination: 'Destino',
      distance: 'Distância',
      estimatedPrice: 'Preço estimado',
      confirmOrder: 'Confirmar Pedido',
    },
  },
  en: {
    nav: {
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      becomeDriver: 'Become a Driver',
      login: 'Login',
      register: 'Sign Up',
    },
    hero: {
      badge: '🚀 New in Portugal',
      title: 'Get your car home',
      titleHighlight: 'safely',
      description: 'Been out at night? Don\'t worry. A driver comes to you, drives your car home and returns by electric bike. Simple, safe and legal.',
      requestDriver: 'Request Driver',
      becomeDriver: 'Become a Driver',
      customers: 'customers',
      trustUs: 'already trust us',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Simple, fast and safe in 4 steps',
      step1: {
        title: 'Request Service',
        description: 'Open the app and indicate where you are and where you want to go',
      },
      step2: {
        title: 'Driver on the Way',
        description: 'A nearby driver accepts and comes to you by bike',
      },
      step3: {
        title: 'Drives Your Car',
        description: 'The driver safely drives your car to the destination',
      },
      step4: {
        title: 'Pay and Rate',
        description: 'Automatic payment and rate the service',
      },
    },
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'No surprises, no hidden fees',
      baseRate: {
        title: 'Base Rate',
        price: '€5.00',
        includes: 'Includes first 2 km',
        available: 'Available 24/7',
      },
      perKm: {
        badge: 'Most Popular',
        title: 'Per Kilometer',
        price: '€0.90',
        after: 'After the first 2 km',
        fixed: 'Fixed price guaranteed',
      },
      example: {
        title: 'Example',
        price: '€12.20',
        trip: '10 km trip',
        calculation: '€5 + (8 × €0.90)',
      },
    },
    driver: {
      title: 'Earn Money as a Driver',
      description: 'Work when you want, earn per trip and help people get home safely.',
      benefits: {
        flexible: {
          title: 'Flexible Schedule',
          desc: 'Work when you want',
        },
        earnings: {
          title: 'Good Earnings',
          desc: 'Up to €15-20/hour',
        },
        insurance: {
          title: 'Insurance Included',
          desc: 'Full protection',
        },
        bike: {
          title: 'Own Bike',
          desc: 'Use your own bike',
        },
      },
      apply: 'Apply Now',
      requirements: {
        title: 'Requirements',
        list: [
          'Valid driver\'s license',
          'Driving Certificate (CC)',
          'Insurance to drive third-party vehicles',
          'Foldable electric bike (recommended)',
          'Smartphone with GPS',
          'Over 21 years old',
        ],
      },
    },
    footer: {
      description: 'Get your car home safely. Available 24/7 in Portugal.',
      service: {
        title: 'Service',
        howItWorks: 'How It Works',
        pricing: 'Pricing',
        coverage: 'Coverage Areas',
      },
      drivers: {
        title: 'Drivers',
        apply: 'Apply',
        requirements: 'Requirements',
        earnings: 'Earnings',
      },
      legal: {
        title: 'Legal',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        gdpr: 'GDPR',
      },
      copyright: '© 2024 LevaCasa. All rights reserved.',
    },
    booking: {
      currentLocation: 'Current location',
      destination: 'Destination',
      distance: 'Distance',
      estimatedPrice: 'Estimated price',
      confirmOrder: 'Confirm Order',
    },
  },
}
