import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

// --- COMPONENTES ---

// Componente de Botão reutilizável
const BotaoEstilizado = ({
  variant = 'primary',
  onClick,
  children,
  className,
  type = 'button',
}) => {
  const baseClasses =
    'inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none';
  const variantClasses = {
    primary:
      'bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-1',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Componente principal da Página de Conta
const PaginaConta = () => {
  const { currentUser, logout, updateUser, changePassword } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  useEffect(() => {
    if (currentUser) {
      setFormData({...currentUser});
      console.log(currentUser);
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    console.log(formData);
    updateUser(formData);
    setIsEditing(false);
    setFeedback({ message: 'Perfil atualizado com sucesso!', type: 'success' });
    setTimeout(() => setFeedback({ message: '', type: '' }), 3000);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    if (newPassword !== confirmPassword) {
      setFeedback({
        message: 'As novas senhas não correspondem.',
        type: 'error',
      });
      setTimeout(() => setFeedback({ message: '', type: '' }), 3000);
      return;
    }
    changePassword(currentPassword, newPassword)
      .then(() => {
        setFeedback({
          message: 'Senha alterada com sucesso!',
          type: 'success',
        });
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      })
      .catch((error) => {
        setFeedback({ message: 'Erro ao alterar a senha.', type: 'error' });
      });
    setTimeout(() => setFeedback({ message: '', type: '' }), 3000);
  };

  if (!currentUser) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="mb-12 text-center">
        <h1 className="title-font text-5xl font-bold text-slate-800 md:text-7xl">
          Minha Conta<span className="text-red-500">.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Gerencie suas informações pessoais e preferências.
        </p>
      </div>

      {feedback.message && (
        <div
          className={`mx-auto mb-6 max-w-2xl rounded-lg p-4 text-center font-semibold ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {feedback.message}
        </div>
      )}

      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <img
            src={
              currentUser.photoURL
                ? currentUser.photoURL
                : '/default-avatar.png'
            }
            alt="Avatar do usuário"
            className="h-32 w-32 rounded-full border-4 border-white shadow-md"
          />
          {!isEditing ? (
            <div className="flex-1 text-center md:text-left">
              <h2 className="title-font text-3xl font-bold text-gray-800">
                {currentUser.displayName}
              </h2>
              <p className="mt-1 text-gray-500">{currentUser.email}</p>
              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <BotaoEstilizado
                  variant="primary"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Perfil
                </BotaoEstilizado>
                <BotaoEstilizado variant="secondary" onClick={logout}>
                  Sair
                </BotaoEstilizado>
              </div>
            </div>
          ) : (
            <form onSubmit={handleProfileSave} className="w-full flex-1">
              <div className="space-y-4">
                <div>
                  <label className="font-bold text-gray-600">Nome</label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-semibold focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-600">Loja</label>
                  <input
                    type="text"
                    name="store"
                    value={formData.store}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-semibold focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-semibold focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <BotaoEstilizado
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Salvar Alterações
                </BotaoEstilizado>
                <BotaoEstilizado
                  variant="secondary"
                  onClick={() => setIsEditing(false)}
                  className="w-full"
                >
                  Cancelar
                </BotaoEstilizado>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="title-font mb-6 text-2xl font-bold text-gray-800">
          Alterar Senha
        </h2>
        <form onSubmit={handlePasswordSave} className="space-y-4">
          <div>
            <label className="font-bold text-gray-600">Senha Atual</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-semibold focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="font-bold text-gray-600">Nova Senha</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-semibold focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="font-bold text-gray-600">
              Confirmar Nova Senha
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 font-semibold focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
          </div>
          <div className="pt-2">
            <BotaoEstilizado type="submit" variant="primary" className="w-full">
              Salvar Nova Senha
            </BotaoEstilizado>
          </div>
        </form>
      </div>
    </>
  );
};

// Componente App que renderiza a aplicação
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Poppins',_sans_serif] text-slate-700">
      <style>{`.title-font { font-family: 'Space Mono', monospace; }`}</style>

      <main className="px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PaginaConta />
        </div>
      </main>

      <footer className="mt-12 bg-white/50 p-6 text-center text-gray-500 backdrop-blur-sm">
        <p>&copy; 2024 Rede Cesária. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
