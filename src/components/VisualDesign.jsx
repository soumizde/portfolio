import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Visual from './Visual'

const VisualDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={2.5}>
            <Visual/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default VisualDesign