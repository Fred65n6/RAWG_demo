import { Platform } from "../hooks/useGames";
import { useColorModeValue} from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {

    const iconcolor = useColorModeValue('white', 'black')

  const getIcon = (slug: string) => {
    switch (slug) {
      case "pc":
        return FaWindows;
      case "linux":
        return FaLinux;
      case "mac":
        return FaApple;
      case "playstation":
        return FaPlaystation;
      case "xbox":
        return FaXbox;
      case "nintendo":
        return SiNintendo;
      case "ios":
        return MdPhoneIphone;
      case "android":
        return FaAndroid;
      case "web":
        return BsGlobe;
      default:
        return null;
    }
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon color={iconcolor} key={platform.slug} as={getIcon(platform.slug)} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;