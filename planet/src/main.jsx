import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import PlanetProvider from './context/PlanetContext.js'

createRoot(document.getElementById('root')).render(
 
    <PlanetProvider>
    <Router>
    <App />
    </Router>
    </PlanetProvider>
  
)
