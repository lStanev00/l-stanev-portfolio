import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import BackgroundTrip from './componenets/background/backgroundRain.tsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BackgroundTrip />
      <App />
    </HelmetProvider>
  </StrictMode>,
)
