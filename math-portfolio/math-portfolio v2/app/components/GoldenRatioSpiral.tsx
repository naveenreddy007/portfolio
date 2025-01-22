"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"

const PHI = (1 + Math.sqrt(5)) / 2

export default function GoldenRatioSpiral() {
  const spiralRef = useRef()

  useFrame((state) => {
    if (spiralRef.current) {
      spiralRef.current.rotation.z += 0.001
    }
  })

  const points = []
  for (let i = 0; i < 200; i++) {
    const angle = 0.1 * i
    const x = Math.pow(PHI, (2 * angle) / Math.PI) * Math.cos(angle)
    const y = Math.pow(PHI, (2 * angle) / Math.PI) * Math.sin(angle)
    points.push([x / 10, y / 10, 0])
  }

  return (
    <group ref={spiralRef}>
      <Line points={points} color="gold" lineWidth={2} />
    </group>
  )
}

