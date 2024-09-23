import React, { useContext, useEffect } from 'react'
import gsap from 'gsap';
import { PlanetContext } from '../context/PlanetContext';


const OrbitPage = () => {

    const { orbit, mercury, venus, mars, jupiter, saturn, uranus, neptune } = useContext(PlanetContext);


        // animate orbit page
        useEffect(() => {
            if (orbit) {
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
        
        }, [orbit]);
    
        

  return (
    <div className='intro-page orbit-page'>
    <h1 style={{opacity: 0}}>Orbit & rotation</h1>

<span style={{opacity: 0}} className='line intro-line'></span>

<p style={{opacity: 0}}>

{ mercury ? `
     Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet.
` : venus ? `
Spending a day on Venus would be quite a disorienting experience – 
that is, if your spacecraft or spacesuit could protect you from temperatures in the range of 900 degrees Fahrenheit (475 Celsius). For one thing, your “day” would be 243 Earth days long – longer even than a Venus year (one trip around the Sun), which takes only 225 Earth days. For another, because of the planet's extremely slow rotation, sunrise to sunset would take 117 Earth days. And by the way, the Sun would rise in the west and set in the east,
 because Venus spins backward compared to Earth.

` :  
 mars ? `
 As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols – short for "solar day." A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.
     
   ` :  jupiter ? `
   Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days).
   
   ` : saturn ? `
   Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).

Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.
   
   ` : uranus ? `
   

   ` : neptune ? `
   
   ` :
`As Earth orbits the Sun, it completes one rotation every 23.9 hours. 
It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day,
 and the year it's added to is called a leap year.`}
</p>
<p style={{opacity: 0}}>
{ mercury ? `
   Mercury spins slowly on its axis and completes one rotation every 59 Earth days. But when Mercury is moving fastest in its elliptical orbit around the Sun (and it is closest to the Sun), each rotation is not accompanied by sunrise and sunset like it is on most other planets. The morning Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset for other parts of the surface. One Mercury solar day (one full day-night cycle) equals 176 Earth days – just over two years on Mercury.
` : venus ? `
     
While you’re waiting, don’t expect any seasonal relief from the unrelenting temperatures.
 On Earth, with its spin axis tilted by about 23 degrees, we experience summer when our 
 part of the planet (our hemisphere) receives the Sun’s rays more directly – a result of that tilt.
  In winter, the tilt means the rays are less direct. 

`  : mars ? `
   
Mars' axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). And while here on Earth the seasons are evenly spread over the year, lasting 3 months (or one quarter of a year), on Mars the seasons vary in length because of Mars' elliptical, egg-shaped orbit around the Sun.
` :  jupiter ? `

Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.
` : saturn ? `
Saturn took shape when the rest of the solar system formed about 4.5 billion years ago when gravity pulled swirling gas and dust in to become this gas giant. About 4 billion years ago, Saturn settled into its current position in the outer solar system, where it is the sixth planet from the Sun. Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun.

` : uranus ? `


` : neptune ? `

` :

`Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. 
This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is
 tilted toward the Sun, and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, 
both hemispheres receive roughly equal amounts of heat from the Sun.`}
</p>
  </div>
  )
}

export default OrbitPage
