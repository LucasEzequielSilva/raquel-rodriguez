import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll), { ssr: false })

export const metadata = {
  title: "Dra. Raquel Rodríguez — Ortodoncia y Ortopedia Facial | San Salvador de Jujuy",
  description: "Ortodoncia, ortopedia facial y alineadores invisibles en San Salvador de Jujuy. Tratamientos para niños, adolescentes y adultos. Dra. Raquel Rodríguez.",
  metadataBase: new URL("https://raquelrodriguez.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dra. Raquel Rodríguez — Ortodoncia y Ortopedia Facial | San Salvador de Jujuy",
    description: "Ortodoncia, ortopedia facial y alineadores invisibles en Jujuy. Diagnóstico preciso, planificación individual y seguimiento profesional.",
    url: "https://raquelrodriguez.com.ar",
    siteName: "Dra. Raquel Rodríguez — Ortodoncia",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dra. Raquel Rodríguez - Especialista en Ortodoncia en San Salvador de Jujuy" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Raquel Rodríguez — Ortodoncia y Ortopedia Facial | San Salvador de Jujuy",
    description: "Ortodoncia, ortopedia facial y alineadores invisibles en Jujuy. Tratamientos personalizados para todas las edades.",
    images: ["/og-image.jpg"],
  },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dra. Raquel Rodríguez - Ortodoncia",
          "description": "Especialista en ortodoncia y ortopedia facial de los maxilares. Tratamientos para niños, adolescentes y adultos.",
          "url": "https://raquelrodriguez.com.ar",
          "telephone": "+54-9-388-578-6946",
          "email": "draraquelortodoncia@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Balcarce Nº 37, 2do Piso",
            "addressLocality": "San Salvador de Jujuy",
            "addressRegion": "Jujuy",
            "postalCode": "4600",
            "addressCountry": "AR"
          },
          "founder": {
            "@type": "Person",
            "name": "Dra. Raquel Rodríguez",
            "jobTitle": "Especialista en Ortodoncia y Ortopedia Facial"
          },
          "medicalSpecialty": "Orthodontics",
          "availableService": [
            {"@type": "MedicalProcedure", "name": "Ortodoncia convencional"},
            {"@type": "MedicalProcedure", "name": "Alineadores invisibles"},
            {"@type": "MedicalProcedure", "name": "Ortopedia facial"}
          ],
          "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Wednesday"], "opens": "15:00", "closes": "20:00"},
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Thursday","Friday"], "opens": "08:00", "closes": "12:00"}
          ]
        }) }} />
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
