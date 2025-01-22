"use client"

import { motion } from "framer-motion"

const experienceData = [
  {
    role: "Lecturer in Mathematics",
    institution: "ST JOSEPH'S COLLEGE SHIVAMOGGA",
    period: "2018 - Present",
    courses: ["Calculus", "Linear Algebra", "Number Theory"],
  },
  {
    role: "Research Assistant",
    institution: "Institute of Mathematical Sciences",
    period: "2016 - 2018",
    courses: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Professional Experience</h2>
      <div className="max-w-4xl mx-auto grid gap-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
            <p className="text-xl mb-2">{exp.institution}</p>
            <p className="text-purple-400 mb-4">{exp.period}</p>
            {exp.courses.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Courses Taught:</h4>
                <ul className="list-disc list-inside">
                  {exp.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

