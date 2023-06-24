import React from 'react'
import { PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { Text } from '@react-three/drei'

const Cube = () => {
  return (
    <mesh>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial>
        <RenderTexture attach="map">
            <PerspectiveCamera
               makeDefault
               position={[0,0,2]}
           />
           <color attach="background" args={["pink"]}/>
           <Text fontSize={1} color="#555">
              Hello
           </Text>
       </RenderTexture>
     </meshStandardMaterial>
        
 </mesh>
  )
}

export default Cube