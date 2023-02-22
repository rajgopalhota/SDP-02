import { Outlet, Navigate } from 'react-router-dom'
import {useAuth} from './auth'
const RequiredAuth = () => {
  const auth = useAuth();
    // let auth = {'token':false}
    return(
        (auth.user) ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default RequiredAuth

