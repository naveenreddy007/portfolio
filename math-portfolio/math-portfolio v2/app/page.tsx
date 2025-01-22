"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Hero from "./components/Hero"
import Biography from "./components/Biography"
import EducationTimeline from "./components/EducationTimeline"
import Experience from "./components/Experience"
import Research from "./components/Research"
import Achievements from "./components/Achievements"
import EventsTimeline from "./components/EventsTimeline"
import Books from "./components/Books"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import BackgroundAnimations from "./components/BackgroundAnimations"
import CustomCursor from "./components/CustomCursor"

export default function MathPortfolio() {
  const [currentSection, setCurrentSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const sections = [
      "hero",
      "biography",
      "education",
      "experience",
      "research",
      "achievements",
      "events",
      "books",
      "contact",
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none" />
      <CustomCursor />
      <BackgroundAnimations />
      <Navigation currentSection={currentSection} />
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-purple-500 origin-left z-50" style={{ scaleX }} />
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <Hero />
          <Biography />
          <EducationTimeline />
          <Experience />
          <Research />
          <Achievements />
          <EventsTimeline />
          <Books />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

