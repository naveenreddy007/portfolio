"use client"

import { motion } from "framer-motion"

const educationData = [
  { degree: "Bachelor's Degree", field: "Mathematics", year: "2010", institution: "University of Mathematics" },
  {
    degree: "Master's Degree",
    field: "Applied Mathematics",
    year: "2012",
    institution: "Institute of Advanced Mathematics",
  },
  { degree: "PhD", field: "Mathematical Physics", year: "2016", institution: "Global University of Sciences" },
]

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Educational Journey</h2>
      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-8 flex"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p>{edu.field}</p>
            </div>
            <div className="w-px bg-purple-500 relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0"></div>
            </div>
            <div className="w-1/2 pl-8">
              <p className="text-xl">{edu.institution}</p>
              <p className="text-purple-400">{edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

