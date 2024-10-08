import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';

const SizePage = () => {

    const { size, mercury, venus, mars, jupiter, saturn, uranus, neptune } = useContext(PlanetContext);

   
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
{
   mercury ? `
   With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry.

From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.

   `  : venus ? `
   Venus orbits the Sun from an average distance of 67 million miles (108 million kilometers), or 0.72 astronomical units. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, 
   it takes sunlight about six minutes to travel from the Sun to Venus.
   ` : mars ? `
   With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.
     
   ` :  jupiter ? `
   From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 43 minutes to travel from the Sun to Jupiter.


   
   ` : saturn ? `
   With an equatorial diameter of about 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.

From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn.
     
   ` : uranus ? `
   With an equatorial diameter of 31,763 miles (51,118 kilometers), Uranus is four times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.

   ` : neptune ? `
   With an equatorial diameter of 30,775 miles (49,528 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball.
   ` :

`Earth has a rounded shape, 
through hydrostatic equilibrium, with an average diameter of 12,742 kilometres (7,918 mi),
 making it the fifth largest planetary sized and largest terrestrial object of the Solar System.`}
 </p>
 <p style={{opacity: 0}}>
    {mercury ? `
    Mercury is the second densest planet, after Earth. It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85% of the planet's radius. There is evidence that it is partly molten or liquid. Mercury's outer shell, comparable to Earth's outer shell (called the mantle and crust), 
    is only about 400 kilometers (250 miles) thick` : 
    venus ? `
    Because Venus’ orbit is closer to the Sun than ours, the two of them – 
    from our viewpoint – never stray far from each other. The ancient Egyptians and Greeks saw Venus in two guises: first in one orbital position (seen in the morning), 
    then another (your “evening” Venus), just at different times of the year.
    ` : mars ? `
    From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.
     
   ` :  jupiter ? `
   With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a grape, Jupiter would be about as big as a basketball.
   
   ` : saturn ? `
   Saturn's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.

While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life.
   
   ` : uranus ? `
   From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is about 19 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus.
   
   ` : neptune ? `
   From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune.


   ` :
    
    `
    To measure the local variation of Earth's topography, geodesy employs an idealized 
 Earth producing a shape called a geoid. Such a geoid shape is gained if the ocean is idealized,
  covering Earth completely and without any perturbations such as tides and winds. 
  The result is a smooth but gravitational irregular geoid surface, providing a mean sea level (MSL) 
 as a reference level for topographic measurements
    `}
 
 </p>
    </div>
  )
}

export default SizePage
