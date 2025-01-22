"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    year: 2012,
    degree: "Bachelor's Degree in Mathematics",
    institution: "University of Mysore",
  },
  {
    year: 2014,
    degree: "Master's Degree in Applied Mathematics",
    institution: "Kuvempu University",
  },
  {
    year: 2016,
    degree: "Ph.D. in Mathematical Modeling",
    institution: "Indian Institute of Science",
  },
]

export default function EducationTimeline() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Educational Journey</h2>
        <div className="relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 flex"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 w-24 text-right mr-8">
                <span className="text-blue-300 font-bold">{edu.year}</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-blue-300 pl-8 relative">
                <div className="absolute w-4 h-4 bg-blue-300 rounded-full -left-2 top-0"></div>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-300">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

