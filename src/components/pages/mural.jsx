"use client";

import { useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import BotaoEstilizado from "./botao-estilizado";
import CardAviso from "./card-aviso";
import FormularioAviso from "./formulario-aviso";

const MuralAvisos = () => {
  const { posts, setPosts, DeletePost, EditPost } = useFirebase();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const currentUser = { id: 1, nome: "Usuário Atual" };

  const handleAddPost = (formData) => {
    const newPost = {
      id: Date.now().toString(),
      titulo: formData.titulo,
      conteudo: formData.conteudo,
      prioridade: formData.prioridade,
      autor: currentUser.nome,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    setPosts([...posts, newPost]);
    console.log("[v0] Novo post criado:", newPost);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-yellow-200 p-6 relative overflow-hidden">
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
        {/* Header do mural */}
        <div className="text-center mb-8">
          <div className="bg-white border-4 border-black shadow-[16px_16px_0px_0px_#000000] p-6 mb-6 inline-block transform rotate-1">
            <h1 className="text-5xl font-black text-black mb-2 uppercase tracking-wider transform -rotate-1">
              MURAL DE AVISOS
            </h1>
            <p className="text-black font-bold uppercase tracking-wide transform -rotate-1">
              COMUNICADOS IMPORTANTES
            </p>
          </div>

          <BotaoEstilizado
            variant="primary"
            onClick={() => setIsFormOpen(true)}
            className="text-lg px-8 py-4"
          >
            + CRIAR NOVO AVISO
          </BotaoEstilizado>
        </div>

        {/* Grid de avisos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((aviso) => (
            <CardAviso
              key={aviso.id}
              aviso={aviso}
              currentUser={currentUser}
              onEdit={EditPost}
              onDelete={DeletePost}
            />
          ))}
        </div>

        {/* Mensagem quando não há avisos */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_#000000] p-8 inline-block">
              <div className="text-6xl mb-4 font-black">📝</div>
              <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">
                NENHUM AVISO
              </h3>
              <p className="text-black font-bold uppercase text-sm tracking-wide">
                CLIQUE PARA ADICIONAR O PRIMEIRO
              </p>
            </div>
          </div>
        )}
      </div>

      <FormularioAviso
        isOpen={isFormOpen}
        onSubmit={handleAddPost}
        onCancel={() => setIsFormOpen(false)}
      />
    </div>
  );
};

export default MuralAvisos;
