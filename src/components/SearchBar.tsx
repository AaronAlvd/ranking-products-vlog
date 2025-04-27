"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  autoFocus?: boolean
}

export default function SearchBar({ autoFocus = false }: SearchBarProps) {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize search query from URL when component mounts
  useEffect(() => {
    const query = searchParams.get("q")
    if (query) {
      setSearchQuery(query)
    }
  }, [searchParams])

  // Handle autofocus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      // Small delay to ensure the input is rendered and ready
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [autoFocus])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Use window.location for a full page navigation to ensure the server component re-renders
    if (searchQuery.trim()) {
      window.location.href = `/?q=${encodeURIComponent(searchQuery.trim())}`
    } else {
      window.location.href = "/"
    }
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInputClick = (e: React.MouseEvent) => {
    // Prevent event propagation to ensure the click doesn't trigger other handlers
    e.stopPropagation()
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search thousands of product reviews..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={handleInputClick}
        className="w-full py-2 pl-4 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
        style={{ zIndex: 10 }} // Ensure input is above other elements
      />
      {searchQuery ? (
        <button
          type="button"
          onClick={handleClearSearch}
          className="absolute inset-y-0 right-10 flex items-center px-2 text-gray-500 hover:text-blue-600"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      ) : null}
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600"
        aria-label="Search"
      >
        <Search size={18} />
      </button>
    </form>
  )
}
