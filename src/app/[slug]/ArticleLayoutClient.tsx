"use client"

import type React from "react"
import { getArticleBySlug, getAllArticles } from "@/lib/data"
import AdUnit from "@/components/AdUnit"
import { ArrowUpCircle } from "lucide-react"
import ReadingProgressBar from "@/components/ReadingProgressBar"
import PopularArticles from "@/components/PopularArticles"
import { getPopularArticles } from "@/lib/utils"

export default function ArticleLayoutClient({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  // Check if article exists (for proper error handling)
  const article = getArticleBySlug(params.slug)

  // If article doesn't exist, just render children (which will handle the 404)
  if (!article) {
    return children
  }

  // Get popular articles for the sidebar
  const allArticles = getAllArticles()
  const popularArticles = getPopularArticles(allArticles, 5)

  return (
    <div className="w-full px-4 py-8">
      {/* Reading progress indicator */}
      <ReadingProgressBar />

      {/* Three-column layout with side ads */}
      <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)_300px] gap-6 xl:gap-10">
        {/* Left sidebar - only visible on large screens */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-6">
            {/* Skyscraper ad */}
            <AdUnit size="skyscraper" className="mx-auto" />

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-4"
            >
              <ArrowUpCircle size={20} />
              <span>Back to top</span>
            </button>
          </div>
        </aside>

        {/* Main content column */}
        <main className="min-w-0">{children}</main>

        {/* Right sidebar - only visible on large screens */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            {/* Popular articles widget */}
            <PopularArticles articles={popularArticles} />

            {/* Featured products widget */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="font-bold">Top Picks</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  {article.products.slice(0, 3).map((product, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        {product.price && <p className="text-sm text-green-600">{product.price}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ad units */}
            <AdUnit size="rectangle" className="mx-auto" />

            {/* Category widget */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-4">
                <h3 className="font-bold">Categories</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      Audio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      Smart Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      Gaming
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
