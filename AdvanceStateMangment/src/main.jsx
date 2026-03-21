import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdvanceUseState from './AdvanceUseState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <AdvanceUseState />
  </StrictMode>,
)
