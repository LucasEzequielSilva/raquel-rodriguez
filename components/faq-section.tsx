"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

export function FaqSection() {
  const { t } = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)

  const faqs = [
    { question: t("faq.age.question"), answer: t("faq.age.answer") },
    { question: t("faq.adults.question"), answer: t("faq.adults.answer") },
    { question: t("faq.difference.question"), answer: t("faq.difference.answer") },
    { question: t("faq.aligners.question"), answer: t("faq.aligners.answer") },
    { question: t("faq.duration.question"), answer: t("faq.duration.answer") },
    { question: t("faq.firstVisit.question"), answer: t("faq.firstVisit.answer") },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item", { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" ref={sectionRef} className="py-28 md:py-36 bg-[#E8ECF0]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">FAQ</p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium text-[#1A1A20] mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-[#8A8A94] text-sm leading-relaxed">
              {t("faq.subtitle")}{" "}
              <a href="https://wa.me/5493885786946" className="text-brand-rhythm underline underline-offset-4 hover:text-brand-eerie-black transition-colors duration-200">
                {t("faq.contact")}
              </a>
            </p>
          </div>

          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="faq-item rounded-xl px-6 py-1 bg-white border border-[#E0E2E8] transition-all duration-200 data-[state=open]:border-brand-pale-lavender data-[state=open]:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <AccordionTrigger className="text-[#1A1A20] hover:text-[#6B6B76] text-left transition-colors duration-200 text-[15px] font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#8A8A94] text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
