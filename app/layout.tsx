import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll), { ssr: false })

export const metadata = {
  title: "Dra. Raquel Rodríguez — Ortodoncia y Ortopedia Facial",
  description: "Especialista en ortodoncia y ortopedia facial de los maxilares. Tratamientos para niños, adolescentes y adultos en San Salvador de Jujuy.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <noscript><style>{`.hero-title, .hero-sub, .hero-badge, .hero-cta, .faq-item { opacity: 1 !important; }`}</style></noscript>
      </head>
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <ScrollToTop />
            {children}
            <Toaster />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
