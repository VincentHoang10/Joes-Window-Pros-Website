import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RequestPage from './pages/RequestPage';
import ErrorPage from './pages/ErrorPage';
import SuccessPage from './pages/SuccessPage';
import FailPage from './pages/FailPage';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      ...["/", "/home"].map(path => ({
        path,
        element: <HomePage />,
      })),
      { 
        path: '/services', 
        element: <ServicesPage /> 
      },
      { 
        path: '/about', 
        element: <AboutPage /> 
      },
      { 
        path: '/request', 
        element: <RequestPage /> 
      },
      { 
        path: '/success', 
        element: <SuccessPage /> 
      },
      { 
        path: '/fail', 
        element: <FailPage />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);