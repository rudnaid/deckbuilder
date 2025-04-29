import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Hooks/useAuth.jsx';
import Layout from './Layout/Layout.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Login from './Pages/Auth/Login.jsx';
import Register from './Pages/Auth/Register.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'deckbuilder',
        element: (
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
