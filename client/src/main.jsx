import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Route/Routes.jsx'
import { Provider } from "react-redux"
import Store from './Redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>,
  </Provider>

)
