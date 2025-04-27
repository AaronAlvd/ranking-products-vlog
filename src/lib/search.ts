import type { Article } from "./data"

/**
 * Filters and sorts articles based on a search query
 * @param articles Array of articles to filter
 * @param query Search query string
 * @returns Filtered and sorted array of articles
 */
export function filterArticlesByQuery(articles: Article[], query: string | null): Article[] {
  // If no query, return all articles
  if (!query || query.trim() === "") {
    return articles
  }

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0)

  if (searchTerms.length === 0) {
    return articles
  }

  // Calculate relevance score for each article
  const scoredArticles = articles.map((article) => {
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

  // Filter out articles with zero score and sort by score (descending)
  return scoredArticles
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article)
}
