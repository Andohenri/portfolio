import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Locale } from '../constants'
import { LocaleContext } from './LocaleContext'

const STORAGE_KEY = 'portfolio-locale'

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'fr'

  const savedLocale = window.localStorage.getItem(STORAGE_KEY)
  return savedLocale === 'en' ? 'en' : 'fr'
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState(current => (current === 'fr' ? 'en' : 'fr')),
    }),
    [locale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}