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
  `  : mars ? `
  Interestingly, while Mars is about half the diameter of Earth, its surface has nearly the same area as Earth’s dry land. Its volcanoes, impact craters, crustal movement, and atmospheric conditions such as dust storms have altered the landscape of Mars over many years, creating some of the solar system's most interesting topographical features.
     
  ` :  jupiter ? `
  As a gas giant, Jupiter doesn’t have a true surface. The planet is mostly swirling gases and liquids. While a spacecraft would have nowhere to land on Jupiter, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt, and vaporize spacecraft trying to fly into the planet.
  
  ` : saturn ? `
  
  As a gas giant, Saturn doesn’t have a true surface. The planet is mostly swirling gases and liquids deeper down. While a spacecraft would have nowhere to land on Saturn, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet would crush, melt, and vaporize any spacecraft trying to fly into the planet.
  ` : uranus ? `
  As an ice giant, Uranus doesn’t have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land on Uranus, it wouldn’t be able to fly through its atmosphere unscathed either. The extreme pressures and temperatures would destroy a metal spacecraft.



  ` : neptune ? `
  Neptune does not have a solid surface. Its atmosphere (made up mostly of hydrogen, helium, and methane) extends to great depths, gradually merging into water and other melted ices over a heavier, solid core with about the same mass as Earth.
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

`  : mars ? `
The Red Planet is actually many colors. At the surface, we see colors such as brown, gold, and tan. The reason Mars looks reddish is due to oxidization – or rusting – of iron in the rocks, regolith (Martian “soil”), and dust of Mars. This dust gets kicked up into the atmosphere and from a distance makes the planet appear mostly red.
     
` :  jupiter ? `
Deeper down, Jupiter's central core had long been a mystery. Scientists theorized Jupiter was a mostly homogeneous mix of hydrogen and helium gases, surrounding a small, solid core of heavier elements – ice, rock, and metal formed from debris and small objects swirling around that area of the embryonic solar system 4 billion years ago.

` : saturn ? `

Saturn is blanketed with clouds that appear as faint stripes, jet streams, and storms. The planet is many different shades of yellow, brown, and gray.

Winds in the upper atmosphere reach 1,600 feet per second (500 meters per second) in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 360 feet per second (110 meters per second). And the pressure – the same kind you feel when you dive deep underwater – is so powerful it squeezes gas into a liquid.
` : uranus ? `

Uranus has an unusual, irregularly shaped magnetosphere. Magnetic fields are typically in alignment with a planet's rotation, but Uranus' magnetic field is tipped over: the magnetic axis is tilted nearly 60 degrees from the planet's axis of rotation, and is also offset from the center of the planet by one-third of the planet's radius.

Uranus has auroras, but they are not in line with the poles like they are on Earth, Jupiter, and Saturn. This is due to the planet's lopsided magnetic field.

The magnetosphere tail behind Uranus opposite the Sun extends into space for millions of miles. Its magnetic field lines are twisted by Uranus’ sideways rotation into a long corkscrew shape.
` : neptune ? `
The main axis of Neptune's magnetic field is tipped over by about 47 degrees compared with the planet's rotation axis. Like Uranus, whose magnetic axis is tilted about 60 degrees from the axis of rotation, Neptune's magnetosphere undergoes wild variations during each rotation because of this misalignment. The magnetic field of Neptune is about 27 times more powerful than that of Earth.
` : `Earth's global ocean, which covers nearly 70% of the planet's surface, 
has an average depth of about 2.5 miles (4 kilometers) and contains 97% of Earth's water.
 Almost all of Earth's volcanoes are hidden under these oceans. Hawaii's Mauna Kea volcano is taller from base to summit than Mount Everest, but most of it is underwater. Earth's longest mountain range is also underwater, at the bottom of the Arctic and Atlantic oceans. It is four times longer than the Andes,
 Rockies and Himalayas combined.`}
</p>
  </div>
  )
}

export default SurfacePage
