import React, { useContext, useEffect } from 'react'
import gsap from 'gsap';
import { PlanetContext } from '../context/PlanetContext';


const OrbitPage = () => {

    const { orbit } = useContext(PlanetContext);


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

As Earth orbits the Sun, it completes one rotation every 23.9 hours. 
It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day,
 and the year it's added to is called a leap year.
</p>
<p style={{opacity: 0}}>
Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. 
This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is
 tilted toward the Sun, and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, 
both hemispheres receive roughly equal amounts of heat from the Sun.
</p>
  </div>
  )
}

export default OrbitPage
