import type { Article } from "@/lib/data"
import ArticleCard from "./ArticleCard"

interface RelatedArticlesProps {
  articles: Article[]
  title?: string
}

export default function RelatedArticles({ articles, title = "Related Articles" }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            slug={article.slug}
            category={article.category}
            publishedDate={article.publishedDate}
            coverImageUrl={article.coverImageUrl}
            excerpt={article.intro.substring(0, 120) + "..."}
            size="medium"
          />
        ))}
      </div>
    </section>
  )
}
