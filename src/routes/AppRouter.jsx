import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { ProtectedRouter } from './ProtectedRouter';

export const appRouter = createBrowserRouter([
  // Rutas no autenticadas
  {
    path: '/auth/login',
    element: <LoginPage />,
  },

  // Rutas autenticadas
  {
    path: '/',
    element: (
      <ProtectedRouter>
        <CalendarPage />
      </ProtectedRouter>
    ),
  },

  // Ruta comodín para redireccionar a "/"
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
], { 
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  } 
});
