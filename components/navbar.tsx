"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "@/components/icons"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "@/lib/i18n"

const menuItems = [
  { title: "Inicio", href: "/#inicio" },
  { title: "Tratamientos", href: "/#tratamientos" },
  { title: "Primera Consulta", href: "/#primera-consulta" },
  { title: "FAQ", href: "/#faq" },
  { title: "Contacto", href: "/#contacto" },
  { title: "Pacientes", href: "/pacientes" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslations()

  // Force "scrolled" look on pages without a dark hero (everything except home)
  const isLight = hasScrolled || pathname !== "/"

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      // If we're on the home page, smooth scroll
      if (pathname === "/") {
        e.preventDefault()
        const id = href.replace("/#", "")
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
      // If we're on another page, let the Link navigate to / then hash
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed w-full z-50 px-4 md:px-6 pt-4 transition-all duration-500">
      <nav className={`mx-auto max-w-5xl px-6 md:px-8 h-16 md:h-20 flex justify-between items-center rounded-full transition-all duration-500 ${
        isLight && !isOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.04]"
          : ""
      }`}>
        <Link
          href="/"
          className={`relative z-50 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
          aria-label="Raquel Rodríguez - Ortodoncia"
        >
          <img
            src="/logo.png"
            alt="Raquel Rodríguez"
            className={`h-10 md:h-12 w-auto transition-[filter] duration-300 ${
              isLight ? "" : "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-[13px] font-semibold px-3 py-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-pale-lavender focus-visible:outline-none ${
                isLight
                  ? "text-[#1A1A20]/60 hover:text-[#1A1A20]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/5493885786946"
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[13px] font-bold active:scale-[0.98] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-pale-lavender focus-visible:outline-none ${
              isLight
                ? "bg-brand-pale-lavender text-brand-eerie-black border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.05),0_6px_18px_rgba(217,199,255,0.55)] hover:bg-brand-lavender hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06),0_8px_24px_rgba(217,199,255,0.7)]"
                : "bg-white text-brand-eerie-black border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.04),0_4px_14px_rgba(21,11,41,0.25)] hover:bg-brand-pale-lavender hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_18px_rgba(21,11,41,0.3)]"
            }`}
          >
            Reservar consulta
          </a>
        </div>

        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen
            ? <X size={22} className="text-[#1A1A20]" />
            : <Menu size={22} className={isLight ? "text-[#1A1A20]" : "text-white"} />
          }
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-brand-bright-gray"
          >
            <div className="flex-1 flex flex-col items-start justify-center container mx-auto px-8">
              <div className="flex flex-col gap-3 mb-10">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <a
                      href={item.href}
                      className="text-[2rem] font-medium tracking-tight text-[#1A1A20] hover:text-[#6B6B76] transition-colors duration-200"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <a
                  href="https://wa.me/5493885786946"
                  className="bg-brand-pale-lavender text-brand-eerie-black px-7 py-3 rounded-full text-base font-bold active:scale-[0.98] transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.05),0_8px_24px_rgba(217,199,255,0.6)] hover:bg-brand-lavender hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06),0_10px_32px_rgba(217,199,255,0.75)]"
                  onClick={() => setIsOpen(false)}
                >
                  {t("hero.cta")}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
