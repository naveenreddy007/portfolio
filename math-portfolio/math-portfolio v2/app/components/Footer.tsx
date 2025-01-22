"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaResearchgate } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            className="w-full md:w-1/3 mb-4 md:mb-0 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://source.unsplash.com/random/80x80/?college,logo"
              alt="ST JOSEPH'S COLLEGE SHIVAMOGGA logo"
              width={80}
              height={80}
              className="mr-4 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Deepak SP</h3>
              <p>Lecturer in Mathematics</p>
              <p>ST JOSEPH'S COLLEGE SHIVAMOGGA</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#biography" className="hover:text-purple-400 transition-colors">
                  Biography
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-purple-400 transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-purple-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-purple-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.researchgate.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-purple-400 transition-colors"
              >
                <FaResearchgate />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {currentYear} Deepak SP. All rights reserved.</p>
          <p className="mt-2 text-sm text-purple-400">
            Website developed by Naveen Reddy |{" "}
            <a href="https://uscl.tech" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
              USCL.tech
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

