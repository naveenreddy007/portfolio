"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import MobileNav from "./MobileNav"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "biography", label: "Biography" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "achievements", label: "Achievements" },
  { id: "events", label: "Events" },
  { id: "books", label: "Books" },
  { id: "contact", label: "Contact" },
]

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setCurrentSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 right-0 h-screen flex items-center z-40 hidden lg:flex">
        <motion.ul
          className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-l-lg p-4"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <motion.li key={item.id} className="mb-4">
              <a
                href={`#${item.id}`}
                className={`block p-2 rounded-md transition-colors ${
                  currentSection === item.id ? "bg-purple-500 text-white" : "text-purple-300 hover:bg-purple-800"
                }`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      <button
        className="fixed top-4 right-4 z-50 lg:hidden bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg p-2 rounded-md"
        onClick={() => setMobileNavOpen(true)}
      >
        <Menu className="text-white" />
      </button>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navItems={navItems}
        currentSection={currentSection}
      />
    </>
  )
}

