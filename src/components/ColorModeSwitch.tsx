import { HStack, Text } from "@chakra-ui/layout";
// import { Switch } from "@chakra-ui/switch";
import { Button } from "@chakra-ui/button";
import { useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;