import React, { useEffect } from 'react'
import gsap from 'gsap'

const IntroPage = () => {
   
    // animate intro page
    useEffect(() => {

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
    }, []);



  return (
    <div className='intro-page' >
       <h1 style={{opacity: 0}}>Introduction</h1>

       <span style={{opacity: 0}} className='line intro-line'></span>

       <p style={{opacity: 0}}>

       Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
       This is enabled by Earth being an ocean world, 
       the only one in the Solar System sustaining liquid surface water.
        Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. 
        The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental 
        landmasses within Earth's land hemisphere.
        </p>
        <p style={{opacity: 0}}>
         Most of Earth's land is somewhat humid and covered by 
        vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's 
        groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving 
        tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a 
        liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar 
        
        winds and cosmic radiation.
        </p>
    </div>
  )
}

export default IntroPage
