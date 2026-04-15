"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BenefitCardProps {
  title: string
  description: string
  icon: ReactNode
  index: number
}

export function BenefitCard({ title, description, icon, index }: BenefitCardProps) {
  return (
    <motion.div
      className="
        group p-6 rounded-2xl
        bg-white
        border border-black/[0.08]
        shadow-[0_1px_2px_rgba(0,0,0,0.02)]
        hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]
        hover:border-black/[0.12]
        transition-all duration-200
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 1, 0.5, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <div className="
        w-11 h-11 rounded-xl mb-4
        bg-gradient-to-b from-neutral-800 to-neutral-950
        flex items-center justify-center
        border border-neutral-800
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),inset_0_-1px_0_0_rgba(0,0,0,0.2)]
        brightness-110
        text-white
        transition-all duration-200
        group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_0_12px_rgba(0,0,0,0.1)]
      ">
        <div className="w-5 h-5">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2 tracking-tight">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
