"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, Shield } from "lucide-react"

interface ServiceBenefitsProps {
  title: string
  subtitle: string
  benefits: Array<{
    title: string
    description: string
  }>
}

const icons = [Brain, Heart, Users, Shield]

export function ServiceBenefits({ title, subtitle, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-24 bg-[#E8ECF0]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <h2 className="text-2xl md:text-[2rem] tracking-tight text-[#1A1A20] font-medium mb-4">{title}</h2>
          <p className="text-[#6B6B76]">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-[#E0E2E8] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="w-10 h-10 rounded-xl mb-5 bg-[#F5F7FA] border border-[#E0E2E8] flex items-center justify-center text-[#1A1A20]/40 group-hover:text-[#1A1A20]/60 transition-colors duration-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium text-[#1A1A20] mb-2 tracking-tight">{benefit.title}</h3>
                <p className="text-[#8A8A94] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
