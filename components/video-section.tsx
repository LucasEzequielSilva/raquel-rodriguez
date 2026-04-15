"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { useTranslation } from "next-i18next"

export function VideoSection() {
  const { t } = useTranslation("common")
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Update these when video content is ready */}
            {/* <motion.h2
              className="text-3xl md:text-4xl font-regular tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t("videoSection.title")}
            </motion.h2>
            <motion.p
              className="text-neutral-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t("videoSection.description")}
            </motion.p> */}
            <motion.h2
              className="text-3xl md:text-4xl font-regular tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-neutral-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Learn about our journey and commitment to providing exceptional psychological care and expert witness
              services.
            </motion.p>
          </div>
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/story-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              {isPlaying ? <Pause className="w-16 h-16 text-white" /> : <Play className="w-16 h-16 text-white" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

