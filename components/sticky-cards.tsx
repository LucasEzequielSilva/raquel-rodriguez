"use client"

import { useRef, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const cards = [
  {
    title: "Personalized Approach",
    description: "Every individual is unique, and so is our approach to their mental health journey.",
    color: "bg-neutral-950",
  },
  {
    title: "Professional Excellence",
    description: "Our team brings years of experience and continuous education to provide the best care.",
    color: "bg-neutral-900",
  },
  {
    title: "Global Accessibility",
    description: "Access professional psychological support from anywhere in the world.",
    color: "bg-neutral-800",
  },
]

export function StickyCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const createTransform = useCallback(
    (i: number) => {
      return useTransform(scrollYProgress, [i * 0.25, 1 - (cards.length - i - 1) * 0.25], [0, 1])
    },
    [scrollYProgress, cards.length],
  )

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="relative w-full">
          {cards.map((card, i) => {
            const progress = createTransform(i)
            return (
              <motion.div
                key={card.title}
                className={`absolute inset-0 h-screen flex items-center justify-center ${card.color} transition-colors`}
                style={{
                  opacity: progress,
                  transform: useTransform(progress, (v) => `translateX(${(1 - v) * 100}%)`),
                }}
              >
                <div className="max-w-screen-sm mx-auto px-4 text-center">
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">{card.title}</h3>
                  <p className="text-lg text-neutral-300">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

