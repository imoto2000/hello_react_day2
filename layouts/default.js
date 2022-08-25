import Header from "@/components/layouts/Header";
import SideNav from "@/components/layouts/SideNav";

import { useEffect } from "react";

import { auth } from "@/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "@/store/account";

import { HStack, Stack } from "@chakra-ui/react";

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
  }, [dispatch]);

  return (
    <>
      <HStack align="start">
        <Stack w="30%" h="100vh" p={5} bg="gray.100">
          <Header></Header>
        </Stack>

        <Stack w="40%" h="100vh" p={5} bg="gray.200">
          <main>{children}</main>
        </Stack>

        <Stack w="30%" h="100vh" p={5} bg="gray.100">
          <SideNav></SideNav>
        </Stack>
      </HStack>
    </>
  );
}
