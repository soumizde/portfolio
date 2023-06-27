import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Uxrboard from './Uxrboard'

const UXResearch = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={2.5}>
            <Uxrboard/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default UXResearch