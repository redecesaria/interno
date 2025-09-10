import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FirebaseProvider } from './context/FirebaseContext';
import MuralAvisos from './components/pages/Mural';
import LoginPage from './components/pages/LoginPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import AppsPage from './components/pages/Apps';
import GuiaPage from './components/pages/Guide';
import Header from './components/common/Header';
import HomePage from './components/pages/Home';
import PaginaConta from './components/pages/Account';
import RadioPage from './components/pages/Radios';
import MapPage from './components/pages/Map';
import CesariaManual from './components/pages/Manual';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <FirebaseProvider>
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/avisos" element={<MuralAvisos />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/guia" element={<GuiaPage />} />
            <Route path="/account" element={<PaginaConta />} />
            <Route path="/radios" element={<RadioPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/apps/cesariaapp/manual" element={<CesariaManual />} />
            <Route path='*' element={
              <main className="min-h-screen bg-slate-50 font-['Poppins',_sans_serif] text-slate-700 flex items-center justify-center">
                <p>Página em construção...</p>
              </main>
            }/>
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </FirebaseProvider>
    </AuthProvider>
  );
}

export default App;
