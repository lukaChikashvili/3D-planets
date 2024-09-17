import React, { useState, useRef, useEffect } from 'react';
import sound from '../assets/effect.wav';
import gsap from 'gsap'

const InterFace = () => {
    const [audio] = useState(new Audio(sound));
    const audioRef = useRef(audio);

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

    


    }, [])
  

    return (
        <div className='interface_buttons'>
            <h2 className='title'>Discover the planets</h2>

            <div className='buttons'>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>EARTH</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>MERCURY</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>VENUS</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>MARS</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>JUPITER</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>SATURN</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>URANUS</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>NEPTUN</button>
                <button onMouseEnter={playSound} onMouseLeave={stopSound}>PLUTO</button>
            </div>
        </div>
    );
};

export default InterFace;

