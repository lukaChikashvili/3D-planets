import React, { useRef } from 'react'
import { OrbitControls, useTexture} from '@react-three/drei'
import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';
import { SRGBColorSpace } from 'three';
import * as THREE from 'three'




const Main = () => {

// load textures
const dayTexture = useTexture('./day.jpg');
dayTexture.colorSpace = THREE.SRGBColorSpace;
const nightTexture = useTexture('./night.jpg');
nightTexture.colorSpace = THREE.SRGBColorSpace;


// uniforms
const uniforms = useRef({
    day: new THREE.Uniform(dayTexture),
    night: new THREE.Uniform(nightTexture)
});


  return (
     <>
       <OrbitControls makeDefault />
        <mesh>
           <sphereGeometry args={[ 2, 64, 64]} />
           <shaderMaterial 
            vertexShader={vertex}
            fragmentShader={fragment}
            uniforms={uniforms.current} 
            />
        </mesh>
     </>
  )
}

export default Main
