"use client"

import { useState } from "react"
import ClientOnly from "./ClientOnly"
import MobileHeader from "./MobileHeader"
import DesktopHeader from "./DesktopHeader"
import { X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white py-4 relative">
      <div className="container mx-auto px-4">
        <ClientOnly>
          <MobileHeader onOpenMenu={() => setIsMenuOpen(true)} />
          <DesktopHeader onOpenMenu={() => setIsMenuOpen(true)} />
        </ClientOnly>
      </div>

      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="#"
              className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>

          <div className="mt-auto">
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} ProductRankings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
