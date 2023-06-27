import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Lantern from './Lantern'

const Blogging = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={2.5}>
            <Lantern/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Blogging