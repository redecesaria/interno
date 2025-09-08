import React, { useState, useEffect } from 'react';
import BotaoEstilizado from './BotaoEstilizado';

const FormularioAviso = ({ isOpen, onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    conteudo: '',
    prioridade: 'baixa',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        titulo: '',
        conteudo: '',
        prioridade: 'baixa',
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ titulo: '', conteudo: '', prioridade: 'baixa' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border-4 border-black">
        <h2 className="text-2xl font-black text-black mb-4 uppercase">
          {initialData ? 'Editar Aviso' : 'Criar Novo Aviso'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="titulo" className="block text-black font-bold mb-2 uppercase">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="conteudo" className="block text-black font-bold mb-2 uppercase">
              Conteúdo
            </label>
            <textarea
              id="conteudo"
              name="conteudo"
              value={formData.conteudo}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="prioridade" className="block text-black font-bold mb-2 uppercase">
              Prioridade
            </label>
            <select
              id="prioridade"
              name="prioridade"
              value={formData.prioridade}
              onChange={handleChange}
              className="w-full p-2 border-2 border-black rounded"
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <BotaoEstilizado type="button" variant="secondary" onClick={onCancel}>
              Cancelar
            </BotaoEstilizado>
            <BotaoEstilizado type="submit" variant="primary">
              Salvar
            </BotaoEstilizado>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioAviso;
