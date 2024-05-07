import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase/firebase-config';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AuthContextType {
    currentUser: User | null;
  }
  
  const AuthContext = createContext<AuthContextType>({ currentUser: null });
  
  interface AuthProviderProps {
    children: React.ReactNode; 
  }
  
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user);
      });
  
      return () => unsubscribe(); 
    }, []);
  
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
