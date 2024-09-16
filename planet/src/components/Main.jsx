import React from 'react'
import { OrbitControls} from '@react-three/drei'
import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';




const Main = () => {



  return (
     <>
       <OrbitControls makeDefault />
        <mesh>
           <sphereGeometry args={[ 2, 64, 64]} />
           <shaderMaterial vertexShader={vertex} fragmentShader={fragment}/>
        </mesh>
     </>
  )
}

export default Main
