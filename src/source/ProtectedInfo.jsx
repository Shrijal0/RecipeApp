import { Navigate, Outlet } from 'react-router-dom'

const ProtectedInfo = () => {
  const loggedIn = localStorage.getItem("loggedIn")
  return loggedIn ? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedInfo