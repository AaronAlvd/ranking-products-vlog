"use client"

import { usePathname } from "next/navigation"
import { getArticleBySlug } from "@/lib/data"
import type React from "react"
import Head from "next/head"
import AdUnit from "@/components/AdUnit"

export default function ArticleLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const slug = pathname.split("/")[1]
  // Get article data for metadata
  const article = getArticleBySlug(slug)

  // If article doesn't exist, just render children (which will handle the 404)
  if (!article) {
    return children
  }

  return (
    <>
      {/* Traditional HTML metadata tags */}
      <Head>
        <title>{article.seo.titleTag}</title>
        <meta name="description" content={article.seo.metaDescription} />
        <meta name="keywords" content={article.seo.keywords.join(", ")} />

        {/* Open Graph tags */}
        <meta property="og:title" content={article.seo.titleTag} />
        <meta property="og:description" content={article.seo.metaDescription} />
        {article.coverImageUrl && <meta property="og:image" content={article.coverImageUrl} />}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProductRankings" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.seo.titleTag} />
        <meta name="twitter:description" content={article.seo.metaDescription} />
        {article.coverImageUrl && <meta name="twitter:image" content={article.coverImageUrl} />}

        {/* Article specific metadata */}
        <meta property="article:published_time" content={article.publishedDate} />
        {article.updatedDate && <meta property="article:modified_time" content={article.updatedDate} />}
        <meta property="article:section" content={article.category} />
        {article.seo.keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}

        {/* Canonical URL */}
        <link rel="canonical" href={`https://ranking-products-vlog.vercel.app/${article.slug}`} />
      </Head>

      <div className="w-full px-4 py-8">
        {/* Three-column layout with side ads */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_min(65ch,100%)_1fr] gap-4 xl:gap-8">
          {/* Left sidebar - only visible on large screens */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Screen-height appropriate ad */}
              <AdUnit size="sidebar" className="mx-auto" />

              {/* Additional sidebar content or ads */}
              <div className="mt-4">
                <AdUnit size="rectangle" className="mx-auto" />
              </div>
            </div>
          </aside>

          {/* Main content column */}
          <main>{children}</main>

          {/* Right sidebar - only visible on large screens */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <AdUnit size="rectangle" className="mx-auto" />
              <AdUnit size="rectangle" className="mx-auto" />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
