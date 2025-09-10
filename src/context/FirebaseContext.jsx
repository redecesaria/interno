// src/context/FirebaseContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const firestore = db;
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth();

  const AddPost = async (formData) => {
    if (!formData.titulo || !formData.conteudo) return;
    try {
      await addDoc(collection(firestore, "posts"), {
        ...formData,
        autor: currentUser.uid,
        autorNome: currentUser.displayName,
        createdAt: new Date(),
      });
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }
  };

  const EditPost = async (id, formData) => {
    try {
      const postRef = doc(firestore, "posts", id);
      await updateDoc(postRef, formData);
    } catch (e) {
      console.error("Erro ao editar documento: ", e);
    }
  };

  // Função para deletar um post
  const DeletePost = async (id) => {
    try {
      const postRef = doc(firestore, "posts", id);
      await deleteDoc(postRef);
    } catch (e) {
      console.error("Erro ao deletar documento: ", e);
    }
  };

  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsArray = [];
      querySnapshot.forEach((doc) => {
        postsArray.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postsArray);
    });

    return () => unsubscribe();
  }, [firestore]);

  const value = {
    AddPost,
    posts,
    setPosts,
    DeletePost,
    EditPost,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
