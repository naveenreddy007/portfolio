"use client"

import { motion } from "framer-motion"

const researchData = [
  {
    title: "Advancements in Prime Number Theory",
    journal: "Journal of Number Theory",
    year: "2022",
    formula: "π(x) ~ x / ln(x)",
    value: "Innovation",
  },
  {
    title: "Applications of Chaos Theory in Climate Modeling",
    journal: "Mathematical and Computational Applications",
    year: "2021",
    formula: "dx/dt = σ(y - x), dy/dt = x(ρ - z) - y, dz/dt = xy - βz",
    value: "Integrity",
  },
  {
    title: "Novel Approaches to the Riemann Hypothesis",
    journal: "Annals of Mathematics",
    year: "2020",
    formula: "ζ(s) = ∑[n=1 to ∞] 1/n^s",
    value: "Passion",
  },
]

export default function Research() {
  return (
    <section id="research" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Research & Publications</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {researchData.map((research, index) => (
            <motion.div
              key={index}
              className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{research.title}</h3>
              <p className="mb-2">{research.journal}</p>
              <p className="text-purple-400 mb-2">{research.year}</p>
              <div className="mt-4 p-2 bg-purple-800 bg-opacity-50 rounded-md">
                <p className="text-center font-mono">{research.formula}</p>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block bg-purple-700 text-white px-3 py-1 rounded-full text-sm">
                  {research.value}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

