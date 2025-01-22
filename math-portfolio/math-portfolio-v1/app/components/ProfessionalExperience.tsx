"use client"

import { motion } from "framer-motion"
import { FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa"

const experienceData = [
  {
    role: "Lecturer in Mathematics",
    institution: "ST JOSEPH'S COLLEGE SHIVAMOGGA",
    duration: "2018 - Present",
    responsibilities: [
      "Teaching advanced mathematics courses",
      "Conducting research in applied mathematics",
      "Mentoring students in mathematical projects",
    ],
  },
  {
    role: "Assistant Professor",
    institution: "City College, Bangalore",
    duration: "2016 - 2018",
    responsibilities: [
      "Taught undergraduate mathematics courses",
      "Developed curriculum for new math programs",
      "Organized mathematics workshops and seminars",
    ],
  },
]

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-blue-300 mb-4">{exp.institution}</p>
              <p className="text-gray-300 mb-4">{exp.duration}</p>
              <ul className="list-none space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-center">
                    {i === 0 && <FaChalkboardTeacher className="mr-2 text-blue-300" />}
                    {i === 1 && <FaBook className="mr-2 text-blue-300" />}
                    {i === 2 && <FaUsers className="mr-2 text-blue-300" />}
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

