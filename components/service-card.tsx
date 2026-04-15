"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  index: number
  href: string
  image?: string
  translationKey?: string
}

const defaultImages: Record<string, string> = {
  ortopedia: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1974&auto=format&fit=crop",
  ortodoncia: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
  alineadores: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1974&auto=format&fit=crop",
  ninos: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1974&auto=format&fit=crop",
  adultos: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1974&auto=format&fit=crop",
  diagnostico: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1974&auto=format&fit=crop",
}

const getDefaultImage = (key?: string) => {
  if (!key) return defaultImages.ortodoncia
  const serviceType = key.split(".").pop() || "ortodoncia"
  return defaultImages[serviceType] || defaultImages.ortodoncia
}

export function ServiceCard({ translationKey = "services.items.ortodoncia", icon, index, href }: ServiceCardProps) {
  const { t } = useTranslations()

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(200,220,240,0.06)" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${getDefaultImage(translationKey)})` }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(10,14,20,0.75) 0%, rgba(10,14,20,0.5) 40%, rgba(10,14,20,0.85) 100%)"
        }} />
      </div>

      <div className="relative z-10 p-7 md:p-8 min-h-[280px] flex flex-col justify-end">
        <div className="mb-auto pt-1">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70" style={{
            background: "rgba(200,220,240,0.06)",
            border: "1px solid rgba(200,220,240,0.06)",
          }}>
            {icon}
          </div>
        </div>

        <h3 className="text-lg font-medium mb-2 text-white tracking-tight">{t(`${translationKey}.title`)}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{t(`${translationKey}.description`)}</p>
      </div>
    </motion.div>
  )
}
