import React from 'react';
import { useAuth } from '../../context/AuthContext';
import BotaoEstilizado from '../common/BotaoEstilizado';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { currentUser, signInWithGoogle, logout, signup, login } = useAuth();
  const { register, handleSubmit } = useForm();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data) => {
    console.log(data); // Ex: { email: "usuario@teste.com", senha: "123" }

    alert(`Login enviado com sucesso! Email: ${data.email}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center border-4 border-black">
        <h1 className="text-3xl font-black text-black mb-4 uppercase">Bem-vindo!</h1>
        <p className="text-gray-600 mb-8">Faça login para continuar</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col items-center justify-center">
            <label className="text-black" htmlFor="name">Nome</label>
            <input
              className="bg-gray-400 rounded-lg text-center text-black border-2 border-gray-600 flex items-center justify-center"
              id="name"
              type="name"
              {...register('email')}
            />
          </div>

          <div className="mb-4 flex flex-col items-center justify-center">
            <label className="text-black" htmlFor="email">Email</label>
            <input
            className="bg-gray-400 rounded-lg text-center text-black border-2 border-gray-600 flex items-center justify-center"
              id="email"
              type="email"
              {...register('email')}
            />
          </div>

          <div className="mb-4 flex flex-col items-center justify-center">
            <label className="text-black" htmlFor="senha">Senha</label>
            <input
            className="bg-gray-400 rounded-lg text-center text-black border-2 border-gray-600 flex items-center justify-center"
              id="senha"
              type="password"
              {...register('senha')}
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
        <BotaoEstilizado onClick={signInWithGoogle} variant="primary">
          Login com Google
        </BotaoEstilizado>
      </div>
    </div>
  );
};

export default LoginPage;
