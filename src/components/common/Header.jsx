import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoEstilizado from './BotaoEstilizado';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState('/')

  const handleNavigateToPage = (page) => {
    setCurrentPage(page);
    navigate(page);
  };


  if (!currentUser) {
    return null;
  }

  return (
    <>
    <style>{`

        .main-nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 1.5rem;
          z-index: 50;
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .nav-link {
          padding: 0.5rem 0;
          color: #4b5563;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ef4444;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #ef4444;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .nav-link.active {
          color: #ef4444;
        }
        
        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>

    <nav className="main-nav top-0 z-50 bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Início
        </NavLink>

        <NavLink
          to="/guia"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Guia
        </NavLink>

        <NavLink
          to="/apps"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Apps
        </NavLink>

        <NavLink
          to="/radios"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Rádios
        </NavLink>

        <NavLink
          to="/map"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Mapa
        </NavLink>

        <NavLink
          to="/avisos"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Avisos
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900 active' : 'nav-link font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-900')}
        >
          Conta
        </NavLink>
        {/*<div className="flex align-center justify-center absolute right-0 top-2 pr-5">
          <BotaoEstilizado onClick={logout} variant="danger">
            Sair
          </BotaoEstilizado>
        </div>*/}
      </div>
    </nav>
    </>
  );
};

export default Header;
