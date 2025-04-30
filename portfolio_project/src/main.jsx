import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyProjects from './MyProjects'
import './styles/tailwind.css'
import 
{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "MyProjects",
    element: <MyProjects />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
