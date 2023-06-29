import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Uid from './Uid'

const VisualDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={2.5}>
          <Uid/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default VisualDesign