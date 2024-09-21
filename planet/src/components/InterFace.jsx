import React, { useState, useRef, useEffect, useContext } from 'react';
import sound from '../assets/effect.wav';
import gsap from 'gsap'
import { PlanetContext } from '../context/PlanetContext';
import IntroPage from './IntroPage';
import SizePage from './SizePage';
import OrbitPage from './OrbitPage';
import SurfacePage from './SurfacePage';
import { ArrowBigLeft, MoveLeft } from 'lucide-react'

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
             setSaturn, 
             setUranus, 
            setNeptune, 
             introText, 
            setIntroText, 
             setSize, size, 
            orbit, setOrbit, surface ,setSurface} = useContext(PlanetContext);


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

              gsap.fromTo('.sections', {
                opacity:1,
                y: 20
              }, {
                opacity: 0,
                y: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.1,
                delay: 0.5
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

            // animate title line
            gsap.set('.line', {
              opacity: 0,
              width: 0,
             });
        
             gsap.to('.line', {
              opacity: 1,
              width: "400px",
              duration: 2,
              ease: "power2.inOut",
              
          });
        
          }

       
        
          
      
    }, [showMenu])

    // choose planet

    const handleClick = (planet) => {
       setSelectedPlanet(planet);


      // animate sections
     
        
        gsap.fromTo('.sections', {
          opacity:0,
          y: 5
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          delay: 1.5
        });
      
       
    





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

    gsap.set('.line', {
      opacity: 0,
      width: 0,
     });

     gsap.to('.line', {
      opacity: 1,
      width: "400px",
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
        setUranus(false);
        setNeptune(false);

      }else if(planet === "VENUS") {
          setVenus(true);
          setMercury(false);
          setJupiter(false);
          setMars(false);
          setSaturn(false);
          setNeptune(false);
      }else if(planet === "MARS") {
        setVenus(false);
        setMercury(false);
        setMars(true);
        setJupiter(false);
        setSaturn(false);
        setNeptune(false);
        setUranus(false);
    }else if(planet === "JUPITER") {
      setVenus(false);
      setMercury(false);
      setMars(false);
      setNeptune(false);
      setJupiter(true);
      setSaturn(false);
      setUranus(false);
  }else if(planet === "SATURN") {
    setVenus(false);
    setMercury(false);
    setMars(false);
    setJupiter(false);
    setNeptune(false);
    setSaturn(true);
    setUranus(false);
}else if(planet === "URANUS") {
  setVenus(false);
  setMercury(false);
  setMars(false);
  setJupiter(false);
  setSaturn(false);
  setUranus(true);
  setNeptune(false);
}else if(planet === "NEPTUNE") {
  setVenus(false);
  setMercury(false);
  setMars(false);
  setJupiter(false);
  setSaturn(false);
  setUranus(false);
  setNeptune(true);
}else {
        setMercury(false);
        setVenus(false);
        setMars(false);
        setJupiter(false);
        setSaturn(false);
        setUranus(false);
        setNeptune(false);

      }


      
     
  };
  

  
const [first, setFirst] = useState(false);
const [second, setSecond] = useState(false);
const [third, setThird] = useState(false);
const [fourth, setFourth] = useState(false);


// introduction
const handleIntro = () => {
   // hide title

   gsap.to('.title', {
    opacity: 0,
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
    duration: 0.5,
    ease: "power2.inOut",
    
});

// hide line
gsap.to('.line', {
  opacity: 0,
  width: "0px",
  duration: 2,
  ease: "power2.inOut",
  
});



setIntroText(true);
setSize(false);
setOrbit(false);
setSurface(false);

}

// handle size

const handleSize = () => {
  // size
  setSize(true);
  setIntroText(false);
  setOrbit(false);
  setSurface(false);
}


// handle orbit
const handleOrbit = () => {
  
  setSize(false);
  setIntroText(false);
  setOrbit(true);
  setSurface(false);
}

// handle surface
const handleSurface = () => {
  setSize(false);
  setIntroText(false);
  setOrbit(false);
  setSurface(true);
}







    return (
        <div className='interface_buttons' ref={interfaceRef}>
            <h2 className='title'>{selectedPlanet}</h2>
            <span className='line'></span>

           {introText || size || orbit || surface ?   <span className='back'><MoveLeft /></span> : ''}
           
            {introText && <div>
                 
                  <IntroPage />
              </div>}

              {size && <div>
                   <SizePage />
                </div>}

                {orbit && <div>
                   <OrbitPage />
                </div>}

                {surface && <div>
                   <SurfacePage />
                </div>}



          
        
      <div
        className='sections'
        
      >
        
        <div
          onMouseEnter={() => setFirst(true)}
          onMouseLeave={() => setFirst(false)}
          onClick={handleIntro}
        ></div>
         
         

        <div
          onMouseEnter={() => setSecond(true)}
          onMouseLeave={() => setSecond(false)}
           onClick={handleSize}
        ></div>
        

        <div
          onMouseEnter={() => setThird(true)}
          onMouseLeave={() => setThird(false)}
          onClick={handleOrbit}
        ></div>
    

        <div
          onMouseEnter={() => setFourth(true)}
          onMouseLeave={() => setFourth(false)}
          onClick={handleSurface}
         
        ></div>
        
       

        
      </div>

      <div className='hovered' >
          <p style={{ opacity: first ? 1 : 0}} >Introduction</p>
          <p style={{ opacity: second ? 1 : 0}}>Size and distance</p>
          <p style={{ opacity: third ? 1 : 0}}>Orbit and rotations</p>
          <p style={{ opacity: fourth ? 1 : 0}}>Surface</p>
        </div>

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

            {showMenu && <span className='menu' onClick={() => setShowMenu(false)}>
                <div></div>
                <div></div>
                 
              </span>}
        </div>
    );
};

export default InterFace;

