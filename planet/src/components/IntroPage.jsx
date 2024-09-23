import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';

const IntroPage = () => {

    const { introText, mercury, venus, mars, juputer, saturn, uranus, neptune } = useContext(PlanetContext);

   
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
       
       ` : venus ? `
       Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.
          
       ` :  mars ? `
       Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.
       Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. The Egyptians called it "Her Desher," meaning "the red one."

Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.
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
            
            ` : venus ? `
            Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense,
             persistent clouds, the surface has volcanoes and deformed mountains. 
             The ancient Romans could easily see seven bright objects in the sky: the Sun, the Moon, and the five brightest planets: Mercury, Venus, Mars, Jupiter, and Saturn. They named the objects after their most important gods.

Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the ancient Greeks. Most features on Venus are named for women. It’s the only planet named after a female god.
            ` : mars ? `
            Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute – for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.
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
