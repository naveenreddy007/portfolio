"use client"

import { motion } from "framer-motion"

const achievementsData = [
  { title: "Best Mathematics Lecturer Award", year: "2022" },
  { title: "Published in Nature Mathematics", year: "2021" },
  { title: "Research Grant for Advanced Number Theory", year: "2020" },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Achievements</h2>
      <div className="max-w-4xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-purple-400">{achievement.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

