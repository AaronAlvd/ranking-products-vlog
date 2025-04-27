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

  return articles
    .map((article) => {
      let score = 0
      const title = article.title.toLowerCase()

      // Title exact match (highest priority)
      if (title === query.toLowerCase()) {
        score += 100
      }

      // Title starts with query
      if (title.startsWith(query.toLowerCase())) {
        score += 50
      }

      // Individual terms in title
      searchTerms.forEach((term) => {
        // Full term appears in title
        if (title.includes(term)) {
          score += 30
        }

        // Check for partial matches in title (minimum 3 characters)
        if (term.length >= 3 && title.split(" ").some((word) => word.includes(term))) {
          score += 15
        }

        // Term appears in category
        if (article.category.toLowerCase().includes(term)) {
          score += 10
        }

        // Term appears in product names
        article.products.forEach((product) => {
          if (product.name.toLowerCase().includes(term)) {
            score += 5
          }
        })

        // Term appears in intro
        if (article.intro.toLowerCase().includes(term)) {
          score += 3
        }
      })

      return { article, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article)
}

// Find related articles based on category and keywords
export function findRelatedArticles(currentArticle: Article, allArticles: Article[], limit = 3): Article[] {
  // Don't include the current article in results
  const otherArticles = allArticles.filter((article) => article.id !== currentArticle.id)

  if (otherArticles.length === 0) return []

  return otherArticles
    .map((article) => {
      let score = 0

      // Same category is a strong signal
      if (article.category === currentArticle.category) {
        score += 50
      }

      // Check for keyword overlap in titles
      const currentTitleWords = currentArticle.title.toLowerCase().split(/\s+/)
      const articleTitleWords = article.title.toLowerCase().split(/\s+/)

      currentTitleWords.forEach((word) => {
        if (word.length > 3 && articleTitleWords.includes(word)) {
          score += 10
        }
      })

      // Check for product name overlap
      currentArticle.products.forEach((currentProduct) => {
        article.products.forEach((product) => {
          if (
            currentProduct.name.toLowerCase().includes(product.name.toLowerCase()) ||
            product.name.toLowerCase().includes(currentProduct.name.toLowerCase())
          ) {
            score += 15
          }
        })
      })

      // Check for keyword overlap in SEO keywords
      currentArticle.seo.keywords.forEach((keyword) => {
        if (article.seo.keywords.includes(keyword)) {
          score += 5
        }
      })

      return { article, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article)
}

// Get popular articles (in a real app, this would be based on view counts or other metrics)
export function getPopularArticles(allArticles: Article[], limit = 5): Article[] {
  // For demo purposes, we'll just return the first few articles
  // In a real app, you would sort by view count or other popularity metrics
  return allArticles.slice(0, limit)
}
