import React from 'react'
import ReactDOM from 'react-dom/client'
import Weather from './components/Weather/Weather'
import './globalStyles.css'

/*

Nothing here, this just handles rendering

*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
)
