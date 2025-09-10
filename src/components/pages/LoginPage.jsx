import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import BotaoEstilizado from '../common/BotaoEstilizado';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(true);
  const { currentUser, signInWithGoogle, signup, login } = useAuth();
  const { register, handleSubmit } = useForm();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data) => {
    if (!haveAnAccount && (!data.appkey || data.appkey !== '238702')) {
      alert('O campo AppKey é obrigatório!')
      return;
    }
    if (haveAnAccount) {
    try {
      console.log(data); // Ex: { email: "", senha: "" }
      login(data.email, data.senha);
    } catch (error) {
      alert(`Falha ao fazer login. Tente novamente.`);
      console.error('Erro ao fazer login:', error);
    }
  } else {
    try {
      signup(data.email, data.senha, data.name, data.store);
    } catch (error) {
      alert(`Falha ao criar conta. Tente novamente.`);
      console.error('Erro ao criar conta:', error);
    }
  }
  };

  return (
    <div className="flex h-full items-center justify-center bg-gray-100">
      <div className="flex flex-col rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-black text-black uppercase">
          Bem-vindo
        </h1>
        <p className="mb-8 text-gray-600">Faça login para continuar</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!haveAnAccount && (
            <div className="mb-4 flex flex-col items-center justify-center">
              <label className="text-black" htmlFor="name">
                Nome
              </label>
              <input
                className="flex items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-400 text-center text-black"
                placeholder={currentUser?.name}
                id="name"
                type="name"
                {...register('name')}
              />
            </div>
          )}

          {!haveAnAccount && (
            <div className="mb-4 flex flex-col items-center justify-center">
              <label className="text-black" htmlFor="loja">
                Loja:
              </label>
              <input
                className="flex items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-400 text-center text-black"
                id="loja"
                type="text"
                {...register('store')}
              />
            </div>
          )}

          <div className="mb-4 flex flex-col items-center justify-center">
            <label className="text-black" htmlFor="email">
              Email
            </label>
            <input
              className="flex items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-400 text-center text-black"
              id="email"
              type="email"
              {...register('email')}
            />
          </div>

          <div className="mb-4 flex flex-col items-center justify-center">
            <label className="text-black" htmlFor="senha">
              Senha
            </label>
            <input
              className="flex items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-400 text-center text-black"
              id="senha"
              type="password"
              {...register('senha')}
            />
          </div>

          {!haveAnAccount && (<div className="mb-4 flex flex-col items-center justify-center">
            <label className="text-black" htmlFor="appkey">
              AppKey
            </label>
            <input
              className="flex items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-400 text-center text-black"
              id="appkey"
              type="password"
              {...register('appkey')}
            />
          </div>)}

          <div className="mb-4 flex flex-col items-center justify-center gap-3">
            <BotaoEstilizado isVisible={true} variant="primary" type="submit">
              {!haveAnAccount ? 'Criar conta' : 'Entrar'}
            </BotaoEstilizado>

            <BotaoEstilizado
              type="button"
              onClick={signInWithGoogle}
              variant="primary"
              isVisible={true}
            >
              Login com Google
            </BotaoEstilizado>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => {
                setHaveAnAccount(!haveAnAccount);
              }}
            >
              {!haveAnAccount ? 'Já tenho uma conta' : 'Criar uma conta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
