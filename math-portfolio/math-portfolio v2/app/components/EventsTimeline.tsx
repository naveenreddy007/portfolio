"use client"

import { motion } from "framer-motion"

const eventsData = [
  { type: "Conference", name: "International Congress of Mathematicians", year: "2022", role: "Speaker" },
  { type: "Workshop", name: "Advanced Algebraic Structures", year: "2021", role: "Conductor" },
  { type: "Seminar", name: "Emerging Trends in Computational Mathematics", year: "2020", role: "Panelist" },
]

export default function EventsTimeline() {
  return (
    <section id="events" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Events & Conferences</h2>
      <div className="max-w-4xl mx-auto">
        {eventsData.map((event, index) => (
          <motion.div
            key={index}
            className="mb-8 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-1/4 text-right pr-4">
              <p className="text-purple-400">{event.year}</p>
            </div>
            <div className="w-px h-full bg-purple-500 relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
            </div>
            <div className="w-3/4 pl-4">
              <h3 className="text-2xl font-semibold">{event.name}</h3>
              <p>{event.type}</p>
              <p className="text-purple-400">Role: {event.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

