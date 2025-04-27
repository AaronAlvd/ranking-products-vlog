"use client"

import Link from "next/link"
import SearchBar from "./SearchBar"
import { Menu } from "lucide-react"

interface DesktopHeaderProps {
  onOpenMenu: () => void
}

export default function DesktopHeader({ onOpenMenu }: DesktopHeaderProps) {
  return (
    <div className="hidden md:flex items-center justify-between w-full">
      <Link href="/" className="text-2xl font-bold">
        ProductRankings
      </Link>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchBar />
      </div>

      <button
        onClick={onOpenMenu}
        className="p-2 rounded-md hover:bg-blue-700 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </div>
  )
}
