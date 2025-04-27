"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { notFound } from "next/navigation"
import { getArticleBySlug, getAllArticles } from "@/lib/data"
import { formatDate, findRelatedArticles } from "@/lib/utils"
import AdUnit from "@/components/AdUnit"
import { ArrowLeft, Star, Check, X, ExternalLink, Calendar, Clock, RefreshCw } from "lucide-react"
import SocialShareButtons from "@/components/SocialShareButtons"
import ProductShareButton from "@/components/ProductShareButton"
import RelatedArticles from "@/components/RelatedArticles"
import InContentLinks from "@/components/InContentLinks"

export default function ArticlePage() {
  const pathname = usePathname();
  const slug = pathname.split("/")[1]
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  // Get all articles for related content
  const allArticles = getAllArticles()

  // Find related articles
  const relatedArticles = findRelatedArticles(article, allArticles, 3)

  // Find articles in the same category
  const categoryArticles = allArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2)

  // Calculate reading time (rough estimate)
  const wordCount =
    (article.intro + article.conclusion).split(/\s+/).length +
    article.products.reduce(
      (acc, product) =>
        acc +
        product.description.split(/\s+/).length +
        product.pros.join(" ").split(/\s+/).length +
        product.cons.join(" ").split(/\s+/).length,
      0,
    )

  const readingTime = Math.ceil(wordCount / 200) // Assuming 200 words per minute

  // Article URL for sharing
  const articleUrl = `https://ranking-products-vlog.vercel.app/${article.slug}`

  return (
    <article className="relative">
      {/* Back button with improved styling */}
      <Link
        href="/"
        className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 transition-colors group"
      >
        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to all articles</span>
      </Link>

      {/* Article header with improved styling */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-3 mb-4">
          <Link
            href={`/?category=${article.category}`}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
          >
            {article.category}
          </Link>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium flex items-center">
            <Clock size={14} className="mr-1" /> {readingTime} min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">{article.title}</h1>

        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>Published: {formatDate(article.publishedDate)}</span>
          </div>
          {article.updatedDate && (
            <div className="flex items-center">
              <RefreshCw size={16} className="mr-1" />
              <span>Updated: {formatDate(article.updatedDate)}</span>
            </div>
          )}
        </div>

        {/* Social sharing section at the top */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <SocialShareButtons
            url={articleUrl}
            title={article.title}
            description={article.intro.substring(0, 150) + "..."}
            image={article.coverImageUrl}
            className="justify-center md:justify-start"
          />
        </div>

        {/* Hero image with overlay gradient */}
        {article.coverImageUrl && (
          <div className="relative w-full h-72 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={article.coverImageUrl || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}

        {/* Introduction with improved styling */}
        <div className="prose max-w-none text-lg leading-relaxed text-gray-700 mb-10 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p>{article.intro}</p>
        </div>
      </header>

      {/* In-content links to category articles */}
      {categoryArticles.length > 0 && (
        <InContentLinks articles={categoryArticles} title={`More ${article.category} Articles You Might Like`} />
      )}

      {/* Mobile ad - only visible on mobile and tablets */}
      <div className="my-8 lg:hidden">
        <AdUnit size="rectangle" />
      </div>

      {/* Products section with improved styling */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top {article.products.length} {article.category}
          </h2>
          <div className="ml-4 flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={`${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {article.products.map((product, index) => (
            <React.Fragment key={product.name}>
              <div
                id={product.name.toLowerCase().replace(/\s+/g, "-")}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product header with rank */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xl mr-3">
                      {product.rank}
                    </div>
                    <p className="text-xl md:text-2xl font-bold">{product.name}</p>
                  </div>
                  {product.price && (
                    <div className="bg-white text-green-600 px-4 py-1 rounded-full font-bold">{product.price}</div>
                  )}
                </div>

                <div className="p-6">
                  {/* Product content with larger image */}
                  <div className="grid grid-cols-1 gap-8">
                    {/* Product image - now much larger */}
                    {product.imageUrl && (
                      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                        <Image
                          src={product.imageUrl || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}

                    {/* Product description */}
                    <div>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{product.description}</p>

                      {/* Pros and cons with improved styling */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <p className="font-bold text-green-700 mb-3 flex items-center">
                            <Check size={18} className="mr-2" /> Pros
                          </p>
                          <ul className="space-y-2">
                            {product.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                          <p className="font-bold text-red-700 mb-3 flex items-center">
                            <X size={18} className="mr-2" /> Cons
                          </p>
                          <ul className="space-y-2">
                            {product.cons.map((con, idx) => (
                              <li key={idx} className="flex items-start">
                                <X size={16} className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action buttons with share */}
                      <div className="mt-6 flex flex-wrap gap-3 items-center">
                        {product.productUrl && (
                          <a
                            href={product.productUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                          >
                            Check Price
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        )}

                        {/* Product share button */}
                        <ProductShareButton
                          url={articleUrl}
                          title={article.title}
                          productName={product.name}
                          image={product.imageUrl}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insert ad after every 2 products except after the last product - only visible on mobile and tablets */}
              {index > 0 && (index + 1) % 2 === 0 && index !== article.products.length - 1 && (
                <div className="my-8 lg:hidden">
                  <AdUnit size="banner" />
                </div>
              )}

              {/* Add in-content links after the middle product */}
              {index === Math.floor(article.products.length / 2) - 1 && relatedArticles.length > 0 && (
                <InContentLinks articles={relatedArticles.slice(0, 2)} title="You Might Also Be Interested In" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Ad before conclusion - only visible on mobile and tablets */}
      <div className="mb-10 lg:hidden">
        <AdUnit size="rectangle" />
      </div>

      {/* Conclusion with improved styling */}
      <section className="mb-12">
        <p className="text-3xl font-bold mb-6 text-gray-900">Conclusion</p>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="prose max-w-none text-lg leading-relaxed text-gray-700">
            <p>{article.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} title="Related Articles" />}

      {/* Bottom sharing section */}
      <section className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <p className="text-xl font-bold mb-4 text-center">Share This Article</p>
        <p className="text-gray-600 text-center mb-4">
          If you found this article helpful, please share it with your friends and followers!
        </p>
        <SocialShareButtons
          url={articleUrl}
          title={article.title}
          description={article.intro.substring(0, 150) + "..."}
          image={article.coverImageUrl}
          size="lg"
          className="justify-center"
        />
      </section>

      {/* Bottom ad - only visible on mobile and tablets */}
      <div className="mt-12 mb-4 lg:hidden">
        <AdUnit size="leaderboard" />
      </div>
    </article>
  )
}
