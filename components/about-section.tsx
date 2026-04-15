"use client"

import { motion } from "framer-motion"
import { Scale, Shield, GraduationCap, Globe2 } from "lucide-react"
import { useTranslations } from "@/lib/i18n"

const features = [
  {
    icon: Scale,
    title: "Experiencia Legal",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus-ferrero-yfmjALh1S6s-unsplash.jpg-A86DEpyeQrS2OFPvqdqEXFOzsSqY47.jpeg",
  },
  {
    icon: Shield,
    title: "Confidencialidad",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/priscilla-du-preez-3gAiajAfjXI-unsplash.jpg-C8FVnUDcpmeeNJ89rT6GT0igoEkjzB.jpeg",
  },
  {
    icon: GraduationCap,
    title: "Profesionales Certificados",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mark-williams-5hvWQ5Xuji4-unsplash.jpg-DkKRLn6efVi0T3pHEpPFQiprvH5Tnc.jpeg",
  },
  {
    icon: Globe2,
    title: "Acceso Global",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gQDino1q7fS8aQHAn5qQehpPduJmgM.png",
  },
]

export function AboutSection() {
  const { t } = useTranslations()

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Servicios psicológicos profesionales con enfoque en la precisión y la confianza
          </h2>
          <p className="text-neutral-600 mb-12">
            Nuestro enfoque combina el rigor científico con la comprensión empática, brindando tanto apoyo terapéutico
            como evaluaciones psicológicas expertas. Ya sea que busques crecimiento personal o requieras una evaluación
            profesional, nuestro equipo garantiza los más altos estándares de atención.
          </p>
          <div className="flex gap-12">
            <div>
              <p className="text-4xl font-semibold mb-2">15+</p>
              <p className="text-sm text-neutral-600">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-semibold mb-2">500+</p>
              <p className="text-sm text-neutral-600">Casos Atendidos</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <Icon className="w-8 h-8 text-white" />
                  <p className="text-sm font-medium text-white">{feature.title}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

