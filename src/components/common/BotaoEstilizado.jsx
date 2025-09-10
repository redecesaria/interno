// Componente BotaoEstilizado com o novo estilo

const BotaoEstilizado = ({
  isVisible = true,
  variant = 'primary',
  onClick,
  children,
  className,
}) => {
  if (!isVisible) return null;

  const baseClasses =
    'inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none';
  const variantClasses = {
    primary:
      'bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-1',
    delete: 'bg-gray-800 text-white hover:bg-black hover:-translate-y-1',
    edit: 'bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-1',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default BotaoEstilizado;
