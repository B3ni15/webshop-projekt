import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ShopLayout from './Pages/Shop/ShopLayout.tsx'
import Shop from './Pages/Shop/Shop.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shop',
    element: <ShopLayout />,
    children: [
      {
        path: '/shop/',
        index: true,
        element: <Shop />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
