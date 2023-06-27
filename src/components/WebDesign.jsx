import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Webdev from './Webdev'

const WebDev = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={2.5}>
          <Webdesign/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign