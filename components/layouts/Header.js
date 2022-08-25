import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "@/store/account";

import { Button, Textarea, useToast } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
// import TwitterForm from "../TwitterForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useState } from "react";
import { create } from "@/store/tweet";

const Header = () => {
  const [dialog, setDialog] = useState(false);
  const [text, setText] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.count;
  });

  const currentUser = useSelector((state) => {
    return state.account;
  });

  const _logOut = () => {
    // _signOut();
    console.log(">>>>> called logout");
    dispatch(logout());
  };

  const logIn = () => {
    router.push("/accounts/login");
  };

  const signUp = () => {
    router.push("/accounts/signup");
  };

  const onClose = () => setDialog(false);
  const onOpen = () => setDialog(true);

  const submit = () => {
    dispatch(create({ text, id: currentUser.id }));
    setText("");
    onClose();
  };

  return (
    <header>
      <Link href="/">
        <h2>Hello React ${count}</h2>
      </Link>
      <div>
        {currentUser.id ? (
          <>
            <h6>{currentUser.id}</h6>
            <h6>{currentUser.name}</h6>
            <h6>{currentUser.email}</h6>
            <button onClick={_logOut}>Logout</button>
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="orange"
              variant="solid"
              onClick={onOpen}
            >
              ツイートする
            </Button>

            <Modal isOpen={dialog} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create Your Tweet</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea
                    value={text}
                    onChange={(ev) => setText(ev.target.value)}
                    placeholder="Here is a sample placeholder"
                    size="sm"
                  />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost" onClick={submit}>
                    Submit
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <div>
            <button onClick={logIn}>Login</button>
            <button onClick={signUp}>signUp</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
