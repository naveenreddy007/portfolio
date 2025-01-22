"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"

const values = ["Integrity", "Passion", "Innovation", "Dedication"]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="mb-8 lg:mb-0 lg:mr-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://source.unsplash.com/random/400x400/?professor"
              alt="Deepak SP"
              width={400}
              height={400}
              className="rounded-full border-4 border-purple-500"
            />
          </motion.div>
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Deepak SP
            </motion.h1>
            <motion.h2
              className="text-2xl lg:text-3xl mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Lecturer in Mathematics
            </motion.h2>
            <motion.h3
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              ST JOSEPH'S COLLEGE SHIVAMOGGA
            </motion.h3>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <a
                href="tel:+917848987240"
                className="flex items-center justify-center hover:text-purple-400 transition-colors"
              >
                <FaPhone className="mr-2" />
                +91 7848987240
              </a>
              <a
                href="mailto:deepaksp1990@gmail.com"
                className="flex items-center justify-center hover:text-purple-400 transition-colors"
              >
                <FaEnvelope className="mr-2" />
                deepaksp1990@gmail.com
              </a>
              <a
                href="https://wa.me/917848987240"
                className="flex items-center justify-center hover:text-purple-400 transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

