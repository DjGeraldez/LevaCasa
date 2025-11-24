// src/components/custom/navbar.tsx
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Car, Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/i18n'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Evitar problemas de hidratação
  if (!mounted) {
    return (
      <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg shadow">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">LevaCasa</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }

  const t = translations[language]

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo e Seletores */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg shadow">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">LevaCasa</span>
          </Link>
          
          {/* Language and Theme Selectors */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'pt'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
                aria-label="Português"
              >
                🇵🇹 PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
                aria-label="English (US)"
              >
                🇺🇸 US
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#como-funciona" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.howItWorks}</Link>
          <Link href="#precos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.pricing}</Link>
          <Link href="/register" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.becomeDriver}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">{t.nav.login}</Link>
          <Link href="/register" className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md">{t.nav.register}</Link>
          <button className="md:hidden ml-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700 dark:text-gray-300"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3">
          <Link href="#como-funciona" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t.nav.howItWorks}</Link>
          <Link href="#precos" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t.nav.pricing}</Link>
          <Link href="/register" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{t.nav.becomeDriver}</Link>
        </div>
      )}
    </header>
  )
}
