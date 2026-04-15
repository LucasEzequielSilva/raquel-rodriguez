"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useTranslations } from "@/lib/i18n"
import {
  ShieldAlert,
  Sparkles,
  Clock,
  Phone,
  MapPin,
  Mail,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shield,
  AlertCircle,
  Wrench,
  Droplets,
  Siren,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

const quickAccessIcons = [Shield, Sparkles, AlertCircle, Wrench, Droplets, Siren]

export default function PacientesPage() {
  const { t, language } = useTranslations()

  const quickAccess = t("patients.quickAccess.items") as unknown as { title: string; anchor: string }[]
  const bracketsItems = t("patients.brackets.items") as unknown as { title: string; description: string }[]
  const alineadoresItems = t("patients.alineadores.items") as unknown as { title: string; description: string }[]
  const ortopediaItems = t("patients.ortopedia.items") as unknown as { title: string; description: string }[]
  const normalItems = t("patients.normalVsConsult.normal.items") as unknown as string[]
  const consultItems = t("patients.normalVsConsult.consult.items") as unknown as string[]
  const hygieneItems = t("patients.hygiene.items") as unknown as { title: string; description: string }[]
  const emergencyItems = t("patients.emergencies.items") as unknown as { title: string; description: string }[]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(240,253,250,0.5) 0%, #F5F7FA 100%)" }}>
        {/* Decorative SVG background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute -right-20 top-16 w-[500px] h-[500px] opacity-[0.04]"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Abstract tooth outline */}
            <path
              d="M100 20C75 20 60 35 55 55C50 75 45 85 35 95C25 105 20 120 25 140C30 160 45 175 60 175C70 175 75 165 80 155C85 145 90 140 100 140C110 140 115 145 120 155C125 165 130 175 140 175C155 175 170 160 175 140C180 120 175 105 165 95C155 85 150 75 145 55C140 35 125 20 100 20Z"
              stroke="currentColor"
              strokeWidth="3"
              className="text-teal-600"
            />
            <path
              d="M70 55C80 65 90 68 100 68C110 68 120 65 130 55"
              stroke="currentColor"
              strokeWidth="2"
              className="text-teal-600"
            />
          </svg>
          <svg
            className="absolute -left-10 bottom-0 w-[600px] h-[200px] opacity-[0.03]"
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Abstract wave pattern */}
            <path
              d="M0 100C50 80 100 120 150 100C200 80 250 120 300 100C350 80 400 120 450 100C500 80 550 120 600 100"
              stroke="currentColor"
              strokeWidth="4"
              className="text-teal-500"
            />
            <path
              d="M0 140C50 120 100 160 150 140C200 120 250 160 300 140C350 120 400 160 450 140C500 120 550 160 600 140"
              stroke="currentColor"
              strokeWidth="3"
              className="text-teal-500"
            />
            <path
              d="M0 60C50 40 100 80 150 60C200 40 250 80 300 60C350 40 400 80 450 60C500 40 550 80 600 60"
              stroke="currentColor"
              strokeWidth="2"
              className="text-teal-500"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Pacientes en tratamiento
            </p>
            <h1 className="text-2xl md:text-3xl tracking-tight text-[#1A1A20] font-medium mb-6 leading-[1.1]">
              {t("patients.hero.title")}
            </h1>
            <p className="text-lg text-[#6B6B76] mb-10 leading-relaxed">{t("patients.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton size="lg" label={t("patients.hero.cta")} />
              <a
                href="https://wa.me/5493885786946?text=Hola%2C%20tengo%20una%20urgencia%20con%20mi%20tratamiento"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-[15px] px-8 py-4 bg-white text-red-600 border border-red-200 hover:border-red-300 hover:shadow-[0_2px_8px_rgba(239,68,68,0.1)] active:scale-[0.98] transition-all duration-200"
              >
                <AlertTriangle className="w-4 h-4" />
                {t("patients.hero.emergency")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-xl font-medium text-[#1A1A20] mb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          >
            {t("patients.quickAccess.title")}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickAccess.map((item: { title: string; anchor: string }, i: number) => {
              const Icon = quickAccessIcons[i] || ArrowRight
              return (
                <motion.a
                  key={i}
                  href={`#${item.anchor}`}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-[#E0E2E8] hover:border-teal-300 hover:shadow-[0_4px_20px_rgba(13,148,136,0.1)] transition-all duration-200 text-center group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-[#4A4A54] group-hover:text-teal-700 transition-colors duration-200">
                    {item.title}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brackets */}
      <section id="brackets" className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">Brackets</p>
            <h2 className="text-2xl font-medium text-[#1A1A20] mb-8">{t("patients.brackets.title")}</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {bracketsItems.map((item: { title: string; description: string }, i: number) => (
              <AccordionItem
                key={i}
                value={`brackets-${i}`}
                className="rounded-xl px-6 py-1 bg-white border border-[#E0E2E8] transition-all duration-200 data-[state=open]:border-teal-200 data-[state=open]:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <AccordionTrigger className="text-[#1A1A20] hover:text-[#6B6B76] text-left transition-colors duration-200 text-[15px] font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#8A8A94] text-sm leading-relaxed">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Alineadores */}
      <section id="alineadores" className="py-20 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">Alineadores</p>
            <h2 className="text-2xl font-medium text-[#1A1A20] mb-8">{t("patients.alineadores.title")}</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {alineadoresItems.map((item: { title: string; description: string }, i: number) => (
              <AccordionItem
                key={i}
                value={`alineadores-${i}`}
                className="rounded-xl px-6 py-1 bg-white border border-[#E0E2E8] transition-all duration-200 data-[state=open]:border-teal-200 data-[state=open]:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <AccordionTrigger className="text-[#1A1A20] hover:text-[#6B6B76] text-left transition-colors duration-200 text-[15px] font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#8A8A94] text-sm leading-relaxed">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Ortopedia */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">Ortopedia</p>
            <h2 className="text-2xl font-medium text-[#1A1A20] mb-8">{t("patients.ortopedia.title")}</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {ortopediaItems.map((item: { title: string; description: string }, i: number) => (
              <AccordionItem
                key={i}
                value={`ortopedia-${i}`}
                className="rounded-xl px-6 py-1 bg-white border border-[#E0E2E8] transition-all duration-200 data-[state=open]:border-teal-200 data-[state=open]:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <AccordionTrigger className="text-[#1A1A20] hover:text-[#6B6B76] text-left transition-colors duration-200 text-[15px] font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#8A8A94] text-sm leading-relaxed">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Normal vs Consult */}
      <section id="dolor" className="py-20 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl font-medium text-[#1A1A20] mb-10">{t("patients.normalVsConsult.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="p-7 rounded-2xl border-l-4 border-l-teal-400 bg-white border border-[#E0E2E8]"
              style={{ backgroundColor: "rgba(240,253,250,0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <h3 className="text-base font-medium text-[#1A1A20]">{t("patients.normalVsConsult.normal.title")}</h3>
              </div>
              <ul className="space-y-3">
                {normalItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B76]">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-7 rounded-2xl border-l-4 border-l-red-400 bg-white border border-[#E0E2E8]"
              style={{ backgroundColor: "rgba(254,242,242,0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="text-base font-medium text-[#1A1A20]">{t("patients.normalVsConsult.consult.title")}</h3>
              </div>
              <ul className="space-y-3">
                {consultItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B76]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hygiene */}
      <section id="higiene" className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">Cuidados</p>
            <h2 className="text-2xl font-medium text-[#1A1A20] mb-8">{t("patients.hygiene.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hygieneItems.map((item: { title: string; description: string }, i: number) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-white border border-[#E0E2E8] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Sparkles className="w-5 h-5 text-teal-500 mb-3" />
                <h3 className="text-sm font-medium text-[#1A1A20] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#8A8A94] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergencies */}
      <section id="urgencias" className="py-20 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Red-tinted banner header */}
          <motion.div
            className="rounded-2xl p-6 mb-8"
            style={{ background: "linear-gradient(135deg, rgba(254,242,242,0.6) 0%, rgba(254,226,226,0.3) 100%)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Siren className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-red-500">Urgencias</p>
                <h2 className="text-2xl font-medium text-[#1A1A20]">{t("patients.emergencies.title")}</h2>
              </div>
            </div>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {emergencyItems.map((item: { title: string; description: string }, i: number) => (
              <AccordionItem
                key={i}
                value={`emergency-${i}`}
                className="rounded-xl px-6 py-1 bg-white border border-[#E0E2E8] transition-all duration-200 data-[state=open]:border-red-200 data-[state=open]:shadow-[0_2px_8px_rgba(239,68,68,0.06)]"
              >
                <AccordionTrigger className="text-[#1A1A20] hover:text-[#6B6B76] text-left transition-colors duration-200 text-[15px] font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#8A8A94] text-sm leading-relaxed">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Adherence */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            className="relative rounded-2xl bg-white border border-[#E0E2E8] overflow-hidden p-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Teal gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #14b8a6, #0d9488, #0f766e)" }} />

            {/* Decorative background icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Clock className="w-48 h-48 text-teal-500 opacity-[0.03]" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-5">
                <Clock className="w-8 h-8 text-teal-500" />
              </div>
              <h2 className="text-xl font-medium text-[#1A1A20] mb-4">{t("patients.adherence.title")}</h2>
              <p className="text-[#6B6B76] mb-8 leading-relaxed">{t("patients.adherence.description")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            className="p-8 rounded-2xl bg-white border border-[#E0E2E8]"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          >
            <h2 className="text-xl font-medium text-[#1A1A20] mb-6">Contacto directo</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, text: "+54 9 388 578 6946", href: "tel:+5493885786946" },
                { icon: Mail, text: "draraquelortodoncia@gmail.com", href: "mailto:draraquelortodoncia@gmail.com" },
                { icon: MapPin, text: "Balcarce N\u00BA 37, 2do Piso \u2014 San Salvador de Jujuy" },
              ].map(({ icon: Icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 mt-0.5 text-teal-500" />
                  {href ? (
                    <a href={href} className="text-sm text-[#6B6B76] hover:text-teal-600 transition-colors">{text}</a>
                  ) : (
                    <p className="text-sm text-[#6B6B76]">{text}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Clinic hours grid */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-teal-500" />
                <p className="text-sm font-medium text-[#1A1A20]">Horarios de atenci&oacute;n</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { day: "Lunes", time: "15:00 - 20:00" },
                  { day: "Martes", time: "08:00 - 12:00" },
                  { day: "Mi\u00E9rcoles", time: "15:00 - 20:00" },
                  { day: "Jueves", time: "08:00 - 12:00" },
                  { day: "Viernes", time: "08:00 - 12:00" },
                ].map(({ day, time }, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#F8F9FB] border border-[#E0E2E8] text-center">
                    <p className="text-xs font-medium text-teal-600 uppercase tracking-wide mb-1">{day}</p>
                    <p className="text-sm text-[#6B6B76]">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton label="WhatsApp" />
              <a
                href="https://wa.me/5493885786946?text=Hola%2C%20tengo%20una%20urgencia%20con%20mi%20tratamiento"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-[13px] px-6 py-3 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 active:scale-[0.98] transition-all duration-200"
              >
                <AlertTriangle className="w-4 h-4" />
                Urgencia
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingFooter />
    </div>
  )
}
