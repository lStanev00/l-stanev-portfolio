import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import BackgroundTrip from './componenets/background/backgroundRain.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundTrip />
    <App />
  </StrictMode>,
)
