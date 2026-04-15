"use client"

import Link from "next/link"
import { useTranslations } from "@/lib/i18n"
import { Instagram, Phone, Mail, ChevronUp } from "lucide-react"

export function FloatingFooter({ language: languageProp }: { language?: string }) {
  const { t } = useTranslations()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative z-10 px-4 md:px-6 pb-6 bg-[#E8ECF0]">
      <div className="mx-auto max-w-6xl bg-[#0A0E14] rounded-3xl overflow-hidden">
        {/* Gradient accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10 p-8 md:p-10 pb-0 md:pb-0">
          <div>
            <span className="text-white/60 text-lg font-bold tracking-tight mb-4 block">Dra. Raquel Rodriguez</span>
            <p className="text-white/30 max-w-xs text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <h3 className="text-white/40 text-[11px] font-medium tracking-widest uppercase mb-3">{t("footer.company")}</h3>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/servicios", label: t("footer.services") },
                  { href: "/nosotros", label: t("footer.about") },
                  { href: "/pacientes", label: "Pacientes" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/35 hover:text-white/60 text-sm transition-colors duration-200">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white/40 text-[11px] font-medium tracking-widest uppercase mb-3">{t("footer.contact")}</h3>
              <p className="text-white/30 text-sm leading-relaxed mb-4">
                Balcarce Nro 37, 2do Piso<br />
                San Salvador de Jujuy, Jujuy
              </p>
              <div className="flex gap-2">
                {[
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/od.rodriguezraquel" },
                  { Icon: Phone, label: "Telefono", href: "tel:+5493885786946" },
                  { Icon: Mail, label: "Email", href: "mailto:draraquelortodoncia@gmail.com" },
                ].map(({ Icon, label, href }, i) => (
                  <a key={i} href={href} aria-label={label} className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white/45 border border-white/[0.06] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:outline-none">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mx-8 md:mx-10 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/20">&copy; {new Date().getFullYear()} Dra. Raquel Rodriguez. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[11px] text-white/20 hover:text-white/45 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-white/[0.04]"
              aria-label="Volver arriba"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              Volver arriba
            </button>
            <div className="text-[11px] text-white/20">Hecho con Nexora</div>
          </div>
        </div>

        {/* Brand name oversized */}
        <div className="mt-6 -mb-5 select-none overflow-hidden">
          <span className="block text-center whitespace-nowrap text-[clamp(3rem,12vw,9rem)] font-bold tracking-[0.1em] leading-none text-white/[0.04] translate-y-[30%]" aria-hidden="true">
            RAQUEL RODRIGUEZ
          </span>
        </div>
      </div>
    </footer>
  )
}
