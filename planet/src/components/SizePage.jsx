import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';

const SizePage = () => {

    const { size,  } = useContext(PlanetContext);

   
    // animate intro page
    useEffect(() => {
        if (size) {
            // Animate in
            gsap.to('.intro-page h1', {
                opacity: 1,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 2,
                delay: 1.4,
                ease: "power2.inOut",
            });
    
            gsap.to('.intro-line', {
                opacity: 1,
                width: "400px",
                duration: 1.2,
                delay: 0.5,
                ease: "power2.inOut",
            });
    
            gsap.to('.intro-page p', {
                opacity: 1,
                duration: 2,
                delay: 1.4,
                ease: "power2.inOut",
            });
        } else {
     
            gsap.to('.intro-page h1', {
                opacity: 0,
                duration: 2, 
                delay: 0.5, 
                ease: "power2.inOut",
            });
    
            gsap.to('.intro-line', {
                opacity: 0,
                width: "0px",  
                duration: 1.5,
                delay: 0.5,    
                ease: "power2.inOut",
            });
    
            gsap.to('.intro-page p', {
                opacity: 0,
                duration: 2, 
                delay: 0.5,  
                ease: "power2.inOut",
            });
        }
    
    }, [size]);
    





  return (
    <div className='intro-page size-page'>
      <h1 style={{opacity: 0}}>Size & shape</h1>

<span style={{opacity: 0}} className='line intro-line'></span>

<p style={{opacity: 0}}>

Earth has a rounded shape, 
through hydrostatic equilibrium, with an average diameter of 12,742 kilometres (7,918 mi),
 making it the fifth largest planetary sized and largest terrestrial object of the Solar System.
 </p>
 <p style={{opacity: 0}}>
 To measure the local variation of Earth's topography, geodesy employs an idealized 
 Earth producing a shape called a geoid. Such a geoid shape is gained if the ocean is idealized,
  covering Earth completely and without any perturbations such as tides and winds. 
  The result is a smooth but gravitational irregular geoid surface, providing a mean sea level (MSL) 
 as a reference level for topographic measurements
 </p>
    </div>
  )
}

export default SizePage
