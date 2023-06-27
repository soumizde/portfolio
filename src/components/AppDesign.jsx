import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Appdev from './Appdev'

const AppDesign = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={2.5}>
        <Appdev/>
    </Stage>
    <OrbitControls enableZoom={false}/>
</Canvas>
  )
}

export default AppDesign