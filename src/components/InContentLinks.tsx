import Link from "next/link"
import type { Article } from "@/lib/data"

interface InContentLinksProps {
  articles: Article[]
  title: string
}

export default function InContentLinks({ articles, title }: InContentLinksProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <div className="my-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
      <h3 className="font-bold text-blue-800 mb-2">{title}</h3>
      <ul className="space-y-1">
        {articles.map((article) => (
          <li key={article.id} className="flex items-start">
            <span className="text-blue-500 mr-2">→</span>
            <Link href={`/${article.slug}`} className="text-blue-600 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
