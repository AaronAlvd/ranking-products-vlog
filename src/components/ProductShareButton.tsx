"use client"

import { useState } from "react"
import { Share2, X } from "lucide-react"
import SocialShareButtons from "./SocialShareButtons"

interface ProductShareButtonProps {
  url: string
  title: string
  productName: string
  image?: string
}

export default function ProductShareButton({ url, title, productName, image }: ProductShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const productTitle = `${title} - ${productName}`
  const productUrl = `${url}#${productName.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        aria-label={isOpen ? "Close share menu" : "Share this product"}
      >
        {isOpen ? <X size={18} /> : <Share2 size={18} />}
        <span>{isOpen ? "Close" : "Share"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 bg-white p-3 rounded-lg shadow-lg border border-gray-200 z-10 w-72">
          <div className="mb-2 pb-2 border-b border-gray-100">
            <h4 className="font-medium text-gray-800">Share this product</h4>
          </div>
          <SocialShareButtons url={productUrl} title={productTitle} image={image} variant="icons" size="sm" />
        </div>
      )}
    </div>
  )
}
