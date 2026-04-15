"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneIcon as WhatsApp } from "lucide-react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 400)
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          className="
            fixed bottom-6 right-6 z-50
            bg-[#1A1A18] text-white
            w-12 h-12 rounded-full
            flex items-center justify-center
            shadow-[0_4px_14px_rgba(0,0,0,0.15)]
            hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]
            active:scale-[0.94]
            transition-shadow duration-200
          "
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
        >
          <WhatsApp size={22} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
