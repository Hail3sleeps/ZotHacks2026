import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as sessions from "./lib/sessions";
window.sessions = sessions;
import * as users from "./lib/users"; window.users = users;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
