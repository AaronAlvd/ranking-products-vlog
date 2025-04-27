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
    title: "Top Gaming Laptops 2025 | Best Picks Reviewed",
    slug: "top-3-best-gaming-laptops-2025",
    publishedDate: "2025-04-15",
    updatedDate: "2025-04-26",
    category: "Laptops",
    intro:
      "Gaming laptops in 2025 have reached an entirely new level, bridging the gap between portability and desktop-level performance. Thanks to major technological leaps in GPUs, cooling, and display technology, gamers now have an unprecedented selection of high-powered machines that can rival full-sized gaming rigs. Our editorial team rigorously tested and benchmarked dozens of models to present this definitive guide to the best gaming laptops of 2025. We prioritized raw performance, thermal efficiency, display quality, design, portability, and overall value for money to ensure you find the perfect laptop to match your gaming ambitions.",
    products: [
      {
        name: "RazerBlade Pro X",
        rank: 1,
        description:
          "The RazerBlade Pro X stands tall as the ultimate gaming laptop of 2025. Combining bleeding-edge RTX 5080 graphics with a stunning 4K OLED display and a revolutionary vapor chamber cooling system, it offers an unparalleled gaming experience in a sleek, stylish package. Designed for serious gamers and professionals who refuse to compromise, this laptop crushes AAA titles and intensive creative tasks alike with ease.",
        pros: [
          "Incredible RTX 5080 GPU delivering desktop-class performance",
          "Next-generation vapor chamber cooling technology",
          "Ultra-smooth 240Hz 4K OLED display with brilliant color accuracy",
          "Slim, lightweight premium aluminum build",
        ],
        cons: [
          "Expensive compared to competitors",
          "Battery life is average for its performance tier",
          "Minimal options for RAM and storage upgrades post-purchase",
        ],
        price: "$2,999",
        productUrl: "https://example.com/razerblade-pro-x",
        imageUrl: "/sleek-gaming-setup.png",
      },
      {
        name: "ASUS ROG Zephyrus G16",
        rank: 2,
        description:
          "For gamers who crave a perfect balance of power and portability, the ASUS ROG Zephyrus G16 delivers in spectacular fashion. Equipped with an RTX 5070 GPU and a vibrant 16-inch display, this featherweight powerhouse is ideal for gaming on the go, content creation, and even casual use. Its superior battery life makes it a strong option for students or traveling professionals who want serious performance without the bulk.",
        pros: [
          "Lightweight and travel-friendly design at just 4.2 pounds",
          "Powerful performance with RTX 5070 GPU",
          "Gorgeous 16-inch 240Hz display with ultra-thin bezels",
          "Surprisingly long battery life for a high-performance gaming laptop",
        ],
        cons: [
          "Thermals can spike during prolonged heavy gaming",
          "Fans get noticeably loud under load",
          "Limited I/O ports may require additional hubs for peripherals",
        ],
        price: "$1,899",
        productUrl: "https://example.com/rog-zephyrus-g16",
        imageUrl: "/nebula-gaming-rig.png",
      },
      {
        name: "Alienware m18 R2",
        rank: 3,
        description:
          "If you demand the biggest screen and the most raw power without caring about portability, the Alienware m18 R2 is your dream machine. Featuring an enormous 18-inch QD-OLED display and top-tier specs rivaling gaming desktops, this laptop is tailor-made for marathon gaming sessions, video editing, and multitasking. It's heavy, but every pound is packed with power, precision, and a premium build quality that long-time Alienware fans will appreciate.",
        pros: [
          "Giant 18-inch Quantum Dot OLED display with incredible depth and colors",
          "Truly desktop-class performance in a laptop form",
          "Excellent mechanical keyboard with customizable per-key RGB lighting",
          "Plenty of ports including USB-C, HDMI, and Thunderbolt 4",
        ],
        cons: [
          "Weighs almost 9 pounds, limiting portability",
          "Mediocre battery life, especially under heavy gaming loads",
          "Premium pricing, even for high-end configurations",
        ],
        price: "$3,499",
        productUrl: "https://example.com/alienware-m18-r2",
        imageUrl: "/alienware-gaming-setup.png",
      },
    ],
    conclusion:
      "The landscape for gaming laptops in 2025 has never been more competitive, and there truly is a machine for every type of gamer. For elite performance seekers who want the very best and are willing to invest, the RazerBlade Pro X remains the unrivaled champion. If you're a mobile gamer or a student who needs a lighter machine without sacrificing too much firepower, the ASUS ROG Zephyrus G16 offers a nearly perfect middle ground. Finally, for those who crave an uncompromising gaming and multimedia experience on a giant screen, the Alienware m18 R2 is the undisputed king. No matter your choice, gaming in 2025 is more exciting, portable, and visually stunning than ever before. Choose wisely, and you’ll have a machine that can handle not just today's games, but tomorrow’s innovations too.",
    seo: {
      titleTag: "Top Gaming Laptops of 2025 | Best Picks for Performance, Portability & Value",
      metaDescription:
        "Discover the best gaming laptops of 2025 with our expert reviews. Find top machines for performance, portability, and next-gen gaming experiences.",
      keywords: [
        "best gaming laptops 2025",
        "top gaming laptops",
        "Razer Blade Pro X review",
        "ASUS ROG Zephyrus G16 review",
        "Alienware m18 R2 review",
        "gaming laptop rankings",
        "high performance laptops 2025",
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
