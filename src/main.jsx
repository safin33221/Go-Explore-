import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from "react-router";
import Home from './pages/Home.jsx'
import PublicLayout from './layout/PublicLayout.jsx'
import About from './pages/About.jsx'
import Explore from './pages/Explore.jsx'
import Login from './pages/Login.jsx';
import TourDetails from './pages/TourDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/tours/:xyz",
        element: <TourDetails />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>,
)
