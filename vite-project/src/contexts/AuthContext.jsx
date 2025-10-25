import React, { useContext, useEffect, useState, createContext } from "react";
import { 
  onAuthStateChanged, 
  signOut, 
  sendPasswordResetEmail, 
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase/config"; // ✅ correct path

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Signup with email & password
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login with email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Logout
  const logout = () => signOut(auth);

  // ✅ Reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // ✅ Google login/signup
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        signInWithGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
