'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    try {
      // Carregar idioma do localStorage apenas no cliente após montagem
      const savedLang = localStorage.getItem('language') as Language
      if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
        setLanguageState(savedLang)
      }
    } catch (error) {
      // Silenciosamente falhar se localStorage não estiver disponível
      console.warn('Language initialization failed:', error)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang)
      }
    } catch (error) {
      console.warn('Language save failed:', error)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  
  // Retornar valores padrão seguros durante SSR/pre-rendering
  if (context === undefined) {
    return {
      language: 'pt' as Language,
      setLanguage: () => {}
    }
  }
  
  return context
}
