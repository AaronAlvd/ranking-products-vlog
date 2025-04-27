"use client"

import { useEffect, useState } from "react"
import SocialShareButtons from "./SocialShareButtons"

interface FloatingSocialShareProps {
  url: string
  title: string
  description?: string
  image?: string
}

export default function FloatingSocialShare({ url, title, description, image }: FloatingSocialShareProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating share after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed left-4 top-1/3 z-40 hidden lg:block">
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100">
        <SocialShareButtons
          url={url}
          title={title}
          description={description}
          image={image}
          variant="vertical"
          size="sm"
        />
      </div>
    </div>
  )
}
