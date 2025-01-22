"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function MobileNav({ isOpen, onClose, navItems, currentSection }) {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 z-50 lg:hidden"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow flex items-center justify-center">
          <ul className="text-center">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  className={`text-2xl ${
                    currentSection === item.id ? "text-purple-500" : "text-white hover:text-purple-300"
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}

