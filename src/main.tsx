import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routers/index.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
