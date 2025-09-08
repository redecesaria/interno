// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para logar com o Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(), provider);
      const user = result.user;
      // Salva as informações do usuário no Firestore
      await saveUserToFirestore(user);
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
    }
  };

  // Função para salvar o usuário no Firestore
  const saveUserToFirestore = async (user) => {
    const userRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      // Se o documento não existe, cria um novo
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });
    }
  };

  // Função para fazer logout
  const logout = () => {
    return signOut(getAuth());
  };

  // Ouve mudanças no estado de autenticação (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        // Se o usuário estiver logado, busca os dados do Firestore
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          // Combina o usuário do Auth com os dados do Firestore
          setCurrentUser({ ...user, ...docSnap.data() });
        } else {
          // Se não encontrar o documento, usa apenas os dados do Auth
          setCurrentUser(user);
        }
      } else {
        // Se o usuário não estiver logado
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubscribe; // Limpa o listener ao desmontar o componente
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};