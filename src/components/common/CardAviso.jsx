import React from 'react';
import BotaoEstilizado from './BotaoEstilizado';

const CardAviso = ({ aviso, currentUser, onEdit, onDelete }) => {
  const { id, titulo, conteudo, prioridade, autor, autorNome, data } = aviso;
  const isOwner = currentUser && currentUser.uid === autor;

  const prioridadeColors = {
    baixa: 'bg-green-200 border-green-500',
    media: 'bg-yellow-200 border-yellow-500',
    alta: 'bg-red-200 border-red-500',
  };

  return (
    <div className={`border-4 border-black shadow-[8px_8px_0px_0px_#000000] p-4 bg-white transform rotate-[-1deg] hover:rotate-0 transition-transform duration-150 ease-in-out`}>
      <div className={`border-2 ${prioridadeColors[prioridade]} p-2 mb-4`}>
        <h3 className="text-xl font-black text-black uppercase tracking-wide">{titulo}</h3>
        <span className={`font-bold uppercase text-xs ${prioridadeColors[prioridade]}`}>
          Prioridade: {prioridade}
        </span>
      </div>
      <p className="text-gray-800 mb-4">{conteudo}</p>
      <div className="text-sm text-gray-600">
        <p>
          <strong>Autor:</strong> {autorNome}
        </p>
        <p>
          <strong>Data:</strong> {data}
        </p>
      </div>
      {isOwner && (
        <div className="flex justify-end space-x-2 mt-4">
          <BotaoEstilizado variant="secondary" onClick={onEdit}>
            Editar
          </BotaoEstilizado>
          <BotaoEstilizado variant="danger" onClick={() => onDelete(id)}>
            Excluir
          </BotaoEstilizado>
        </div>
      )}
    </div>
  );
};

export default CardAviso;
