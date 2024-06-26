import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ShopLayout from './Pages/Shop/ShopLayout.tsx'
import Shop from './Pages/Shop/Shop.tsx'
import CategoryLayout from './Pages/Shop/Pages/CategoryLayout.tsx'
import Login from './Pages/Login/login.tsx'
import Cart from './Pages/Shop/Pages/Cart.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
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
      },
      {
        path: '/shop/cart',
        element: <Cart />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
