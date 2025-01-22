"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const equations = [
  "E = mc²",
  "F = ma",
  "a² + b² = c²",
  "∫ f(x) dx",
  "∇ × F = 0",
  "i² = -1",
  "e^(iπ) + 1 = 0",
  "P(A|B) = P(B|A)P(A) / P(B)",
  "lim(x→∞) (1 + 1/x)^x = e",
  "dx/dt = f(x,t)",
  "y = wx + b", // Basic neural network equation
  "σ(z) = 1 / (1 + e^(-z))", // Sigmoid activation function
  "ReLU(x) = max(0, x)", // ReLU activation function
  "L = ∑(y - ŷ)²", // Mean squared error loss function
  "∇θJ(θ)", // Gradient descent
  "P(x) = softmax(x)", // Softmax function
  "H = -∑ p(x) log p(x)", // Entropy
  "I(X;Y) = H(X) - H(X|Y)", // Mutual information
  "Q(s,a) = r + γ max Q(s',a')", // Q-learning update rule
  "A = tanh(WX + b)", // Hyperbolic tangent in neural networks
]

function randomPosition() {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
  }
}

export default function BackgroundAnimations() {
  const [elements, setElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newElements = equations.map((equation, i) => {
      const position = randomPosition()
      return (
        <motion.div
          key={i}
          className="absolute text-white/10 text-base sm:text-lg md:text-xl lg:text-2xl font-serif select-none"
          initial={position}
          animate={{
            x: [position.x + "vw", ((position.x + 30) % 100) + "vw"],
            y: [position.y + "vh", ((position.y + 30) % 100) + "vh"],
          }}
          transition={{
            duration: 60 + Math.random() * 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {equation}
        </motion.div>
      )
    })

    setElements(newElements)
  }, [])

  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">{elements}</div>
}

