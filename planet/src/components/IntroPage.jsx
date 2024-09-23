import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';

const IntroPage = () => {

    const { introText, mercury, venus, mars, jupiter, saturn, uranus, neptune } = useContext(PlanetContext);

   
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
       ` : jupiter ? `
       jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.

       The king of planets was named for Jupiter, king of the gods in Roman mythology. Most of its moons are also named for mythological characters, figures associated with Jupiter or his Greek counterpart, Zeus.
       ` : saturn ? `
       Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.
       ` : uranus ? `
       Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.

       Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.
       ` : neptune ? `
       Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.

       Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.
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
            ` : jupiter ?  `
            Jupiter’s environment is probably not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.

While planet Jupiter is an unlikely place for living things to take hold, the same is not true of some of its many moons. Europa is one of the likeliest places to find life elsewhere in our solar system.
            ` : saturn ? `
            The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.
            Saturn's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.

While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life.
            ` : uranus ? `
            William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.
            
            ` : neptune ? `The ice giant Neptune was the first planet located through mathematical calculations. Using predictions made by Urbain Le Verrier, Johann Galle discovered the planet in 1846. 
            The planet is named after the Roman god of the sea, as suggested by Le Verrier.` : `
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
