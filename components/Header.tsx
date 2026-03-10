"use client"

import { MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    setMounted(true)

    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      )
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <header className="max-w-[640px] mx-auto md:mt-12 mt-3 px-3">
      <div className="flex justify-between items-center px-4 py-5 md:py-3 rounded-full
                      bg-white border border-neutral-200
                      dark:bg-neutral-800/70 dark:border-neutral-900">

        <div className="flex items-center gap-1.5 text-[13.5px] font-medium
                        text-neutral-500 dark:text-neutral-400">
          <MapPin size={16} strokeWidth={2.5}/>
          <span>Zurich, Switzerland</span>
        </div>

        <div className="flex items-center gap-2 text-[13px] font-medium
                        text-neutral-500 dark:text-neutral-400 tabular-nums">
          <span>{time}</span>
          <ThemeToggle />
        </div>

      </div>
    </header>
  )
}