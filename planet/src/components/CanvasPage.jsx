import React from 'react'
import { Canvas } from '@react-three/fiber'
import Main from './Main'
import Lights from './Lights'
import Moon from './Moon'

const CanvasPage = () => {
  return (
  <>
   <Canvas>
        <Main />
        <Moon />
   </Canvas>

   <div className='interface'>
     sfsfsf
   </div>
  </>
  )
}

export default CanvasPage
