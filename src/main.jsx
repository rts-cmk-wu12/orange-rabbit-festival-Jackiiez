import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './orange.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* routes */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)