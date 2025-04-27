import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getAllArticles } from "@/lib/data"
import { filterArticlesByQuery } from "@/lib/search"
import AdUnit from "@/components/AdUnit"

export default function Home({
  searchParams,
}: {
  searchParams?: { q?: string }
}) {
  // Ensure searchParams exists and get the query
  const query = searchParams?.q || null
  const allArticles = getAllArticles()

  // Apply filtering if there's a query
  const articles = query ? filterArticlesByQuery(allArticles, query) : allArticles

  // Set page title and description based on search query
  const pageTitle = query ? `Search Results for "${query}" | Product Rankings Blog` : "Product Rankings Blog"
  const pageDescription = query
    ? `Find the best ${query} products ranked and reviewed by experts`
    : "Find the best products ranked and reviewed by experts"

  return (
    <>
      <head>
        {/* Override default metadata for search results */}
        {query && (
          <>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
          </>
        )}
      </head>

      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_min(1200px,100%)_1fr] gap-4 xl:gap-8">
          {/* Left sidebar - only visible on large screens */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-4">
              <AdUnit size="sidebar" className="mx-auto" />
              <div className="mt-4">
                <AdUnit size="rectangle" className="mx-auto" />
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main>
            {query ? (
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Search Results</h1>
                <p className="text-gray-600">
                  {articles.length} {articles.length === 1 ? "result" : "results"} found for &qout;{query}&qout;
                </p>
                {articles.length === 0 && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <p>No articles found matching your search. Try different keywords or browse all articles below.</p>
                  </div>
                )}
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-center mb-8">Product Rankings Blog</h1>

                {/* Top leaderboard ad */}
                <div className="mb-12">
                  <AdUnit size="leaderboard" className="mx-auto" />
                </div>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                // Insert ads after every 3 articles
                const articleCard = (
                  <Link
                    href={`/${article.slug}`}
                    key={article.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {article.coverImageUrl && (
                      <div className="relative w-full h-48">
                        <Image
                          src={article.coverImageUrl || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full mb-2">
                        {article.category}
                      </span>
                      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.intro}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Published: {new Date(article.publishedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                )

                // Return the article card and potentially an ad
                return (
                  <React.Fragment key={article.id}>
                    {articleCard}
                    {(index + 1) % 3 === 0 && index !== articles.length - 1 && (
                      <div className="col-span-1 md:col-span-2 lg:col-span-3 my-4">
                        <AdUnit size="banner" className="mx-auto" />
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            {/* Bottom rectangle ad */}
            {articles.length > 0 && (
              <div className="mt-12 flex justify-center">
                <AdUnit size="rectangle" />
              </div>
            )}

            {articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 mb-6">
                  Try searching for different keywords or browse our categories.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View All Articles
                </Link>
              </div>
            )}
          </main>

          {/* Right sidebar - only visible on large screens */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <AdUnit size="rectangle" className="mx-auto" />
              <AdUnit size="rectangle" className="mx-auto mb-8" />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

