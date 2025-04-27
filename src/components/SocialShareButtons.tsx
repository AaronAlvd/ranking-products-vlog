"use client"

import { useState } from "react"
import {
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  LinkIcon,
  Share2,
  Check,
  PinIcon as Pinterest,
  MessageCircle,
} from "lucide-react"

interface SocialShareButtonsProps {
  url: string
  title: string
  description?: string
  image?: string
  size?: "sm" | "md" | "lg"
  variant?: "horizontal" | "vertical" | "icons"
  className?: string
}

export default function SocialShareButtons({
  url,
  title,
  description = "",
  image = "",
  size = "md",
  variant = "horizontal",
  className = "",
}: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  // Use absolute URL if we're in the browser
  const fullUrl = typeof window !== "undefined" ? new URL(url, window.location.origin).toString() : url

  // Encoded values for sharing
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedImage = image ? encodeURIComponent(image) : ""

  // Share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`
  const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`

  // Button sizes
  const sizeClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  }

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  }

  // Copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // Layout classes
  const containerClasses =
    variant === "vertical" ? "flex flex-col gap-2" : variant === "icons" ? "flex gap-1" : "flex flex-wrap gap-2"

  return (
    <div className={`${containerClasses} ${className}`}>
      {variant !== "icons" && (
        <span className="text-gray-500 font-medium flex items-center">
          <Share2 size={iconSizes[size]} className="mr-2" /> Share:
        </span>
      )}

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center`}
        aria-label="Share on Twitter"
      >
        <Twitter size={iconSizes[size]} />
        {variant !== "icons" && <span className="ml-2">Twitter</span>}
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} rounded-full bg-[#1877F2] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center`}
        aria-label="Share on Facebook"
      >
        <Facebook size={iconSizes[size]} />
        {variant !== "icons" && <span className="ml-2">Facebook</span>}
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center`}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={iconSizes[size]} />
        {variant !== "icons" && <span className="ml-2">LinkedIn</span>}
      </a>

      <a
        href={pinterestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} rounded-full bg-[#E60023] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center`}
        aria-label="Share on Pinterest"
      >
        <Pinterest size={iconSizes[size]} />
        {variant !== "icons" && <span className="ml-2">Pinterest</span>}
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} rounded-full bg-[#25D366] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center`}
        aria-label="Share on WhatsApp"
      >
        <MessageCircle size={iconSizes[size]} />
        {variant !== "icons" && <span className="ml-2">WhatsApp</span>}
      </a>

      <a
        href={emailUrl}
        className={`${sizeClasses[size]} rounded-full bg-gray-600 text-white hover:bg-opacity-90 transition-colors flex items-center justify-center`}
        aria-label="Share via Email"
      >
        <Mail size={iconSizes[size]} />
        {variant !== "icons" && <span className="ml-2">Email</span>}
      </a>

      <button
        onClick={copyToClipboard}
        className={`${sizeClasses[size]} rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors flex items-center justify-center`}
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <Check size={iconSizes[size]} className="text-green-600" />
            {variant !== "icons" && <span className="ml-2">Copied!</span>}
          </>
        ) : (
          <>
            <LinkIcon size={iconSizes[size]} />
            {variant !== "icons" && <span className="ml-2">Copy Link</span>}
          </>
        )}
      </button>
    </div>
  )
}
