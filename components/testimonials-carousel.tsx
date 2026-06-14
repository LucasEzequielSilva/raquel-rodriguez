"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "@/components/icons"

const reviews = [
  {
    name: "Fátima Muguertegui",
    meta: "Hace 5 meses",
    content:
      "Excelente atención y acompañamiento en el proceso de cambios y crecimiento de los niños, con muy buenos resultados médicos y estéticos para una buena calidad de vida. ¡Muchas gracias Dra. Raquel y a su equipo también!",
  },
  {
    name: "Verónica Huanacota",
    meta: "Hace 2 años",
    content:
      "Agradezco haber encontrado una profesional como la Dra. Raquel Rodríguez. Pudo brindarle el tratamiento ideal a mi hijo pequeño; su calidez y buen trato le dieron la confianza para realizarse el tratamiento a gusto. Súper satisfecha con el resultado y el acompañamiento. ¡Gracias también a las secretarias, siempre muy atentas!",
  },
  {
    name: "Judith Vanesa Maigua",
    meta: "Hace 3 años",
    content:
      "Excelente atención, cordialidad y profesionalismo desde el primer día. Mi familia muy agradecida con el tratamiento de ortodoncia y ortopedia realizado por la Dra. Raquel Rodríguez a nuestro hijo. Seriedad y compromiso admirables, y los resultados a la vista. 100% recomendable.",
  },
  {
    name: "Leila Anahí Apaza",
    meta: "Hace 3 años",
    content:
      "La Dra. Raquel Rodríguez supo entender la situación con la que llegamos a la primera consulta, muy angustiados por un accidente en el que nuestra hija sufrió traumas en su dentadura. Salimos con la esperanza de que todo tenía solución. Su dedicación fue excepcional; muy satisfechos con los resultados.",
  },
  {
    name: "Cintia Sarotti",
    meta: "Hace 3 años",
    content:
      "Agradezco a la Dra. Raquel Rodríguez y a su equipo por la atención recibida, la calidad del tratamiento, la calidez humana y los resultados obtenidos. Recomendamos el trabajo que se realiza allí. ¡Muchas gracias!",
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.85
    el.scrollBy({ left: amount * dir, behavior: "smooth" })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-brand-rhythm">5.0 en Google</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Reseña anterior"
            className="w-10 h-10 rounded-full border border-brand-pale-lavender/60 bg-white text-brand-eerie-black flex items-center justify-center hover:bg-brand-pale-lavender/20 hover:border-brand-pale-lavender active:scale-95 transition-all duration-200 shadow-[0_2px_8px_rgba(217,199,255,0.25)] focus-visible:ring-2 focus-visible:ring-brand-pale-lavender focus-visible:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Reseña siguiente"
            className="w-10 h-10 rounded-full border border-brand-pale-lavender/60 bg-white text-brand-eerie-black flex items-center justify-center hover:bg-brand-pale-lavender/20 hover:border-brand-pale-lavender active:scale-95 transition-all duration-200 shadow-[0_2px_8px_rgba(217,199,255,0.25)] focus-visible:ring-2 focus-visible:ring-brand-pale-lavender focus-visible:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <motion.article
            data-card
            key={i}
            className="relative snap-start shrink-0 w-[86%] sm:w-[47%] lg:w-[31.5%] p-7 rounded-2xl bg-white border border-brand-pale-lavender/30 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }}
            />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-base text-brand-rhythm leading-relaxed mb-6 flex-1">“{r.content}”</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-lavender to-brand-pale-lavender text-brand-eerie-black text-xs font-bold shrink-0 border border-white/60">
                {initials(r.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-eerie-black">{r.name}</p>
                <p className="text-xs text-brand-rhythm/70">{r.meta}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
