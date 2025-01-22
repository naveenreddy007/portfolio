"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const formulas = [
  "∫ f(x) dx",
  "E = mc²",
  "eiπ + 1 = 0",
  "∇ × F = 0",
  "P(A|B) = P(B|A)P(A) / P(B)",
  "f(x) = ax² + bx + c",
  "lim[x→∞] (1 + 1/x)ˣ = e",
  "∑[n=1 to ∞] 1/n² = π²/6",
]

interface Formula {
  id: number
  text: string
  x: number
  y: number
}

export default function BackgroundFormulas() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [formulaElements, setFormulaElements] = useState<Formula[]>([])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (windowSize.width === 0 || windowSize.height === 0) return

    const newFormulas = formulas.map((formula, index) => ({
      id: index,
      text: formula,
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
    }))
    setFormulaElements(newFormulas)
  }, [windowSize])

  if (formulaElements.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {formulaElements.map((formula) => (
        <motion.div
          key={formula.id}
          className="absolute text-purple-300 opacity-20 text-lg md:text-xl lg:text-2xl"
          initial={{ x: formula.x, y: formula.y }}
          animate={{
            x: [formula.x - 50, formula.x + 50, formula.x],
            y: [formula.y - 50, formula.y + 50, formula.y],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {formula.text}
        </motion.div>
      ))}
    </div>
  )
}

