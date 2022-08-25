import Header from "@/components/layouts/Header";

import { useEffect } from "react";

import { auth } from "@/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "@/store/account";

export default function Default({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(">>>>>> called onAuthStateChanged with user");

        dispatch(
          login({
            id: user.uid,
            email: user.email,
            name: user.displayName,
          })
        );
      } else {
        console.log(">>>>>> called onAuthStateChanged without user");
      }
    });
  }, []);

  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
