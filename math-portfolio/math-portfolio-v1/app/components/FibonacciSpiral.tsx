"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function FibonacciSpiral() {
  const spiralRef = useRef<THREE.Line>(null)

  useFrame(() => {
    if (spiralRef.current) {
      spiralRef.current.rotation.x += 0.001
      spiralRef.current.rotation.y += 0.002
    }
  })

  const points = []
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  for (let i = 0; i < 1000; i++) {
    const t = i / 100
    const x = Math.cos((2 * Math.PI * t) / goldenRatio) * t
    const y = Math.sin((2 * Math.PI * t) / goldenRatio) * t
    const z = t / 10
    points.push(new THREE.Vector3(x, y, z))
  }

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line ref={spiralRef} geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#4B0082" linewidth={2} />
    </line>
  )
}

