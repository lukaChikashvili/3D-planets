import { createContext, useState } from "react";

export const PlanetContext = createContext();


const PlanetProvider = ({ children }) => {

    // mercury
    const [mercury, setMercury] = useState(false);
    // venus
    const [venus, setVenus] = useState(false);
    // mars
    const [mars, setMars] = useState(false);
   // jupiter
   const [jupiter, setJupiter] = useState(false);

   // saturn 
   const [saturn, setSaturn] = useState(false);
   // uranus 
const [uranus, setUranus] = useState(false);
 // neptune 
 const [neptune, setNeptune] = useState(false);


 
// intro text
const [introText, setIntroText] = useState(false);

// size text
const [size, setSize] = useState(false);

// orbit text
const [orbit, setOrbit] = useState(false);



    return (
     <PlanetContext.Provider value={{ mercury,
      setMercury, venus, setVenus , mars, 
      setMars, jupiter, setJupiter, saturn, setSaturn, uranus, setUranus, 
      neptune, setNeptune, introText, setIntroText, size, setSize, orbit, setOrbit}} >
         { children }
     </PlanetContext.Provider>
    )
}


export default PlanetProvider