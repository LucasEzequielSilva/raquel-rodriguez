"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { ServiceFeature } from "@/components/service-features"
import { ServiceBenefits } from "@/components/service-benefits"
import { Testimonials } from "@/components/testimonials"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useTranslations } from "@/lib/i18n"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function ServiciosPage() {
  const { t, language } = useTranslations()

  const services = [
    { title: t("servicesPage.services.0.title"), description: t("servicesPage.services.0.description"), features: t("servicesPage.services.0.features"), image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" },
    { title: t("servicesPage.services.1.title"), description: t("servicesPage.services.1.description"), features: t("servicesPage.services.1.features"), image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80" },
    { title: t("servicesPage.services.2.title"), description: t("servicesPage.services.2.description"), features: t("servicesPage.services.2.features"), image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80" },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-28 relative overflow-hidden">
        <span className="absolute top-0 right-0 text-[12rem] font-bold opacity-[0.03] leading-none select-none pointer-events-none text-[#1A1A20]">06</span>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Tratamientos
            </p>
            <h1 className="text-2xl md:text-3xl tracking-tight text-[#1A1A20] font-medium mb-6 leading-[1.1]">
              {t("servicesPage.hero.title")}
            </h1>
            <p className="text-lg text-[#6B6B76] mb-10 leading-relaxed">{t("servicesPage.hero.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceFeature {...service} index={index} />
              {index < services.length - 1 && (
                <div className="flex items-center justify-center py-4">
                  <div className="flex-1 h-px bg-[#E0E2E8]" />
                  <div className="mx-4 w-2 h-2 rotate-45 bg-teal-500/40" />
                  <div className="flex-1 h-px bg-[#E0E2E8]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <ServiceBenefits
        title={t("servicesPage.benefits.title")}
        subtitle={t("servicesPage.benefits.subtitle")}
        benefits={t("servicesPage.benefits.items")}
      />

      <Testimonials title={t("servicesPage.testimonials.title")} subtitle={t("servicesPage.testimonials.subtitle")} />

      {/* CTA */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-[2rem] tracking-tight text-[#1A1A20] font-medium mb-5">{t("servicesPage.cta.title")}</h2>
            <p className="text-[#6B6B76] mb-8">{t("servicesPage.cta.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      <FloatingFooter />
    </div>
  )
}
