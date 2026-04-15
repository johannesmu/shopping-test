import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AppThemeProvider } from "./contexts/AppThemeContext.tsx"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
