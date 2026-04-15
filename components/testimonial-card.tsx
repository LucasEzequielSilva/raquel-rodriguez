"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { GenericAvatar } from "./generic-avatar"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  index: number
}

export function TestimonialCard({ name, role, content, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="
        h-full rounded-2xl p-8
        bg-white
        border border-black/[0.08]
        shadow-[0_1px_2px_rgba(0,0,0,0.02)]
        hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]
        hover:border-black/[0.12]
        transition-all duration-200
      ">
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="
                w-4 h-4 fill-amber-400 text-amber-400
                drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]
              "
            />
          ))}
        </div>
        <p className="text-neutral-600 mb-6 leading-relaxed text-[15px]">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center gap-3 pt-4 border-t border-black/[0.04]">
          <GenericAvatar />
          <div>
            <p className="font-semibold text-neutral-900 text-sm">{name}</p>
            <p className="text-xs text-neutral-400">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
