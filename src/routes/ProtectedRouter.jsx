import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const ProtectedRouter = ({children}) => {

  const {status, checkAuthToken} = useAuthStore();
  
  useEffect(() => {
    checkAuthToken();
  }, [])

  if( status === 'checking') {
    return <h3>Cargando....</h3>
  }

  if( status === 'authenticated' ){
    return children;
  }

  if( status === 'no-authenticated'){
    return <Navigate to='/auth/login' replace/>
  }
  
}
