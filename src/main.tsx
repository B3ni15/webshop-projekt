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
import CategoryLayout from './Pages/Shop/Pages/CategoryLayout.tsx'

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
        index: true,
        element: <Shop />
      },
      {
        path: '/shop/:category',
        element: <CategoryLayout />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
