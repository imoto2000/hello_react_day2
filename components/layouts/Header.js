import { useRouter } from "next/router";
// import Link from "next/link";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "@/store/account";

import LinkNav from "@/components/layouts/LinkNav";

import {
  Button,
  Textarea,
  useToast,
  Link,
  Box,
  Avatar,
  HStack,
  Stack,
  List,
  ListItem,
  ListIcon,
  Text,
  Center,
} from "@chakra-ui/react";
import { EmailIcon, Icon } from "@chakra-ui/icons";
import { BsTwitter } from "react-icons/Bs";

import { MdCheckCircle, MdHome } from "react-icons/Md";

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
    <Box
      pos="fixed"
      left="0"
      bottom="0"
      w="30%"
      h="100vh"
      zIndex={10}
      bg="gray.100"
      p="10"
    >
      <Link href="/">
        <Icon as={BsTwitter} color="blue.400" boxSize="50px"></Icon>
      </Link>
      <div>
        {currentUser.id ? (
          <>
            <LinkNav></LinkNav>

            <Center>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={onOpen}
                mt="10"
              >
                ツイートする
              </Button>
            </Center>

            <Box
              pos="fixed"
              left="0"
              bottom="0"
              w="30%"
              background="white"
              zIndex={2}
              p="5"
            >
              <HStack>
                <Stack>
                  <Avatar
                    size="md"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </Stack>
                <Stack>
                  <h6>{currentUser.name}</h6>
                  <small>{currentUser.id}</small>
                </Stack>
              </HStack>
            </Box>

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
    </Box>
  );
};

export default Header;
