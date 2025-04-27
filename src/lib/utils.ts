import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Article } from "./data"

// Utility functions for the blog

// Format date to a readable string
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// Generate a reading time estimate based on content length
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Truncate text to a specific length with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Search articles based on a query string
export function searchArticles(articles: Article[], query: string): Article[] {
  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0)

  if (searchTerms.length === 0) return []

  return articles.filter((article) => {
    // Check if any search term is in the title, intro, conclusion, or category
    const titleMatch = searchTerms.some((term) => article.title.toLowerCase().includes(term))
    const introMatch = searchTerms.some((term) => article.intro.toLowerCase().includes(term))
    const conclusionMatch = searchTerms.some((term) => article.conclusion.toLowerCase().includes(term))
    const categoryMatch = searchTerms.some((term) => article.category.toLowerCase().includes(term))

    // Check if any search term is in product names or descriptions
    const productMatch = article.products.some((product) =>
      searchTerms.some(
        (term) => product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term),
      ),
    )

    // Check if any search term is in SEO keywords
    const keywordMatch = searchTerms.some((term) =>
      article.seo.keywords.some((keyword) => keyword.toLowerCase().includes(term)),
    )

    return titleMatch || introMatch || conclusionMatch || categoryMatch || productMatch || keywordMatch
  })
}
