import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/color.css'
import './styles/display.css'
import './styles/typography.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/size.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
