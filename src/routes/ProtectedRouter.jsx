import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRouter = ({children}) => {
  const authStatus = 'authenticated'; //'no-authenticated' 

  if( authStatus === 'authenticated' ){
    return children;
  }


  return <Navigate to='/auth/login' replace/>
}
