import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';

const IntroPage = () => {

    const { introText, mercury } = useContext(PlanetContext);

   
    // animate intro page
    useEffect(() => {
        if (introText) {
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
                width: "700px",
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
    
    }, [introText]);
    


  return (
    <div className='intro-page' >
       <h1 style={{opacity: 0}}>Introduction</h1>

       <span style={{opacity: 0}} className='line intro-line'></span>

       <p style={{opacity: 0}}>

       {mercury ? `
       Mercury is the first planet from the Sun and the smallest in the Solar System. In English, 
       it is named after the ancient Roman god Mercurius (Mercury), god of commerce and communication, 
       and the messenger of the gods. Mercury is classified as a terrestrial planet, with roughly the same
        surface gravity as Mars. The surface of Mercury is heavily cratered, as a result of countless impact 
        events that have accumulated over billions of years. Its largest crater, Caloris Planitia, has a diameter 
        of 1,550 km (960 mi), which is about one-third the diameter of the planet (4,880 km or 3,030 mi). Similarly 
        to the Earth's Moon, Mercury's surface displays an expansive 
       rupes system generated from thrust faults and bright ray systems formed by impact event remnants.
       
       ` : `Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
       This is enabled by Earth being an ocean world, 
       the only one in the Solar System sustaining liquid surface water.
        Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. 
        The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental 
        landmasses within Earth's land hemisphere.` }
        </p>
        <p style={{opacity: 0}}>
            { mercury ? `
            Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, 
            day temperatures can reach highs of 800°F (430°C). 
            
            ` : `
             Most of Earth's land is somewhat humid and covered by 
             vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's 
             groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving 
             tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a 
             liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar 
             
             winds and cosmic radiation.
            `}
        
        </p>
    </div>
  )
}

export default IntroPage
