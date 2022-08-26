import { Text, List, ListItem, ListIcon, HStack, Link } from "@chakra-ui/react";
import {
  MdAlarm,
  MdBookmark,
  MdBuildCircle,
  MdEmail,
  MdHome,
  MdList,
  MdSupervisedUserCircle,
} from "react-icons/Md";

const LinkNav = () => {
  const links = [
    {
      text: "ホーム",
      icon: MdHome,
      href: "/",
    },
    {
      text: "通知",
      icon: MdAlarm,
      href: "/",
    },
    {
      text: "メッセージ",
      icon: MdEmail,
      href: "/",
    },
    {
      text: "ブックマーク",
      icon: MdBookmark,
      href: "/",
    },
    {
      text: "リスト",
      icon: MdList,
      href: "/",
    },
    {
      text: "プロフィール",
      icon: MdSupervisedUserCircle,
      href: "/",
    },
    {
      text: "もっと見る",
      icon: MdBuildCircle,
      href: "/",
    },
  ];

  return (
    <List pt="5">
      {links.map((link) => {
        return (
          <ListItem key={link.text} pt="5">
            <Link href={link.href}>
              <HStack>
                <ListIcon
                  boxSize="30px"
                  as={link.icon}
                  color="blue.200"
                ></ListIcon>
                <Text>{link.text}</Text>
              </HStack>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default LinkNav;
