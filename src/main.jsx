import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataHandler } from './context/dataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataHandler>
        <App />
      </DataHandler>
    </BrowserRouter>
  </React.StrictMode>,
)
