"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
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
      <nav className={`mx-auto max-w-5xl px-6 md:px-8 py-2.5 flex justify-between items-center rounded-full transition-all duration-500 ${
        hasScrolled && !isOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.04]"
          : ""
      }`}>
        <Link
          href="/"
          className={`relative z-50 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        >
          <span className="text-base font-bold tracking-tight text-[#1A1A20]">
            Dra. Raquel Rodríguez
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-[13px] px-3 py-2 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:outline-none text-[#1A1A20]/40 hover:text-[#1A1A20]/70"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/5493885786946"
            className="whitespace-nowrap px-5 py-2.5 rounded-full text-[13px] font-medium active:scale-[0.98] transition-all duration-200 bg-teal-600 text-white border border-teal-500/20 [border-top-color:rgba(255,255,255,0.18)] [border-left-color:rgba(255,255,255,0.10)] [border-bottom-color:rgba(0,0,0,0.10)] [border-right-color:rgba(0,0,0,0.06)] shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.12)] hover:bg-teal-700 hover:shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.45),inset_0_-4px_14px_0_rgba(255,255,255,0.18),0_4px_16px_rgba(13,148,136,0.35)] brightness-105 hover:brightness-100 focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:outline-none"
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
            : <Menu size={22} className="text-[#1A1A20]" />
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
            className="fixed inset-0 z-40 flex flex-col bg-[#F5F7FA]"
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
                  className="bg-teal-600 text-white px-7 py-3 rounded-full text-base font-medium active:scale-[0.98] transition-all duration-200 border border-teal-500/20 shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15)] hover:bg-teal-700 brightness-105 hover:brightness-100"
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
