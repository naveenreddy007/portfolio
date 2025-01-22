"use client"

import { motion } from "framer-motion"
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa"

const achievementsData = [
  {
    title: "Best Mathematics Educator Award",
    year: 2022,
    description: "Awarded by the State Education Board for innovative teaching methods",
    icon: FaTrophy,
  },
  {
    title: "Research Excellence Medal",
    year: 2021,
    description: "Received for groundbreaking work in applied mathematics",
    icon: FaMedal,
  },
  {
    title: "Advanced Pedagogy Certification",
    year: 2020,
    description: "Completed an intensive course on modern teaching techniques",
    icon: FaCertificate,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <achievement.icon className="text-4xl text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-300 mb-2">{achievement.year}</p>
              <p className="text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

