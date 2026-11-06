import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Ahmed" age={19} />
    <App name="samer" age={30} />
    <App name="Sara" age={50}/>
  </StrictMode>,
)
