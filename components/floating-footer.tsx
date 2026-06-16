"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslations } from "@/lib/i18n"
import { Instagram, Facebook, WhatsApp, Mail, ChevronUp } from "@/components/icons"

export function FloatingFooter({ language: languageProp }: { language?: string }) {
  const { t } = useTranslations()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative z-10 px-4 md:px-6 pb-6 bg-[#E8ECF0]">
      <motion.div
        className="mx-auto max-w-6xl bg-[#2A2142] rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Gradient accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-pale-lavender to-transparent" />

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10 p-8 md:p-10 pb-0 md:pb-0">
          <div>
            <span className="text-white/90 text-xl font-bold tracking-tight mb-4 block">Dra. Raquel Rodriguez</span>
            <p className="text-white/60 max-w-xs text-[17px] leading-relaxed">{t("footer.description")}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <h3 className="text-white/55 text-xs font-medium tracking-widest uppercase mb-3">{t("footer.company")}</h3>
              <ul className="space-y-2">
                {[
                  { href: "/#inicio", label: "Inicio" },
                  { href: "/#tratamientos", label: "Tratamientos" },
                  { href: "/#contacto", label: "Contacto" },
                  { href: "/pacientes", label: "Pacientes" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/65 hover:text-white text-[15px] transition-colors duration-200">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white/55 text-xs font-medium tracking-widest uppercase mb-3">{t("footer.contact")}</h3>
              <p className="text-white/60 text-[15px] leading-relaxed mb-4">
                Balcarce Nro 37, 2do Piso<br />
                San Salvador de Jujuy, Jujuy
              </p>
              <div className="flex gap-2">
                {[
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/od.rodriguezraquel" },
                  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579104240016" },
                  { Icon: WhatsApp, label: "WhatsApp", href: "https://wa.me/5493885786946?text=Hola%2C%20quiero%20agendar%20una%20consulta%20con%20la%20Dra.%20Raquel" },
                  { Icon: Mail, label: "Email", href: "mailto:odrodriguezraquel@gmail.com?subject=Consulta%20de%20turno" },
                ].map(({ Icon, label, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/45 hover:text-white/80 border border-white/15 hover:border-white/25 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-rhythm/40 focus-visible:outline-none"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mx-8 md:mx-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/45">&copy; {new Date().getFullYear()} Dra. Raquel Rodriguez. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[13px] text-white/45 hover:text-white/80 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-white/[0.06]"
              aria-label="Volver arriba"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              Volver arriba
            </button>
          </div>
        </div>

        {/* Brand name oversized */}
        <div className="mt-6 -mb-5 select-none overflow-hidden">
          <span className="block text-center whitespace-nowrap text-[clamp(3rem,12vw,9rem)] font-bold tracking-[0.1em] leading-none translate-y-[30%] bg-gradient-to-t from-white/[0.13] to-transparent bg-clip-text text-transparent" aria-hidden="true">
            RAQUEL RODRIGUEZ
          </span>
        </div>
      </motion.div>
    </footer>
  )
}
