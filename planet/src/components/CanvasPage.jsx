import React from 'react'
import { Canvas } from '@react-three/fiber'
import Main from './Main'
import Lights from './Lights'

const CanvasPage = () => {
  return (
  <>
   <Canvas>
        <Main />
        <Lights />
   </Canvas>
  </>
  )
}

export default CanvasPage
