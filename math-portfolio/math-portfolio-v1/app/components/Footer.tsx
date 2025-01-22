"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="w-full py-6 mt-12 border-t border-white/10 backdrop-blur-md bg-blue-900/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <motion.div className="flex items-center space-x-2 text-sm sm:text-base" whileHover={{ scale: 1.05 }}>
            <span>Developed with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>by</span>
            <a
              href="https://uscl.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 transition-colors font-semibold"
            >
              uscl.tech
            </a>
          </motion.div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  )
}

