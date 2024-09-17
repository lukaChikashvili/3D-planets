import React from 'react'
import { Canvas } from '@react-three/fiber'
import Main from './Main'
import Lights from './Lights'
import Moon from './Moon'
import InterFace from './InterFace'

const CanvasPage = () => {
  return (
  <>
   <Canvas>
        <Main />
        <Moon />
   </Canvas>

   <div className='interface'>
      <InterFace />
   </div>
  </>
  )
}

export default CanvasPage
