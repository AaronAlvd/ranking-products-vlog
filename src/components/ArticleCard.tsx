import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface ArticleCardProps {
  title: string
  slug: string
  category: string
  publishedDate: string
  coverImageUrl?: string
  excerpt?: string
  size?: "small" | "medium" | "large"
}

export default function ArticleCard({
  title,
  slug,
  category,
  publishedDate,
  coverImageUrl,
  excerpt,
  size = "medium",
}: ArticleCardProps) {
  // Determine classes based on size
  const containerClasses = {
    small: "flex items-center gap-3",
    medium: "flex flex-col",
    large: "flex flex-col",
  }

  const imageClasses = {
    small: "relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden",
    medium: "relative w-full h-40 rounded-lg overflow-hidden",
    large: "relative w-full h-48 rounded-lg overflow-hidden",
  }

  const titleClasses = {
    small: "text-sm font-medium line-clamp-2",
    medium: "text-lg font-bold line-clamp-2",
    large: "text-xl font-bold line-clamp-2",
  }

  return (
    <Link href={`/${slug}`} className={`group ${containerClasses[size]} hover:opacity-90 transition-opacity`}>
      {coverImageUrl && (
        <div className={imageClasses[size]}>
          <Image
            src={coverImageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className={size === "small" ? "flex-1" : ""}>
        {size !== "small" && (
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full mb-2">
            {category}
          </span>
        )}
        <h3 className={titleClasses[size]}>{title}</h3>
        {size !== "small" && excerpt && <p className="text-gray-600 text-sm mt-1 line-clamp-2">{excerpt}</p>}
        {size !== "small" && <div className="text-xs text-gray-500 mt-2">{formatDate(publishedDate)}</div>}
      </div>
    </Link>
  )
}
