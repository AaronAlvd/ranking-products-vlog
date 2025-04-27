"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/data"
import AdUnit from "@/components/AdUnit"

export default function ArticlePage() {
  const pathname = usePathname();
  const slug = pathname.split("/")[1]
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Back to all articles
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <span>Category: {article.category}</span>
          <span>Published: {new Date(article.publishedDate).toLocaleDateString()}</span>
          {article.updatedDate && <span>Updated: {new Date(article.updatedDate).toLocaleDateString()}</span>}
        </div>

        {/* Top ad - only visible on mobile and tablets */}
        <div className="my-6 lg:hidden">
          <AdUnit size="leaderboard" />
        </div>

        {article.coverImageUrl && (
          <div className="relative w-full h-64 md:h-96 mb-6">
            <Image
              src={article.coverImageUrl || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <div className="prose max-w-none mb-8">
          <p className="text-lg">{article.intro}</p>
        </div>
      </header>

      {/* Ad after intro - only visible on mobile and tablets */}
      <div className="my-8 flex justify-center lg:hidden">
        <AdUnit size="rectangle" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Top {article.products.length} {article.category}
        </h2>

        <div className="space-y-12">
          {article.products.map((product, index) => (
            <React.Fragment key={product.name}>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {product.imageUrl && (
                    <div className="relative w-full md:w-1/3 h-64">
                      <Image
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">
                        <span className="inline-block bg-blue-600 text-white w-8 h-8 rounded-full text-center leading-8 mr-2">
                          {product.rank}
                        </span>
                        {product.name}
                      </h3>
                      {product.price && <span className="text-lg font-semibold text-green-600">{product.price}</span>}
                    </div>

                    <p className="mb-4">{product.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {product.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {product.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {product.productUrl && (
                      <a
                        href={product.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Check Price
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Insert ad after every 2 products except after the last product - only visible on mobile and tablets */}
              {index > 0 && (index + 1) % 2 === 0 && index !== article.products.length - 1 && (
                <div className="my-8 lg:hidden">
                  <AdUnit size="banner" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Ad before conclusion - only visible on mobile and tablets */}
      <div className="mb-8 flex justify-center lg:hidden">
        <AdUnit size="rectangle" />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <div className="prose max-w-none">
          <p>{article.conclusion}</p>
        </div>
      </section>

      {/* Bottom ad - only visible on mobile and tablets */}
      <div className="mt-12 mb-4 lg:hidden">
        <AdUnit size="leaderboard" />
      </div>
    </>
  )
}
