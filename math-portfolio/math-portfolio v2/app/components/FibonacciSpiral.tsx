"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"

export default function FibonacciSpiral() {
  const spiralRef = useRef()

  useFrame((state) => {
    if (spiralRef.current) {
      spiralRef.current.rotation.z += 0.001
    }
  })

  const points = []
  let a = 0
  let b = 1
  for (let i = 0; i < 100; i++) {
    const angle = 0.1 * i
    const x = (a / 10) * Math.cos(angle)
    const y = (a / 10) * Math.sin(angle)
    points.push([x, y, 0])
    const temp = a + b
    a = b
    b = temp
  }

  return (
    <group ref={spiralRef}>
      <Line points={points} color="purple" lineWidth={2} />
    </group>
  )
}

