import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;
