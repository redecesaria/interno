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
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="mb-4 text-xl font-black text-black uppercase sm:text-2xl">
          {initialData ? 'Editar Aviso' : 'Criar Novo Aviso'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="titulo"
              className="mb-2 block font-bold text-black uppercase"
            >
              Título
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              className="w-full rounded border-2 border-black p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="conteudo"
              className="mb-2 block font-bold text-black uppercase"
            >
              Conteúdo
            </label>
            <textarea
              id="conteudo"
              name="conteudo"
              value={formData.conteudo}
              onChange={handleChange}
              className="w-full rounded border-2 border-black p-2 whitespace-pre-wrap"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="prioridade"
              className="mb-2 block font-bold text-black uppercase"
            >
              Prioridade
            </label>
            <select
              id="prioridade"
              name="prioridade"
              value={formData.prioridade}
              onChange={handleChange}
              className="w-full rounded border-2 border-black p-2"
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <BotaoEstilizado
              type="button"
              variant="secondary"
              onClick={onCancel}
            >
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
