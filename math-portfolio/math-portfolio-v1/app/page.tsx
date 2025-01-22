"use client"

import { motion } from "framer-motion"
import Hero from "./components/Hero"
import Biography from "./components/Biography"
import EducationTimeline from "./components/EducationTimeline"
import ProfessionalExperience from "./components/ProfessionalExperience"
import ResearchPublications from "./components/ResearchPublications"
import Achievements from "./components/Achievements"
import EventsConferences from "./components/EventsConferences"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import BackgroundAnimations from "./components/BackgroundAnimations"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.pageYOffset
      setScrollProgress(currentScroll / totalScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundAnimations />
      <div className="relative z-10">
        <Navigation progress={scrollProgress} />
        <section id="home" className="mb-12 sm:mb-16 md:mb-20">
          <Hero />
        </section>
        <section id="biography" className="mb-12 sm:mb-16 md:mb-20">
          <Biography />
        </section>
        <section id="education" className="mb-12 sm:mb-16 md:mb-20">
          <EducationTimeline />
        </section>
        <section id="experience" className="mb-12 sm:mb-16 md:mb-20">
          <ProfessionalExperience />
        </section>
        <section id="research" className="mb-12 sm:mb-16 md:mb-20">
          <ResearchPublications />
        </section>
        <section id="achievements" className="mb-12 sm:mb-16 md:mb-20">
          <Achievements />
        </section>
        <section id="events" className="mb-12 sm:mb-16 md:mb-20">
          <EventsConferences />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </motion.main>
  )
}

