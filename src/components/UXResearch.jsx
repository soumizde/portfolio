import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Uxr from './Uxr'

const UXResearch = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={2.5}>
            <Uxr/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default UXResearch