"use client"

import { useEffect, useRef } from "react"
import {
  SquareFunctionIcon as FunctionSquareRoot,
  Sigma,
  Infinity,
  Pi,
  ActivityIcon as Function,
  Divide,
} from "lucide-react"

// Mathematical formulas including advanced concepts
const mathFormulas = [
  // Calculus
  "∫ f(x) dx",
  "lim[x→∞] f(x)",
  "∂f/∂x",
  // Linear Algebra
  "|A| = λ₁λ₂...λₙ",
  "A⁻¹A = I",
  // Trigonometry
  "sin²θ + cos²θ = 1",
  "tan θ = sin θ / cos θ",
  // Complex Analysis
  "e^(iπ) + 1 = 0",
  "z = x + yi",
  // Statistics
  "σ = √(Σ(x - μ)²/N)",
  "P(A|B) = P(A∩B)/P(B)",
  // Number Theory
  "n = p₁ᵏ¹p₂ᵏ²...pᵢᵏⁱ",
  "φ(n) = n(1-1/p₁)(1-1/p₂)...",
  // Differential Equations
  "dy/dx + P(x)y = Q(x)",
  "∇²ψ = 0",
]

const icons = [FunctionSquareRoot, Sigma, Infinity, Pi, Function, Divide]

interface Particle {
  x: number
  y: number
  speedX: number
  speedY: number
  type: "formula" | "icon"
  content: string | typeof FunctionSquareRoot
  size: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export default function BackgroundAnimations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = 30 // Total number of floating elements

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const isFormula = Math.random() > 0.3 // 70% formulas, 30% icons
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type: isFormula ? "formula" : "icon",
        content: isFormula
          ? mathFormulas[Math.floor(Math.random() * mathFormulas.length)]
          : icons[Math.floor(Math.random() * icons.length)],
        size: isFormula ? 16 : 24,
        opacity: Math.random() * 0.2 + 0.1, // Opacity between 0.1 and 0.3
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })
    }

    // Draw icon function
    const drawIcon = (
      ctx: CanvasRenderingContext2D,
      IconComponent: any,
      x: number,
      y: number,
      size: number,
      opacity: number,
      rotation: number,
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})` // Purple with custom opacity
      ctx.lineWidth = 2
      ctx.beginPath()

      // Simplified icon paths based on the component type
      switch (IconComponent) {
        case FunctionSquareRoot:
          ctx.moveTo(-size / 2, 0)
          ctx.lineTo(0, size / 2)
          ctx.lineTo(size / 2, -size / 2)
          break
        case Sigma:
          ctx.moveTo(-size / 2, -size / 2)
          ctx.lineTo(size / 2, -size / 2)
          ctx.lineTo(-size / 2, size / 2)
          ctx.lineTo(size / 2, size / 2)
          break
        case Pi:
          ctx.moveTo(-size / 2, -size / 2)
          ctx.lineTo(size / 2, -size / 2)
          ctx.moveTo(-size / 3, -size / 2)
          ctx.lineTo(-size / 3, size / 2)
          ctx.moveTo(size / 3, -size / 2)
          ctx.lineTo(size / 3, size / 2)
          break
        default:
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
      }

      ctx.stroke()
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        if (particle.type === "formula") {
          ctx.save()
          ctx.font = `${particle.size}px 'Times New Roman'`
          ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`
          ctx.translate(particle.x, particle.y)
          ctx.rotate(particle.rotation)
          ctx.fillText(particle.content as string, 0, 0)
          ctx.restore()
        } else {
          drawIcon(ctx, particle.content, particle.x, particle.y, particle.size, particle.opacity, particle.rotation)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animate)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ background: "transparent" }} />
  )
}

