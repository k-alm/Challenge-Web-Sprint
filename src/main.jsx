import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error404 from './routes/error/index.jsx'
import VistoriaMobile from './routes/vistoria-mobile/index.jsx'
import About from './routes/about/index.jsx'
import Registro from './routes/registro/index.jsx'
import Vistoria from './routes/vistoria/index.jsx'
import Content from './routes/content/index.jsx'
import Consulta from './routes/consulta/index.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error404/>,
    children:[
      {
        path:"/",
        element: <Content/>
      },
      {
        path:"/consulta",
        element: <Consulta/>
      },
      {
        path:"/vistoria",
        element: <Vistoria/>
      },
      {
        path:"/vmobile",
        element: <VistoriaMobile/>
      },
      {
        path:"/registro",
        element: <Registro/>
      },
      {
        path:"/about",
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
