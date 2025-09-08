import React from 'react';

const BotaoEstilizado = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'font-bold py-2 px-4 rounded transform transition-transform duration-150 ease-in-out';

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]',
    danger: 'bg-red-500 hover:bg-red-700 text-white shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BotaoEstilizado;
