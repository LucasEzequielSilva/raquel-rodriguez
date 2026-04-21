"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "@/components/icons"
import { useTranslations } from "@/lib/i18n"

interface WhatsAppButtonProps {
  size?: "default" | "lg"
  variant?: "default" | "hero"
  label?: string
}

export function WhatsAppButton({ size = "default", variant = "default", label }: WhatsAppButtonProps) {
  const { t } = useTranslations()

  const sizeClass = size === "lg" ? "text-[15px] px-8 py-4" : "text-[13px] px-6 py-3"

  const premiumInnerShadow = "shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.05),0_10px_40px_rgba(217,199,255,0.5)]"
  const premiumInnerShadowHover = "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06),0_14px_50px_rgba(255,224,255,0.65)]"

  const styles = variant === "hero"
    ? `bg-brand-pale-lavender text-brand-eerie-black border border-white/40 ${premiumInnerShadow} hover:bg-brand-pink-lace ${premiumInnerShadowHover}`
    : `bg-brand-pale-lavender text-brand-eerie-black border border-white/60 ${premiumInnerShadow} hover:bg-brand-lavender hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06),0_12px_40px_rgba(217,199,255,0.7)]`

  return (
    <motion.a
      href="https://wa.me/5493885786946"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold active:scale-[0.98] transition-all duration-200 ${styles} ${sizeClass}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {label || t("hero.cta")}
      <ArrowRight className="w-4 h-4" />
    </motion.a>
  )
}
