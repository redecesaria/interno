import React from 'react';
import { useAuth } from '../../context/AuthContext';
import BotaoEstilizado from '../common/BotaoEstilizado';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { currentUser, signInWithGoogle } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center border-4 border-black">
        <h1 className="text-3xl font-black text-black mb-4 uppercase">Bem-vindo!</h1>
        <p className="text-gray-600 mb-8">Faça login para continuar</p>
        <BotaoEstilizado onClick={signInWithGoogle} variant="primary">
          Login com Google
        </BotaoEstilizado>
      </div>
    </div>
  );
};

export default LoginPage;
