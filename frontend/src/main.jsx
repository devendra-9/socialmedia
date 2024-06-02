import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Allcontextprovider from './context/allcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Allcontextprovider>
  {/* <React.StrictMode> */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  {/* </React.StrictMode> */}
  </Allcontextprovider>
)
