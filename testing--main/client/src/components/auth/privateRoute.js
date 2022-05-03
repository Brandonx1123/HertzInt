import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  return sessionStorage.getItem('id') ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
