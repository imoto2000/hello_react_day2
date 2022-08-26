import { Box } from "@chakra-ui/react";

const SideNav = () => {
  return (
    <Box
      pos="fixed"
      right="0"
      top="0"
      w="30%"
      h="100vh"
      zIndex={5}
      bg="gray.100"
      p={10}
    >
      <h2>sidenav</h2>;
    </Box>
  );
};

export default SideNav;
