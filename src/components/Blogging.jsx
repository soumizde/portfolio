import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Blog from './Blog'

const Blogging = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={2}>
            <Blog/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Blogging