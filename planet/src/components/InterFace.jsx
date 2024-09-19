import React, { useState, useRef, useEffect, useContext } from 'react';
import sound from '../assets/effect.wav';
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';

const InterFace = () => {
    const [audio] = useState(new Audio(sound));
    const audioRef = useRef(audio);

    const [selectedPlanet, setSelectedPlanet] = useState('Discover the planets');
    const [showMenu, setShowMenu] = useState(false);

    let interfaceRef = useRef();

    
    // using context api
    const {  setMercury,
             setVenus, 
             setMars , 
            setJupiter, 
             setSaturn} = useContext(PlanetContext);


    // Play sound
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    // Stop sound
    const stopSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
        }
    };


    // text reveal effect
    useEffect(() => {
        gsap.to('.title', {
            opacity: 1,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power2.inOut",
            
        });

      gsap.fromTo('.buttons button', {
        opacity:0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.4
      });

      

      


    


    }, []);


    useEffect(() => {

          if(showMenu) {
            gsap.set('.menu', {
                opacity: 0,
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", // starting hidden state
            });
    
            gsap.to('.menu', {
                opacity: 1,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 2,
                ease: 'power2.inOut',
                delay: 0.8, 
            });
          }else {
            gsap.fromTo('.buttons button', {
                opacity:0,
                y: 20
              }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.1,
                delay: 0.4,
                pointerEvents: "all"
              });

              setSelectedPlanet('Discover the planets');

              // change z-index
              interfaceRef.current.style.zIndex = '-10';


          // reset the title reveal effect
              gsap.set('.title', {
                opacity: 0,
                clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
               });
        
               gsap.to('.title', {
                opacity: 1,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 2,
                ease: "power2.inOut",
                
            });
        
          }
      
    }, [showMenu])

    // choose planet

    const handleClick = (planet) => {
       setSelectedPlanet(planet);

       gsap.set('.title', {
        opacity: 0,
        clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
       });

       gsap.to('.title', {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 2,
        ease: "power2.inOut",
        
    });


    gsap.fromTo('.buttons button', {
        opacity:1,
        y: 0
      }, {
        opacity: 0,
        y: 20,
        pointerEvents: "none",
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.4
      });

      setShowMenu(true);

      if(planet === "MERCURY") {
        setMercury(true);
        setVenus(false);
        setSaturn(false);
        setJupiter(false);
        setMars(false);

      }else if(planet === "VENUS") {
          setVenus(true);
          setMercury(false);
          setJupiter(false);
          setMars(false);
          setSaturn(false);
      }else if(planet === "MARS") {
        setVenus(false);
        setMercury(false);
        setMars(true);
        setJupiter(false);
        setSaturn(false);
    }else if(planet === "JUPITER") {
      setVenus(false);
      setMercury(false);
      setMars(false);
      setJupiter(true);
      setSaturn(false);
  }else if(planet === "SATURN") {
    setVenus(false);
    setMercury(false);
    setMars(false);
    setJupiter(true);
    setSaturn(true);
}else {
        setMercury(false);
        setVenus(false);
        setMars(false);
        setJupiter(false);
        setSaturn(false);

      }


      
     
  };
  

    
  

    return (
        <div className='interface_buttons' ref={interfaceRef}>
            <h2 className='title'>{selectedPlanet}</h2>

            <div className='buttons'>
            {['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO'].map((planet) => (
                    <button
                        key={planet}
                        onClick={() => handleClick(planet)}
                        onMouseEnter={playSound}
                        onMouseLeave={stopSound}
                    >
                        {planet}
                    </button>
                ))}
            </div>

            {showMenu && <p className='menu' onClick={() => setShowMenu(false)}>Planets</p>}
        </div>
    );
};

export default InterFace;

