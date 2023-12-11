import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import { toast } from "react-toastify";

export const RequiredAuth = () => {
  const auth = useAuth();
  if (!auth.user) {
    toast.success('Please login', {
      toastId: 's1',
    })
    return <Navigate to="/autobots/home" />
  }
  return <Outlet />
}
export const AdminAuth = () => {
  const auth = useAuth();
  if (!auth.user || auth.user.role!=='Admin') {
    toast.success('Do not try to intrude Admin!', {
      toastId: 's1',
    })
    return <Navigate to="/autobots/home" />
  }
  return <Outlet />
}



