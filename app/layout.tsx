import type { ReactNode } from "react"
import type { Viewport } from "next"
import { LanguageProvider } from "@/components/language-provider"
import "@/app/globals.css"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop), { ssr: false })
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll), { ssr: false })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A20",
}

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
          "email": "odrodriguezraquel@gmail.com",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿A qué edad conviene la primer consulta de ortodoncia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Te recomendamos la primer consulta a partir de los 5 años de edad. Una evaluación temprana permite detectar problemas de crecimiento o de mordida a tiempo e intervenir de manera oportuna si es necesario."
              }
            },
            {
              "@type": "Question",
              "name": "¿Los adultos pueden hacer ortodoncia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, la ortodoncia no tiene límite de edad. Contamos con opciones adaptadas a las necesidades de pacientes adultos, tanto con brackets como con alineadores invisibles."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué diferencia hay entre ortodoncia y ortopedia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La ortopedia se enfoca en guiar el crecimiento de los maxilares, principalmente en niños. La ortodoncia corrige la posición de los dientes. En muchos casos se complementan para lograr el mejor resultado."
              }
            },
            {
              "@type": "Question",
              "name": "¿Los alineadores sirven para todos los casos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los alineadores son una excelente opción para muchos casos, pero no para todos. En la consulta evaluamos cuál es la mejor alternativa para cada paciente según la complejidad del caso."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto dura un tratamiento de ortodoncia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La duración varía según la complejidad del caso. En general, los tratamientos duran entre 12 y 30 meses. En la consulta de diagnóstico te daremos un tiempo estimado para tu caso particular."
              }
            },
            {
              "@type": "Question",
              "name": "¿La primer consulta incluye diagnóstico?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La primer consulta incluye una evaluación clínica completa. Para el diagnóstico definitivo necesitamos estudios complementarios (radiografías, fotos, escaneo 3D) que se realizan en una segunda visita. El diagnóstico y plan de tratamiento se entregan en una tercera cita."
              }
            }
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
