import dynamic from "next/dynamic"
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

const DynamicNavigation = dynamic(() => import("./components/Navigation"), { ssr: false })
const DynamicCustomCursor = dynamic(() => import("./components/CustomCursor"), { ssr: false })
const DynamicBackgroundFormulas = dynamic(() => import("./components/BackgroundFormulas"), { ssr: false })

export default function MathPortfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      <DynamicBackgroundFormulas />
      <DynamicCustomCursor />
      <DynamicNavigation />
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

