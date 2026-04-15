"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslations } from "@/lib/i18n"

function MarqueeText() {
  return (
    <div className="relative flex overflow-hidden bg-neutral-950 py-12">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
        <span className="mx-4 text-4xl font-bold">LET'S CHAT</span>
        <span className="mx-4 text-4xl font-bold text-neutral-800">·</span>
      </div>
    </div>
  )
}

export function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="bg-black text-white">
      <MarqueeText />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tB2IAb0orDmcWbgZ2vH8HEhcDYV8dy.svg"
                alt="Logo"
                className="h-8"
              />
            </Link>
            <p className="mt-4 text-neutral-400 max-w-xs">
              Professional psychological services with a focus on precision and trust.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.works")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <p className="text-neutral-400">
              Dr. Siufi 115, Barrio Bajo la Viña
              <br />
              San Salvador de Jujuy, Jujuy
              <br />
              Argentina
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            Copyright © {new Date().getFullYear()}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-400">Made with</span>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} className="text-red-500">
              ❤️
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

