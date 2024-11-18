import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import router from './routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayout ></MainLayout>
    </RouterProvider>
  </StrictMode>,
)
