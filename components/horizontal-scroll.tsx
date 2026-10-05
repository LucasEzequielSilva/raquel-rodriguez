"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "@/lib/i18n"
import { Sparkles, ClipboardCheck, GraduationCap } from "@/components/icons"

gsap.registerPlugin(ScrollTrigger)

const slideIcons = [Sparkles, ClipboardCheck, GraduationCap]
const slideImages = ["/clinic/alineadores.jpg", "/clinic/formacion.jpg", "/clinic/planificacion-profesional.png"]

export function HorizontalScroll() {
  const { t } = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const slides = [
    { titleKey: "whyChooseUs.slides.brands.title", descriptionKey: "whyChooseUs.slides.brands.description" },
    { titleKey: "whyChooseUs.slides.allInOne.title", descriptionKey: "whyChooseUs.slides.allInOne.description" },
    { titleKey: "whyChooseUs.slides.experience.title", descriptionKey: "whyChooseUs.slides.experience.description" },
  ]

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return
    const track = trackRef.current
    const getTotalScroll = () => track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getTotalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5,
          end: () => `+=${getTotalScroll()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-brand-bright-gray via-brand-lavender/40 to-brand-pink-lace/30">
      <div ref={trackRef} className="flex items-center h-screen transform-gpu will-change-transform">
        {/* Intro */}
        <div className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[35vw] h-full flex flex-col justify-center pl-4 md:pl-8 pr-12 md:pr-20">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-brand-rhythm">
            Diferenciales
          </p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-eerie-black leading-[1.15]">
            {t("whyChooseUs.title")}
          </h2>
          <div className="w-16 h-[2px] mt-6 rounded-full" style={{ background: "linear-gradient(90deg, #D9C7FF, #7F7594)" }} />
        </div>

        {/* Cards */}
        {slides.map((slide, i) => {
          const Icon = slideIcons[i]
          return (
            <div key={i} className="flex-shrink-0 w-[82vw] md:w-[42vw] lg:w-[30vw] px-2 md:px-3">
              <div
                className="relative h-[60vh] md:h-[65vh] rounded-2xl p-8 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:translate-y-[-2px] border border-brand-pale-lavender/40 hover:border-brand-pale-lavender hover:shadow-[0_12px_40px_rgba(217,199,255,0.5)] overflow-hidden bg-brand-eerie-black"
                style={{ backgroundImage: `url(${slideImages[i]})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {/* Brand accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-[3px] z-20" style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }} />

                {/* Legibility overlay so text reads on top of the photo */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-eerie-black/90 via-brand-eerie-black/15 to-transparent pointer-events-none" />

                <div className="relative z-20 flex items-start justify-between">
                  <span className="text-[5rem] md:text-[6rem] font-bold leading-none tracking-tighter select-none text-white/90 [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-white/25 border border-white/30 shadow-[0_6px_18px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative z-20">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                    {t(slide.titleKey)}
                  </h3>
                  <p className="text-base leading-relaxed text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
                    {t(slide.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        <div className="flex-shrink-0 w-[20vw]" />
      </div>
    </section>
  )
}
