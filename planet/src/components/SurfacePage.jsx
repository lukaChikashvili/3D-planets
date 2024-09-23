import React, { useContext, useEffect } from 'react'
import gsap from 'gsap';
import { PlanetContext } from '../context/PlanetContext';


const SurfacePage = () => {

  const { surface, mercury, venus, mars, jupiter, saturn, uranus, neptune  } = useContext(PlanetContext);

   
  // animate intro page
  useEffect(() => {
      if (surface) {
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
  
  }, [surface]);

  return (
    <div className='intro-page surface-page'>
    <h1 style={{opacity: 0}}>Surface</h1>

<span style={{opacity: 0}} className='line intro-line'></span>

<p style={{opacity: 0}}>

{ mercury ? 
`
Mercury's surface resembles that of Earth's Moon, scarred by many impact craters resulting from collisions with meteoroids and comets. Craters and features on Mercury are named after famous deceased artists, musicians, or authors, including children's author Dr. Seuss and dance pioneer Alvin Ailey.
` :  
  venus ? `
  If we could slice Venus and Earth in half, pole to pole, and place them side by side,
   they would look remarkably similar. Each planet has an iron core enveloped by a hot-rock mantle; the thinnest of skins forms a rocky, exterior crust. On both planets, this thin skin changes form and sometimes erupts into volcanoes in response to the ebb and
   flow of heat and pressure deep beneath.
  ` :
`Like Mars and Venus, Earth has volcanoes, mountains, and valleys.
 Earth's lithosphere, which includes the crust (both continental and oceanic) and the upper mantle, 
 is divided into huge plates that are constantly moving. For example, the North American plate moves west over the Pacific Ocean basin, roughly at a rate equal to the growth of our fingernails. Earthquakes result when plates grind past one another, ride up over one another,
 collide to make mountains, or split and separate.`}
</p>
<p style={{opacity: 0}}>
{ mercury ? `
Very large impact basins, including Caloris (960 miles or 1,550 kilometers in diameter) and Rachmaninoff (190 miles, or 306 kilometers in diameter), were created by asteroid impacts on the planet's surface early in the solar system's history. While there are large areas of smooth terrain, there are also cliffs, some hundreds of miles long and soaring up to a mile high. They rose as the planet's interior cooled and contracted over the billions of years since Mercury formed.
`  :  venus ? `
On Earth, the slow movement of continents over thousands and millions of years reshapes the surface, a process known as “plate tectonics.” Something similar might have happened on Venus early in its history. Today a key element of this process could be operating: subduction, or the sliding of one continental “plate” beneath another, which can also trigger volcanoes. Subduction is believed to be the first step in creating plate tectonics.

` : `Earth's global ocean, which covers nearly 70% of the planet's surface, 
has an average depth of about 2.5 miles (4 kilometers) and contains 97% of Earth's water.
 Almost all of Earth's volcanoes are hidden under these oceans. Hawaii's Mauna Kea volcano is taller from base to summit than Mount Everest, but most of it is underwater. Earth's longest mountain range is also underwater, at the bottom of the Arctic and Atlantic oceans. It is four times longer than the Andes,
 Rockies and Himalayas combined.`}
</p>
  </div>
  )
}

export default SurfacePage
