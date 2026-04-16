"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { useTranslations } from "@/lib/i18n"
import {
  Smile,
  Baby,
  UserRound,
  ScanFace,
  BrainCircuit,
  ClipboardCheck,
  Search,
  Target,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Users,
  Quote,
} from "lucide-react"
import { HorizontalScroll } from "@/components/horizontal-scroll"
import { FloatingFooter } from "@/components/floating-footer"
import { FaqSection } from "@/components/faq-section"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
}

export default function Home() {
  const { t, language } = useTranslations()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-badge", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power4.out" })
      gsap.fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" })
      gsap.fromTo(".hero-sub", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8, ease: "power3.out" })
      gsap.fromTo(".hero-cta", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 1, ease: "power3.out" })
      gsap.fromTo(".hero-image", { opacity: 0, scale: 0.95, x: 40 }, { opacity: 1, scale: 1, x: 0, duration: 1.2, delay: 0.6, ease: "power4.out" })
    })
    return () => ctx.revert()
  }, [])

  const services = [
    { title: t("services.items.ortopedia.title"), description: t("services.items.ortopedia.description"), icon: <Baby className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.ortopedia" },
    { title: t("services.items.ortodoncia.title"), description: t("services.items.ortodoncia.description"), icon: <Smile className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.ortodoncia" },
    { title: t("services.items.alineadores.title"), description: t("services.items.alineadores.description"), icon: <ScanFace className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.alineadores" },
    { title: t("services.items.ninos.title"), description: t("services.items.ninos.description"), icon: <UserRound className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.ninos" },
    { title: t("services.items.adultos.title"), description: t("services.items.adultos.description"), icon: <Users className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.adultos" },
    { title: t("services.items.diagnostico.title"), description: t("services.items.diagnostico.description"), icon: <ClipboardCheck className="w-5 h-5" />, href: "/servicios", translationKey: "services.items.diagnostico" },
  ]

  const features = [
    { icon: Search, label: t("about.features.diagnosis"), image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop&q=60" },
    { icon: Target, label: t("about.features.planning"), image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=60" },
    { icon: GraduationCap, label: t("about.features.certified"), image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=60" },
    { icon: HeartHandshake, label: t("about.features.followup"), image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=60" },
  ]

  const forWhomItems = t("forWhom.items") as unknown as string[]

  const firstVisitSteps = t("firstVisit.steps") as unknown as { title: string; description: string }[]

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Navbar />

      {/* ═══ HERO — Split layout ═══ */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F9FB]">
        {/* Teal gradient top → transparent */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(13,148,136,0.08) 0%, rgba(13,148,136,0.03) 30%, transparent 60%)",
          }}
        />

        {/* Diagonal light rays */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[140%] opacity-[0.05]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(13,148,136,0.8) 46%, rgba(255,255,255,0.6) 50%, rgba(13,148,136,0.8) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute -top-[20%] left-[15%] w-[40%] h-[140%] opacity-[0.04]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(13,148,136,0.6) 46%, rgba(255,255,255,0.5) 50%, rgba(13,148,136,0.6) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute -top-[20%] left-[40%] w-[35%] h-[140%] opacity-[0.03]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(13,148,136,0.5) 46%, rgba(255,255,255,0.4) 50%, rgba(13,148,136,0.5) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute -top-[20%] left-[60%] w-[45%] h-[140%] opacity-[0.02]"
            style={{
              background: "linear-gradient(115deg, transparent 25%, rgba(13,148,136,0.4) 46%, rgba(255,255,255,0.3) 50%, rgba(13,148,136,0.4) 54%, transparent 75%)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="max-w-xl pt-24 lg:pt-0">
              <div className="hero-badge opacity-0 mb-4">
                <span className="inline-flex items-center gap-2 text-[13px] text-[#8A8A94] tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {t("hero.schedule")}{" "}
                  {new Date().toLocaleString("es-ES", { month: "long" }).toUpperCase()}{" "}
                  {t("hero.open")}
                </span>
              </div>

              <h1
                className="hero-title opacity-0 text-[clamp(2rem,4.5vw,3rem)] font-medium tracking-tighter leading-[1.2] mb-3 max-w-2xl text-[#1A1A20]"
                style={{
                  maskImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)",
                  maskSize: "100% 1.2em",
                  WebkitMaskImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)",
                  WebkitMaskSize: "100% 1.2em",
                }}
              >
                {t("hero.title")}
              </h1>
              <p className="hero-sub opacity-0 text-[#6B6B76] mb-8 max-w-md text-base leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton variant="hero" />
                <Link
                  href="/pacientes"
                  className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-[13px] px-6 py-3 bg-white text-[#1A1A20] border border-[#E0E2E8] hover:border-[#D0D2D8] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-all duration-200"
                >
                  {t("hero.ctaPatients")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — Image with decorative accent */}
            <div className="hero-image opacity-0 relative hidden lg:block">
              {/* Decorative teal dot behind image */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-teal-400/30 blur-sm" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-teal-500/20" />

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&auto=format&fit=crop&q=80"
                  alt="Sonrisa saludable"
                  className="w-full h-[520px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                  loading="eager"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-28 md:py-36 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
                <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
                  Sobre mí
                </p>
                <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-6 text-[#1A1A20]">
                  {t("about.title")}
                </h2>
                <p className="text-base leading-[1.7] max-w-xl text-[#6B6B76]">
                  {t("about.description")}
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-10 mt-10"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              >
                {[
                  { value: "15+", label: t("about.stats.years") },
                  null,
                  { value: "5★", label: "Calificación Google" },
                ].map((item, i) =>
                  item === null ? (
                    <div key={i} className="w-px h-14 bg-[#D4D6DC]" />
                  ) : (
                    <motion.div key={i} variants={fadeIn}>
                      <p className="text-4xl font-semibold tracking-tight text-[#1A1A20]">{item.value}</p>
                      <p className="text-sm mt-1 text-[#8A8A94]">{item.label}</p>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label, image }, i) => (
                <motion.div
                  key={i}
                  className={`
                    group aspect-square relative overflow-hidden rounded-2xl
                    transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                    ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-4" : ""}
                  `}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                >
                  <img src={image} alt={label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                  <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                    <Icon className="w-7 h-7 text-white/80" />
                    <p className="text-[13px] font-medium text-white leading-snug">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DRA. RAQUEL — Perfil profesional ═══ */}
      <section className="py-28 md:py-36 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
                  alt="Dra. Raquel Rodríguez"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-1 bg-teal-500 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
                Especialista
              </p>
              <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-3 text-[#1A1A20]">
                Dra. Raquel Rodríguez
              </h2>
              <p className="text-sm text-teal-600 font-medium mb-6">
                Ortodoncia y Ortopedia Facial de los Maxilares
              </p>
              <div className="space-y-4 text-[#6B6B76] text-base leading-[1.7] mb-8">
                <p>
                  Con más de 15 años de experiencia específicos en el área, contamos con una trayectoria consolidada en el diagnóstico y tratamiento de alteraciones dentarias y del crecimiento maxilofacial.
                </p>
                <p>
                  Nuestra práctica se sustenta en la formación continua, con participación en cursos y congresos internacionales que nos permiten incorporar criterios y técnicas actualizadas a cada tratamiento.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Invisalign", "ASIRI", "Keep Smiling"].map((brand) => (
                  <span key={brand} className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#E0E2E8] text-[#6B6B76] bg-white">
                    {brand}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-6 border-t border-[#E0E2E8]">
                <div>
                  <span className="text-2xl font-semibold text-[#1A1A20]">15+</span>
                  <span className="block text-xs text-[#8A8A94] mt-1">Años de experiencia</span>
                </div>
                <div className="w-px h-10 bg-[#E0E2E8]" />
                <div>
                  <span className="text-2xl font-semibold text-[#1A1A20]">5 ★</span>
                  <span className="block text-xs text-[#8A8A94] mt-1">Google Reviews</span>
                </div>
                <div className="w-px h-10 bg-[#E0E2E8]" />
                <div>
                  <span className="text-2xl font-semibold text-[#1A1A20]">3</span>
                  <span className="block text-xs text-[#8A8A94] mt-1">Marcas de alineadores</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOR WHOM — Numbered horizontal scroll cards ═══ */}
      <section className="py-28 md:py-36 bg-[#F0F2F5]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Identificá tu caso
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-12 text-[#1A1A20]">
              {t("forWhom.title")}
            </h2>
          </motion.div>

          {/* Horizontal scroll cards with numbers */}
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
            {forWhomItems.map((item: string, i: number) => (
              <motion.div
                key={i}
                className="group relative flex-shrink-0 w-[280px] md:w-auto snap-start p-6 rounded-2xl bg-white border border-[#E0E2E8] hover:border-teal-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                style={{
                  backgroundImage: "linear-gradient(135deg, transparent 0%, transparent 100%)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{
                  backgroundImage: "linear-gradient(135deg, rgba(20,184,166,0.03) 0%, rgba(20,184,166,0.08) 100%)",
                }}
              >
                <span className="block text-[4rem] font-bold leading-none tracking-tighter text-[#1A1A20]/[0.05] select-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#4A4A54] leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — Masonry-like grid ═══ */}
      <section id="tratamientos" className="py-28 md:py-36 bg-[#E8ECF0]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Tratamientos
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A20]">
              {t("services.title")}
            </h2>
            <p className="text-base leading-[1.7] text-[#6B6B76]">
              {t("services.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div key={index} className={index === 0 ? "lg:col-span-2" : ""}>
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FIRST VISIT — Timeline/stepper layout ═══ */}
      <section id="primera-consulta" className="py-28 md:py-36 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Tu primera visita
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A20]">
              {t("firstVisit.title")}
            </h2>
          </motion.div>

          {/* Timeline layout */}
          <div className="max-w-3xl mx-auto">
            {firstVisitSteps.map((step: { title: string; description: string }, i: number) => (
              <motion.div
                key={i}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Timeline column — circle + dashed line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm font-semibold shadow-[0_4px_12px_rgba(20,184,166,0.3)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < firstVisitSteps.length - 1 && (
                    <div className="flex-1 w-px border-l-2 border-dashed border-teal-200 mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-base font-medium text-[#1A1A20] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#8A8A94] leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <HorizontalScroll />

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-28 md:py-36 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Testimonios
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A20]">
              Lo que dicen nuestros pacientes
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "María L.", role: "Paciente de Ortodoncia", content: "Excelente profesional. Me explicó todo con claridad desde la primera consulta. Estoy muy contenta con los resultados." },
              { name: "Carolina R.", role: "Mamá de paciente", content: "Llevé a mi hijo por problemas de mordida y el tratamiento fue impecable. La Dra. Raquel es muy dedicada y profesional." },
              { name: "Pablo M.", role: "Paciente de Alineadores", content: "Elegí alineadores invisibles y fue la mejor decisión. El seguimiento es constante y los resultados se ven desde el inicio." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-7 rounded-2xl bg-white border border-[#E0E2E8] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[#6B6B76] leading-relaxed mb-5">"{testimonial.content}"</p>
                <div>
                  <p className="text-sm font-medium text-[#1A1A20]">{testimonial.name}</p>
                  <p className="text-xs text-[#8A8A94]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO COMPLETO ═══ */}
      <section id="contacto" className="relative py-28 md:py-36 bg-[#F0F2F5] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(240,253,250,0.5) 0%, transparent 70%)" }} />

        <div className="relative container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">
              Contacto
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A20]">
              {t("contact.description")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Contact info */}
            <motion.div
              className="p-7 rounded-2xl bg-white border border-[#E0E2E8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-base font-medium text-[#1A1A20] mb-5">Información</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Balcarce Nº 37, 2do Piso, San Salvador de Jujuy" },
                  { icon: Phone, text: "+54 9 388 578 6946" },
                  { icon: Mail, text: "draraquelortodoncia@gmail.com" },
                  { icon: Instagram, text: "@od.rodriguezraquel" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 shrink-0">
                      <Icon className="w-4 h-4 text-teal-500" />
                    </span>
                    <p className="text-sm text-[#6B6B76] leading-relaxed pt-1.5">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Horarios */}
            <motion.div
              className="p-7 rounded-2xl bg-white border border-[#E0E2E8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h3 className="text-base font-medium text-[#1A1A20] mb-5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-500" /> Horarios de atención
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { day: "Lunes", time: "15 - 20 hs" },
                  { day: "Martes", time: "8 - 12 hs" },
                  { day: "Miércoles", time: "15 - 20 hs" },
                  { day: "Jueves", time: "8 - 12 hs" },
                  { day: "Viernes", time: "8 - 12 hs" },
                ].map(({ day, time }, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#F5F7FA] border border-[#E0E2E8]">
                    <p className="text-xs font-medium text-teal-600 uppercase tracking-wider">{day}</p>
                    <p className="text-sm text-[#4A4A54] mt-0.5">{time}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="p-7 rounded-2xl bg-teal-600 text-white flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <div>
                <h3 className="text-base font-medium mb-3">¿Querés agendar tu consulta?</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Escribinos por WhatsApp y coordinamos tu primera visita. La consulta tiene un valor de $40.000 (efectivo o transferencia).
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5493885786946"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-teal-700 font-medium text-sm hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
                >
                  WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-white/40 text-center">Efectivo · Transferencia · Débito/Crédito (Macro) · Planes de cuotas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FaqSection />

      {/* ═══ FOOTER ═══ */}
      <FloatingFooter language={language} />
    </div>
  )
}
