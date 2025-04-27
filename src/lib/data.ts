// This file contains sample data based on the provided structure
// In a real application, this would likely come from a database or API

export type ProductItem = {
  name: string
  rank: number // 1, 2, 3, etc.
  description: string
  pros: string[]
  cons: string[]
  price?: string // optional, can be "$499" or "Varies"
  productUrl?: string // affiliate or regular link
  imageUrl?: string // optional, for SEO and user experience
}

export type SEOInfo = {
  titleTag: string
  metaDescription: string
  keywords: string[]
}

export type Article = {
  id: string // UUID or slugified title
  title: string
  slug: string
  publishedDate: string // ISO format preferred (e.g., "2025-04-26")
  updatedDate?: string // optional
  category: string // e.g., "Laptops", "Cars", "Tech Reviews"
  intro: string // intro paragraph for the article
  products: ProductItem[] // list of ranked products
  conclusion: string // wrap-up text at the end
  seo: SEOInfo
  coverImageUrl?: string // for social sharing and article previews
  author?: string // optional, for multi-author sites
}

// Sample articles data
const articles: Article[] = [
  {
    id: "1",
    title: "Best Gaming Laptops of 2025",
    slug: "best-gaming-laptops-2025",
    publishedDate: "2025-04-15",
    updatedDate: "2025-04-26",
    category: "Laptops",
    intro:
      "Gaming laptops have evolved significantly in 2025, offering desktop-level performance in portable form factors. Our team has tested dozens of models to bring you the definitive ranking of this year's best gaming laptops, considering performance, cooling, display quality, and value for money.",
    products: [
      {
        name: "RazerBlade Pro X",
        rank: 1,
        description:
          "The RazerBlade Pro X sets a new standard for gaming laptops with its revolutionary cooling system and unmatched performance.",
        pros: [
          "Exceptional RTX 5080 GPU performance",
          "Revolutionary vapor chamber cooling",
          "240Hz 4K OLED display",
          "Sleek, premium aluminum chassis",
        ],
        cons: ["Premium price point", "Battery life could be better", "Limited upgradeability"],
        price: "$2,999",
        productUrl: "https://example.com/razerblade-pro-x",
        imageUrl: "/sleek-gaming-setup.png",
      },
      {
        name: "ASUS ROG Zephyrus G16",
        rank: 2,
        description:
          "The ROG Zephyrus G16 balances performance and portability perfectly, making it ideal for gamers on the go.",
        pros: [
          "Lightweight design at just 4.2 lbs",
          "Excellent performance with RTX 5070",
          "16-inch 240Hz display with minimal bezels",
          "Great battery life for a gaming laptop",
        ],
        cons: ["Runs hot under heavy load", "Fans can get loud", "Limited port selection"],
        price: "$1,899",
        productUrl: "https://example.com/rog-zephyrus-g16",
        imageUrl: "/nebula-gaming-rig.png",
      },
      {
        name: "Alienware m18 R2",
        rank: 3,
        description:
          "The Alienware m18 R2 is a desktop replacement that makes no compromises on performance or screen size.",
        pros: [
          "Massive 18-inch QD-OLED display",
          "Desktop-class performance",
          "Excellent keyboard with per-key RGB",
          "Comprehensive port selection",
        ],
        cons: ["Extremely heavy at 8.9 lbs", "Poor battery life", "Very expensive"],
        price: "$3,499",
        productUrl: "https://example.com/alienware-m18-r2",
        imageUrl: "/alienware-gaming-setup.png",
      },
    ],
    conclusion:
      "The gaming laptop market in 2025 offers more choices than ever before. For those seeking the absolute best performance regardless of price, the RazerBlade Pro X is the clear winner. Budget-conscious gamers who still want excellent performance should consider the ASUS ROG Zephyrus G16, while those who prioritize screen size and don't mind the bulk should look at the Alienware m18 R2. Whichever you choose, gaming on the go has never been more impressive.",
    seo: {
      titleTag: "Best Gaming Laptops of 2025 | Top 3 Ranked & Reviewed",
      metaDescription:
        "Discover the top gaming laptops of 2025, expertly ranked and reviewed. Find the perfect balance of performance, portability, and price.",
      keywords: [
        "gaming laptops",
        "best gaming laptops 2025",
        "Razer Blade Pro X",
        "ASUS ROG Zephyrus",
        "Alienware m18",
        "laptop reviews",
      ],
    },
    coverImageUrl: "/gaming-laptop-showcase.png",
    author: "Alex Morgan",
  },
  {
    id: "2",
    title: "Top 5 Wireless Earbuds for Every Budget",
    slug: "top-wireless-earbuds-2025",
    publishedDate: "2025-03-28",
    category: "Audio",
    intro:
      "Wireless earbuds have become essential accessories for music lovers, commuters, and fitness enthusiasts alike. With hundreds of options on the market, finding the perfect pair can be overwhelming. We've tested over 50 models to bring you the best wireless earbuds for every budget and use case.",
    products: [
      {
        name: "Sony WF-2000XM5",
        rank: 1,
        description:
          "Sony's flagship earbuds offer unmatched noise cancellation and audio quality in a comfortable, premium package.",
        pros: [
          "Best-in-class noise cancellation",
          "Exceptional sound quality with LDAC support",
          "Comfortable for extended wear",
          "8-hour battery life with ANC on",
        ],
        cons: ["Premium price", "Case is larger than competitors", "Touch controls can be finicky"],
        price: "$299",
        productUrl: "https://example.com/sony-wf-2000xm5",
        imageUrl: "/modern-commute-audio.png",
      },
      {
        name: "Apple AirPods Pro 3",
        rank: 2,
        description:
          "The latest AirPods Pro offer seamless integration with Apple devices and significant improvements in sound quality.",
        pros: [
          "Seamless integration with Apple ecosystem",
          "Improved sound quality over previous generations",
          "Excellent transparency mode",
          "Compact, pocketable case with MagSafe",
        ],
        cons: ["Limited features on Android", "No high-res audio codec support", "Battery life is average"],
        price: "$249",
        productUrl: "https://example.com/airpods-pro-3",
        imageUrl: "/sleek-wireless-earbuds.png",
      },
      {
        name: "Samsung Galaxy Buds 3 Pro",
        rank: 3,
        description:
          "Samsung's flagship earbuds excel with Android devices and offer a balanced sound profile with excellent features.",
        pros: [
          "Great sound quality with 24-bit audio",
          "Comfortable, secure fit",
          "Excellent integration with Samsung devices",
          "Compact case with wireless charging",
        ],
        cons: ["ANC not as strong as Sony or Bose", "Limited iOS functionality", "Voice call quality could be better"],
        price: "$199",
        productUrl: "https://example.com/galaxy-buds-3-pro",
        imageUrl: "/galaxy-buds-lifestyle.png",
      },
      {
        name: "Anker Soundcore Liberty 4 Pro",
        rank: 4,
        description:
          "The Liberty 4 Pro offers premium features at a mid-range price, making it an excellent value proposition.",
        pros: [
          "Excellent sound quality for the price",
          "Effective ANC",
          "Customizable EQ with app",
          "Long battery life (9 hours)",
        ],
        cons: ["Bulkier than premium options", "App can be buggy", "Touch controls not customizable"],
        price: "$129",
        productUrl: "https://example.com/liberty-4-pro",
        imageUrl: "/soundcore-earbuds-lifestyle.png",
      },
      {
        name: "EarFun Air Pro 3",
        rank: 5,
        description: "The EarFun Air Pro 3 proves that good wireless earbuds don't have to break the bank.",
        pros: [
          "Incredible value for money",
          "Surprisingly effective ANC",
          "Good sound quality with aptX support",
          "IPX7 waterproof rating",
        ],
        cons: ["Build quality feels less premium", "App lacks advanced features", "Microphone quality is average"],
        price: "$79",
        productUrl: "https://example.com/earfun-air-pro-3",
        imageUrl: "/placeholder.svg?height=400&width=400&query=budget+wireless+earbuds",
      },
    ],
    conclusion:
      "The wireless earbud market continues to evolve rapidly, with impressive options at every price point. The Sony WF-2000XM5 remains our top pick for those who want the absolute best, while the EarFun Air Pro 3 proves you don't need to spend hundreds for a good experience. Consider your priorities—sound quality, noise cancellation, ecosystem integration, or value—and choose accordingly. With any of our top five picks, you'll be getting an excellent audio companion for your daily life.",
    seo: {
      titleTag: "Best Wireless Earbuds 2025 | Top 5 for Every Budget",
      metaDescription:
        "Discover the best wireless earbuds of 2025 for every budget. From premium Sony and Apple options to affordable alternatives that don't compromise on quality.",
      keywords: [
        "wireless earbuds",
        "best earbuds 2025",
        "Sony WF-2000XM5",
        "AirPods Pro 3",
        "budget earbuds",
        "noise cancelling earbuds",
      ],
    },
    coverImageUrl: "/placeholder.svg?height=800&width=1200&query=wireless+earbuds+collection",
    author: "Samantha Lee",
  },
  {
    id: "3",
    title: "Best Smart Home Hubs of 2025",
    slug: "best-smart-home-hubs-2025",
    publishedDate: "2025-04-10",
    category: "Smart Home",
    intro:
      "A good smart home hub is the foundation of any connected home, allowing you to control and automate various devices from different manufacturers. With the Matter standard now widely adopted, choosing the right hub in 2025 is more about features and ecosystem than compatibility. We've tested the leading smart home hubs to help you find the perfect command center for your connected home.",
    products: [
      {
        name: "Amazon Echo Hub",
        rank: 1,
        description:
          "Amazon's dedicated smart home controller combines a touchscreen interface with powerful hub capabilities and Alexa integration.",
        pros: [
          "Beautiful 8-inch touchscreen",
          "Supports Matter, Zigbee, Thread, and Bluetooth",
          "Wall-mountable design",
          "Powerful Alexa voice control",
        ],
        cons: [
          "Expensive compared to regular Echo devices",
          "Requires power connection (not battery-powered)",
          "Some advanced features require subscription",
        ],
        price: "$199",
        productUrl: "https://example.com/amazon-echo-hub",
        imageUrl: "/placeholder.svg?height=400&width=400&query=amazon+echo+hub",
      },
      {
        name: "Apple HomePod Hub",
        rank: 2,
        description:
          "Apple's smart home hub combines excellent sound quality with comprehensive HomeKit and Matter support.",
        pros: [
          "Exceptional audio quality",
          "Seamless Apple ecosystem integration",
          "Privacy-focused approach",
          "Thread border router capabilities",
        ],
        cons: [
          "Limited compatibility with non-HomeKit devices",
          "Siri lags behind Alexa and Google Assistant",
          "Premium pricing",
        ],
        price: "$249",
        productUrl: "https://example.com/apple-homepod-hub",
        imageUrl: "/placeholder.svg?height=400&width=400&query=apple+homepod",
      },
      {
        name: "Samsung SmartThings Station Pro",
        rank: 3,
        description: "Samsung's hub offers excellent compatibility and doubles as a wireless charger for your devices.",
        pros: [
          "Comprehensive device support",
          "Built-in wireless charging pad",
          "Thread and Matter support",
          "Good value for money",
        ],
        cons: ["App can be complex for beginners", "No built-in voice assistant", "Limited audio capabilities"],
        price: "$129",
        productUrl: "https://example.com/smartthings-station-pro",
        imageUrl: "/placeholder.svg?height=400&width=400&query=samsung+smartthings+hub",
      },
      {
        name: "Google Nest Hub Max 2",
        rank: 4,
        description:
          "Google's flagship smart display offers a great screen, good sound, and comprehensive smart home controls.",
        pros: [
          "Large 10-inch display",
          "Built-in Nest camera with face recognition",
          "Good sound quality",
          "Intuitive touch interface",
        ],
        cons: [
          "Google Assistant features have been reduced",
          "No Thread support",
          "Privacy concerns with camera and microphone",
        ],
        price: "$229",
        productUrl: "https://example.com/nest-hub-max-2",
        imageUrl: "/placeholder.svg?height=400&width=400&query=google+nest+hub",
      },
    ],
    conclusion:
      "The smart home hub market has matured significantly with the adoption of Matter, making cross-platform compatibility less of an issue. Your choice now depends more on your preferred ecosystem, additional features, and budget. The Amazon Echo Hub offers the best balance of features, compatibility, and price, making it our top pick. However, Apple users will be better served by the HomePod Hub, while those deeply invested in Samsung's ecosystem should consider the SmartThings Station Pro. Whichever you choose, these hubs will provide a solid foundation for your smart home for years to come.",
    seo: {
      titleTag: "Best Smart Home Hubs 2025 | Top Matter-Compatible Controllers",
      metaDescription:
        "Find the perfect smart home hub for your connected devices. Our expert reviews rank the top Matter-compatible smart home controllers of 2025.",
      keywords: [
        "smart home hub",
        "matter controller",
        "best smart home controllers 2025",
        "Echo Hub",
        "HomePod Hub",
        "SmartThings",
      ],
    },
    coverImageUrl: "/placeholder.svg?height=800&width=1200&query=smart+home+devices",
    author: "Michael Chen",
  },
]

// Helper functions to work with the data
export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}
