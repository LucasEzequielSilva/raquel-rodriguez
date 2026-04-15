"use client"

import { type ReactNode } from "react"
import { LanguageContext, type Language, getTranslation } from "@/lib/i18n"

const language: Language = "es"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const setLanguage = (_newLanguage: Language) => {
    // Spanish-only site — language switching disabled
  }

  const t = (key: string) => getTranslation(language, key)

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

