"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-2" />
                <span>deepaksp1990@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-300 mr-2" />
                <span>7848987240</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-300 mr-2" />
                <span>ST JOSEPH'S COLLEGE SHIVAMOGGA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

