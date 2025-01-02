import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onCheking, onLogin, onLogout, onLogoutCalendar } from "../store";
import { useNavigate } from "react-router-dom";

export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startLogin = async( { email, password }) => {
    dispatch( onCheking() );
    try {
      const { data } = await calendarApi.post('/auth', { email, password} )
      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.uid}) );
      navigate('/', { replace: true })
    } catch (error) {
      dispatch( onLogout('Credenciales Incorrectas'));
      setTimeout(() => {
        dispatch( clearErrorMessage());
      }, 10)
    }
  }

  const startRegister = async ( { name, email, password} ) => {
    dispatch( onCheking());
    try {
      const { data } = await calendarApi.post('/auth/new', { name, email, password })      
      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.uid }) );
      navigate('/', { replace: true })
    } catch (error) {
      dispatch( onLogout(error.response.data?.msg));
      setTimeout(() => {
        dispatch( clearErrorMessage());
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if( !token ) return dispatch( onLogout());

    try {
      const { data } = await calendarApi.get('auth/renew');
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch( onLogin({name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch( onLogoutCalendar());
    dispatch( onLogout());
  }


  return {
    status,
    user,
    errorMessage,

    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }

}