import React, { useContext, useEffect, useRef } from 'react'
import { OrbitControls, Stars, useTexture} from '@react-three/drei'
import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import atmosphereVertex from '../shaders/atmosphere/vertex.glsl';
import atmosphereFramgent from '../shaders/atmosphere/fragment.glsl';
import { PlanetContext } from '../context/PlanetContext';
import gsap from 'gsap'



const Main = () => {

    // use context
    const { mercury, venus, mars, jupiter, saturn, uranus, neptune } = useContext(PlanetContext);



// load textures
const dayTexture = useTexture('./day.jpg');
dayTexture.colorSpace = THREE.SRGBColorSpace;
dayTexture.anisotropy = 8;

// mercury
const mercuryTexture = useTexture('./mercury.jpg');
mercuryTexture.colorSpace = THREE.SRGBColorSpace;
mercuryTexture.anisotropy = 8;

// venus
const venusTexture = useTexture('./venus.jpg');
venusTexture.colorSpace = THREE.SRGBColorSpace;
venusTexture.anisotropy = 8;

// mars
const marsTexture = useTexture('./mars.jpg');
marsTexture.colorSpace = THREE.SRGBColorSpace;
marsTexture.anisotropy = 8;

// jupiter
const jupiterTexture = useTexture('./jupiter.jpg');
jupiterTexture.colorSpace = THREE.SRGBColorSpace;
jupiterTexture.anisotropy = 8;

// saturn
const saturnTexture = useTexture('./saturn.jpg');
saturnTexture.colorSpace = THREE.SRGBColorSpace;
saturnTexture.anisotropy = 8;

// uranus
const uranTexture = useTexture('./uranus.jpg');
uranTexture.colorSpace = THREE.SRGBColorSpace;
uranTexture.anisotropy = 8;

// neptune
const neptuneTexture = useTexture('./neptune.jpg');
neptuneTexture.colorSpace = THREE.SRGBColorSpace;
neptuneTexture.anisotropy = 8;


const nightTexture = useTexture('./night.jpg');
nightTexture.colorSpace = THREE.SRGBColorSpace;
nightTexture.anisotropy = 8;
const cloudsTexture = useTexture('./clouds.jpg');
nightTexture.colorSpace = THREE.SRGBColorSpace;
nightTexture.anisotropy = 8;

// earth parameters
let atmosphereDayColor = '#00aaff';
let atmosphereTwilight = '#ff6600';



// uniforms
const uniforms = useRef({
    day: new THREE.Uniform( dayTexture),
    night: new THREE.Uniform(nightTexture),
    clouds: new THREE.Uniform(cloudsTexture),
    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(atmosphereDayColor)),
    uAtmosphereTwilight: new THREE.Uniform(new THREE.Color(atmosphereTwilight))
});

const AtmosphereUniforms = useRef({
    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(atmosphereDayColor)),
    uAtmosphereTwilight: new THREE.Uniform(new THREE.Color(atmosphereTwilight))
});



// rotate earth
let earth = useRef();

useFrame(() => {
    earth.current.rotation.y += 0.0004;
})

// change planet smoothly

useEffect(() => {
    if (earth.current) {
        gsap.set(earth.current.material, { opacity: 0 });
        gsap.to(earth.current.material, { opacity: 1, duration: 2, delay: 2 }); 
    }
}, [mercury, venus, mars, jupiter, saturn, uranus, neptune]);


  return (
     <>
     
       <OrbitControls makeDefault />

      

       {
  mercury ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={mercuryTexture} />
    </mesh>
  ) : venus ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={venusTexture} />
    </mesh>
  ) : mars ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={marsTexture} />
    </mesh>
  ) : jupiter ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={jupiterTexture} />
    </mesh>
  ) : saturn ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={saturnTexture} />
    </mesh>
  )  : uranus ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={uranTexture} />
    </mesh>
  ) : neptune ? (
    <mesh ref={earth} scale={1.3}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial map={neptuneTexture} />
    </mesh>
  )  : (
    <>
      <mesh ref={earth} scale={1.3}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms.current}
        />
      </mesh>
      <mesh scale={[1.04, 1.04, 1.04]}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          side={THREE.BackSide}
          transparent={true}
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFramgent}
          uniforms={AtmosphereUniforms.current}
        />
      </mesh>
    </>
  )
}

       

       
     </>
  )
}

export default Main
