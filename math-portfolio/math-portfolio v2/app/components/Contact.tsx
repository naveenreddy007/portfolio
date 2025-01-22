"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a href="tel:+917848987240" className="flex items-center text-lg hover:text-purple-400 transition-colors">
                <FaPhone className="mr-4" />
                +91 7848987240
              </a>
              <a
                href="mailto:deepaksp1990@gmail.com"
                className="flex items-center text-lg hover:text-purple-400 transition-colors"
              >
                <FaEnvelope className="mr-4" />
                deepaksp1990@gmail.com
              </a>
              <a
                href="https://wa.me/917848987240"
                className="flex items-center text-lg hover:text-purple-400 transition-colors"
              >
                <FaWhatsapp className="mr-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-purple-800 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-purple-800 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-purple-800 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

