"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const values = [
  { name: "Integrity", description: "Upholding the highest standards of academic honesty and ethical research." },
  {
    name: "Passion",
    description: "Demonstrating enthusiasm for mathematics and inspiring students to explore its beauty.",
  },
  { name: "Innovation", description: "Continuously seeking new ways to explain complex concepts and engage learners." },
  {
    name: "Dedication",
    description: "Committed to the success and growth of every student in their mathematical journey.",
  },
]

export default function Biography() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="biography" className="py-20">
      <motion.div
        className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0 md:mr-8"
          >
            <Image
              src="https://source.unsplash.com/random/300x300/?mathematics,classroom"
              alt="Deepak SP in his office"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Biography</h2>
            <motion.p
              className={`mb-4 ${expanded ? "" : "line-clamp-3"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              As a passionate mathematician and dedicated educator, I have devoted my career to unraveling the mysteries
              of numbers and sharing that knowledge with the next generation. My journey in mathematics began with a
              fascination for patterns and logic, which eventually led me to pursue advanced studies in the field.
            </motion.p>
            {expanded && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <p className="mb-4">
                  Throughout my academic and professional career, I have strived to bridge the gap between complex
                  mathematical concepts and practical applications, making the subject more accessible and engaging for
                  my students.
                </p>
                <h3 className="text-2xl font-semibold mb-2">What inspired me to pursue mathematics</h3>
                <p className="mb-4">
                  My inspiration to pursue mathematics came from a profound realization of its universal language and
                  its ability to describe the world around us. From the golden ratio in nature to the algorithms
                  powering our digital world, mathematics has always been the key to unlocking the secrets of the
                  universe.
                </p>
              </motion.div>
            )}
            <button
              className="text-purple-400 hover:text-purple-300 transition-colors"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4">My Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              className="bg-purple-800 bg-opacity-50 p-4 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-2">{value.name}</h4>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.blockquote
          className="mt-6 border-l-4 border-purple-500 pl-4 italic"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          "Pure mathematics is, in its way, the poetry of logical ideas." - Albert Einstein
        </motion.blockquote>
      </motion.div>
    </section>
  )
}

