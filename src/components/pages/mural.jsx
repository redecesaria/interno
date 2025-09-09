import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { useAuth } from "../../context/AuthContext";
import BotaoEstilizado from "../common/BotaoEstilizado";
import CardAviso from "../common/CardAviso";
import FormularioAviso from "../common/FormularioAviso";

const MuralAvisos = () => {
  const { posts, AddPost, DeletePost, EditPost } = useFirebase();
  const { currentUser, logout } = useAuth();
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
    <div className="h-full bg-yellow-200 p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-black bg-opacity-20"
          style={{
            backgroundImage: `
                 repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 10px,
                   rgba(0,0,0,0.1) 10px,
                   rgba(0,0,0,0.1) 20px
                 )
               `,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="absolute top-4 right-4">
          <BotaoEstilizado onClick={logout} variant="danger">
            Logout
          </BotaoEstilizado>
        </div>
        {/* Header do mural */}
        <div className="text-center mb-8">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] sm:shadow-[16px_16px_0px_0px_#000000] p-4 sm:p-6 mb-6 inline-block transform rotate-1">
            <h1 className="text-3xl sm:text-5xl font-black text-black mb-2 uppercase tracking-wider transform -rotate-1">
              MURAL DE AVISOS
            </h1>
            <p className="text-sm sm:text-base text-black font-bold uppercase tracking-wide transform -rotate-1">
              COMUNICADOS IMPORTANTES
            </p>
          </div>

          {currentUser?.admin && (
            <BotaoEstilizado
              variant="primary"
              onClick={() => setIsFormOpen(true)}
              className="text-lg px-8 py-4"
            >
              + CRIAR NOVO AVISO
            </BotaoEstilizado>
          )}
        </div>

        {/* Grid de avisos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Mensagem quando não há avisos */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000] p-6 sm:p-8 inline-block">
              <div className="text-5xl sm:text-6xl mb-4 font-black">📝</div>
              <h3 className="text-xl sm:text-2xl font-black text-black mb-2 uppercase tracking-wide">
                NENHUM AVISO
              </h3>
              <p className="text-xs sm:text-sm text-black font-bold uppercase tracking-wide">
                CLIQUE PARA ADICIONAR O PRIMEIRO
              </p>
            </div>
          </div>
        )}
      </div>

      <FormularioAviso
        isOpen={isFormOpen}
        onSubmit={handleAddPost}
        onCancel={handleCancel}
        initialData={editingPost}
      />
    </div>
  );
};

export default MuralAvisos;
