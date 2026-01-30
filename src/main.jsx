import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import AddAlert from './components/AddAlert.jsx'
import AlertState from './context/alertState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertState>
    <Navbar/>
    <AddAlert/>
    </AlertState>
  </StrictMode>,
)
