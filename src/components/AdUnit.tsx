import Image from "next/image"

type AdSize = "banner" | "rectangle" | "leaderboard" | "skyscraper" | "sidebar"

interface AdUnitProps {
  size: AdSize
  className?: string
}

export default function AdUnit({ size, className = "" }: AdUnitProps) {
  // Define dimensions based on standard ad sizes
  const dimensions = {
    banner: { width: 468, height: 60, label: "Banner Ad" },
    rectangle: { width: 300, height: 250, label: "Rectangle Ad" },
    leaderboard: { width: 728, height: 90, label: "Leaderboard Ad" },
    skyscraper: { width: 160, height: 600, label: "Skyscraper Ad" },
    sidebar: { width: 160, height: 400, label: "Sidebar Ad" }, // New size that fits within viewport height
  }

  const { label } = dimensions[size]

  return (
    <div className={`ad-container relative ${className}`}>
      <div
        className="ad-unit relative overflow-hidden border border-gray-200 rounded-lg flex items-center justify-center"
      >
        <div className="absolute top-0 left-0 bg-gray-100 text-xs text-gray-500 px-2 py-1 rounded-br-lg">
          Advertisement
        </div>
        <div className="text-center p-4">
          <p className="font-bold text-gray-700">{label}</p>
          <p className="text-sm text-gray-600">Your ad could be here</p>
          <div className="mt-2 flex justify-center">
            <Image
              src="/abstract-geometric-shapes.png"
              alt="Ad placeholder"
              width={60}
              height={60}
              className="opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
