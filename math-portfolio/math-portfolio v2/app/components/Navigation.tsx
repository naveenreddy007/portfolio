"use client"

import { motion } from "framer-motion"

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

export default function Navigation({ currentSection }) {
  return (
    <nav className="fixed top-0 right-0 h-screen flex items-center z-50">
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
  )
}

