"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Biography() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="biography" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        className="max-w-4xl mx-auto p-8 backdrop-blur-md bg-white/10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6">Biography</h2>
        <motion.p
          className={`text-lg mb-4 ${expanded ? "" : "line-clamp-3"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Deepak SP's journey in mathematics began with a fascination for patterns and logic. From solving complex
          equations to exploring the intricacies of mathematical theories, his passion for the subject has only grown
          stronger over the years. As a lecturer at ST JOSEPH'S COLLEGE SHIVAMOGGA, Deepak is committed to inspiring the
          next generation of mathematicians and fostering a deep appreciation for the beauty of numbers.
        </motion.p>
        <motion.button
          className="text-blue-300 hover:text-blue-100 transition-colors"
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {expanded ? "Read Less" : "Read More"}
        </motion.button>
        <motion.blockquote
          className="text-xl italic my-8 p-4 border-l-4 border-blue-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." -
          William Paul Thurston
        </motion.blockquote>
      </motion.div>
    </section>
  )
}

