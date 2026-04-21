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
} from "@/components/icons"
import { HorizontalScroll } from "@/components/horizontal-scroll"
import { FloatingFooter } from "@/components/floating-footer"
import { FaqSection } from "@/components/faq-section"
import { AnimatedCountUp, AnimatedStars } from "@/components/animated-stats"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Star } from "@/components/icons"

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
    { icon: Search, label: t("about.features.diagnosis"), image: "/clinic/diagnostico.jpg" },
    { icon: Target, label: t("about.features.planning"), image: "/clinic/planificacion.jpg" },
    { icon: GraduationCap, label: t("about.features.certified"), image: "/clinic/formacion.jpg" },
    { icon: HeartHandshake, label: t("about.features.followup"), image: "/clinic/seguimiento.jpg" },
  ]

  const forWhomItems = t("forWhom.items") as unknown as string[]

  const firstVisitSteps = t("firstVisit.steps") as unknown as { title: string; description: string }[]

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Navbar />

      {/* ═══ HERO — Full-bleed video ═══ */}
      <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden bg-brand-eerie-black">
        {/* Animated WebP background (smoother decode than MP4) */}
        <img
          src="/hero-raquel.webp?v=4"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-eerie-black/85 via-brand-eerie-black/30 to-brand-eerie-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-eerie-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full container mx-auto px-4 md:px-8 pb-14 md:pb-20 pt-32">
          <div className="hero-badge opacity-0 mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 text-[13px] text-white/85 tracking-wide font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pale-lavender animate-pulse" />
              {t("hero.schedule")}{" "}
              {new Date().toLocaleString("es-ES", { month: "long" }).toUpperCase()}{" "}
              {t("hero.open")}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <h1 className="hero-title opacity-0 text-[clamp(2.25rem,5vw,4rem)] font-medium tracking-tighter leading-[1.05] text-white mb-5">
                <span className="text-brand-pink-lace">Ortodoncia</span> y{" "}
                <span className="text-brand-pink-lace">Ortopedia Facial</span>{" "}
                para todas las edades.
              </h1>
              <p className="hero-sub opacity-0 text-white/80 max-w-lg text-base leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>

            <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
              <WhatsAppButton variant="hero" size="lg" />
              <Link
                href="/pacientes"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-[15px] px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 hover:border-white/60 active:scale-[0.98] transition-all duration-200"
              >
                {t("hero.ctaPatients")}
                <ArrowRight className="w-4 h-4" />
              </Link>
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
                <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
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
                <motion.div variants={fadeIn}>
                  <AnimatedCountUp to={15} suffix="+" className="text-4xl" />
                  <p className="text-sm mt-1 text-brand-rhythm">{t("about.stats.years")}</p>
                </motion.div>
                <div className="w-px h-14 bg-brand-pale-lavender/50" />
                <motion.div variants={fadeIn}>
                  <AnimatedStars count={5} size={26} />
                  <p className="text-sm mt-2 text-brand-rhythm">Calificación Google</p>
                </motion.div>
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
                  src="/raquel.png"
                  alt="Dra. Raquel Rodríguez - Especialista en Ortodoncia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
                Especialista
              </p>
              <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-3 text-[#1A1A20]">
                Dra. Raquel Rodríguez
              </h2>
              <p className="text-sm text-brand-rhythm font-medium mb-6">
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
              <div className="flex items-center gap-8 pt-6 border-t border-brand-pale-lavender/40">
                <div>
                  <AnimatedCountUp to={15} suffix="+" className="text-2xl" />
                  <span className="block text-xs text-brand-rhythm mt-1">Años de experiencia</span>
                </div>
                <div className="w-px h-10 bg-brand-pale-lavender/50" />
                <div>
                  <AnimatedStars count={5} size={18} />
                  <span className="block text-xs text-brand-rhythm mt-2">Google Reviews</span>
                </div>
                <div className="w-px h-10 bg-brand-pale-lavender/50" />
                <div>
                  <AnimatedCountUp to={3} className="text-2xl" />
                  <span className="block text-xs text-brand-rhythm mt-1">Marcas de alineadores</span>
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
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
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
                className="group relative flex-shrink-0 w-[280px] md:w-auto snap-start p-6 rounded-2xl bg-white border border-brand-pale-lavender/40 hover:border-brand-pale-lavender transition-all duration-300 hover:shadow-[0_12px_36px_rgba(217,199,255,0.45)] overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }} />
                <span
                  className="block text-[4rem] font-bold leading-none tracking-tighter select-none mb-4"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #D9C7FF, #7F7594)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-brand-rhythm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — Masonry-like grid ═══ */}
      <section id="tratamientos" className="py-28 md:py-36 bg-[#E8ECF0]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
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
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-lavender to-brand-pale-lavender text-brand-eerie-black flex items-center justify-center text-sm font-bold border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_6px_18px_rgba(217,199,255,0.55)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < firstVisitSteps.length - 1 && (
                    <div className="flex-1 w-px border-l-2 border-dashed border-brand-pale-lavender mt-3" />
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
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
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
                className="relative p-7 rounded-2xl bg-white border border-brand-pale-lavender/30 hover:border-brand-pale-lavender hover:shadow-[0_12px_36px_rgba(217,199,255,0.45)] transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-rhythm leading-relaxed mb-5">"{testimonial.content}"</p>
                <div>
                  <p className="text-sm font-semibold text-brand-eerie-black">{testimonial.name}</p>
                  <p className="text-xs text-brand-rhythm/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO COMPLETO ═══ */}
      <section id="contacto" className="relative py-28 md:py-36 bg-[#F0F2F5] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(233,222,255,0.4) 0%, transparent 70%)" }} />

        <div className="relative container mx-auto px-4 md:px-8">
          <motion.div className="max-w-xl mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}>
            <p className="text-sm font-medium tracking-widest uppercase mb-4 text-brand-rhythm">
              Contacto
            </p>
            <h2 className="text-2xl md:text-[2rem] leading-[1.15] font-medium mb-5 text-[#1A1A20]">
              {t("contact.description")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Contact info */}
            <motion.div
              className="relative p-7 rounded-2xl bg-white border border-brand-pale-lavender/30 hover:border-brand-pale-lavender hover:shadow-[0_12px_36px_rgba(217,199,255,0.4)] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }} />
              <h3 className="text-base font-semibold text-brand-eerie-black mb-5">Información</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Balcarce Nº 37, 2do Piso, San Salvador de Jujuy" },
                  { icon: Phone, text: "+54 9 388 578 6946" },
                  { icon: Mail, text: "draraquelortodoncia@gmail.com" },
                  { icon: Instagram, text: "@od.rodriguezraquel" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-lavender to-brand-pale-lavender border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] shrink-0">
                      <Icon className="w-4 h-4 text-brand-eerie-black" />
                    </span>
                    <p className="text-sm text-brand-rhythm leading-relaxed pt-2">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Horarios */}
            <motion.div
              className="relative p-7 rounded-2xl bg-white border border-brand-pale-lavender/30 hover:border-brand-pale-lavender hover:shadow-[0_12px_36px_rgba(217,199,255,0.4)] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }} />
              <h3 className="text-base font-semibold text-brand-eerie-black mb-5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-eerie-black" /> Horarios de atención
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
                    <p className="text-xs font-medium text-brand-rhythm uppercase tracking-wider">{day}</p>
                    <p className="text-sm text-[#4A4A54] mt-0.5">{time}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="relative p-7 rounded-2xl bg-brand-pale-lavender text-brand-eerie-black flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_rgba(217,199,255,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #FFE0FF, #D9C7FF, #E9DEFF)" }} />
              <div>
                <h3 className="text-base font-medium mb-3">¿Querés agendar tu consulta?</h3>
                <p className="text-sm text-brand-eerie-black/70 leading-relaxed mb-6">
                  Escribinos por WhatsApp y coordinamos tu primera visita. La consulta tiene un valor de $40.000 (efectivo o transferencia).
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5493885786946"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-eerie-black text-white font-semibold text-sm hover:bg-black active:scale-[0.98] transition-all duration-200"
                >
                  WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-brand-eerie-black/50 text-center">Efectivo · Transferencia · Débito/Crédito (Macro) · Planes de cuotas</p>
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
