import { createContext, useState } from "react";

export const PlanetContext = createContext();


const PlanetProvider = ({ children }) => {

    // mercury
    const [mercury, setMercury] = useState(false);
    // venus
    const [venus, setVenus] = useState(false);
    // mars
    const [mars, setMars] = useState(false);



    return (
     <PlanetContext.Provider value={{ mercury, setMercury, venus, setVenus , mars, setMars}} >
         { children }
     </PlanetContext.Provider>
    )
}


export default PlanetProvider