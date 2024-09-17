import { Route, Routes } from "react-router-dom"
import CanvasPage from "./components/CanvasPage"
import Moon from "./components/Moon"


function App() {

   

  return (
    <>
     

      <Routes>
         <Route path="/" element = { <CanvasPage />} />
        
      </Routes>
    </>
  )
}

export default App
