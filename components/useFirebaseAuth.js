import { useState, useEffect } from "react";
import { auth } from "@/plugins/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    // setLoading(true);
    setLoading(false);
  };

  const _signInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const _createUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const _signOut = () => signOut(auth).then(clear);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    _signInWithEmailAndPassword,
    _createUserWithEmailAndPassword,
    _signOut,
  };
}
