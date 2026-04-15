"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

interface WhatsAppButtonProps {
  size?: "default" | "lg"
  variant?: "default" | "hero"
  label?: string
}

export function WhatsAppButton({ size = "default", variant = "default", label }: WhatsAppButtonProps) {
  const { t } = useTranslations()

  return (
    <motion.a
      href="https://wa.me/5493885786946"
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-medium
        bg-teal-600 text-white
        border border-teal-500/20
        [border-top-color:rgba(255,255,255,0.18)]
        [border-left-color:rgba(255,255,255,0.10)]
        [border-bottom-color:rgba(0,0,0,0.10)]
        [border-right-color:rgba(0,0,0,0.06)]
        shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.5),inset_0_-4px_12px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.12)]
        hover:bg-teal-700
        hover:shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.45),inset_0_-4px_14px_0_rgba(255,255,255,0.18),inset_0_0_0_1px_rgba(255,255,255,0.12),0_4px_16px_rgba(13,148,136,0.35)]
        active:scale-[0.98]
        active:shadow-[inset_0_4px_10px_0_rgba(0,0,0,0.2),inset_0_-3px_8px_0_rgba(255,255,255,0.05)]
        transition-all duration-200
        brightness-105 hover:brightness-100
        ${size === "lg" ? "text-[15px] px-8 py-4" : "text-[13px] px-6 py-3"}
      `}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {label || t("hero.cta")}
      <ArrowRight className="w-4 h-4" />
    </motion.a>
  )
}
