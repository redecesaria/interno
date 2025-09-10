import React from 'react';
import BotaoEstilizado from './BotaoEstilizado';

  const prioridadeColors = {
    baixa: 'bg-green-500 h-3 w-3 rounded-full',
    media: 'bg-yellow-500 h-3 w-3 rounded-full',
    alta: 'bg-red-500 h-3 w-3 rounded-full',
  };
// Componente CardAviso com o novo estilo
const CardAviso = ({ aviso, currentUser, onEdit, onDelete }) => (
  <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
    <div>
      <div className="mb-4 flex items-center gap-4">
        <div className={prioridadeColors[aviso.prioridade]}></div>
        <h2 className="text-2xl font-bold title-font font-['Space_Mono',_monospace] text-gray-800">{aviso.titulo}</h2>
      </div>
      <p className="whitespace-pre-wrap mb-6 text-base leading-relaxed text-gray-600">{aviso.conteudo}</p>
    </div>
    <div>
      <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-400">
        Postado por: {aviso.autorNome}
      </p>
      {currentUser.admin && (
        <div className="flex gap-3">
          <BotaoEstilizado variant="edit" onClick={onEdit} className="w-full py-2 text-sm">Editar</BotaoEstilizado>
          <BotaoEstilizado variant="delete" onClick={() => onDelete(aviso.id)} className="w-full py-2 text-sm">Excluir</BotaoEstilizado>
        </div>
      )}
    </div>
  </div>
);

export default CardAviso;