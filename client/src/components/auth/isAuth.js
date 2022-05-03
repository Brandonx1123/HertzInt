import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  return sessionStorage.getItem('id') ? (
    <Navigate to='/dashboard' />
  ) : (
    <Navigate to='/' />
  );
}

export default PrivateRoute;
