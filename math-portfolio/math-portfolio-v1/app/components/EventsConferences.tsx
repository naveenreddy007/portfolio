"use client"

import { motion } from "framer-motion"
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa"

const eventsData = [
  {
    title: "International Conference on Applied Mathematics",
    date: "September 15-17, 2023",
    location: "London, UK",
    role: "Keynote Speaker",
  },
  {
    title: "Workshop on Advanced Numerical Methods",
    date: "July 5-7, 2023",
    location: "Berlin, Germany",
    role: "Workshop Facilitator",
  },
  {
    title: "Symposium on Mathematical Modeling in Biology",
    date: "March 20-22, 2023",
    location: "Tokyo, Japan",
    role: "Panel Member",
  },
]

export default function EventsConferences() {
  return (
    <section id="events" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Events & Conferences</h2>
        <div className="space-y-8">
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <div className="flex items-center mb-2">
                <FaCalendar className="text-blue-300 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-blue-300 mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-300">{event.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

