import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const loggedIn = localStorage.getItem("loggedIn")
  return loggedIn ? <Navigate to={"/"}/> : <Outlet/>
}

export default ProtectedRoute