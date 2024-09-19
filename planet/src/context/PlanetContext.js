import { createContext } from "react";

export const PlanetContext = createContext();


const PlanetProvider = ({ children }) => {

    return (
     <PlanetContext.Provider >
         { children }
     </PlanetContext.Provider>
    )
}


export default PlanetProvider