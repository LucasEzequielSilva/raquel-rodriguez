"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { useTranslations } from "@/lib/i18n"
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, MessageCircle } from "lucide-react"
import type React from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function ContactPage() {
  const { t, language } = useTranslations()
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola, soy ${formState.name}. ${formState.message}`
    window.open(`https://wa.me/5493885786946?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
    setFormState({ name: "", email: "", phone: "", message: "" })
  }

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl text-sm
    bg-white text-[#1A1A20]
    border border-[#E0E2E8] border-b-2 border-b-transparent
    placeholder:text-[#B5B5BF]
    focus:outline-none focus:border-teal-400 focus:border-b-teal-500 focus:shadow-[0_0_0_3px_rgba(13,148,136,0.1)]
    transition-all duration-200
  `

  const paymentMethods = [
    "Efectivo",
    "Transferencia",
    "Debito (Macro)",
    "Credito (Macro, 3 cuotas)",
    "Planes de 3 y 5 cuotas",
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <main className="container mx-auto px-4 md:px-8 pt-36 pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Form */}
            <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={fadeIn}>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
                Contacto
              </p>
              <h1 className="text-2xl md:text-[2rem] font-medium text-[#1A1A20] mb-4 tracking-tight leading-tight">
                ¿Queres agendar tu consulta?
              </h1>
              <p className="text-[#6B6B76] mb-8 text-base leading-relaxed">
                {t("contact.description")}
              </p>

              {/* WhatsApp suggestion */}
              <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-teal-50/70 border border-teal-100">
                <MessageCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <p className="text-sm text-teal-700">
                  Tambien podes escribirnos directo por WhatsApp
                </p>
                <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3v7m0 0l-2.5-2.5M8 10l2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" aria-label={t("contact.form.name")} value={formState.name} onChange={handleInputChange} placeholder={t("contact.form.name")} required className={inputClass} />
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" name="email" aria-label={t("contact.form.email")} value={formState.email} onChange={handleInputChange} placeholder={t("contact.form.email")} className={inputClass} />
                  <input type="tel" name="phone" aria-label={t("contact.form.phone")} value={formState.phone} onChange={handleInputChange} placeholder={t("contact.form.phone")} className={inputClass} />
                </div>
                <textarea name="message" aria-label={t("contact.form.message")} value={formState.message} onChange={handleInputChange} placeholder={t("contact.form.message")} required rows={5} className={`${inputClass} resize-none`} />
                <button
                  type="submit"
                  className="
                    w-full bg-teal-600 text-white font-medium py-3.5 px-4 rounded-xl
                    text-sm border border-teal-500/20 [border-top-color:rgba(255,255,255,0.18)] [border-left-color:rgba(255,255,255,0.10)] [border-bottom-color:rgba(0,0,0,0.10)] [border-right-color:rgba(0,0,0,0.06)]
                    shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.12)]
                    hover:bg-teal-700 hover:shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.45),inset_0_-4px_14px_0_rgba(255,255,255,0.18),0_4px_16px_rgba(13,148,136,0.35)]
                    brightness-105 hover:brightness-100
                    active:scale-[0.99] transition-all duration-200
                  "
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-5 space-y-5"
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] } } }}
            >
              <div className="rounded-2xl p-7 space-y-4 bg-white border border-[#E0E2E8]">
                <h2 className="text-base font-medium text-[#1A1A20] mb-2">{t("contact.info.title")}</h2>
                {[
                  { icon: MapPin, text: "Balcarce Nro 37, 2do Piso, San Salvador de Jujuy, Jujuy, Argentina (CP 4600)" },
                  { icon: Phone, text: "+54 9 388 578 6946" },
                  { icon: Mail, text: "draraquelortodoncia@gmail.com" },
                  { icon: Instagram, text: "@od.rodriguezraquel" },
                  { icon: Clock, text: "Lun y Mie: 15-20hs - Mar, Jue y Vie: 8-12hs" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 group rounded-lg px-2 py-1.5 -mx-2 transition-all duration-200 hover:pl-3 hover:bg-[#F5F7FA]/60 cursor-default">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-teal-500" />
                    </span>
                    <p className="text-sm text-[#6B6B76] leading-relaxed pt-1.5">{text}</p>
                  </div>
                ))}
              </div>

              {/* Payment methods */}
              <div className="rounded-2xl p-7 bg-white border border-[#E0E2E8]">
                <h2 className="text-base font-medium text-[#1A1A20] mb-4">Medios de pago</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {paymentMethods.map((method, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-[#E0E2E8] text-[#6B6B76] bg-[#F5F7FA]/60"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                <p className="text-[#8A8A94] text-[13px]">No trabajamos con obras sociales</p>
              </div>

              <div className="relative h-[280px] rounded-2xl overflow-hidden border border-[#E0E2E8]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5!2d-65.3!3d-24.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBalcarce%2037%2C%20San%20Salvador%20de%20Jujuy!5e0!3m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicacion del consultorio"
                  className="grayscale contrast-90 brightness-75"
                />
                <a
                  href="https://www.google.com/maps/search/Balcarce+37,+San+Salvador+de+Jujuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#E0E2E8] text-xs font-medium text-[#1A1A20] shadow-sm hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-teal-500" />
                  Ver en Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <FloatingFooter />
    </div>
  )
}
