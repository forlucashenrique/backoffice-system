import App from '../App'
import { createBrowserRouter } from 'react-router-dom'
import { CreateProject, Home, ListProjects, UpdateProject } from '../pages'

import { Login } from '../pages/login'




export const router = createBrowserRouter([

    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects/create',
          element: <CreateProject />
        },
        {
          path: '/projects/list',
          element: <ListProjects />
        },
        {
          path: '/projects/update/:id',
          element: <UpdateProject />
        }
      ]

    },
    {
      path: '/login',
      element: <Login />,
      

    },

    {
      path: '*',
      element: <h1 style={{
        textAlign: 'center'
      }}>Error 404</h1>
    }


])
