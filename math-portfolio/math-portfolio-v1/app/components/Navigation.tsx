"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Biography", href: "#biography" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Achievements", href: "#achievements" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation({ progress }: { progress: number }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-blue-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-white font-bold text-xl" onClick={(e) => handleClick(e, "#home")}>
              Deepak SP
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-blue-500" style={{ width: `${progress * 100}%` }} />
    </motion.nav>
  )
}

