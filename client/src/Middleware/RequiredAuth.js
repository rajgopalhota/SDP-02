import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import { toast } from "react-toastify";

const RequiredAuth = () => {
  const auth = useAuth();
  if (!auth.user) {
    toast.success('Please login', {
      toastId: 's1',
    })
    return <Navigate to="/autobots/home" />
  }
  return <Outlet />
}


export default RequiredAuth

