"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useTranslations } from "@/lib/i18n"
import { Award, Heart, Target, BookOpen } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function AboutPage() {
  const { t, language } = useTranslations()

  const valueIcons = [Award, Heart, Target, BookOpen]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0E14]/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/80 via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
            alt="Consultorio dental"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-8">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-white/50">
              Sobre mí
            </p>
            <h1 className="text-2xl md:text-3xl tracking-tight mb-6 text-white font-medium leading-[1.1]">
              {t("aboutPage.hero.title")}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">{t("aboutPage.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Enfoque */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="order-2 lg:order-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" alt="Consulta de ortodoncia" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
                Mi enfoque
              </p>
              <h2 className="text-2xl md:text-[2rem] mb-6 text-[#1A1A20] font-medium">{t("aboutPage.mission.title")}</h2>
              <p className="text-base text-[#6B6B76] leading-[1.7]">{t("aboutPage.mission.description")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="py-28 bg-[#E8ECF0]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Experiencia
            </p>
            <h2 className="text-2xl md:text-[2rem] mb-4 text-[#1A1A20] font-medium">{t("aboutPage.team.title")}</h2>
            <p className="text-[#6B6B76] leading-[1.7]">{t("aboutPage.team.description")}</p>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-[#F5F7FA] border-y border-[#E0E2E8]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-8 items-center opacity-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-lg font-bold tracking-tight">Invisalign</span>
            <span className="text-lg font-bold tracking-tight">ASIRI</span>
            <span className="text-lg font-bold tracking-tight">Keep Smiling</span>
            <span className="text-lg font-bold tracking-tight">Dentalink</span>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-[2rem] text-[#1A1A20] font-medium">{t("aboutPage.values.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t("aboutPage.values.items").map((value: { title: string; description: string }, index: number) => {
              const Icon = valueIcons[index]
              return (
                <motion.div
                  key={index}
                  className="group rounded-2xl p-7 transition-all duration-300 bg-white border border-[#E0E2E8] border-t-2 border-t-transparent hover:border-t-teal-400"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] } } }}
                >
                  <div className="w-12 h-12 mb-5 rounded-xl bg-[#F0F2F5] group-hover:bg-teal-50 flex items-center justify-center transition-colors duration-300">
                    <Icon className="h-5 w-5 text-[#6B6B76] group-hover:text-teal-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-medium mb-2 text-[#1A1A20]">{value.title}</h3>
                  <p className="text-[#6B6B76] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 bg-[#E8ECF0]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 className="text-2xl md:text-[2rem] font-medium text-[#1A1A20] mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            {t("aboutPage.stats.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t("aboutPage.stats.items").map((stat: { value: string; label: string }, index: number) => (
              <motion.div
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] } } }}
              >
                <div className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-[#1A1A20] to-teal-700 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-[#6B6B76] text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl md:text-[2rem] mb-5 text-[#1A1A20] font-medium">{t("aboutPage.cta.title")}</h2>
            <p className="text-[#6B6B76] mb-8">{t("aboutPage.cta.subtitle")}</p>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </section>

      <FloatingFooter />
    </div>
  )
}
