"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ServiceFeatureProps {
  title: string
  description: string
  features: string[]
  image: string
  index: number
}

export function ServiceFeature({ title, description, features, image, index }: ServiceFeatureProps) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`space-y-8 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
        <div className="space-y-4">
          <div className="inline-block">
            <div className="bg-[#E8ECF0] text-[#6B6B76] px-4 py-1 rounded-full text-sm font-medium">
              Tratamiento {index + 1}
            </div>
          </div>
          <h3 className="text-2xl md:text-[2rem] tracking-tight text-[#1A1A20] font-medium">{title}</h3>
          <p className="text-[#6B6B76] text-base leading-relaxed">{description}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#E0E2E8]">
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="mt-1 bg-teal-600 p-1 rounded-full flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#3A3A40] text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className={`overflow-hidden relative aspect-[4/3] ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-full rounded-2xl overflow-hidden border border-[#E0E2E8]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
