import React, { useRef } from 'react'
import { OrbitControls, useTexture} from '@react-three/drei'
import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';
import { SRGBColorSpace } from 'three';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';




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

// rotate earth
let earth = useRef();

useFrame(() => {
    earth.current.rotation.y += 0.0005;
})


  return (
     <>
       <OrbitControls makeDefault />
        <mesh ref={earth}>
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
