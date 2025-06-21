import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import VanLife from './VanLife.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VanLife />
  </StrictMode>,
)
