import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../../router/PATHS';
import { ROLES } from '../../../constants/roles';
import { useAuthContext } from '../../../contexts/AuthContext';

const UserGuard = () => {
  const { role } = useAuthContext();
  if (role === ROLES.USER) return <Outlet />;
  return <Navigate to={PATHS.Auth.SIGNIN} replace={true} />;
};

export default UserGuard;
