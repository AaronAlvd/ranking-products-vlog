import type { Article } from "@/lib/data"
import ArticleCard from "./ArticleCard"

interface PopularArticlesProps {
  articles: Article[]
}

export default function PopularArticles({ articles }: PopularArticlesProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-600 text-white p-4">
        <h3 className="font-bold">Popular Articles</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              slug={article.slug}
              category={article.category}
              publishedDate={article.publishedDate}
              coverImageUrl={article.coverImageUrl}
              size="small"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
