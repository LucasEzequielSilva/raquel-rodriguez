"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { FloatingFooter } from "@/components/floating-footer"
import { useTranslations } from "@/lib/i18n"
import { Clock, Tag } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/i18n"

export default function BlogPage() {
  const { t, language } = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState(t("blog.categories.all"))
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const posts = blogPosts.es
  const categories = Object.values(t("blog.categories"))

  const filteredPosts =
    selectedCategory === t("blog.categories.all") ? posts : posts.filter((post) => post.category === selectedCategory)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <main className="container mx-auto px-4 md:px-8 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4 text-teal-600">Blog</p>
          <h1 className="text-2xl md:text-3xl font-medium text-[#1A1A20] mb-4 tracking-tight">{t("blog.title")}</h1>
          <p className="text-[#6B6B76]">{t("blog.subtitle")}</p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#1A1A20] text-white"
                    : "bg-white text-[#6B6B76] border border-[#E0E2E8] hover:border-[#D4D6DC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-[#E0E2E8]">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-[#8A8A94]">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h2 className="text-lg font-medium text-[#1A1A20] group-hover:text-teal-600 transition-colors duration-200 tracking-tight">
                  {post.title}
                </h2>
                <p className="text-[#8A8A94] text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors duration-200"
                >
                  {t("blog.readMore")} →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                  currentPage === index + 1
                    ? "bg-[#1A1A20] text-white"
                    : "bg-white text-[#6B6B76] border border-[#E0E2E8] hover:border-[#D4D6DC]"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>

      <FloatingFooter />
    </div>
  )
}
