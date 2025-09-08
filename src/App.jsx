import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FirebaseProvider } from './context/FirebaseContext';
import MuralAvisos from './components/pages/mural';
import LoginPage from './components/pages/LoginPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <FirebaseProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MuralAvisos />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </FirebaseProvider>
    </AuthProvider>
  );
}

export default App;
