import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { ProtectedRouter } from './ProtectedRouter';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRouter>
        <CalendarPage />
      </ProtectedRouter>
    )
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  }
], { 
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  } 
});
