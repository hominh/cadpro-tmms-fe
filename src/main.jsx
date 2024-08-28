import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Map from './screens/map.jsx'
import Login from './screens/login.jsx'
import Dashboard from './screens/dashboard.jsx'
import Camera from './screens/camera.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Camera />
  </React.StrictMode>,
)
