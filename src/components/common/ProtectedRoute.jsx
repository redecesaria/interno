// src/components/ProtectedRoutes.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  // Se estiver autenticado, renderiza o conteúdo da rota filha (via Outlet)
  // Se não, redireciona para a página de login
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;