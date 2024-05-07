import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';  

interface ProtectedRouteProps {
  path?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser || !currentUser.emailVerified) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
