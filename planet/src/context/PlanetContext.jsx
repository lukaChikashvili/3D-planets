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



    return (
     <PlanetContext.Provider value={{ mercury,
      setMercury, venus, setVenus , mars, 
      setMars, jupiter, setJupiter, saturn, setSaturn}} >
         { children }
     </PlanetContext.Provider>
    )
}


export default PlanetProvider