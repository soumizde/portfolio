import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Uxr from './Uxr'

const UXResearch = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={2.5}>
            <Uxr scale={[0.5, 0.5, 0.5]}/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default UXResearch