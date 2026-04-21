"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star } from "@/components/icons"

gsap.registerPlugin(ScrollTrigger)

type CountUpProps = {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCountUp({ to, suffix = "", duration = 1.8, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          },
        })
      },
    })
    return () => { st.kill() }
  }, [to, suffix, duration])

  return (
    <span
      ref={ref}
      className={`inline-block font-bold tracking-tight bg-gradient-to-r from-brand-pale-lavender via-brand-rhythm to-brand-pink-lace bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
      style={{ filter: "drop-shadow(0 0 14px rgba(217,199,255,0.55))" }}
    >
      0{suffix}
    </span>
  )
}

export function AnimatedStars({ count = 5, size = 20 }: { count?: number; size?: number }) {
  return (
    <motion.span
      className="inline-flex items-center gap-0.5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, scale: 0.3, rotate: -60 },
            visible: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          style={{
            display: "inline-block",
            filter: "drop-shadow(0 0 8px rgba(252,211,77,0.6)) drop-shadow(0 0 14px rgba(217,199,255,0.55))",
          }}
        >
          <Star
            className="text-amber-400"
            style={{ width: size, height: size, fill: "#fbbf24" }}
          />
        </motion.span>
      ))}
    </motion.span>
  )
}
