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

    <nav className="main-nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Início
      </NavLink>

      <NavLink
        to="/guia"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Guia
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Apps
      </NavLink>

      <NavLink
        to="/radios"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Rádios
      </NavLink>

      <NavLink
        to="/map"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Mapa
      </NavLink>

      <NavLink
        to="/avisos"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Avisos
      </NavLink>

      <NavLink
        to="/account"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Conta
      </NavLink>
    </nav>
    </>
  );
};

export default Header;
