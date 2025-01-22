"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaSearch, FaBook, FaChartLine } from "react-icons/fa"

const publicationsData = [
  {
    title: "Novel Approaches in Computational Fluid Dynamics",
    journal: "Journal of Applied Mathematics",
    year: 2022,
    citations: 15,
    impact: 3.8,
  },
  {
    title: "Machine Learning Algorithms for Predictive Modeling in Finance",
    journal: "International Journal of Mathematical Finance",
    year: 2021,
    citations: 22,
    impact: 4.2,
  },
  {
    title: "Optimization Techniques in Network Analysis",
    journal: "Discrete Mathematics and Applications",
    year: 2020,
    citations: 18,
    impact: 3.5,
  },
]

export default function ResearchPublications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="research" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Research & Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <FaBook className="text-4xl text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-300 mb-2">
                {pub.journal}, {pub.year}
              </p>
              {expandedIndex === index && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <div className="flex items-center mt-4">
                    <FaSearch className="text-blue-300 mr-2" />
                    <span>Citations: {pub.citations}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaChartLine className="text-blue-300 mr-2" />
                    <span>Impact Factor: {pub.impact}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

