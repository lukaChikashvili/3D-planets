import { createContext, useState } from "react";

export const PlanetContext = createContext();


const PlanetProvider = ({ children }) => {

    // mercury
    const [mercury, setMercury] = useState(false);

    return (
     <PlanetContext.Provider value={{ mercury, setMercury }} >
         { children }
     </PlanetContext.Provider>
    )
}


export default PlanetProvider