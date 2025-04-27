"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Menu, Search, X } from "lucide-react"

interface MobileHeaderProps {
  onOpenMenu: () => void
}

export default function MobileHeader({ onOpenMenu }: MobileHeaderProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  // Reset search expanded state when component unmounts or on page navigation
  useEffect(() => {
    return () => {
      setIsSearchExpanded(false)
    }
  }, [])

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSearchExpanded(true)
  }

  return (
    <div className="flex items-center justify-between w-full md:hidden">
      {!isSearchExpanded ? (
        <>
          <Link href="/" className="text-2xl font-bold">
            ProductRankings
          </Link>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleSearchClick}
              className="p-2 rounded-md hover:bg-blue-700 transition-colors"
              aria-label="Open search"
            >
              <Search size={24} />
            </button>
            <button
              onClick={onOpenMenu}
              className="p-2 rounded-md hover:bg-blue-700 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </>
      ) : (
        <div className="w-full flex items-center" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setIsSearchExpanded(false)} className="mr-3 text-white" aria-label="Close search">
            <X size={24} />
          </button>
          <div className="flex-grow" onClick={(e) => e.stopPropagation()}>
            <SearchBar autoFocus={true} />
          </div>
        </div>
      )}
    </div>
  )
}
