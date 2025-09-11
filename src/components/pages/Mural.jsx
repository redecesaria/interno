import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useFirebase } from '../../context/FirebaseContext';
import FormularioAviso from '../common/FormularioAviso';
import BotaoEstilizado from '../common/BotaoEstilizado';
import CardAviso from '../common/CardAviso';

export default function MuralAvisos() {
  const { posts, AddPost, DeletePost, EditPost } = useFirebase();
  const { currentUser } = useAuth();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleAddPost = (formData) => {
    if (editingPost) {
      EditPost(editingPost.id, formData);
    } else {
      AddPost(formData);
    }
    setIsFormOpen(false);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditingPost(null);
  };

  return (
     <div className="bg-slate-50 min-h-screen font-['Poppins',_sans-serif] text-slate-700">
        <style>{`
            .title-font { font-family: 'Space Mono', monospace; }
        `}</style>

      <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header do mural */}
            <div className="mb-12 text-center">
                <h1 className="text-5xl md:text-7xl font-bold title-font text-slate-800">
                    Mural de Avisos<span className="text-red-500">.</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Fique por dentro dos comunicados importantes da Rede Cesária.
                </p>
                <div className="mt-8">
                    <BotaoEstilizado
                        isVisible={currentUser.admin}
                        variant="primary"
                        onClick={() => setIsFormOpen(true)}
                        className="px-8 py-3 text-base"
                    >
                        + Criar Novo Aviso
                    </BotaoEstilizado>
                </div>
            </div>

            {/* Grid de avisos */}
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((aviso) => (
                        <CardAviso
                        key={aviso.id}
                        aviso={aviso}
                        currentUser={currentUser}
                        onEdit={() => handleEdit(aviso)}
                        onDelete={DeletePost}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-12 text-center">
                    <div className="inline-block bg-white p-8 rounded-2xl shadow-lg">
                        <div className="mb-4 text-6xl">📝</div>
                        <h3 className="mb-2 text-2xl font-bold title-font text-slate-800">
                            Nenhum Aviso no Mural
                        </h3>
                        <p className="text-gray-500">
                           Clique em "Criar Novo Aviso" para adicionar o primeiro.
                        </p>
                    </div>
                </div>
            )}
        </div>
      </main>

      <FormularioAviso
        isOpen={isFormOpen}
        onSubmit={handleAddPost}
        onCancel={handleCancel}
        initialData={editingPost}
      />
      
      <footer className="text-center p-6 text-gray-500 bg-white/50 backdrop-blur-sm mt-12">
        <p>&copy; 2025 Rede Cesária. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

