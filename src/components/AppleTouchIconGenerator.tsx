"use client"

import { useEffect, useRef } from "react"

// This component is just for demonstration purposes
// In a real project, you would create the icon in a design tool
export default function AppleTouchIconGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 180
    canvas.height = 180

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 180, 180)
    gradient.addColorStop(0, "#3b82f6") // blue-500
    gradient.addColorStop(1, "#1e40af") // blue-800
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 180, 180)

    // Add text
    ctx.fillStyle = "white"
    ctx.font = "bold 60px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("PR", 90, 90)

    // Add border
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
    ctx.lineWidth = 8
    ctx.strokeRect(10, 10, 160, 160)

    // Download link for the generated icon
    const downloadLink = document.getElementById("download-icon") as HTMLAnchorElement
    if (downloadLink) {
      downloadLink.href = canvas.toDataURL("image/png")
    }
  }, [])

  return (
    <div className="hidden">
      <canvas ref={canvasRef} width="180" height="180"></canvas>
      <a id="download-icon" download="apple-touch-icon.png">
        Download Icon
      </a>
    </div>
  )
}
